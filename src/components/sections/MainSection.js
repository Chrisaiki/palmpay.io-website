import React from "react";
import { FormattedMessage } from 'react-intl';
import {
  Mask,
  Row,
  Col,
  Button,
  View,
  Container
} from "mdbreact";

/**
 * The main section of the home page.
 */
function MainSection() {
  return (
    <View className="vmain">
      <Mask className="d-flex justify-content-center align-items-center gradient">
        <Container className="px-md-3 px-sm-0">
          <Row>
            <Col lg="10" className="mx-auto white-text text-center">
              <h1 className="text-uppercase">
                <strong className="important">
                  <span id="header_lang1">
                    <FormattedMessage id="home.main.banner_title" />
                  </span>
                </strong>
              </h1>
              <hr className="hr-light my-4 w-75" />
            </Col>
            <Col lg="8" className="mx-auto white-text text-center">
              <p className="subtext-header mt-2 mb-4 text-faded">
                <span id="header_lang2">
                  <FormattedMessage id="home.main.banner_description" />
                </span>
              </p>
              <Button
                href="#services"
                className="btn-lg btn-primary"
                rounded>
                <span id="header_lang3">
                  <FormattedMessage id="home.main.banner_button" />
                </span>
              </Button>
            </Col>
          </Row>
        </Container>
      </Mask>
    </View>
  );
}

export { MainSection };
