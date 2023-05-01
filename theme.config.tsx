import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – PopFlash'
    }
  },
  logo: <span>PopFlash Wiki</span>,
  project: {
    link: 'https://github.com/PopFlash/wiki',
  },
  chat: {
    link: 'https://popflash.site/discord',
  },
  docsRepositoryBase: 'https://github.com/PopFlash/wiki/tree/main',
  footer: {
    text: 'PopFlash Wiki',
  },
}

export default config
