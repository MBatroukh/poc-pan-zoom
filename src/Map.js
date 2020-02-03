import React from "react";
import styled from "styled-components";
import { UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";
import { ReactSvgPanZoomLoader } from "react-svg-pan-zoom-loader";
import MiniMap from "./MiniMap";
import MapSvg from "./MapSvg";
import CountryDetails from "./CountryDetails"; 

class Map extends React.Component {
  state = {
    mmHeight: 0,
    mmWidth: 0,
    country: {
      name: "",
      capital: "",
      topLevelDomain: [],
      aka: [],
      demonym: "",
      timeZone: [],
      flag: ""
    }
  };
  Viewer = null;
  componentDidMount() {
    const mmHeight = document.getElementById("mapSvg").clientHeight;
    const mmWidth = document.getElementById("mapSvg").clientWidth;
    this.Viewer.fitToViewer();
    this.setState({ mmHeight, mmWidth });
  }
  render() {
    let { mmWidth, mmHeight } = this.state;
    let rectDimensions = { width: mmWidth, height: mmHeight };

    const handleHomeReset = () => {
      this.Viewer.fitToViewer();
    };

    const handleZoomIn = () => {
      this.Viewer.zoomOnViewerCenter(1.1);
    };

    const handleZoomOut = () => {
      this.Viewer.zoomOnViewerCenter(0.9);
    };

    const handleCountryClick = (e) => {
      let countryCode = e.target.id;
      fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
        .then(res => res.json())
        .then((data) => {
          this.setState({
            country:{
              name: data.name,
              capital: data.capital,
              topLevelDomain: data.topLevelDomain,
              aka: data.altSpellings,
              demonym: data.demonym,
              timeZone: data.timezones,
              flag: data.flag
            }
          })
          // console.log(data)
        })
        .catch(console.log)

    }

    const miniaturePropsValues = {
      position: "right",
      width: 250,
      height: 148
    }

    return (
      <MapWrapper>
        <div id="mapSvg">
          <ReactSvgPanZoomLoader
            render={() => (
              <UncontrolledReactSVGPanZoom
                width={mmWidth}
                height={mmHeight}
                background="#ffffff"
                ref={Viewer => (this.Viewer = Viewer)}
                miniatureProps={miniaturePropsValues}
                // onClick={event =>{ 
                //   console.log("click", event.x, event.y, event.originalEvent)
                //   console.log(event.SVGViewer)
                // }
                // }
              >
                <svg width={1010} height={666}>
                  <MapSvg onClick={handleCountryClick} />
                </svg>
                {/* <MapSvg width={1010} height={666} /> */}
              </UncontrolledReactSVGPanZoom>
            )}
          />
        </div>
        <MiniMap
          dimensions={rectDimensions}
          handleHomeReset={handleHomeReset}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
        />
        {this.state.country.name !== "" &&
          <CountryDetails countryData={this.state.country}/>
        }
      </MapWrapper>
    );
  }
}

const MapWrapper = styled.div`
  height: 100vh;
  width: 85vw;
  display: flex;
  flex-direction: column;
  position: relative;
  #mapSvg {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      /* width: 1010px;
      height: 666px; */
      path {
        fill: #95a5a6;
        transition: all 0.2s;
        &:hover {
          fill: #7f8c8d;
          transition: all 0.2s;
        }
      }
      & + div{
        & + div{
          right: 70px !important;
          bottom: 20px !important;
        }
      }
    }
  }
`;

export default Map;
