import React from "react";
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  Row,
  Col
} from "mdbreact";

const testimonies = [
  {
    name: 'Erik Y.',
    description: 'This is awesome! We have been looking for a way to attract new customers and this is it.'
  },
  {
    name: 'Alexey T.',
    description: 'Outstanding!!'
  },
  {
    name: 'Nikos C.',
    description: 'Το Palmpay είναι ένα άλλο μονοπάτι για τα κέρδη. Απλα ΔΟΚΙΜΑΣΕ το!'
  },
  {
    name: 'Nadya L.',
    description: 'My husband suggested this and I am so glad to be earning crypto now!'
  },
  {
    name: 'Jennifer M.',
    description: 'Please tell me I can close my bank account now. This is amazing, thank you Agorise!'
  },
  {
    name: 'Jose M.',
    description: 'Nuestros clientes de Coin Shop se han duplicado gracias a BitSilver y Palmpay. A++'
  }
];

/**
 * The testimonies section of the home page.
 */
class TestimoniesSection extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeItem: 1,
      maxLength: testimonies.length
    };
  }

  render() {
    const { activeItem, maxLength } = this.state;

    return (
      <span>
      <section className="testimonials text-center" id="testimonies">
        <div className="container">
          <Row>
            <Col lg="6">
              <Carousel
                className="testimonialc"
                activeItem={activeItem}
                length={maxLength}
                slide={true}
                showControls={true}
                showIndicators={true}
              >
                <CarouselInner>
                  <Row>
                    {testimonies.map( (testimony, index) => (
                      <CarouselItem itemId={index+1} key={index}>
                        <Col mb-lg="0" mx="auto" mb="4">
                          <i className="fa fa-user-circle-o" />
                          <h5>{testimony.name} &#9733;&#9733;&#9733;&#9733;&#9733;</h5>
                          <div className="font-weight-light mb-3">
                            &#34;{testimony.description}&#34;
                          </div>
                        </Col>
                      </CarouselItem>
                    ))}
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
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
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

export { TestimoniesSection };
