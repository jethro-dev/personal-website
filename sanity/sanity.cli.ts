import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'dsnalg9u',
    dataset: 'production',
  },
  project: {
    basePath: '/studio',
  },
})
