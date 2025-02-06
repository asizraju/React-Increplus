import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/360_F_507662376_BTKmPlIGBvKlRHWKRNeFt7bj7H2SynQm.jpg";
import ProjectImg2 from "../../assets/img/projects/data-backup-and-recovery-services.jpg";
import ProjectImg3 from "../../assets/img/projects/backup.jpg";
import ProjectImg4 from "../../assets/img/projects/enterprise-application-services-2.jpg";
import ProjectImg5 from "../../assets/img/projects/remote monitaring.jpeg";
import ProjectImg6 from "../../assets/img/projects/database managment.jpg";
import AddImage2 from "../../assets/img/projects/f6315598579519.5edf87123d7dd.jpg";
import { object } from "yup";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="CLOUD COMPUTING SERVICES"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
                imgStyle={{ width: '350px', height: '300px' }}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="BACKUP AND DATA RECOVERY SERVICES"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
                imgStyle={{ width: '350px', height: '300px' }}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="SERVER MANAGEMENT SERVICES"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
                imgStyle={{ width: '350px', height: '300px' }}
              />
            </div>
            
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="APPLICATION MANAGEMENT SERVICES"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
                imgStyle={{ width: '350px', height: '300px' }}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="REMOTE MONITORING SERVICES"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
                imgStyle={{ width: '350px', height: '300px' }}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Database Management Services"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
                imgStyle={{ width: '350px', height: '300px' }}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font40 extraBold">Increplus Technologies </h2>
              <p className="font12">
              Increplus Technologies brings a comprehensive suite of Managed Services tailored to meet the unique needs of businesses across industries.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("clicked")} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
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
  position: relative;
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
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;





// import React from "react"; 
// import styled from "styled-components";
// // Components
// import ProjectBox from "../Elements/ProjectBox";
// import FullButton from "../Buttons/FullButton";
// // Assets
// import ProjectImg1 from "../../assets/img/projects/360_F_507662376_BTKmPlIGBvKlRHWKRNeFt7bj7H2SynQm.jpg";
// import ProjectImg2 from "../../assets/img/projects/data-backup-and-recovery-services.jpg";
// import ProjectImg3 from "../../assets/img/projects/backup.jpg";
// import ProjectImg4 from "../../assets/img/projects/enterprise-application-services-2.jpg";
// import ProjectImg5 from "../../assets/img/projects/remote monitaring.jpeg";
// import ProjectImg6 from "../../assets/img/projects/database managment.jpg";
// import AddImage2 from "../../assets/img/projects/f6315598579519.5edf87123d7dd.jpg";

