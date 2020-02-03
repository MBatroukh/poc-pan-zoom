import React from "react";
import styled from "styled-components";

const MiniMap = props => {
  // console.log(props.dimensions);
  return (
    <MiniMapWrapper>
      {/* <MiniMapContainer> */}
        {/* <FocusRectangle
          width={props.dimensions.width}
          height={props.dimensions.height}
        /> */}
        {/* <p>I'm the mini map!</p> */}
      {/* </MiniMapContainer> */}
      <MiniMapControls>
        <button className="home" onClick={props.handleHomeReset}>
          <svg class="svg-icon" viewBox="0 0 20 20">
            <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z" />
          </svg>
        </button>
        <button className="zoom-in" onClick={props.handleZoomIn}>
          <svg class="svg-icon" viewBox="0 0 20 20">
            <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10" />
          </svg>
        </button>
        <button className="zoom-out" onClick={props.handleZoomOut}>
          <svg class="svg-icon" viewBox="0 0 20 20">
            <path d="M14.776,10c0,0.239-0.195,0.434-0.435,0.434H5.658c-0.239,0-0.434-0.195-0.434-0.434s0.195-0.434,0.434-0.434h8.684C14.581,9.566,14.776,9.762,14.776,10 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.691-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.382,10c0-4.071-3.312-7.381-7.382-7.381C5.929,2.619,2.619,5.93,2.619,10c0,4.07,3.311,7.382,7.381,7.382C14.07,17.383,17.382,14.07,17.382,10" />
          </svg>
        </button>
      </MiniMapControls>
    </MiniMapWrapper>
  );
};

const FocusRectangle = styled.div`
  border: solid 1px blue;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const MiniMapControls = styled.div`
  border: solid 1px black;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  button {
    border: none;
    background: transparent;
    svg {
      width: 20px;
      fill: #000;
    }
  }
`;

const MiniMapContainer = styled.div`
  width: 250px;
  height: 150px;
  border: solid 2px black;
`;

const MiniMapWrapper = styled.div`
  display: flex;
  position: absolute;
  align-items: flex-end;
  bottom: 20px;
  right: 20px;
`;

export default MiniMap;
