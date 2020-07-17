import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { MyThemeProvider } from '../theme/theme-context'

const NotFoundPage = () => (
  <MyThemeProvider>
    <Layout>
      <SEO title="404: Not found" />
      <h1>
        This page is so 404 I didn`&apos;`t even design it yet. Please go away.
      </h1>
      <p>The site is one page, I mean, how did you get lost?</p>
    </Layout>
  </MyThemeProvider>
)

export default NotFoundPage
