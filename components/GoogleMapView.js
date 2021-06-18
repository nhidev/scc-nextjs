import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from "styled-components";

const GoogleMapStyled = styled.div`
  height: 70rem;
  width: 100%;
  z-index: 1;
`

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMapView extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <GoogleMapStyled>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDiKc4HxX5G7EfneIZBN_Hlk2_luoT_yvo",
          language: "en",
          region: "US"}}
          // AIzaSyBXFAxSgXP7b5D25WEtjxkYqoWM2PjxaLg
          // AIzaSyCAIwTPctnSM2PWcbK6cMdlZaSgEYIKp5U
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </GoogleMapStyled>
    );
  }
}
 
export default GoogleMapView;