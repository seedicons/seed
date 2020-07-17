import React from 'react'
import { parse } from 'serialize-query-params'
import { StringParam, useQueryParam } from 'use-query-params'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { MyThemeProvider } from '../theme/theme-context'
import { Hero } from '../components/hero'
import { Search } from '../components/search'
import IconGrid from '../components/icons'
import { Note } from '../components/note'
import useSearch from '../utils/useSearch'

function IndexPage({ location }) {
  const [query, setQuery] = useQueryParam(
    'query',
    StringParam,
    parse(location.search)
  )

  const results = useSearch(query || '')

  return (
    <MyThemeProvider>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <Search
          value={query || ''}
          onChange={(event) => setQuery(event.target.value)}
          iconResults={results}
        />
        <Note />
        <IconGrid icons={results} />
      </Layout>
    </MyThemeProvider>
  )
}

export default IndexPage
