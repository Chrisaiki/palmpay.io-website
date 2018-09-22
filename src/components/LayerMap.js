import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, withStateHandlers } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

// Custom Components
import LayerMapSwitches from './LayerMapSwitches';

// Helpers
import GOOGLE_MAPS_API from '../utils/constants';
import Client from '../utils/feathers';

// Images
import MerchantPin from '../assets/img/map/merchant_pin.png';
import AmbassadorPin from '../assets/img/map/ambassador_pin.png';

/**
 * This object is used for type checking the props of the component.
 */
const propTypes = {
  ambassadors: PropTypes.array,
  merchants: PropTypes.array,
  mapCenter: PropTypes.object,
  mapZoom: PropTypes.number,
  // Fix google maps modal problem
  showControls: PropTypes.bool
};

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
  // Fix google maps modal problem
  showControls: true,
};
defaultProps['markers'] = [
  defaultProps.mapCenter
];

/**
 * Map that support Merchant Layer Markers and Ambassadors Layer Markers.
 */
const CustomLayerMap = compose(
  withStateHandlers(() => ({
    isOpenObj: {},
    isOpenAmbassadorObj:{}
  }), {
    onToggleOpen: ({ isOpenObj }) => (index) => {
      const openObj = isOpenObj;
      openObj[index] = !openObj[index];
      return openObj;
    },
    onToggleAmbassadorOpen: ({ isOpenAmbassadorObj }) => (index) => {
      const openObj = isOpenAmbassadorObj;
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
    <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={60}
        zoomOnClick={true}
        imagePath='http://www.luminiasoft.com/images/merchant_cluster'
      >
      {props.ambassadors.map( (marker, index) => (
        marker.withInfo ? (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={AmbassadorPin}
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
            icon={AmbassadorPin}
          />
        )
      ))}
    </MarkerClusterer>
    <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={60}
        zoomOnClick={true}
        imagePath='http://www.luminiasoft.com/images/ambassador_cluster'
      >
        {props.merchants.map( (marker, index) => (
          marker.withInfo ? (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={MerchantPin}
              onClick={() => props.onToggleAmbassadorOpen(index)}
            >
              {props.isOpenAmbassadorObj[index] && <InfoWindow onCloseClick={() => props.onToggleAmbassadorOpen(index)}>
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
              icon={MerchantPin}
            />
          )
        ))}
    </MarkerClusterer>
  </GoogleMap>
);

// Type checking the props of the component
CustomLayerMap.propTypes = propTypes;
// Assign default values to the optional props
CustomLayerMap.defaultProps = defaultProps;

/**
 * This object is used for type checking the props of the component.
 */
const propTypesLayerMap = {
  ambassadorsLayer: PropTypes.bool,
  merchantsLayer: PropTypes.bool,
  showControls: PropTypes.bool,
  mapHeight: PropTypes.string
};

class LayerMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ambassadors: [],
      merchants: [],
      ambassadorLayer: this.props.ambassadorsLayer,
      merchantLayer: this.props.merchantsLayer
    };
  }

  /**
   * @description Lifecycle event handler called just after the App loads into the DOM.
   */
  UNSAFE_componentWillMount() {
    this.getAmbassadors();
    this.getMerchants();
  }

  /**
   * @description Get the ambassadors list from the web service.
   * @param {string} id - Merchant ID.
   */
  getAmbassadors = () => {
    const app = this;
    const ambassadors = Client.service('api/v1/ambassadors');

    this.setState({loading: true});

    ambassadors.find().then( (results) => {
      const markers = results.data.map(ambassador => {
        const marker = {
          lat: ambassador.lat,
          lng: ambassador.lon,
          withInfo: true,
          infoTitle: ambassador.nickname,
          infoDescription: `${ambassador.city} - ${ambassador.country}`,
        };
        return marker;
      });

      // Once both return, update the state
      app.setState({
        ambassadors: markers,
        loading: false
      });
    }).catch( error => {
      app.setState({responseError: error.message, loading: false});
    });
  };

  /**
   * @description Get the merchants list from the web service.
   * @param {string} id - Merchant ID.
   */
  getMerchants = () => {
    const app = this;
    const merchants = Client.service('api/v1/merchants');

    this.setState({loading: true});

    merchants.find().then( (results) => {
      const markers = results.data.map(merchant => {
        const marker = {
          lat: merchant.lat,
          lng: merchant.lon,
          withInfo: true,
          infoTitle: merchant.name,
          infoDescription: `${merchant.address}, ${merchant.city} - ${merchant.country}`,
        };
        return marker;
      });

      // Once both return, update the state
      app.setState({
        merchants: markers,
        loading: false
      });
    }).catch( error => {
      app.setState({responseError: error.message, loading: false});
    });
  };

  handleLayerChange = name => event => {
    this.setState({ [name]: event.target.checked });
    // Update any time changes
    this.getAmbassadors();
    this.getMerchants();
  };

  render() {
    // create an array with marker components

    return (
      <div>
        {!this.props.showControls ? (
          <LayerMapSwitches
            ambassadors={this.state.ambassadorLayer}
            merchants={this.state.merchantLayer}
            onChange={this.handleLayerChange}
          />
        ) : (
          <div style={{ height: 56 }}></div>
        )}
        <CustomLayerMap
          ambassadors={this.state.ambassadorLayer ? this.state.ambassadors: []}
          merchants={this.state.merchantLayer ? this.state.merchants: []}
          mapZoom={3}
          mapCenter={{ lat: 0, lng: 0 }}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: this.props.mapHeight ? this.props.mapHeight: '400px' }} />}
        />
      </div>
    );
  }
}

// Type checking the props of the component
LayerMap.propTypes = propTypesLayerMap;

export default LayerMap;
