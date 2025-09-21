import { cn } from '@/lib/utils';
import React from 'react';
import { getExperiences } from '@/lib/content';
import { TimelineItemCard } from './timeline-item-card';
import { getLocale, getTranslations } from 'next-intl/server';

type Props = {
  className?: string;
};

export const Timeline = async ({ className }: Props) => {
  const locale = await getLocale();
  const experiences = getExperiences(locale);
  const t = await getTranslations('experience');

  // Check if experiences is defined and is an array
  if (!experiences || !Array.isArray(experiences)) {
    console.error('No experiences found or experiences is not an array:', experiences);
    return (
      <div className="container">
        <p className="text-center text-muted-foreground">No experiences to display</p>
      </div>
    );
  }

  // Transform experiences data to match TimelineItemCard expectations
  const transformedExperiences = experiences.map(exp => ({
    ...exp,
    description: Array.isArray(exp.description) ? exp.description : [exp.description || ''], // Ensure it's an array
    startDate: new Date(exp.startDate),
    endDate: exp.endDate ? new Date(exp.endDate) : new Date(),
    is_present: exp.isPresent,
  }));

  // Sort by startDate descending (newest first)
  transformedExperiences.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  return (
    <div className="container">
      <ol
        className={cn(
          className,
          'max-w-3xl mx-auto relative border-s border-gray-200 dark:border-gray-700 flex flex-col gap-10',
        )}
      >
        {transformedExperiences.map((item) => (
          <TimelineItemCard key={item.id} {...item} />
        ))}
      </ol>
    </div>
  );
};