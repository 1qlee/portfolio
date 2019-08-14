import styled from "styled-components"

const Content = styled.div`
  position: relative;
  h1 {
    font-size: 4rem;
    margin-bottom: 5px;
    @media only screen and (max-width: 635px) {
      font-size: 3rem;
    }
  }
  p {
    font-size: 2rem;
    line-height: 1.5;
    @media only screen and (max-width: 635px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 335px) {
      font-size: 1.2rem;
    }
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  &.is-fixed {
    position: absolute;
    bottom: 0;
    right: 1rem;
    z-index: 9;
  }
  &.is-flex {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 330px) {
      flex-direction: column;
    }
  }
  &.fade-in-down {
    animation: fadeInDown 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  &.fade-in-up {
    animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export default Content
