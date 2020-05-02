import React, { useState } from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
function MapPage(props) {


  const onMarkerClick = (prop, marker, e) => {
    // console.log(activeMarker,showingInfoWindow,selectedPlace);
    console.log(marker);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  }

  const onMapClicked = (prop) => {
    setShowingInfoWindow(false);
  }


  const [activeMarker, setActiveMarker] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  return (

    <div className="MapPage">
      <div>
        <p>
          hello
        </p>
      </div>
      <div>
        <Map google={props.google}
          onClick={onMapClicked}
          zoom={13.5}
          initialCenter={{
            lat: 43.6529,
            lng: -79.3832
          }}>

          <Marker
            onClick={onMarkerClick}
            title={'Shoppers Drug Mart'}
            position={{ lat: 43.6545, lng: -79.4015 }}
            description={'Shoppers Drug Mart has one vision and that is “to be the leader in helping Canadians discover a healthier outlook on life.'}
          />

          <Marker
            onClick={onMarkerClick}
            title={'New Vision Health Clinic'}
            position={{ lat: 43.6673, lng: -79.4002 }}
            description={'We believe that every patient is eequal and we strive to serve our patients to the best of our abilities'}
          />

          <Marker
            onClick={onMarkerClick}
            title={'Zenkai Pharmacy'}
            position={{ lat: 43.6635, lng: -79.3707 }}
            description={'Serving Torontonians 24/7 since 1999!'}
          />
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
          >
            <div>
              <h3>{activeMarker.title}</h3>
              <p>{activeMarker.description}</p>
            </div>
          </InfoWindow>

        </Map>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCTIJRIAImXnAX4ZnVXpORPlOC_Ro22qPQ")
})(MapPage)