// export default function Projects() {
//   return (
//     <Wrapper id="projects">
//       <div className="whiteBg">
//         <div className="container">
//           <HeaderInfo>
//             <h1 className="font40 extraBold">Our Awesome Services</h1>
//             <p className="font13">
//               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
//               <br />
//               labore et dolore magna aliquyam erat, sed diam voluptua.
//             </p>
//           </HeaderInfo>
//           <div className="row textCenter">
//             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
//               <ProjectBox
//                 img={ProjectImg1}
//                 title="CLOUD COMPUTING SERVICES"
//                 action={() => alert("clicked")}
//                 imgStyle={{ maxWidth: '100%', height: 'auto' }}
//               />
//             </div>
//             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
//               <ProjectBox
//                 img={ProjectImg2}
//                 title="BACKUP AND DATA RECOVERY SERVICES"
//                 action={() => alert("clicked")}
//                 imgStyle={{ maxWidth: '100%', height: 'auto' }}
//               />
//             </div>
//             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
//               <ProjectBox
//                 img={ProjectImg3}
//                 title="SERVER MANAGEMENT SERVICES"
//                 action={() => alert("clicked")}
//                 imgStyle={{ maxWidth: '100%', height: 'auto' }}
//               />
//             </div>
//           </div>
//           <div className="row textCenter">
//             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
//               <ProjectBox
//                 img={ProjectImg4}
//                 title="APPLICATION MANAGEMENT SERVICES"
//                 action={() => alert("clicked")}
//                 imgStyle={{ maxWidth: '100%', height: 'auto' }}
//               />
//             </div>
//             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
//               <ProjectBox
//                 img={ProjectImg5}
//                 title="REMOTE MONITORING SERVICES"
//                 action={() => alert("clicked")}
//                 imgStyle={{ maxWidth: '100%', height: 'auto' }}
//               />
//             </div>
//             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
//               <ProjectBox
//                 img={ProjectImg6}
//                 title="Database Management Services"
//                 action={() => alert("clicked")}
//                 imgStyle={{ maxWidth: '100%', height: 'auto' }}
//               />
//             </div>
//           </div>
//           <div className="row flexCenter">
//             <div style={{ margin: "50px 0", width: "200px" }}>
//               <FullButton title="Load More" action={() => alert("clicked")} />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="lightBg">
//         <div className="container">
//           <Advertising className="flexSpaceCenter">
//             <AddLeft>
//               <AddLeftInner>
//                 <ImgWrapper className="flexCenter">
//                   <img className="radius8" src={AddImage2} alt="add" />
//                 </ImgWrapper>
//               </AddLeftInner>
//             </AddLeft>
//             <AddRight>
//               <h4 className="font15 semiBold">A few words about company</h4>
//               <h2 className="font40 extraBold">Increplus Technologies </h2>
//               <p className="font12">
//                 Increplus Technologies brings a comprehensive suite of Managed Services tailored to meet the unique needs of businesses across industries.
//               </p>
//               <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
//                 <div style={{ width: "190px" }}>
//                   <FullButton title="Get Started" action={() => alert("clicked")} />
//                 </div>
//                 <div style={{ width: "190px", marginLeft: "15px" }}>
//                   <FullButton title="Contact Us" action={() => alert("clicked")} border />
//                 </div>
//               </ButtonsRow>
//             </AddRight>
//           </Advertising>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.section`
//   width: 100%;
// `;

// const HeaderInfo = styled.div`
//   @media (max-width: 860px) {
//     text-align: center;
//   }
// `;

// const Advertising = styled.div`
//   padding: 100px 0;
//   margin: 100px 0;
//   position: relative;
//   @media (max-width: 1160px) {
//     padding: 60px 0 40px 0;
//   }
//   @media (max-width: 860px) {
//     flex-direction: column;
//     padding: 0 0 30px 0;
//     margin: 80px 0 0px 0;
//   }
// `;

// const ButtonsRow = styled.div`
//   @media (max-width: 860px) {
//     justify-content: space-between;
//   }
// `;

// const AddLeft = styled.div`
//   position: relative;
//   width: 50%;
//   p {
//     max-width: 475px;
//   }
//   @media (max-width: 860px) {
//     width: 80%;
//     order: 2;
//     text-align: center;
//     h2 {
//       line-height: 3rem;
//       margin: 15px 0;
//     }
//     p {
//       margin: 0 auto;
//     }
//   }
// `;

// const AddRight = styled.div`
//   width: 50%;
//   @media (max-width: 860px) {
//     width: 80%;
//     order: 2;
//   }
// `;

// const AddLeftInner = styled.div`
//   width: 100%;
//   position: absolute;
//   top: -300px;
//   left: 0;
//   @media (max-width: 1190px) {
//     top: -250px;
//   }
//   @media (max-width: 920px) {
//     top: -200px;
//   }
//   @media (max-width: 860px) {
//     order: 1;
//     position: relative;
//     top: -60px;
//     left: 0;
//   }
// `;

// const ImgWrapper = styled.div`
//   width: 100%;
//   padding: 0 15%;
//   img {
//     width: 100%;
//     height: auto;
//   }
//   @media (max-width: 400px) {
//     padding: 0;
//   }
// `;
