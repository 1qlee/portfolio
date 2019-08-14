import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import { Icon } from "../components/icon"
import Anchor from "../components/anchor"
import Button from "../components/button"
import Content from "../components/content"
import Layout from "../components/layout"
import SocialBar from "../components/socialBar"

import AtIcon from "../../assets/at.svg"
import MoonIcon from "../../assets/moon.svg"
import SunIcon from "../../assets/sun.svg"

import lightTheme from "../data/light"
import darkTheme from "../data/dark"

import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteEmailQuery {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)

  const storedTheme = typeof window !== 'undefined' && localStorage.getItem('isDarkMode')
  const [isDarkMode, setIsDarkMode] = useState(
    storedTheme === "true" ? true : false
  )

  useEffect(() => {
    console.log(storedTheme, isDarkMode)
  }, [])

  function setTheme() {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem("isDarkMode", !isDarkMode)
    console.log(storedTheme, isDarkMode)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Layout>
        <div>
          <Content className="is-fixed">
            <Button as="button" onClick={() => setTheme()}>
              <Icon>
                {isDarkMode ? (
                  <SunIcon />
                ) : (
                  <MoonIcon />
                )}
              </Icon>
              {isDarkMode ? (
                <small>Light light</small>
              ) : (
                <small>Night night</small>
              )}
            </Button>
          </Content>
          <SEO title="Home" />
          <Content className="fade-in-down">
            <Content>
              <h1>Wonkyu Lee</h1>
              <p style={{ color: "#999" }}>[ one-queue, 1-Q, won-kyoo ]</p>
            </Content>
            <p style={{ color: "#999" }}><i>noun</i></p>
            <p>A web developer from NYC building and designing websites. Spent two years building <Anchor target="_blank" rel="noopner noreferrer" href="https://www.domahub.com" color={lightTheme.colors.green}>DomaHub</Anchor>. Recently built <Anchor target="_blank" rel="noopner noreferrer" href="https://www.unicornline.com" color={lightTheme.colors.pink}>Unicorn Line</Anchor>. Currently working on some other projects.</p>
          </Content>
          <Content className="is-flex is-mobile fade-in-up">
            <Button href={data.site.siteMetadata.email}>
              <Icon>
                <AtIcon />
              </Icon>
              <small>Email Me</small>
            </Button>
            <SocialBar />
          </Content>
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
