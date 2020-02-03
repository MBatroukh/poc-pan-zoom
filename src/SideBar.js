import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <SideBarWrap>
      <p>I'm the SideBar!</p>
    </SideBarWrap>
  );
};

const SideBarWrap = styled.div`
  width: 15vw;
  flex-basis: 15vw;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -10px 0px 24px 5px rgba(0, 0, 0, 0.33);
  position: relative;
`;

export default SideBar;
