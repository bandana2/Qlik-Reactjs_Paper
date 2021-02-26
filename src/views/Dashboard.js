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
import {Link} from 'react-router-dom'
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
import Filter from "components/Qlik/Filter";
import filterContent from 'components/Qlik/filterContent'
import filterContent1 from 'components/Qlik/filterContent1'
import FilterComponent from 'components/Qlik/FilterComponent'

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
 const [mydata,setMydata] = useState({});
//  filterContent1('aMzZXp');
//  filterContent('aMzZXp')
// useEffect(() => {
//   filterContent('aMzZXp').then((myres)=>console.log(myres)).catch(err=>console.log(err));

// }, []);

// console.log(`mydata: ${JSON.stringify(mydata)}`);

  return (
    
    <Fragment>
      <div className="content">
      {/* <Filter cAppPromise={cAppPromise} id="aMzZXp" options={{ height: 100 }} /> */}
        <Row>
          <Col lg="3" md="6" sm="6">
          <FilterComponent cAppPromise={cAppPromise} id="aMzZXp" classname='nc-icon nc-globe text-warning'>

          </FilterComponent>
          </Col>
          <Col lg="3" md="6" sm="6">
          <FilterComponent cAppPromise={cAppPromise} id="UGsKPy" classname='nc-icon nc-bullet-list-67 text-success' >

          </FilterComponent>
          </Col>
          <Col lg="3" md="6" sm="6">
      
          <FilterComponent cAppPromise={cAppPromise} id="pnqCC" classname='nc-icon nc-single-copy-04 text-warning'>

          </FilterComponent>
          </Col>

          <Col lg="3" md="6" sm="6">
      
          <FilterComponent cAppPromise={cAppPromise} id="mBQHcP"  classname='nc-icon nc-paper text-primary'>

          </FilterComponent>
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
                {/* <a href="#" className="btn btn-primary"> </a>*/}  
                
                 <Link className="btn btn-primary"
                 to="/admin/icons?app=DOMM"
                >GO DOMM</Link>
               
              
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
                <Link className="btn btn-primary"
                 to="/admin/icons?app=UVP"
                >GO UVP</Link>
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
                <Link className="btn btn-primary"
                 to="/admin/icons?app=GDO LT"
                >GO GDO LT</Link>
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
                <Link className="btn btn-primary"
                 to="/admin/icons?app=RDI"
                >GO RDI</Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Dashboard;
