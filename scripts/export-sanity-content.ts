import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-29',
  useCdn: false,
});

async function exportContent() {
  console.log('🔄 Exporting Sanity content...');

  // Export blogs
  const blogs = await client.fetch(`
    *[_type == "blog" && !(_id in path("drafts.**"))] | order(_createdAt desc){
      _id,
      _createdAt,
      _updatedAt,
      title,
      description,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      content,
      category,
      tags
    }
  `);

  // Export projects
  const projects = await client.fetch(`
    *[_type == "project"] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      is_public,
      description,
      "keywords": keywords[]->name
    }
  `);

  // Export experience
  const experiences = await client.fetch(`
    *[_type == "experience"] {
      _id,
      title,
      description,
      organisation,
      startDate,
      endDate,
      is_present,
      "keywords": keywords[]->name
    }
  `);

  // Export page sections (home page)
  const homePage = await client.fetch(`
    *[_type == "page" && title == 'Home'][0]{
      section[]{
        _type,
        title,
        paragraph,
        tldr[],
        paragraphs[]{title, text},
        description,
        "experience": experience[]->{
          title,
          description,
          organisation,
          startDate,
          endDate,
          is_present,
          "keywords": keywords[]->name
        }
      }
    }
  `);

  // Create exports directory
  const exportDir = path.join(process.cwd(), 'sanity-export');
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true });
  }

  // Save all data
  fs.writeFileSync(
    path.join(exportDir, 'blogs.json'),
    JSON.stringify(blogs, null, 2)
  );

  fs.writeFileSync(
    path.join(exportDir, 'projects.json'),
    JSON.stringify(projects, null, 2)
  );

  fs.writeFileSync(
    path.join(exportDir, 'experiences.json'),
    JSON.stringify(experiences, null, 2)
  );

  fs.writeFileSync(
    path.join(exportDir, 'home-page.json'),
    JSON.stringify(homePage, null, 2)
  );

  console.log('✅ Content exported to /sanity-export/');
  console.log(`  - ${blogs.length} blogs`);
  console.log(`  - ${projects.length} projects`);
  console.log(`  - ${experiences.length} experiences`);
  console.log(`  - Home page sections`);
}

exportContent().catch(console.error);