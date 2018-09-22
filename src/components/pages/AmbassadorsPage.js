import React, { Component } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// Custom components
import AppHeader from '../AppHeader';
import Footer from '../Footer';
import EnhancedTable from '../EnhancedTable';
import LayerMap from '../LayerMap';
import PreviewMap from '../PreviewMap';

// Helpers
import Client from '../../utils/feathers';
import { stripProtocol } from '../../utils/url';
import Countries from 'country-list';

// Images
import AmbassadorPin from '../../assets/img/map/ambassador_pin.png';
import LoadingGif from '../../assets/img/loading_icon.gif';

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
  { id: 'nickname', numeric: false, disablePadding: true, label: 'Nickname' },
  { id: 'location', numeric: false, disablePadding: true, label: 'BTS Account' },
  { id: 'telegram', numeric: false, disablePadding: false, label: 'Telegram Account' },
  { id: 'keybase', numeric: false, disablePadding: false, label: 'Keybase' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'phone', numeric: false, disablePadding: false, label: 'Phone' },
  { id: 'map', numeric: false, disablePadding: false, label: 'Maps', disableSearch: true},
  { id: 'link', numeric: false, disablePadding: false, label: 'URL' }
];

/**
 * Ambassador page component.
 */
class AmbassadorsPage extends Component {
  constructor(props, context) {
    super(props, context);

    /** @type {ComponentState} */
    this.state = {
      ambassadors: {
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
      mapsModalIsOpen: false,
      mapsTitle: '',
      mapsDescription: '',
      mapsLat: 0,
      mapsLon: 0,
    };
  }

  /**
   * @description Lifecycle event handler called just after the App loads into the DOM.
   */
  UNSAFE_componentWillMount() {
    // Get the ambassadors list
    this.getAmbassadors();
  }

  fillResults(result) {
    const data = result;
    return (item) => data.data.push(item);
  }

  /**
   * @description Get ambassadors from the web service
   * @param {number} [limit=10] - Max items to be returned.
   * @param {number} [skip=0] - Start index search
   */
  getAmbassadors = async (limit = 10, skip = 0) => {
    const app = this;
    // Initially we don't know how much the total value is, so to make sure we enter the loop
    // at least once we're just setting it to be 1
    let total = 1;

    const ambassadors = Client.service('api/v1/ambassadors');
    this.setState({loading: true});
    let result;
    while(skip < total){
      let partialResponse = await ambassadors.find({
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

    result.data.forEach(function(ambassador){
      if(ambassador.city !== undefined) ambassador.city = (ambassador.city).replace(/(^|\s)\S/g, l => l.toUpperCase());
      if(ambassador.country !== undefined) ambassador.country = countries.getName(ambassador.country);
      // Setup disabled to be string
      ambassador.disabled = (ambassador.disabled) ? 'yes': '';
    });

    // Once both return, update the state
    app.setState({loading: false, ambassadors: result});
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
    const { data } = this.state.ambassadors;

    data.map(ambassador => {
      ambassador.location = `${ambassador.city} - ${ambassador.country}`;
      ambassador.link = <a target="_blank" rel="noopener noreferrer"
        href={ambassador.url}>{stripProtocol(ambassador.url)}</a>;
        ambassador.map = <Button
        className="App-button"
        variant="contained"
        color="primary"
        onClick={() => this.openMaps(
          ambassador.nickname,
          `${ambassador.city} - ${ambassador.country}`,
          ambassador.lat,
          ambassador.lon
        )}
      >Show on Map
      </Button>;
      return ambassador;
    });

    return (
      <div>
        <AppHeader />
        <h2 style={centerStyle}><FormattedMessage id="ambassadors.title" /></h2>
        { /* Conditional Rendering */}
            {(this.state.loading) ? (
              <img src={LoadingGif} alt="Loading" style={loadingStyle} />
        ): (
          <div>
            <p style={{ textAlign: 'left', marginLeft: 20, marginRight: 20 }}>
              <FormattedHTMLMessage id="ambassadors.description1" />
              <Link to="/merchants">
                <FormattedMessage id="ambassadors.merchants_link_description" />
              </Link>
              <FormattedHTMLMessage id="ambassadors.description2" />
            </p>

            <Modal
              isOpen={this.state.mapsModalIsOpen}
              onRequestClose={() => this.closeMapsModal()}
              style={mapsStyles}
              ariaHideApp={false}
              contentLabel={this.state.mapsTitle}
            >
              <PreviewMap
                icon={AmbassadorPin}
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
                  orderBy="nickname"
                  showSearchColumns={false}
                  rowsPerPage={10}
                  isAdmin={false}
                />
              </div>
            ) : (
              <div style={centerStyle}>No Data found</div>
            )}
            <div className="map">
              <LayerMap
                ambassadorsLayer={true}
                merchantsLayer={false}
                mapHeight={'600px'}
                showControls={this.state.mapsModalIsOpen}
              />
            </div>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export { AmbassadorsPage };
