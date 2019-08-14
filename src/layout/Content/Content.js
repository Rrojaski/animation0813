import React, { Component, Fragment } from "react";
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";
import CardSide from "../../components/Card/CardSide";
import CardHeading from "../../components/Card/CardHeading";
import CardImage from "../../components/Card/CardImage";
import CardDetails from "../../components/Card/CardDetails";
import { Grid, Row, Col } from "react-flexbox-grid";

import Test from "../../images/Test.png";
import NYC from "../../images/NYC.jpg";
import SF from "../../images/SF.jpg";
import DR from "../../images/DR.jpg";

const colorPrimary = "#55c57a";
const colorPrimaryLight = "#7ed56f";
const colorPrimaryDark = "#28b485";

const colorSecondaryLight = "#ffb900";
const colorSecondaryDark = "#ff7730";

const colorTertiaryLight = "#2998ff";
const colorTertiaryDark = "#5643fa";

const colorGreyLigh1 = "#f7f7f7";

const colorGreyDark = "#777";
const colorWhite = "#fff";
const colorBlack = "#000";

//FONT
const defaultFontSize = "1.6rem";

class Content extends Component {
  render() {
    return (
      <Fragment>
        <Section backColor={colorGreyLigh1} padding="25rem 0 50rem 0">
          <Grid>
            <Row center="xs" between="xs">
              <Col xs={4}>
                <Card>
                  <CardSide backImage="red" className="side-front">
                    <CardImage
                      backColor="linear-gradient(to right bottom, rgba(41, 152, 255, 1), rgba(86,67,250,1))"
                      backImage={Test}
                    />
                    <CardHeading backColor="linear-gradient(to right bottom, rgba(41, 152, 255, .85), rgba(86,67,250, .85))">
                      <span>web development</span>
                    </CardHeading>
                  </CardSide>
                  <CardSide
                    backImage="linear-gradient(to right bottom, rgba(41, 152, 255, 1), rgba(86,67,250,1))"
                    className="side-back"
                  >
                    <span>
                      A web design process structured to create polished,
                      dynamic, and user-friedly websites.
                    </span>
                  </CardSide>
                </Card>
              </Col>
              <Col xs={4}>
                <Card>
                  <CardSide backImage="red" className="side-front">
                    <CardImage
                      backColor="linear-gradient(to right bottom, #ffb900, #ff7730)"
                      backImage={NYC}
                    />
                  </CardSide>
                  <CardSide
                    backImage="linear-gradient(to right bottom, #ffb900, #ff7730)"
                    className="side-back"
                  >
                    New York, NY
                  </CardSide>
                </Card>
              </Col>
              <Col xs={4}>
                <Card>
                  <CardSide backImage="red" className="side-front">
                    <CardImage
                      backColor="linear-gradient(to right bottom, #7ed56f, #28b485)"
                      backImage={SF}
                    />
                  </CardSide>
                  <CardSide
                    backImage="linear-gradient(to right bottom, #2998ff, #5643fa)"
                    className="side-back"
                  >
                    San Francisco, Ca
                  </CardSide>
                </Card>
              </Col>
            </Row>
          </Grid>
        </Section>
      </Fragment>
    );
  }
}

export default Content;
