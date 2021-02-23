/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useRef, useState, Fragment } from "react";
import {
  qdtCompose,
  QdtPicasso,
  useBarChartSettings,
  usePieChartSettings,
  QdtButton,
  useLineChartSettings
} from "qdt-components";

import cAppPromise from "api/qlik/cApp.js";
import appPromise from "api/qlik/app.js";
import Filter from "components/Qlik/Filter.js";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// import { Route, Switch } from "react-router-dom";
// import { Form } from 'react-bootstrap';
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.js";
import Icons from "./Icons - Copy";

const Dashboard = () => {



  return (
    <Fragment>
      <div className="content">
      <Filter
                          cAppPromise={cAppPromise}
                          id="aMzZXp"
                          options={{ height: 100}}
                          styles ={{height: 100, width:240}}
                        />
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>

                  <Col md="8" xs="7">
                    <div className="numbers">
                      {/* <p className="card-category">Capacity</p> */}
                      <CardTitle tag="p">
                        <Filter
                          cAppPromise={cAppPromise}
                          id="aMzZXp"
                          options={{ height: 100}}
                          styles ={{height: 500, width:500}}
                        />
                      </CardTitle>
                      {/* <p>
                        <Filter cAppPromise={cAppPromise} id="aMzZXp" options={{ height: 100 }} />
                        </p> */}
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Refreshed on 11th Dec 20
                </div>
              </CardFooter>
            </Card>
          </Col>
          
        </Row>
        <br/><hr/><br/>
        <Row>
          <Col lg="3" md="6" sm="6">
            <div className="carda">
              <div className="card-header">Do Metrics Mirror</div>
              <div className="card-body">
                <h5 className="card-title">Data Operations Metrics</h5>
                <p className="card-text">
                 Dynamically search for required metrics and get them in fingertips
                </p>
                <a href="#" className="btn btn-primary">
                
                  {/* <Link to ={'/icons/:DOMM'}/> */}
                  Go DOMM
                </a>
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="carda">
              <div className="card-header">UVP</div>
              <div className="card-body">
                <h5 className="card-title">Unified Vendor Profile</h5>
                <p className="card-text">
                Dynamically search for required metrics and get them in fingertips
                </p>
                <a href="#" className="btn btn-primary">
                  Go UVP
                </a>
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="carda">
              <div className="card-header">GDO LT</div>
              <div className="card-body">
                <h5 className="card-title">GDO LT Dashboard</h5>
                <p className="card-text">
                Dynamically search for required metrics and get them in fingertips
                </p>
                <a href="#" className="btn btn-primary">
                  Go GDOLT
                </a>
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="carda">
              <div className="card-header">RDI</div>
              <div className="card-body">
                <h5 className="card-title">Resource Management</h5>
                <p className="card-text">
                Dynamically search for required metrics and get them in fingertips
                </p>
                <a href="#" className="btn btn-primary">
                  Go RDI
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Dashboard;
