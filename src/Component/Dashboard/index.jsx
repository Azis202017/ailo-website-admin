import { H5, P } from '../../AbstractElements';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

const DashboardPageContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <h5>Dashboard </h5>
              </CardHeader>
              <CardBody>
                <P>To modify your profile details through this dashboard page, first, access the sidebar, select the profile settings option, make the necessary edits, and save the changes accordingly.</P>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default DashboardPageContain;