import React, { useState } from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '80vw',
  height: '80vh',
};

const titleStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20
}

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
        <p style={titleStyle}>
          Nearby Buyers Who Ordered Goods From You
        </p>
      </div>
      <div>
        <Map google={props.google}
          onClick={onMapClicked}
          zoom={13.5}
          style={mapStyles}
          initialCenter={{
            lat: 43.6929,
            lng: -79.432
          }}>

          <Marker
            onClick={onMarkerClick}
            title={'Sunnybrook Health Sciences Center'}
            position={{ lat: 43.7224202, lng: -79.3762132 }}
            description={'Sunnybrook has flourished into a fully affiliated teaching hospital of the University of Toronto, evolving to meet the needs of our growing community. Today, with 1.3 million patient visits each year, Sunnybrook has established itself across three campuses and is home to Canada\'s largest trauma centre.'}
          />

          <Marker
            onClick={onMarkerClick}
            title={'Toronto Senior Care'}
            position={{ lat: 43.685984, lng: -79.4041336 }}
            description={'We believe that every patient is equal and we strive to serve our patients to the best of our abilities'}
          />

          <Marker
            onClick={onMarkerClick}
            title={'Patient Networks Family Medicine Walk In Clinic'}
            position={{ lat: 43.651958, lng: -79.3806017 }}
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