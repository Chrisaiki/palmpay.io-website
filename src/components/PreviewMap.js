import React from "react";
import PropTypes from 'prop-types';
import GOOGLE_MAPS_API from '../utils/constants';
import { compose, withStateHandlers } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

/**
 * This object sets default values to the optional props.
 */
const defaultProps = {
  mapCenter: { lat: -22.9068, lng: -43.1729 },
  mapZoom: 12,
  googleMapURL:
  `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `100%` }} />,
  mapElement: <div style={{ height: `400px` }} />,
};
defaultProps['markers'] = [
  defaultProps.mapCenter
];

const CustomGoogleMaps = compose(
  withStateHandlers(() => ({
    isOpenObj: {},
  }), {
    onToggleOpen: ({ isOpenObj }) => (index) => {
      const openObj = isOpenObj;
      openObj[index] = !openObj[index];
      return openObj;
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={props.mapZoom}
    defaultCenter={props.mapCenter}
  >
  {props.markers.map( (marker, index) => (
    marker.withInfo ? (
      <Marker
        key={index}
        position={{ lat: marker.lat, lng: marker.lng }}
        icon={marker.icon ? marker.icon:''}
        onClick={() => props.onToggleOpen(index)}
      >
        {props.isOpenObj[index] && <InfoWindow onCloseClick={() => props.onToggleOpen(index)}>
          <div>
            <div style={{ font: "bold 16px Georgia, serif" }}>{marker.infoTitle}</div>
            <br />
            <div style={{ font: "14px Georgia, serif" }}>{marker.infoDescription}</div>
          </div>
        </InfoWindow>}
      </Marker>
    ) : (
      <Marker
        key={index}
        position={{ lat: marker.lat, lng: marker.lng }}
        icon={marker.icon ? marker.icon:''}
      />
    )
  ))}
  </GoogleMap>
);

// Type checking the props of the component
CustomGoogleMaps.propTypes = {
  mapCenter: PropTypes.object,
  mapZoom: PropTypes.number,
};
// Assign default values to the optional props
CustomGoogleMaps.defaultProps = defaultProps;

/**
 * This object is used for type checking the props of the component.
 */
const propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  icon: PropTypes.string,
  infoTitle: PropTypes.string,
  infoDescription: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

/**
 * This object sets default values to the optional props.
 */
const defaultPropsPreview = {
  width: '300px',
  height: '150px'
};

/**
 * A preview map for one element - usually an ambassador or merchant.
 */
function PreviewMap(props) {

  const marker = {
    icon: props.icon ? props.icon : '',
    lat: props.lat,
    lng: props.lng
  };
  if(props.infoTitle && props.infoDescription) {
    marker.withInfo = true;
    marker.infoTitle = props.infoTitle;
    marker.infoDescription = props.infoDescription;
  }

	return (
    <CustomGoogleMaps
      mapCenter={{ lat: props.lat, lng: props.lng }}
      mapZoom={12}
      markers={ [marker] }
      mapElement={<div style={{ width: props.width, height: props.height }} />}
    />
  );
}

// Type checking the props of the component
PreviewMap.propTypes = propTypes;
// Assign default values to the optional props
PreviewMap.defaultProps = defaultPropsPreview;

export default PreviewMap;
