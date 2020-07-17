import React from 'react'
import PropTypes from 'prop-types'
import '../../static/normalize.css'
import { withTheme } from 'styled-components'
import Header from '../header'
import { Main } from './styled'
import { Footer } from '../footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTheme(Layout)
