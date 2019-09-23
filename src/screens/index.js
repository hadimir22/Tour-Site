import React, { Component } from "react";
import styled, { keyframes, css } from "styled-components";
import Logo from "../assets/img/logo-white.png";
import Hero from "../assets/img/hero.jpg";

const Header = styled.header`
  position: relative;
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 131, 0.8)
    ),
    url(${Hero});
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

const ImageDiv = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
`;

const TextDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const LogoImage = styled.img`
  height: 35px;
`;

const HeadingPrimary = styled.h1`
  color: #ffffff;
  text-transform: uppercase;
  backface-visibility: hidden;
`;

const MoveInLeft = keyframes`
  0% { 
    opacity: 0 ;
    transform: translateX(-100px)
  }

  80% {
    transform: translateX(10px)
  }
  100% { 
    opacity:1 ;
    transform: translateX(0)}
`;

const MoveInRight = keyframes`
  0% { 
    opacity: 0 ;
    transform: translateX(100px)
  }

  80% {
    transform: translateX(-10px)
  }
  100% { 
    opacity:1 ;
    transform: translateX(0)}
`;

const MoveUp = keyframes`
  0% { 
    opacity: 0 ;
    transform: translateY(30px)
  }

  
  100% { 
    opacity:1 ;
    transform: translateY(0)}
`;

const HeadingPrimaryMain = styled.span`
  display: block;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 35px;
  animation: ${MoveInLeft} 1s ease-out;
  /* animation-iteration-count: 3;
  animation-delay: 2s;
  animation-timing-function: cubic-bezier();

  */
`;

const HeadingPrimarySub = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 17.4px;
  animation: ${MoveInRight} 1s ease-out;
`;

const Button = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  background-color: ${props => (props.white ? "#fff" : "white")};
  color: ${props => (props.white ? "#777" : "white")};
  transition: all 0.2s;

  ${props =>
    props.animated &&
    css`
      animation: ${MoveUp} 0.5s ease-out 0.75;
      animation-fill-mode: backwards;
    `};

  :link {
  }

  :visited {
  }

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  :active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header>
          <ImageDiv className="logo-box">
            <LogoImage src={Logo} alt="Logo" className="logo" />
          </ImageDiv>
          <TextDiv>
            <HeadingPrimary className="heading-primary">
              <HeadingPrimaryMain className="heading-primary-main">
                outdoors
              </HeadingPrimaryMain>
              <HeadingPrimarySub className="heading-primary-sub">
                is where life happens
              </HeadingPrimarySub>
            </HeadingPrimary>
            <Button href="#" white animated>
              Discover our packages
            </Button>
          </TextDiv>
        </Header>
      </div>
    );
  }
}
