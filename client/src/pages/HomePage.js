import React from "react";
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  CarouselIndicators,
  CarouselIndicator,
  Mask,
  Row,
  Col,
  Button,
  View,
  Container
} from "mdbreact";

import "./HomePage.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 6
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if (nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if (prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render() {
    const { activeItem } = this.state;
    return (
      <span>
        <View className="vmain">
          <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container className="px-md-3 px-sm-0">
              <Row>
                <Col lg="10" className="mx-auto white-text text-center">
                  <h1 className="text-uppercase">
                    <strong className="important">
                      <span id="header_lang1">
                        Accept any Digital Currency at Zero Cost
                      </span>
                    </strong>
                  </h1>
                  <hr className="hr-light my-4 w-75" />
                </Col>
                <Col lg="8" className="mx-auto white-text text-center">
                  <p className="subtext-header mt-2 mb-4 text-faded">
                    <span id="header_lang2">
                      Cryptocurrencies bring Global Sales; Bitcoin Cash, bitUSD,
                      bitEUR, bitRUB, bitXCD, bitSilver, Steem, Litecoin and
                      more
                    </span>
                  </p>
                  <Button
                    href="#services"
                    className="btn-lg btn-primary"
                    rounded>
                    <span id="header_lang3">Tell me more</span>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Mask>
        </View>

        <section data-spy="scroll" data-target="#mainNav" id="services">
          <div className="containerfix">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">
                  <span id="sr_lang1">
                    100% FREE Crypto Point-Of-Sale Software for any Business
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
                    <img alt="Retail" src="./img/4.png" />
                  </i>
                  <h3 className="mb-3">
                    <span id="sr_lang2">Retail</span>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x text-primary mb-3 sr-icons">
                    <img alt="Cafe/Bars" src="./img/6.png" />
                  </i>
                  <h3 className="mb-3">
                    <span id="sr_lang3">Cafe/Bars</span>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x text-primary mb-3 sr-icons">
                    <img alt="Restaurants" src="./img/3.png" />
                  </i>
                  <h3 className="mb-3">
                    <span id="sr_lang4">Restaurants</span>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x text-primary mb-3 sr-icons">
                    <img alt="Gas Stations" src="./img/7.png" />
                  </i>
                  <h3 className="mb-3">
                    <span id="sr_lang5">Gas Stations</span>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x text-primary mb-3 sr-icons">
                    <img alt="Bill-Pay Counters" src="./img/2.png" />
                  </i>
                  <h3 className="mb-3">
                    <span id="sr_lang6">Bill-Pay Counters</span>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x text-primary mb-3 sr-icons">
                    <img alt="Grocery" src="./img/1.png" />
                  </i>
                  <h3 className="mb-3">
                    <span id="sr_lang7">Grocery</span>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x text-primary mb-3 sr-icons">
                    <img alt="Delivery Drivers" src="./img/9.png" />
                  </i>
                  <h3 className="mb-3">
                    <span id="sr_lang8">Delivery Drivers</span>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x text-primary mb-3 sr-icons">
                    <img alt="Phone Orders" src="./img/8.png" />
                  </i>
                  <h3 className="mb-3">
                    <span id="sr_lang9">Phone Orders</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about bg-secondary" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img alt="" className="img-fluid" src="./img/ab1.png" />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="about-text">
                    <span>
                      <span id="ab_lang1">
                        Integrates seamlessly with Existing Systems
                      </span>
                    </span>
                  </h2>
                  <p className="about-text">
                    <span>
                      <span id="ab_lang2">
                        PalmPay was built from the ground up to be Future-Proof.
                        Business owners no longer need to stay savvy on the
                        latest technologies. Blockchains and currencies come and
                        go, but PalmPay supports them and offers them to your
                        customers based upon their popularity, automatically.
                      </span>
                    </span>

                    <br />
                    <span>
                      <span id="ab_lang3">
                        Zero cost. Zero setup fee. Zero transaction fee. Zero
                        monthly fee. Your Customers pay the tiny 0.5%
                        transaction fee to pay with their favorite digital
                        currency.
                      </span>
                    </span>

                    <br />
                    <span>
                      <span id="ab_lang4">
                        eReceipts, and advanced Export features enable
                        simplified accounting and Tax reporting. Your Customers
                        also receive a beautiful eReceipt directly to their
                        smartphone after their payment.
                      </span>
                    </span>

                    <br />
                    <span>
                      <span id="ab_lang5">
                        Faster and Safer than Cash. Customer transactions take 3
                        seconds or less. Let’s see cash or card Customers get
                        through that fast!
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="p-5">
                  <img alt="" className="img-fluid" src="./img/ab2.png" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <h2 className="about-text">
                    <span>
                      <span id="ab_lang6">
                        Mobile Payments are quicker than ever. Process your
                        Customer orders instantly
                      </span>
                    </span>
                  </h2>
                  <p className="about-text">
                    <span>
                      <span id="ab_lang7">
                        Whether you are delivering packages requiring payment,
                        helping hundreds of Customers to speed through the
                        checkout line, or just serving up the bill in a
                        high-paced restaurant, PalmPay handles them all
                        instantly.
                      </span>
                    </span>

                    <br />
                    <span>
                      <span id="ab_lang8">
                        No more credit card expenses. No more cash robberies.
                        Maximum Security and Zero Risk with no chance of
                        ID-Theft or Card Fraud. PalmPay uses the Bitshares
                        blockchain to instantly secure any transaction amount
                        and has done so for over 3 years now, recently exceeding
                        3300 transactions per second.
                      </span>
                    </span>

                    <br />
                    <span>
                      <span id="ab_lang9">
                        Hacking a blockchain is impossible since it uses
                        Distributed Ledger Technology, instantly ensuring that
                        each transaction is verified by hundreds of computers
                        around the world.
                      </span>
                    </span>

                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img alt="" className="img-fluid" src="./img/ab3.png" />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="about-text">
                    <span>
                      <span id="ab_lang10">
                        Cryptocurrency volatility is a thing of the past
                      </span>
                    </span>
                  </h2>
                  <p className="about-text">
                    <span>
                      <span id="ab_lang11">
                        PalmPay instantly converts Crypto into your stable,
                        local currency in digital form, such as bitEUR, bitUSD,
                        bitJPY, bitKRW, bitRUB or even bitGold and bitSilver.
                      </span>
                    </span>

                    <br />
                    <span>
                      <span id="ab_lang12">
                        These Smartcoins are closely pegged 1:1 to their
                        underlying asset so that you never have to worry about
                        paying your bills with Crypto.
                      </span>
                    </span>

                    <br />
                    <span>
                      <span id="ab_lang13">
                        For example, the Canadian merchant who just received
                        some volatile Dogecoin, can receive it as price-stable
                        bitCAD. One currency is instantly morphed into another,
                        of the Merchants choice. PalmPay handles all of this in
                        the background, allowing the customer to pay with
                        whatever Crypto they prefer.
                      </span>
                    </span>

                    <br />
                    <span>
                      <span id="ab_lang14">
                        This stability is the foundation of the Blockchain My
                        City (<a href="docs/Blockchain_My_City_BMC.pdf">BMC</a>)
                        Initiative. PalmPay includes the ability to
                        automatically pay every Ambassador and enrolled
                        Government from the 0.5% that is collected from
                        customers.
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="p-5">
                  <img alt="" className="img-fluid" src="./img/ab4.png" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <h2 className="about-text">
                    <span>
                      <span id="ab_lang15">
                        Unlimited, free Technical Support from PalmPay
                        Ambassadors
                      </span>
                    </span>
                  </h2>
                  <p className="about-text">
                    <span>
                      <span id="ab_lang16">
                        Free? Yes, totally free. PalmPay Ambassadors are paid
                        automatically, every 3 seconds, via the Customer
                        transaction fee mentioned above. So, if you ever have
                        questions (in any of the 44 supported languages), just
                        contact your local PalmPay Ambassador directly, or ask
                        for one on Telegram at
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://t.me/Agorise">
                          http://t.me/Agorise
                        </a>
                      </span>
                    </span>
                    <br />
                    <span>
                      <span id="ab_lang17">
                        As long as your business has WiFi, and an Android tablet
                        or smartphone (for the free PalmPay software), that’s
                        literally all you need. No other hardware is needed. If
                        desired, don’t forget to ask your PalmPay Ambassador for
                        free window decals, stickers, flyers and promotional
                        materials.
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img alt="" className="img-fluid" src="./img/ab5.png" />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-5 about-text">
                    <span>
                      <span id="ab_lang18">
                        Access your accounts anytime, from anywhere in the world
                      </span>
                    </span>
                  </h2>
                  <p className="about-text">
                    <span>
                      <span id="ab_lang19">
                        Monitor the transactions at one or more of your
                        Businesses in real-time. Win, Mac, or Linux.
                      </span>
                    </span>

                    <br />
                    <span>
                      <span id="ab_lang20">
                        The Bitshares decentralized exchange (DEX) provides the
                        platform which PalmPay utilizes. Using their DEX, you
                        can freely move money between accounts, get a Loan, go
                        public, pay bills, Trade and even invest in other
                        assets.
                      </span>
                    </span>

                    <br />
                    <span>
                      <span id="ab_lang21">
                        They’re the bank that never closes, never needs a
                        bailout, and can never steal your money. Bitshares is
                        not a company. It’s a distributed network of computers
                        all running the same software providing maximum uptime.
                        So, stop trusting humans with your money and become your
                        own bank!
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials text-center" id="testimonies">
          <div className="container">
            <Row>
              <Col lg="6">
                <Carousel
                  className="testimonialc"
                  activeItem={this.state.activeItem}
                  next={this.next}>
                  <CarouselIndicators>
                    <CarouselIndicator
                      active={activeItem === 1 ? true : false}
                      onClick={() => {
                        this.goToIndex(1);
                      }}
                    />
                    <CarouselIndicator
                      active={activeItem === 2 ? true : false}
                      onClick={() => {
                        this.goToIndex(2);
                      }}
                    />
                    <CarouselIndicator
                      active={activeItem === 3 ? true : false}
                      onClick={() => {
                        this.goToIndex(3);
                      }}
                    />
                    <CarouselIndicator
                      active={activeItem === 4 ? true : false}
                      onClick={() => {
                        this.goToIndex(4);
                      }}
                    />
                    <CarouselIndicator
                      active={activeItem === 5 ? true : false}
                      onClick={() => {
                        this.goToIndex(5);
                      }}
                    />
                    <CarouselIndicator
                      active={activeItem === 6 ? true : false}
                      onClick={() => {
                        this.goToIndex(6);
                      }}
                    />
                  </CarouselIndicators>
                  <CarouselInner>
                    <Row>
                      <CarouselItem itemId="1">
                        <Col mb-lg="0" mx="auto" mb="4">
                          <i className="fa fa-user-circle-o" />
                          <h5>Erik Y. &#9733;&#9733;&#9733;&#9733;&#9733;</h5>
                          <div className="font-weight-light mb-3">
                            "This is awesome! We have been looking for a way to
                            attract new customers and this is it."
                          </div>
                        </Col>
                      </CarouselItem>
                      <CarouselItem itemId="2">
                        <Col mb-lg="0" mx="auto" mb="4">
                          <i className="fa fa-user-circle-o" />
                          <h5>Alexey T. &#9733;&#9733;&#9733;&#9733;&#9733;</h5>
                          <p className="font-weight-light mb-0">
                            “Outstanding!! ”
                          </p>
                        </Col>
                      </CarouselItem>
                      <CarouselItem itemId="3">
                        <Col mb-lg="0" mx="auto" mb="4">
                          <i className="fa fa-user-circle-o" />
                          <h5>Nikos C. &#9733;&#9733;&#9733;&#9733;&#9733;</h5>
                          <p className="font-weight-light mb-0">
                            “Το Palmpay είναι ένα άλλο μονοπάτι για τα κέρδη.
                            Απλα ΔΟΚΙΜΑΣΕ το!”
                          </p>
                        </Col>
                      </CarouselItem>

                      <CarouselItem itemId="4">
                        <Col mb-lg="0" mx="auto" mb="4">
                          <i className="fa fa-user-circle-o" />
                          <h5>Nadya L. &#9733;&#9733;&#9733;&#9733;&#9734;</h5>
                          <p className="font-weight-light mb-0">
                            “My husband suggested this and I am so glad to be
                            earning crypto now!”
                          </p>
                        </Col>
                      </CarouselItem>

                      <CarouselItem itemId="5">
                        <Col mb-lg="0" mx="auto" mb="4">
                          <i className="fa fa-user-circle-o" />
                          <h5>
                            Jennifer M. &#9733;&#9733;&#9733;&#9733;&#9733;
                          </h5>
                          <p className="font-weight-light mb-0">
                            “Please tell me I can close my bank account now.
                            This is amazing, thank you Agorise!”
                          </p>
                        </Col>
                      </CarouselItem>
                      <CarouselItem itemId="6">
                        <Col mb-lg="0" mx="auto" mb="4">
                          <i className="fa fa-user-circle-o" />
                          <h5>Jose M. &#9733;&#9733;&#9733;&#9733;&#9733;</h5>
                          <p className="font-weight-light mb-0">
                            “Nuestros clientes de Coin Shop se han duplicado
                            gracias a BitSilver y Palmpay. A++”
                          </p>
                        </Col>
                      </CarouselItem>
                    </Row>
                  </CarouselInner>
                </Carousel>
              </Col>
              <Col lg="6" className="mx-auto white-text text-center">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    title="Video"
                    src="https://www.youtube.com/embed/X6X_zGIz27w"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </span>
    );
  }
}

export default HomePage;
