import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import LeftContact from './Left-contact';

const ContactContain = () => {

  return (
    <Fragment>
      <Container fluid={true}>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <LeftContact />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default ContactContain;