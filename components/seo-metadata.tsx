'use client';

import React from 'react';

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  articleDate?: string;
  canonical?: string;
};

// React 19 Document Metadata Component
export function SEOMetadata({
  title = "JethroAu.com - Software Engineer & Developer",
  description = "Explore the intersection of technology and imagination as we embark on a journey to transform concepts into powerful, user-centric experiences. Let's build the future together – one line of code at a time.",
  keywords = ["jethro", "au", "jethroau", "software engineer", "developer", "react", "nextjs", "typescript", "portfolio"],
  author = "Jethro Au",
  ogImage = "/profile_picture.webp",
  ogType = "website",
  articleDate,
  canonical
}: SEOProps) {
  const keywordsString = keywords.join(", ");
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://jethroau.com';
  const canonicalUrl = canonical || currentUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://jethroau.com${ogImage}`;

  return (
    <>
      {/* React 19 Document Metadata - Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="JethroAu.com" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific meta tags */}
      {ogType === 'article' && articleDate && (
        <>
          <meta property="article:published_time" content={articleDate} />
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Technology" />
          {keywords.map((keyword) => (
            <meta key={keyword} property="article:tag" content={keyword} />
          ))}
        </>
      )}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />
      <meta property="twitter:creator" content="@jethroau" />
      
      {/* Additional SEO tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="application-name" content="JethroAu.com" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ogType === 'article' ? "BlogPosting" : "Person",
            ...(ogType === 'article' ? {
              "headline": title,
              "description": description,
              "image": fullOgImage,
              "author": {
                "@type": "Person",
                "name": author,
                "url": "https://jethroau.com"
              },
              "publisher": {
                "@type": "Person",
                "name": "Jethro Au",
                "url": "https://jethroau.com"
              },
              "datePublished": articleDate,
              "dateModified": articleDate,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": currentUrl
              }
            } : {
              "name": "Jethro Au",
              "url": "https://jethroau.com",
              "image": fullOgImage,
              "sameAs": [
                "https://github.com/jethro-dev",
                "https://linkedin.com/in/jethroau"
              ],
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": description
            })
          })
        }}
      />
    </>
  );
}

// Blog-specific SEO component
export function BlogSEO({
  title,
  description,
  slug,
  publishedDate,
  coverImage,
  tags = []
}: {
  title: string;
  description: string;
  slug: string;
  publishedDate: string;
  coverImage?: string;
  tags?: string[];
}) {
  const blogTitle = `${title} | JethroAu.com`;
  const blogUrl = `https://jethroau.com/blogs/${slug}`;
  const ogImage = coverImage || "/profile_picture.webp";
  
  return (
    <SEOMetadata
      title={blogTitle}
      description={description}
      keywords={["blog", "tutorial", "programming", ...tags]}
      ogImage={ogImage}
      ogType="article"
      articleDate={publishedDate}
      canonical={blogUrl}
    />
  );
}

// Project-specific SEO component  
export function ProjectSEO({
  title,
  description,
  slug,
  coverImage,
  technologies = []
}: {
  title: string;
  description: string;
  slug: string;
  coverImage?: string;
  technologies?: string[];
}) {
  const projectTitle = `${title} | Portfolio | JethroAu.com`;
  const projectUrl = `https://jethroau.com/projects/${slug}`;
  
  return (
    <SEOMetadata
      title={projectTitle}
      description={description}
      keywords={["portfolio", "project", "development", ...technologies]}
      ogImage={coverImage}
      ogType="website"
      canonical={projectUrl}
    />
  );
}