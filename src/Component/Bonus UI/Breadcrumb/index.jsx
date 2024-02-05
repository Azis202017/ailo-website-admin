import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { H5, LI, OL } from '../../../AbstractElements';

const BreadcrumbClassContain = () => {
    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            {/* <!-- default breadcrumb start--> */}
            <Col sm="12" md="6">
              <Card>
                <CardHeader className="pb-0">
                  <H5>Default bootstrap breadcrumb</H5><span>use class <code>.breadcrumb to ol</code></span>
                </CardHeader>
                <CardBody>
                  <ol className="breadcrumb p-t-0 p-l-0">
                    <li className="breadcrumb-item active">Home</li>
                  </ol>
                  <ol className="breadcrumb p-l-0">
                    <li className="breadcrumb-item"><a href="#javascript">Home</a></li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                  <ol className="breadcrumb p-l-0">
                    <li className="breadcrumb-item"><a href="#javascript">Home</a></li>
                    <li className="breadcrumb-item"><a href="#javascript">Library</a></li>
                    <li className="breadcrumb-item active">Data</li>
                  </ol>
                  <ol className="breadcrumb m-b-0 p-b-0 p-l-0">
                    <li className="breadcrumb-item"><a href="#javascript"><i className="fa fa-home"></i></a></li>
                    <li className="breadcrumb-item">Library</li>
                    <li className="breadcrumb-item active">Data</li>
                  </ol>
                </CardBody>
              </Card>
            </Col>
            {/* <!-- default breadcrumb ends-->
                    <!-- Nav breadcrumb start--> */}
            <Col sm="12" md="6">
              <Card>
                <CardHeader className="pb-0">
                  <H5>Nav breadcrumb</H5><span>use class <code>.breadcrumb to nav</code> similar to navigation</span>
                </CardHeader>
                <CardBody>
                  <nav className="breadcrumb"><a className="breadcrumb-item" href="#javascript">Home</a><a className="breadcrumb-item" href="#javascript">Library</a><span className="breadcrumb-item active">Bootstrap</span></nav>
                  <nav className="breadcrumb breadcrumb-icon"><a className="breadcrumb-item" href="#javascript">Home</a><a className="breadcrumb-item" href="#javascript">Library</a><span className="breadcrumb-item active">Bootstrap</span></nav>
                  <nav className="breadcrumb breadcrumb-no-divider mb-0"><a className="breadcrumb-item" href="#javascript">Home</a><a className="breadcrumb-item" href="#javascript">Library</a><span className="breadcrumb-item active">Bootstrap</span></nav>
                </CardBody>
              </Card>
            </Col>
            {/* <!-- Nav breadcrumb ends-->
                    <!-- colored navigation start--> */}
            <Col sm="12">
              <Card>
                <CardHeader className="pb-0">
                  <H5>Colored breadcrumb</H5><span>use class <code>.breadcrumb-colored .bg-primary</code></span>
                </CardHeader>
                <CardBody>
                  <ol className="breadcrumb breadcrumb-colored m-b-30 bg-primary">
                    <li className="breadcrumb-item"><a href="#javascript">Home</a></li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored m-b-30 bg-secondary">
                    <li className="breadcrumb-item"><a href="#javascript">Home</a></li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored m-b-30 bg-success">
                    <li className="breadcrumb-item"><a href="#javascript">Home</a></li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored m-b-30 bg-info">
                    <li className="breadcrumb-item"><a href="#javascript">Home</a></li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored m-b-30 bg-warning">
                    <li className="breadcrumb-item"><a href="#javascript">Home</a></li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored m-b-30 bg-danger">
                    <li className="breadcrumb-item"><a href="#javascript">Home</a></li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored m-b-30 bg-light">
                    <li className="breadcrumb-item"><a className="txt-dark" href="#javascript">Home</a></li>
                    <li className="breadcrumb-item txt-dark active">Library</li>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored m-b-0 bg-dark">
                    <li className="breadcrumb-item"><a href="#javascript">Home</a></li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
};
export default BreadcrumbClassContain;