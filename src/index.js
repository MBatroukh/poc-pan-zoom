import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Map from "./Map";
import SideBar from "./SideBar";

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Map />
        <SideBar />
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
`;

ReactDOM.render(<App />, document.getElementById("container"));
