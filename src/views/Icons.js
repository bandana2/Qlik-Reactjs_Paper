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
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  qdtCompose,
  QdtPicasso,
  useBarChartSettings,
  usePieChartSettings,
  QdtButton,
  useLineChartSettings
} from "qdt-components";

import cAppPromise,{cAppPromise1} from "api/qlik/cApp.js";
import appPromise from "api/qlik/app.js";
import Filter from "components/Qlik/Filter.js";
import objectsMap from 'objectsMap.js'
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
import { exportDefaultSpecifier } from "@babel/types";
import { ConsoleWriter } from "istanbul-lib-report";
var MyComp = () => {
  return <div></div>;
};
const Icons = props => {
  const {
    location: { search }
  } = props;
  // console.log(search.split("=")[1]?search.split("=")[1]:'notselected');
  const [singleSelections, setSingleSelections] = useState();
  // const [multiSelections, setMultiSelections] = useState([]);
  const [currentValue, setCurrentValue] = useState('');
  const [filterBy, setFilterBy] = useState("callback");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [lastClicked, setLastClicked] = useState(search.split("=")[1]);
  const [loading, setLoading] = useState(false);

  const filterByCallback = (option, props) => {
    
    var lowercaseQuery = props.text.toLowerCase();
    var words = lowercaseQuery.split(" ");

    var regex = words.map(word => "(?=.*" + word + ")").join("");
    var searchExp = new RegExp(regex, "i");
   
    return searchExp.test(option.query) || searchExp.test(option.lf);
  };
 let objectRequested=''
  let passApp=''
  const filterByFields = ["capital", "name"];
  
  const handleClick = e => {
   
    console.log(lastClicked)
    console.log(`isNaN:${isNaN(singleSelections)}`)
    if (singleSelections==="" || singleSelections===undefined || isNaN(singleSelections)===false ){
      console.log(`singleSelectionsIF:${singleSelections}`)
    }else {
      console.log(`singleSelectionsELF:${singleSelections}`)
      setCurrentValue(objectsMap.apps.DOMM.qvobjects[singleSelections[0].query])
  
    }
   

if (lastClicked==='DOMM'){
  passApp=cAppPromise;

}else if(lastClicked==='UVP'){
  passApp=cAppPromise1;

}else if(lastClicked==='GDO LT'){

}else {

}
console.log()
console.log(objectsMap.apps.[lastClicked].qvobjects[singleSelections[0].query])
    MyComp = ({options})=> (
   
     
 <Filter cAppPromise={passApp} id={objectsMap.apps.[lastClicked].qvobjects[singleSelections[0].query]} options={options} />
        
        )
  };

  const changeDropDown = e => {
    setLastClicked(e);
   
  };


  return (
    <>
      <div className="content">
        <Row>
          <Col md="2" style={{paddingRight:5,flex:0}}>
            <div>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>{lastClicked}</DropdownToggle>
                <DropdownMenu container="body">
                  <DropdownItem onClick={() => changeDropDown("DOMM")}>
                    DO MM
                  </DropdownItem>
                  <DropdownItem onClick={() => changeDropDown("UVP")}>
                    UVP
                  </DropdownItem>
                  <DropdownItem onClick={() => changeDropDown("GDO LT")}>
                    GDO LT
                  </DropdownItem>
                  <DropdownItem onClick={() => changeDropDown("RDI")}>
                    RDI
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </Col>

          <Col md="10">
            <form>
              <InputGroup>
              
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
                  {(singleSelections==="" || singleSelections===undefined || isNaN(singleSelections)===false)?( <InputGroupText >
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>):( <InputGroupText onClick={handleClick} >
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>)}
                 
                </InputGroupAddon>
              </InputGroup>
            </form>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="card-stats" style={{height:450}}>
              <CardHeader style={{height:35}}>
                <p className="text-info h3">Search Results</p>
              </CardHeader>
              <hr style={{height:1,marginBottom:0}}/>
              <CardBody>
              {/* {currentValue} */}
              {loading?(<div>Loading</div>):(<>
<div>{lastClicked} {(singleSelections==="" || singleSelections===undefined || isNaN(singleSelections)===false)?'':objectsMap.apps.[lastClicked].qvobjects[singleSelections[0].query] }</div>

                <div>
                <Filter cAppPromise={cAppPromise} id="CurrentSelections"  options={{ height: 50 }} />
                <MyComp options={{ height: 300 }}/></div></>
              )}
              
             
              </CardBody>
              
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Icons;
