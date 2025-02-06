import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/clients/business-background-l3j8pv97uundywgw.jpg";
import AddImage2 from "../../assets/img/clients/home-office-shelves.jpeg";
import AddImage3 from "../../assets/img/projects/company-5.jpg";
import AddImage4 from "../../assets/img/projects/MicrosoftTeams-image_34_.avif";

export default function Services() {
  return (
    <Wrapper id="services">
      {/* <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div> */}
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="CLOUD COMPUTING SERVICES"
                subtitle="Cloud Computing Services Migrations is the process of moving data, applications, and other business elements from an organization’s on-premises computers to the cloud a virtual pool of on-demand,storage, and network services at scale."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="APPLICATION MANAGEMENT SERVICES"
                subtitle="Increplus application management services may include application maintenance, monitoring, Scalability and productivity management, support, improvements, incident and patching, and more."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="SERVER MANAGEMENT SERVICES"
                subtitle="Server Management Services are critical for businesses to ensure their IT infrastructure operates seamlessly."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox icon="printer" title="Database Management Services" subtitle="In today's data-driven business environment, managing databases effectively is critical for ensuring seamless operations, maintaining data integrity, and achieving business growth." />
            </ServiceBoxWrapper>
            
          </ServiceBoxRow>
          <br></br>
          <ServiceBoxRow className="flex" style={{ justifyContent: 'space-evenly' }}>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="END USER MANAGEMENT SERVICES"
                subtitle="End User Management Services (EUMS) are crucial for ensuring smooth IT operations and an efficient working environment for businesses."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="BACKUP AND DATA RECOVERY SERVICES"
                subtitle="Backup and Data Recovery Services are essential for businesses of all sizes to ensure data protection, continuity, and resilience."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="REMOTE MONITORING SERVICES"
                subtitle="Remote Monitoring Services (RMS) provided by Increplus Technologies are essential for businesses to ensure the seamless operation, security, and performance of their IT infrastructure."
              />
            </ServiceBoxWrapper>
            {/* <ServiceBoxWrapper>
              <ServiceBox icon="printer" title="Print" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor." />
            </ServiceBoxWrapper> */}
            
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">A few words about company</h4>
                <h2 className="font40 extraBold">Increplus Technologies</h2>
                <p className="font12">
                Increplus offers various IT services and provides applications for business needs and growth through specially designed for IT infrastructure services that helps the client explore the power of technology.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Get Started" action={() => alert("clicked")}  />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                  
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const ServiceBoxRow = styled.div`
  
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    
    flex-direction: column;

    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;






// // Styled ServiceBoxRow component
// const ServiceBoxRow = styled.div`
//   display: flex;
//   gap: 20px;

//   @media (max-width: 860px) {
//     flex-direction: column;
//   }
// `;

// // Styled ServiceBoxWrapper with hover effect
// const ServiceBoxWrapper = styled.div`
//   background-color: white;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease; /* Smooth transition for all properties */

//   &:hover {
//     background-color: #f0f0f0; /* Change the background color on hover */
//     transform: scale(1.05); /* Slight scale effect */
//     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); /* Enhance the shadow */
//   }
// `;


// const ServiceBox = styled.div`
//   h3 {
//     color: black;
//     transition: color 0.3s ease; 
//   }

//   ${ServiceBoxWrapper}:hover & h3 {
//     color: #007bff; /* Change text color when the wrapper is hovered */
//   }

//   p {
//     color: #666;
//   }
// `;
// const ServiceBoxRow = styled.div`
  
//   @media (max-width: 860px) {
//     flex-direction: column;
//   }
// `;
// const ServiceBoxWrapper = styled.div`
//   width: 20%;
//   margin-right: 5%;
//   padding: 80px 0;
//   @media (max-width: 860px) {
//     width: 100%;
//     text-align: center;
//     padding: 40px 0;
//   }
// `;