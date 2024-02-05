import { Btn, H5, H6, P } from '../../../../AbstractElements';
import { Cancel, COD, DefaultStyle, Fast, Submit } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Col, Form, Input, Label, Media, Row } from 'reactstrap';

const DefaultStyles = () => {
  return (
    <Fragment>
      <Col sm="12" xl="6 box-col-12">
        <Card>
          <CardHeader className="pb-0">
            <H5>{DefaultStyle}</H5><span>{'This option is show buydefault you don\'t need to add any extra class'}</span>
          </CardHeader>
          <CardBody className="megaoptions-border-space-sm">
            <Form className="mega-inline">
              <Row>
                <Col sm="6">
                  <Card>
                    <Media className="p-20">
                      <div className="radio radio-primary me-3">
                        <Input id="radio14" type="radio" name="radio1" value="option1" />
                        <Label for="radio14"></Label>
                      </div>
                      <Media body>
                        <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{COD}<span className="badge badge-primary pull-right digits">{'50 INR'}</span></H6>
                        <P>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</P>
                      </Media>
                    </Media>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card>
                    <Media className="p-20">
                      <div className="radio radio-secondary me-3">
                        <Input id="radio13" type="radio" name="radio1" value="option1" />
                        <Label for="radio13"></Label>
                      </div>
                      <Media body>
                        <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{Fast}<span className="badge badge-secondary pull-right digits">{'50 INR'}</span></H6>
                        <P>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</P>
                      </Media>
                    </Media>
                  </Card>
                </Col>
              </Row>
            </Form>
          </CardBody>
          <CardFooter className="text-end">
            <Btn attrBtn={{ color: 'primary', className: 'm-r-15', type: 'submit' }}>{Submit}</Btn>
            <Btn attrBtn={{ color: 'light', type: 'submit' }}>{Cancel}</Btn>
          </CardFooter>
        </Card>
      </Col>
    </Fragment>
  );
};
export default DefaultStyles;