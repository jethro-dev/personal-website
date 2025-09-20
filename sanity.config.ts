// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import {codeInput} from '@sanity/code-input'
import {documentInternationalization} from '@sanity/document-internationalization'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/admin", // <-- important that `basePath` matches the route you're mounting your studio from

  projectId,
  dataset,
  plugins: [
    structureTool(),
    visionTool(),
    codeInput(),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'zh-TW', title: 'Traditional Chinese'},
        {id: 'zh-CN', title: 'Simplified Chinese'},
        {id: 'es', title: 'Spanish'},
        {id: 'ja', title: 'Japanese'},
        {id: 'ar', title: 'Arabic'}
      ],
      // Document types to enable i18n for
      schemaTypes: ['blog', 'project', 'page', 'experience'],
    })
  ],
  schema: {
    types: schemaTypes,
  },
});
