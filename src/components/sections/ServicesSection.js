import React from "react";
import { FormattedMessage } from 'react-intl';

// Images
import BillPayCounters from '../../assets/img/services/bill_pay_counters.png';
import CafeBars from '../../assets/img/services/cafe_bars.png';
import DeliveryDrivers from '../../assets/img/services/delivery_drivers.png';
import GasStations from '../../assets/img/services/gas_stations.png';
import Grocery from '../../assets/img/services/grocery.png';
import PhoneOrders from '../../assets/img/services/phone_orders.png';
import Restaurants from '../../assets/img/services/restaurants.png';
import Retail from '../../assets/img/services/retail.png';

/**
 * The services section of the home page.
 */
function ServicesSection() {
  return (
    <section data-spy="scroll" data-target="#mainNav" id="services">
      <div className="containerfix">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">
              <span id="sr_lang1">
                <FormattedMessage id="home.services.section_title" />
              </span>
            </h2>
            <hr className="my-4" />
          </div>
        </div>
      </div>
      <div className="containerfix">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x text-primary mb-3 sr-icons">
                <img alt="Retail" src={Retail} />
              </i>
              <h3 className="mb-3">
                <span id="sr_lang2"><FormattedMessage id="home.services.retail" /></span>
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x text-primary mb-3 sr-icons">
                <img alt="Cafe/Bars" src={CafeBars} />
              </i>
              <h3 className="mb-3">
                <span id="sr_lang3"><FormattedMessage id="home.services.cafe_bars" /></span>
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x text-primary mb-3 sr-icons">
                <img alt="Restaurants" src={Restaurants} />
              </i>
              <h3 className="mb-3">
                <span id="sr_lang4"><FormattedMessage id="home.services.restaurants" /></span>
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x text-primary mb-3 sr-icons">
                <img alt="Gas Stations" src={GasStations} />
              </i>
              <h3 className="mb-3">
                <span id="sr_lang5"><FormattedMessage id="home.services.gas_stations" /></span>
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x text-primary mb-3 sr-icons">
                <img alt="Bill-Pay Counters" src={BillPayCounters} />
              </i>
              <h3 className="mb-3">
                <span id="sr_lang6"><FormattedMessage id="home.services.bill_pay" /></span>
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x text-primary mb-3 sr-icons">
                <img alt="Grocery" src={Grocery} />
              </i>
              <h3 className="mb-3">
                <span id="sr_lang7"><FormattedMessage id="home.services.grocery" /></span>
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x text-primary mb-3 sr-icons">
                <img alt="Delivery Drivers" src={DeliveryDrivers} />
              </i>
              <h3 className="mb-3">
                <span id="sr_lang8"><FormattedMessage id="home.services.delivery_drivers" /></span>
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x text-primary mb-3 sr-icons">
                <img alt="Phone Orders" src={PhoneOrders} />
              </i>
              <h3 className="mb-3">
                <span id="sr_lang9"><FormattedMessage id="home.services.phone_orders" /></span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ServicesSection };
