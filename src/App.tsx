import React from 'react';
import logo from './logo.svg';
// import './App.css';

import { fromLonLat } from "ol/proj";
import { Coordinate } from "ol/coordinate";
import { Point } from "ol/geom";
import "ol/ol.css";

import locationIcon from "./images/location.svg";

import { RMap, ROSM, RLayerVector, RFeature, ROverlay, RStyle } from "rlayers";

// pass an array formatted as [lat, long] as a prop to this class to create a marker on the map
class MapMarker extends React.Component<any, any> {  // using <any, any> because I'm not very familar with typescript

  // coordinateArray

  render () {
    return (
    <RLayerVector zIndex={10}>
      <RStyle.RStyle>
      <RStyle.RIcon src={locationIcon} anchor={this.props.coordinateArray} />
      </RStyle.RStyle>
      <RFeature
        geometry={new Point(fromLonLat(this.props.coordinateArray))}
      >
    </RFeature>
    </RLayerVector>
    )
}

}


class MyMap extends React.Component {

  initial_center = fromLonLat([2.364, 48.82]);

  json = {};

  render() {

    return (
    
      <RMap width={"100%"} height={"60vh"} initial={{ center: this.initial_center, zoom: 11 }}>
        <ROSM />
        <div>
          <MapMarker coordinateArray={[1, 2]}/>
        </div>
      </RMap>  

    );

  }


}

class App extends React.Component {

  render() {
      return (
        <div>
          <h1>UFO Tracker</h1>
          <MyMap/>
        </div>
      );
    }
}

export default App;
