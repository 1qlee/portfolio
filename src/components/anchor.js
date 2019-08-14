import styled from "styled-components"

const Anchor = styled.a`
  transition: box-shadow 0.2s ease;
  text-decoration: none;
  color: ${props => props.color};
  position: relative;
  z-index: 6;
  &::before {
    content: "";
    position: absolute;
    background: ${props => props.color};
    width: 100%;
    height: 3px;
    bottom: 5px;
    left: 0;
    transition: height 0.2s, opacity 0.2s;
    z-index: -1;
  }
  &:hover {
    &::before {
      height: 100%;
      opacity: 0.2;
    }
  }
`

export default Anchor
