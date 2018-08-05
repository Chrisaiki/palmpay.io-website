import React from "react";
import { Button, Collapse } from "mdbreact";

class MarketingPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);
    this.onClick4 = this.onClick4.bind(this);
    this.state = {
      collapse: false,
      accordion: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  onClick1() {
    let state = "";

    if (this.state.accordion !== 1) {
      state = 1;
    } else {
      state = false;
    }

    this.setState({
      accordion: state
    });
  }

  onClick2() {
    let state = "";

    if (this.state.accordion !== 2) {
      state = 2;
    } else {
      state = false;
    }

    this.setState({
      accordion: state
    });
  }

  onClick3() {
    let state = "";

    if (this.state.accordion !== 3) {
      state = 3;
    } else {
      state = false;
    }

    this.setState({
      accordion: state
    });
  }

  onClick4() {
    let state = "";

    if (this.state.accordion !== 4) {
      state = 4;
    } else {
      state = false;
    }

    this.setState({
      accordion: state
    });
  }

  render() {
    return (
      <div id="maincontent">
        <section data-spy="scroll" data-target="#mainNav" id="services">
          <div className="containerfix">
            <div className="row">
              <div className="col-md-10 mx-md-auto">
                <div>
                  <div>
                    <Button
                      block
                      color="primary"
                      onClick={this.onClick1}
                      style={{ marginBottom: "1rem" }}>
                      Presentations
                    </Button>
                  </div>
                  <Collapse isOpen={this.state.accordion === 1}>
                    <div class="list-group">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/presentation/d/1oYQxlKIzNHb-F07PJ04xsK0jIJcduIzc-4HMpbqAw0o/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Slides (ES) - Google Slides (for Meetups and
                            Workshops etc) in Spanish
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/presentation/d/1oYQxlKIzNHb-F07PJ04xsK0jIJcduIzc-4HMpbqAw0o/edit?usp=sharing
                        </p>
                      </a>

                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/presentation/d/1HgYeEQ0NUeHesnX1Xy4OUi9Nng4P9O4-yH_7fWnwF6Q/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Slides (EN) - Here is a nice powerpoint (Google
                            Slides actually) that you can copy and edit to your
                            liking for PalmPay Meetups, Workshops, etc.
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/presentation/d/1HgYeEQ0NUeHesnX1Xy4OUi9Nng4P9O4-yH_7fWnwF6Q/edit?usp=sharing
                        </p>
                      </a>

                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/spreadsheets/d/1um5BJiI4infLVBFzsNFG4aV_hGuVAluWztI0UIT0oL4/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            FAQ (EN, ES, GR, and RU) - These are the most common
                            questions that people ask about PalmPay
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/spreadsheets/d/1um5BJiI4infLVBFzsNFG4aV_hGuVAluWztI0UIT0oL4/edit?usp=sharing
                        </p>
                      </a>
                    </div>
                  </Collapse>

                  <div>
                    <Button
                      block
                      color="primary"
                      onClick={this.onClick2}
                      style={{ marginBottom: "1rem" }}>
                      Flyers
                    </Button>
                  </div>
                  <Collapse isOpen={this.state.accordion === 2}>
                    <div class="list-group">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/document/d/1JwFRD3mszf9RoTlthp9lkfQdbGmdrWwGDcBP3yXLrpM/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Affordable Flyers (EN) - Single-page flyers in
                            English
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/document/d/1JwFRD3mszf9RoTlthp9lkfQdbGmdrWwGDcBP3yXLrpM/edit?usp=sharing
                        </p>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/document/d/11FMi5_iMWOUDHKnoWWEn4jyzwleWkdLvvPr3KrhmJHA/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Affordable Flyers (ES) - Single-page flyers in
                            Spanish
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/document/d/11FMi5_iMWOUDHKnoWWEn4jyzwleWkdLvvPr3KrhmJHA/edit?usp=sharing
                        </p>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/document/d/1Qk5sX-KmwrCrDWsDxcLpe1xXFVWhOUP4VykURXBHRCk/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Affordable Flyers (KO) - Single-page flyers in
                            Korean
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/document/d/1Qk5sX-KmwrCrDWsDxcLpe1xXFVWhOUP4VykURXBHRCk/edit?usp=sharing
                        </p>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/document/d/13ObHTeIOY6KrAH4nOhNGiCITOArSxTATCJ0oCy0E-kc/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Affordable Flyers (NL) - Single-page flyers in Dutch
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/document/d/13ObHTeIOY6KrAH4nOhNGiCITOArSxTATCJ0oCy0E-kc/edit?usp=sharing
                        </p>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/document/d/1YHZJTXZSI_OWw633gVVHc3TBQphHxAKP2v9YKRnhHy8/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Affordable Flyers (RO) - Single-page flyers in
                            Romanian
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/document/d/1YHZJTXZSI_OWw633gVVHc3TBQphHxAKP2v9YKRnhHy8/edit?usp=sharing
                        </p>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/document/d/1hdXKoZvYeFJ8FDRYIT7kdNxvB84G-yVe6_1wZh2uuFo/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Affordable Flyers (VI) - Single-page flyers in
                            Vietnamese
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/document/d/1hdXKoZvYeFJ8FDRYIT7kdNxvB84G-yVe6_1wZh2uuFo/edit?usp=sharing
                        </p>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/drawings/d/10mf7scN4ldCoXy8alz7UCkzt7N3tTQwJWS81zXfNMxs/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Tri-Fold Flyers (EN, back) - These English flyers
                            explain Bitshares and PalmPay, great for events and
                            meetups, etc.
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/drawings/d/10mf7scN4ldCoXy8alz7UCkzt7N3tTQwJWS81zXfNMxs/edit?usp=sharing
                        </p>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/drawings/d/1T3mDxaa7U0IOaD251yNwNiqI_9Fier7QgtnBm3hCzyI/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Tri-Fold Flyers (EN, front) - These English flyers
                            explain Bitshares and PalmPay, great for events and
                            meetups, etc.
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/drawings/d/1T3mDxaa7U0IOaD251yNwNiqI_9Fier7QgtnBm3hCzyI/edit?usp=sharing
                        </p>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/drawings/d/1vRLtzCuEOQ04T4iofOxU3pAtZ3GSmQwJXRISd-6NMxs/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Tri-Fold Flyers (GR, back) - These Greek flyers
                            explain Bitshares and PalmPay, great for events and
                            meetups, etc.
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/drawings/d/1vRLtzCuEOQ04T4iofOxU3pAtZ3GSmQwJXRISd-6NMxs/edit?usp=sharing
                        </p>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/drawings/d/1_aRidERnsw7080Hqe9CjvtvmuZv3MQWTX30G9exMEa0/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Tri-Fold Flyers (GR, front) - These Greek flyers
                            explain Bitshares and PalmPay, great for events and
                            meetups, etc.
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/drawings/d/1_aRidERnsw7080Hqe9CjvtvmuZv3MQWTX30G9exMEa0/edit?usp=sharing
                        </p>
                      </a>
                    </div>
                  </Collapse>

                  <div>
                    <Button
                      block
                      color="primary"
                      onClick={this.onClick3}
                      style={{ marginBottom: "1rem" }}>
                      Business Cards
                    </Button>
                  </div>
                  <Collapse isOpen={this.state.accordion === 3}>
                    <div class="list-group">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/drawings/d/1zRdI_8tPXOoHi7SuM4RCkUezGQVzfPyMp3hUweYEL1s/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Front - Please do not edit the front of the business
                            cards
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/drawings/d/1zRdI_8tPXOoHi7SuM4RCkUezGQVzfPyMp3hUweYEL1s/edit?usp=sharing
                        </p>
                      </a>

                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/drawings/d/1dwr31i0Wgh2j9737JyH4OTjix4w31J3mdBA9iCNZ6zs/edit?usp=sharing"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Back - Feel free to edit the back of these cards all
                            you like
                          </h5>
                        </div>
                        <p class="mb-1">
                          https://docs.google.com/drawings/d/1dwr31i0Wgh2j9737JyH4OTjix4w31J3mdBA9iCNZ6zs/edit?usp=sharing
                        </p>
                      </a>
                    </div>
                  </Collapse>
                  <div>
                    <Button
                      block
                      color="primary"
                      onClick={this.onClick4}
                      style={{ marginBottom: "1rem" }}>
                      Promotional Displays
                    </Button>
                  </div>
                  <Collapse isOpen={this.state.accordion === 4}>
                    <div class="list-group">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://keybase.io/team/Agorise"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            Logos, Advertising images, Stickers and Merchandise,
                            etc. (in the /PalmPay folder)
                          </h5>
                        </div>
                        <p class="mb-1">https://keybase.io/team/Agorise</p>
                      </a>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MarketingPage;
