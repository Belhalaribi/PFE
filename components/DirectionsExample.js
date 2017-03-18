import {
  default as React,
  Component,
} from "react";

import scriptLoader from 'react-async-script-loader';

let API_KEY = "AIzaSyC9dHYfc3ZWdsL-mgPpgjzmpBLXPwUxuTo";

@scriptLoader(['https://maps.googleapis.com/maps/api/js?key='+API_KEY])
export default class DirectionsExample extends Component {
  constructor(props){
    super(props);
    this.map = null;
  }

  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        this.map = new google.maps.Map(this.refs.map, {
          center: {lat: 10.794234, lng: 106.706541},
          zoom: 20
        });

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            this.map.setCenter(pos);

            const marker = new google.maps.Marker({
              position: pos,
              map: this.map,
              title: 'Hello World!'
            });                
          }, () => {
            console.log('navigator disabled');
          });
        } else {
          // Browser doesn't support Geolocation
          console.log('navigator disabled');
        }
      }
      else this.props.onError()
    }
  }

  render(){
    return (
    <div>
      <div ref="map" style={{height: '80%', width: '100%'}}></div>
      { !this.map && <div className="center-md">Loading...</div> }
    </div>
    )
  }
}
