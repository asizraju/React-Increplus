// import React from "react";
// import styled from "styled-components";

// export default function ProjectBox({ img, title, text, action ,imgStyle}) {
//   return (
//     <Wrapper>
//       <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
//         <img className="radius8" src={img} alt="project" style={imgStyle}></img>
//       </ImgBtn>
//       <h3 className="font20 extraBold">{title}</h3>
//       <p className="font13">{text}</p>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   width: 100%;
//   margin-top: 30px;
//   img {
//     width: 100%;
//     height: auto;
//     margin: 20px 0;
//   }
//   h3 {
//     padding-bottom: 10px;
//   }
// `;
// const ImgBtn = styled.button`
//   background-color: transparent;
//   border: 0px;
//   outline: none;
//   padding: 0px;
//   margin: 0px;
//   :hover > img {
//     opacity: 0.5;
//   }
// `;

import React from "react"; 
import styled from "styled-components";

export default function ProjectBox({ img, title, text, action, imgStyle }) {
  return (
    <Wrapper>
      <ImgBtn className="animate pointer" onClick={action ? () => action() : null}>
        <img className="radius8" src={img} alt="project" style={imgStyle}></img>
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  text-align: center; /* Center the text */
  
  img {
    width: 100%; /* Make the image take up 100% of its container */
    height: auto; /* Maintain aspect ratio */
    margin: 20px 0;
    transition: opacity 0.3s ease; /* Smooth transition for opacity */
  }

  h3 {
    padding-bottom: 10px;
  }

  @media (max-width: 860px) {
    img {
      width: 90%; /* Make image a bit smaller on mobile */
    }
  }

  @media (max-width: 500px) {
    img {
      width: 100%; /* On very small screens, make image full width */
    }
  }
`;

const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  
  :hover > img {
    opacity: 0.5; /* Reduce opacity on hover */
  }
`;
