import React from "react";
import styled from "styled-components";

const CountryDetails = (props) => {
    // render(){
        let {name,
            capital,
            topLevelDomain,
            aka,
            demonym,
            timeZone,
            flag} = props.countryData;
            console.log(props)
        return(
            <CDWrap>
                <img src={flag} alt={`Flag of ${name}`} />
                <h3>{name}</h3>
                <div className="moreDetails">
                <p>Capital: {capital}</p>
                {/* <p>Also Known As: {aka}</p> */}
                {/* <p>Time zone: {timeZone}</p> */}
                <p>People from {name} are <strong>{demonym}</strong></p>
                {/* <p>Domains: {topLevelDomain}</p>                 */}
                </div>
            </CDWrap>       
        )
    // }
}

const CDWrap = styled.div`
    position: absolute; 
    bottom: 0;
    left: 0;
    border: solid 1px black;
    width: 350px;
    box-shadow: 0px 0px 29px 0px rgba(0,0,0,0.75);
    background: #fff;

    img{
        width: 200px;
        height: auto;
        margin: 0 auto;
        display: block;
        border-radius: 3px;
        margin-top: -20%;
        box-shadow: 0px 0px 29px 0px rgba(0,0,0,0.75); 
    }

    h3{
        display: block;
        text-align: center;
    }
`;

export default CountryDetails