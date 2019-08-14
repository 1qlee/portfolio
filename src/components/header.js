import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.45rem;
  padding: 1rem;
  height: 120px;
  width: 100%;
  text-align: center;
  transition: background 0.2s, color 0.2s;
`

function Header(props) {
  return (
    <HeaderContainer>
      <h1>{props.siteTitle}</h1>
    </HeaderContainer>
  )
}

export default Header
