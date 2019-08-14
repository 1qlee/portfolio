import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { IconLink } from "./icon"

import GithubIcon from "../../assets/github.svg"
import TwitterIcon from "../../assets/twitter.svg"
import LinkedinIcon from "../../assets/linkedin.svg"
import ResumeIcon from "../../assets/resume.svg"

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2rem;
  .social-icon {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
  @media only screen and (max-width: 330px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query SiteSocialQuery {
      site {
        siteMetadata {
          resume,
          github,
          linkedin,
          twitter
        }
      }
    }
  `)

  return (
    <SocialIconsContainer>
      <IconLink className="social-icon" href={data.site.siteMetadata.resume} target="_blank" rel="noreferrer" title="Resume">
        <ResumeIcon />
      </IconLink>
      <IconLink className="social-icon" href={data.site.siteMetadata.github} target="_blank" rel="noreferrer" title="GitHub">
        <GithubIcon />
      </IconLink>
      <IconLink className="social-icon" href={data.site.siteMetadata.twitter} target="_blank" rel="noreferrer" title="Twitter">
        <TwitterIcon />
      </IconLink>
      <IconLink className="social-icon" href={data.site.siteMetadata.linkedin} target="_blank" rel="noreferrer" title="Linkedin">
        <LinkedinIcon />
      </IconLink>
    </SocialIconsContainer>
  )
}
