import React from "react";
import styled from "styled-components";

export default function BlogBox({ tag,tags, title, text,texts, action, author }) {
  return (
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg radius8 shadow">
        <h3 className="font20 extraBold">{title}</h3>
        <div className="flex">
          <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
        </div>
        <p className="font13" style={{ padding: "" }}>
          {text}
        </p>
        <div className="flex">
          <p className="tag coralBg radius6 font13 extraBold">{tags}</p>
        </div>
        <p className="font13" style={{ padding: "" }}>
          {texts}
        </p>
        <p className="font13 extraBold">{author}</p>
        {/* <div className="flex">
          <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
        </div> */}
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;
