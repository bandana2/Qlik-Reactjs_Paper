import React, { useState,useEffect,useRef } from "react";
import { useParams } from "react-router-dom";
import { QdtViz } from 'qdt-components';

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
import optionsData from "../data";
import { exportDefaultSpecifier } from "@babel/types";
import { ConsoleWriter } from "istanbul-lib-report";

const Icons = props => {
  const {
    location: { search }
  } = props;
 
  const filterRef = useRef(null);
  const filterRef1=useRef(null);
  const [singleSelections, setSingleSelections] = useState();
  const [id, setID] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [lastClicked, setLastClicked] = useState(search.split("=")[1]);
  const [loading, setLoading] = useState(false);
  // const myRef = useRef(null);
 let passApp='';
 let id1='CurrentSelections'
  console.log(`in filter: ${id}`)
  console.log(`in filter: ${cAppPromise}`)
  // const [loading, setLoading] = useState(true);

let options, styles
const handleClick=()=>{
  console.log('lastclicked',lastClicked)
  console.log(objectsMap.apps.[lastClicked].qvobjects[singleSelections[0].query])
  setID(objectsMap.apps.[lastClicked].qvobjects[singleSelections[0].query]);
  console.log(lastClicked,id)
  if (lastClicked==='DOMM'){
    passApp=cAppPromise;
  
  }else if(lastClicked==='UVP'){
    passApp=cAppPromise1;
  
  }else if(lastClicked==='GDO LT'){
  
  }else {
  
  }
}



const filterByCallback = (option, props) => {
    
  var lowercaseQuery = props.text.toLowerCase();
  var words = lowercaseQuery.split(" ");

  var regex = words.map(word => "(?=.*" + word + ")").join("");
  var searchExp = new RegExp(regex, "i");
 
  return searchExp.test(option.query) || searchExp.test(option.lf);
};

const changeDropDown = e => {
  setLastClicked(e);
 
 
};


useEffect(() => {
  (async () => {

    if (lastClicked==='DOMM'){
      passApp=cAppPromise;
    
    }else if(lastClicked==='UVP'){
      passApp=cAppPromise1;
    
    }else if(lastClicked==='GDO LT'){
    
    }else {
    
    }

    console.log(passApp)
    const cApp = await passApp;
   
   
    if (id) {
      QdtViz({
        element: filterRef.current,
        app: cApp,
        options: { id,height:350},
      });
    }

    if (id1) {
      QdtViz({
        element: filterRef1.current,
        app: cApp,
        options: { id:id1,height:30 },
      });
    }

  })();
}, [id]);
// console.log(filterRef)
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
                options={optionsData}
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
               <InputGroupText onClick={() =>handleClick()} >
                  <i className="nc-icon nc-zoom-split" />
                </InputGroupText>
               
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
            <div ref={filterRef1} style={styles} />
              <div ref={filterRef} style={styles} />
         
            </CardBody>
            
          </Card>
        </Col>
      </Row>
    </div>
  </>

    
  );
};

export default Icons;
