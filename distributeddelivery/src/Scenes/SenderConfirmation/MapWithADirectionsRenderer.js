import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

export default class MapWithADirectionsRenderer extends React.Component {
  render() {
    return (
      <div>
        <MyMapComponent
          key={this.props.key}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{height: `60vh`}}/>}
          containerElement={<div style={{height: `60vh`}}/>}
          mapElement={<div style={{height: `100%`}}/>}
          direction={this.props.direction}
          markers={this.props.coordinates}
        />
      </div>
    )
  }
}


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{lat: props.direction.lat, lng: props.direction.lng}}
  >
    {props.markers ? props.markers.map((coordinates) =>  <Marker position={coordinates}/>) : null}

  </GoogleMap>
)); 