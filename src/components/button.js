import styled from "styled-components"

const Button = styled.a`
  align-items: center;
  background:  ${props => props.theme.colors.background};
  border: 3px solid  ${props => props.theme.colors.text};
  box-shadow: 0 4px 20px 0  ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  display: inline-flex;
  font-weight: 700;
  text-transform: uppercase;
  justify-content: center;
  padding: 0.4rem 0.9rem;
  transition: box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
  & > small {
    font-size: 1rem;
    font-family: "Karla";
  }
  &:active {
    box-shadow: 0 2px 4px 0px  ${props => props.theme.colors.background};
  }
  &:hover {
    background-color:  ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background};
    svg {
      fill : ${props => props.theme.colors.background};
    }
  }
  & > i {
    margin-right: 0.3rem;
  }
  @media only screen and (max-width: 330px) {
    width: 100%;
  }
`

export default Button
