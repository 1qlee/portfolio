import styled from "styled-components"

const Icon = styled.i`
  height: 20px;
  width: 20px;
  line-height: 20px;
  svg {
    fill: ${props => props.theme.colors.text};
    height: 20px;
    line-height: 20px;
    transition: fill 0.2s ease;
    width: 20px;
  }
`

const IconLink = styled.a`
  display: block;
  color:  ${props => props.theme.colors.text};
  cursor: pointer;
  height: 20px;
  width: 20px;
  line-height: 20px;
  &.social-icon {
    svg {
      transition: color 0.2s ease, opacity 0.2s ease;
      color:  ${props => props.theme.colors.grey};
      opacity: 0.6;
    }
    &:hover {
      svg {
        color:  ${props => props.theme.colors.text};
        opacity: 1;
      }
    }
  }
  svg {
    color:  ${props => props.theme.colors.text};
    height: 20px;
    width: 20px;
    line-height: 20px;
  }
`

export {Icon, IconLink}
