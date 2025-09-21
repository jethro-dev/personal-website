import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Read exported Sanity content
const blogsData = JSON.parse(fs.readFileSync('sanity-export/blogs.json', 'utf-8'));
const projectsData = JSON.parse(fs.readFileSync('sanity-export/projects.json', 'utf-8'));
const experiencesData = JSON.parse(fs.readFileSync('sanity-export/experiences.json', 'utf-8'));
const homePageData = JSON.parse(fs.readFileSync('sanity-export/home-page.json', 'utf-8'));

// Helper to convert portable text to markdown
function portableTextToMarkdown(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';

  return blocks.map(block => {
    if (block._type === 'block') {
      const children = block.children || [];
      let text = children.map((child: any) => {
        if (child._type === 'span') {
          let content = child.text || '';

          // Apply marks
          if (child.marks?.length) {
            child.marks.forEach((mark: string) => {
              if (mark === 'strong') content = `**${content}**`;
              else if (mark === 'em') content = `*${content}*`;
              else if (mark === 'code') content = `\`${content}\``;
            });
          }

          return content;
        }
        return '';
      }).join('');

      // Handle different block styles
      if (block.style === 'h1') return `# ${text}`;
      else if (block.style === 'h2') return `## ${text}`;
      else if (block.style === 'h3') return `### ${text}`;
      else if (block.style === 'h4') return `#### ${text}`;
      else if (block.style === 'blockquote') return `> ${text}`;
      else if (block.listItem === 'bullet') return `- ${text}`;
      else if (block.listItem === 'number') return `1. ${text}`;
      else return text;
    } else if (block._type === 'code') {
      return `\`\`\`${block.language || ''}\n${block.code || ''}\n\`\`\``;
    } else if (block._type === 'image') {
      const url = block.asset?._ref || '';
      return `![${block.alt || 'Image'}](${url})`;
    }

    return '';
  }).join('\n\n');
}

// Convert and save blogs as MDX files
console.log('📝 Converting blogs to MDX...');
blogsData.forEach((blog: any) => {
  const frontmatter = {
    title: blog.title,
    description: blog.description,
    slug: blog.slug,
    coverImage: blog.coverImage,
    category: blog.category,
    tags: blog.tags || [],
    publishedAt: blog._createdAt,
    updatedAt: blog._updatedAt,
  };

  const content = portableTextToMarkdown(blog.content);

  // Create MDX file with frontmatter
  const mdxContent = matter.stringify(content, frontmatter);

  // Save to English folder (default content)
  const filePath = path.join('content/en/blogs', `${blog.slug}.mdx`);
  fs.writeFileSync(filePath, mdxContent);
});

console.log(`✅ Converted ${blogsData.length} blogs to MDX`);

// Save projects as JSON
console.log('📦 Saving projects as JSON...');
const projectsJson = projectsData.map((project: any) => ({
  id: project._id,
  name: project.name,
  slug: project.slug,
  image: project.image,
  url: project.url,
  content: portableTextToMarkdown(project.content),
  isPublic: project.is_public,
  description: project.description,
  keywords: project.keywords || [],
  createdAt: project._createdAt
}));

fs.writeFileSync(
  'content/en/projects/projects.json',
  JSON.stringify(projectsJson, null, 2)
);

console.log(`✅ Saved ${projectsData.length} projects`);

// Save experiences as JSON
console.log('💼 Saving experiences as JSON...');
const experiencesJson = experiencesData.map((exp: any) => ({
  id: exp._id,
  title: exp.title,
  description: exp.description,
  organisation: exp.organisation,
  startDate: exp.startDate,
  endDate: exp.endDate,
  isPresent: exp.is_present,
  keywords: exp.keywords || []
}));

fs.writeFileSync(
  'content/en/experiences/experiences.json',
  JSON.stringify(experiencesJson, null, 2)
);

console.log(`✅ Saved ${experiencesData.length} experiences`);

// Save home page data
console.log('🏠 Saving home page data...');
if (homePageData?.section) {
  const sections: any = {};

  homePageData.section.forEach((section: any) => {
    if (section._type === 'heroSection') {
      sections.hero = {
        title: section.title,
        paragraph: section.paragraph
      };
    } else if (section._type === 'aboutSection') {
      sections.about = {
        title: section.title,
        paragraphs: section.paragraphs || [],
        tldr: section.tldr || []
      };
    } else if (section._type === 'experience') {
      sections.experience = section.experience || [];
    }
  });

  fs.writeFileSync(
    'content/en/home.json',
    JSON.stringify(sections, null, 2)
  );

  console.log('✅ Saved home page data');
}

// Create placeholder files for other locales
const locales = ['zh-TW', 'zh-CN', 'es', 'ja', 'ar'];
console.log('🌍 Creating placeholder files for other locales...');

locales.forEach(locale => {
  // Copy structure to other locale folders
  fs.writeFileSync(
    `content/${locale}/projects/projects.json`,
    JSON.stringify(projectsJson, null, 2)
  );

  fs.writeFileSync(
    `content/${locale}/experiences/experiences.json`,
    JSON.stringify(experiencesJson, null, 2)
  );

  fs.writeFileSync(
    `content/${locale}/home.json`,
    fs.readFileSync('content/en/home.json', 'utf-8')
  );

  // Copy blog MDX files
  blogsData.forEach((blog: any) => {
    const sourcePath = path.join('content/en/blogs', `${blog.slug}.mdx`);
    const destPath = path.join(`content/${locale}/blogs`, `${blog.slug}.mdx`);
    fs.copyFileSync(sourcePath, destPath);
  });
});

console.log('✅ Created placeholder files for all locales');
console.log('\n🎉 Conversion complete! Your content is now in /content/');