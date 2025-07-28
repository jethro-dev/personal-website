'use client';

import React, { useOptimistic, useTransition, useState, useEffect } from 'react';
import { Heart, Bookmark, Share } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

type BlogInteraction = {
  likes: number;
  isLiked: boolean;
  isBookmarked: boolean;
  blogId: string;
};

type OptimisticAction = 
  | { type: 'LIKE'; blogId: string }
  | { type: 'UNLIKE'; blogId: string }
  | { type: 'BOOKMARK'; blogId: string }
  | { type: 'UNBOOKMARK'; blogId: string };

// Simulate server actions (in real implementation, these would be actual server actions)
async function toggleLike(blogId: string, isLiked: boolean): Promise<{ success: boolean; likes: number }> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Get current likes from localStorage (in real app, this would be from your database)
  const key = `blog-${blogId}-likes`;
  const currentLikes = parseInt(localStorage.getItem(key) || '0');
  const newLikes = isLiked ? currentLikes - 1 : currentLikes + 1;
  
  localStorage.setItem(key, newLikes.toString());
  localStorage.setItem(`blog-${blogId}-liked`, (!isLiked).toString());
  
  return { success: true, likes: newLikes };
}

async function toggleBookmark(blogId: string, isBookmarked: boolean): Promise<{ success: boolean }> {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  localStorage.setItem(`blog-${blogId}-bookmarked`, (!isBookmarked).toString());
  return { success: true };
}

export function BlogInteractions({ blogId, initialLikes = 0 }: { blogId: string; initialLikes?: number }) {
  // Initialize with server-safe defaults first
  const [interactions, setInteractions] = useState<BlogInteraction>({
    likes: initialLikes,
    isLiked: false,
    isBookmarked: false,
    blogId
  });

  // Hydration-safe effect to load from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInteractions({
        likes: parseInt(localStorage.getItem(`blog-${blogId}-likes`) || initialLikes.toString()),
        isLiked: localStorage.getItem(`blog-${blogId}-liked`) === 'true',
        isBookmarked: localStorage.getItem(`blog-${blogId}-bookmarked`) === 'true',
        blogId
      });
    }
  }, [blogId, initialLikes]);

  // React 19 useOptimistic for instant UI updates
  const [optimisticInteractions, setOptimisticInteractions] = useOptimistic(
    interactions,
    (state: BlogInteraction, action: OptimisticAction) => {
      switch (action.type) {
        case 'LIKE':
          return { ...state, likes: state.likes + 1, isLiked: true };
        case 'UNLIKE':
          return { ...state, likes: state.likes - 1, isLiked: false };
        case 'BOOKMARK':
          return { ...state, isBookmarked: true };
        case 'UNBOOKMARK':
          return { ...state, isBookmarked: false };
        default:
          return state;
      }
    }
  );

  const [isPending, startTransition] = useTransition();

  const handleLike = () => {
    const action: OptimisticAction = optimisticInteractions.isLiked 
      ? { type: 'UNLIKE', blogId } 
      : { type: 'LIKE', blogId };
    
    // Optimistically update UI immediately
    setOptimisticInteractions(action);

    // Perform actual server action
    startTransition(async () => {
      try {
        const result = await toggleLike(blogId, optimisticInteractions.isLiked);
        if (result.success) {
          setInteractions(prev => ({
            ...prev,
            likes: result.likes,
            isLiked: !prev.isLiked
          }));
        }
      } catch (error) {
        // Revert optimistic update on error
        toast.error('Failed to update like. Please try again.');
        // The useOptimistic will automatically revert to the original state
      }
    });
  };

  const handleBookmark = () => {
    const action: OptimisticAction = optimisticInteractions.isBookmarked 
      ? { type: 'UNBOOKMARK', blogId }
      : { type: 'BOOKMARK', blogId };
    
    // Optimistically update UI immediately
    setOptimisticInteractions(action);

    startTransition(async () => {
      try {
        const result = await toggleBookmark(blogId, optimisticInteractions.isBookmarked);
        if (result.success) {
          setInteractions(prev => ({
            ...prev,
            isBookmarked: !prev.isBookmarked
          }));
          toast.success(
            optimisticInteractions.isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks'
          );
        }
      } catch (error) {
        toast.error('Failed to update bookmark. Please try again.');
      }
    });
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/blogs/${blogId}`;
    const title = `Check out this blog post!`;
    
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        toast.success('Blog shared successfully!');
      } catch (error) {
        // User cancelled share
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(url);
      toast.success('Blog URL copied to clipboard!');
    }
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleLike}
        disabled={isPending}
        className={`flex items-center gap-1 ${
          optimisticInteractions.isLiked 
            ? 'text-red-500 hover:text-red-600' 
            : 'text-muted-foreground hover:text-red-500'
        }`}
      >
        <Heart 
          className={`h-4 w-4 ${
            optimisticInteractions.isLiked ? 'fill-current' : ''
          }`} 
        />
        <span className="text-xs">{optimisticInteractions.likes}</span>
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleBookmark}
        disabled={isPending}
        className={`flex items-center gap-1 ${
          optimisticInteractions.isBookmarked 
            ? 'text-blue-500 hover:text-blue-600' 
            : 'text-muted-foreground hover:text-blue-500'
        }`}
      >
        <Bookmark 
          className={`h-4 w-4 ${
            optimisticInteractions.isBookmarked ? 'fill-current' : ''
          }`} 
        />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleShare}
        className="flex items-center gap-1 text-muted-foreground hover:text-green-500"
      >
        <Share className="h-4 w-4" />
      </Button>
    </div>
  );
}