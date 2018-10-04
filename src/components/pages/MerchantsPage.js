import React, { Component } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// Custom components
import AppHeader from '../AppHeader';
import EnhancedTable from '../EnhancedTable';
import Footer from '../Footer';
import LayerMap from '../LayerMap';
import PreviewMap from '../PreviewMap';

// Helpers
import Client from '../../utils/feathers';
import Countries from 'country-list';

// Images
import LoadingGif from '../../assets/img/loading_icon.gif';
import MerchantPin from '../../assets/img/map/merchant_pin.png';

import "./MerchantsPage.css";

// List of countries
const countries = Countries();

const centerStyle = {
  textAlign: 'center',
  marginTop: 20,
  marginBottom: 20
};

const loadingStyle = {
  textAlign: 'center',
  marginTop: 20,
  marginBottom: 20,
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const mapsStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    minWidth              : '300px'
  }
};

const columnData = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'address', numeric: false, disablePadding: true, label: 'Address' },
  { id: 'city', numeric: false, disablePadding: false, label: 'City' },
  { id: 'country', numeric: false, disablePadding: false, label: 'Country' },
  { id: 'map', numeric: false, disablePadding: false, label: 'Maps', disableSearch: true}
];

/**
 * Merchant page component.
 */
class MerchantsPage extends Component {
  constructor(props, context) {
    super(props, context);

    /** @type {ComponentState} */
    this.state = {
      merchants: {
        total: 0,
        limit: 0,
        skip: 0,
        data: []
      },
      loading: true,
      rowsPerPage: [100,200,300],
      numberOfRows: 100,
      page: 1,
      total: undefined,
      dialogOpen: false,
      dialogMultipleOpen: false,
      modalIsOpen: false,
      mapsModalIsOpen: false,
      mapsTitle: '',
      mapsDescription: '',
      mapsLat: 0,
      mapsLon: 0
    };
  }

  /**
   * @description Lifecycle event handler called just after the App loads into the DOM.
   */
  UNSAFE_componentWillMount() {
    // Get the ambassadors list
    this.getMerchants();
  }

  fillResults(result) {
    const data = result;
    return (item) => data.data.push(item);
  }

  /**
   * @description Get merchants from the web service
   * @param {number} [limit=10] - Max items to be returned.
   * @param {number} [skip=0] - Start index search
   */
  getMerchants = async (limit = 10, skip = 0) => {
    const app = this;
    // Initially we don't know how much the total value is, so to make sure we enter the loop
    // at least once we're just setting it to be 1
    let total = 1;

    const merchants = Client.service('api/v1/merchants');
    this.setState({loading: true});
    let result;
    while(skip < total){
      let partialResponse = await merchants.find({
        query: {
          $sort: { account: 1 },
          $limit: limit,
          $skip: skip
        }
      });
      total = partialResponse.total;
      result === undefined ? result = partialResponse : partialResponse.data.map(this.fillResults(result));
      skip = skip + limit;
    }

    result.data.forEach(function(merchants){
      if(merchants.city !== undefined) merchants.city = (merchants.city).replace(/(^|\s)\S/g, l => l.toUpperCase());
      if(merchants.country !== undefined) merchants.country = countries.getName(merchants.country);
    });

    // Once both return, update the state
    app.setState({loading: false, merchants: result});
  };

  /**
   * @description Close Maps modal.
   */
  closeMapsModal() {
     this.setState({
       mapsLat: 0,
       mapsLon: 0,
       mapsModalIsOpen: false
     });
  }

  openMaps(name, address, lat, lon){
    this.setState({
      mapsTitle: name,
      mapsDescription: address,
      mapsLat: lat,
      mapsLon: lon,
      mapsModalIsOpen: true
    });
  }

  render() {
    const { data } = this.state.merchants;

    data.map(merchant => {
      merchant.map = <Button
        className="App-button"
        variant="contained"
        style={{
            backgroundColor: "#139657",
            color: 'white'
        }}
        onClick={() => this.openMaps(
          merchant.name,
          `${merchant.address}, ${merchant.city} - ${merchant.country}`,
          merchant.lat,
          merchant.lon
        )}
      >Show on Map
      </Button>;
      return merchant;
    });

    return (
      <div>
        <AppHeader />

      <section data-spy="scroll" data-target="#mainNav" id="services">
      <div className="containerfix">
      <div className="row">
      <div className="col-md-10 mx-md-auto">

        <h2 className="ambassadorsTitle" style={centerStyle}><FormattedMessage id="merchants.title" /></h2>
        { /* Conditional Rendering */}
            {(this.state.loading) ? (
              <img src={LoadingGif} alt="Loading" style={loadingStyle} />
        ): (
          <div>
            <p style={{ textAlign: 'left', marginLeft: 20, marginRight: 20 }}>
              <FormattedHTMLMessage id="merchants.description1" />
              <Link to="/ambs">
                <FormattedMessage id="merchants.ambassadors_link_description" />
              </Link>
              <FormattedHTMLMessage id="merchants.description2" />
            </p>

            <Modal
              isOpen={this.state.mapsModalIsOpen}
              onRequestClose={() => this.closeMapsModal()}
              style={mapsStyles}
              ariaHideApp={false}
              contentLabel={this.state.mapsTitle}
            >
              <PreviewMap
                icon={MerchantPin}
                infoTitle={this.state.mapsTitle}
                infoDescription={this.state.mapsDescription}
                lat={this.state.mapsLat}
                lng={this.state.mapsLon}
                width="800px"
                height="600px"
              />
            </Modal>

            {(data.length > 0) ? (
              <div>
                <br />
                <EnhancedTable
                  columnData={columnData}
                  data={data}
                  orderBy="account"
                  rowsPerPage={10}
                  showSearchColumns={false}
                  isAdmin={false}
                />
              </div>
            ) : (
              <div style={centerStyle}>No Data found</div>
            )}
            <div className="map">
              <LayerMap
                ambassadorsLayer={false}
                merchantsLayer={true}
                mapHeight={'600px'}
                showControls={this.state.mapsModalIsOpen}
              />
            </div>
          </div>
          )}
</div>
  </div>
  </div>
  </section>
        <Footer />
      </div>
    );
  }
}

export { MerchantsPage };
