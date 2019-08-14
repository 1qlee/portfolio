/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Main from "./main"
import Section from "./section"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Main>
        <Section>{children}</Section>
      </Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
