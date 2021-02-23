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
import React, { useState } from "react";
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
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Button,
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import options from "../data";
var MyComp = () => {
  return <div></div>;
};
const Icons = (props) => {
  console.log(props.params)
  const [singleSelections, setSingleSelections] = useState([]);
  // const [multiSelections, setMultiSelections] = useState([]);
  const [currentValue, setCurrentValue] = useState();
  const [filterBy, setFilterBy] = useState("callback");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [lastClicked, setLastClicked] = useState(null);

  const filterByCallback = (option, props) => {
    // option.capital.toLowerCase().indexOf(props.text.toLowerCase()) !== -1 ||
    // option.name.toLowerCase().indexOf(props.text.toLowerCase()) !== -1

    var lowercaseQuery = props.text.toLowerCase();
    var words = lowercaseQuery.split(" ");

    var regex = words.map(word => "(?=.*" + word + ")").join("");
    var searchExp = new RegExp(regex, "i");
    //  console.log(props.text.toLowerCase().split(' ').map((item)=>option.capital.toLowerCase().indexOf(item))!==-1)
    return searchExp.test(option.query);
  };

  const filterByFields = ["capital", "name"];

  const handleClick = e => {
    console.log(singleSelections);
    MyComp = (
      <Filter cAppPromise={cAppPromise} id="zswLzs" options={{ height: 100 }} />
    );
  };

  const changeDropDown = e => {
    setLastClicked(e);
  
  };

  return (
    <>
      <div className="content">
      <Row>
      <Col md="2">
      <div >
      <Dropdown isOpen={dropdownOpen} toggle={toggle} >
        <DropdownToggle caret>
          {lastClicked}
        </DropdownToggle>
        <DropdownMenu container="body">
          <DropdownItem onClick={() => changeDropDown('DO MM')}>DO MM</DropdownItem>
          <DropdownItem onClick={() => changeDropDown('UVP')}>UVP</DropdownItem>
          <DropdownItem onClick={() => changeDropDown('GDO LT')}>GDO LT</DropdownItem>
          <DropdownItem onClick={() => changeDropDown('RDI')}>RDI</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
        </Col>  
        
      <Col md="10">
        <form>
          <InputGroup>
            {/* <Input placeholder="Search..." onChange={updateValues}/> */}

            <Typeahead
              filterBy={filterByCallback}
              id="custom-filtering-example"
              labelKey="query"
              options={options}
              placeholder="Filter by state name or capital..."
              onChange={setSingleSelections}
              selected={singleSelections}
              renderMenuItemChildren={option => (
                <div>
                  {option.query}
                  <div>
                    <small>Line Function: {option.lf}</small>
                  </div>
                </div>
              )}
            />

            <InputGroupAddon addonType="append">
              <InputGroupText onClick={handleClick}>
                <i className="nc-icon nc-zoom-split" />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </form>
        </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="demo-icons">
              <CardHeader>
                <p className="text-info h3">Search Results</p>
              </CardHeader>
              <CardBody className="all-icons" style={{ height: "350px" }}>
                <Filter cAppPromise={cAppPromise} id="zswLzs" />
              </CardBody>
              {/* <CardFooter>Footer</CardFooter> */}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Icons;
