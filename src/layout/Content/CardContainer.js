import React, { Component, Fragment } from "react";
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";
import CardSide from "../../components/Card/CardSide";
import CardHeading from "../../components/Card/CardHeading";
import CardImage from "../../components/Card/CardImage";
import CardDetails from "../../components/Card/CardDetails";
import { Grid, Row, Col } from "react-flexbox-grid";

import Code from "../../images/Code.png";
import ITSupport from "../../images/ITSupport.jpg";
import UXResearch from "../../images/UXResearch.jpg";

// Color selection

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
        <Section backColor={colorGreyLigh1} padding="20px 0">
          <Grid>
            <Row center="xs">
              <Col xl={11} xs={12}>
                <Row center="xs" between="xs">
                  <Col md={4} xs={12}>
                    <Card>
                      <CardSide className="side-front card-1">
                        <CardImage
                          backColor="linear-gradient(to right bottom, rgba(41, 152, 255, 1), rgba(86,67,250,1))"
                          backImage={Code}
                        />
                        <CardHeading backColor="linear-gradient(to right bottom, rgba(41, 152, 255, .85), rgba(86,67,250, .85))">
                          <span>web development</span>
                        </CardHeading>
                        <CardDetails>
                          <ul>
                            <li>HTML5 CSS3 JS</li>
                            <li>REACT NODE GIT</li>
                          </ul>
                        </CardDetails>
                      </CardSide>
                      <CardSide
                        backImage="linear-gradient(to right bottom, rgba(41, 152, 255, 1), rgba(86,67,250,1))"
                        className="side-back card-1"
                      >
                        <span>
                          A web design process structured to create polished,
                          dynamic, and user-friedly websites.
                        </span>
                      </CardSide>
                    </Card>
                  </Col>
                  <Col md={4} xs={12}>
                    <Card>
                      <CardSide className="side-front card-2">
                        <CardImage
                          backColor="linear-gradient(to right bottom, #ffb900, #ff7730)"
                          backImage={ITSupport}
                        />
                        <CardHeading backColor="linear-gradient(to right bottom, rgba(255,185,0,.85), rgba(255,119,48,.85))">
                          <span>it support</span>
                        </CardHeading>
                        <CardDetails>
                          <ul>
                            <li>O365 AD OS</li>
                            <li>Terminal BASH</li>
                          </ul>
                        </CardDetails>
                      </CardSide>
                      <CardSide
                        backImage="linear-gradient(to right bottom, rgba(255,185,0,1), rgba(255,119,48,1))"
                        className="side-back card-2"
                      >
                        <span>
                          Solutions to help businesses migrate to the cloud,
                          improve operations on-premise through managed IT
                          services.
                        </span>
                      </CardSide>
                    </Card>
                  </Col>
                  <Col md={4} xs={12}>
                    <Card>
                      <CardSide className="side-front card-3">
                        <CardImage
                          backColor="linear-gradient(to right bottom, #7ed56f, #28b485)"
                          backImage={UXResearch}
                        />
                        <CardHeading backColor="linear-gradient(to right bottom, rgba(126,213,111,.85), rgba(40,180,133,.85))">
                          <span>ux research</span>
                        </CardHeading>
                        <CardDetails>
                          <ul>
                            <li>Accessibility SEO </li>
                            <li>User-Centered Design</li>
                          </ul>
                        </CardDetails>
                      </CardSide>
                      <CardSide
                        backImage="linear-gradient(to right bottom, rgba(126,213,111,1), rgba(40,180,133,1))"
                        className="side-back card-3"
                      >
                        <span>
                          Test-driven research to determine the necessary
                          features to accomplish your objectives.
                        </span>
                      </CardSide>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Section>
      </Fragment>
    );
  }
}

export default Content;
