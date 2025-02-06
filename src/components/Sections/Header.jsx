import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/clients/IT-consult-test.jpg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60 ">
          {/* <Typewriter> */}
  Best Services
{/* </Typewriter> */}
</h1>

          <h3>   lets Work On your Project Together</h3>
          <h5 className="extraBold font30 ">
          <Typewriter>
          we are Professional On Marketing Services
</Typewriter></h5>
          <HeaderP className="font13 semiBold">
          Increplus offers various IT services and provides applications for business needs and growth through specially designed for IT infrastructure services that helps the client explore the power of technology.
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Get Started" />
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{ zIndex: 9 }} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>IT Infrastructre Outsourse<br></br>
                  Website Development<br></br>
                  Mobile APP Development
                </em>
              </p>
              <p className="font13 orangeColor textRight" style={{ marginTop: '10px' }}>Karthick Raja</p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}


const Typewriter = styled.div`
  display: inline-block;
  font-size: 20px; /* Default font size for larger screens */
  color: orange;
  font-weight: bold;
  overflow: hidden;
  border-right: .10em solid black; /* Creates the cursor effect */
  white-space: nowrap;
  margin: 0 auto;
  animation: typing 3s steps(100) infinite, blink 0.75s step-end infinite, backspace 3s steps(14) infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  /* For screens with max width of 960px (tablets or smaller screens) */
  @media (max-width: 960px) {
    font-size: 18px; /* Slightly smaller font size for tablets */
      animation: typing 3s steps(100) infinite, blink 0.75s step-end infinite, backspace 3s steps(14) infinite;

  }

  /* For screens with max width of 768px (smaller tablets) */
  @media (max-width: 768px) {
    font-size: 16px;
  }

  /* For screens with max width of 480px (smartphones) */
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;



const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
    width: 100%;
    height: auto;
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


