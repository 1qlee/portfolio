import styled from "styled-components"

const Main = styled.main`
  height: 100vh;
  width: 100%;
  position: relative;
  background: ${props => props.theme.colors.background};
  transition: background 0.2s, color 0.2s;
  color: ${props => props.theme.colors.text};
`

export default Main
