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
  console.log(search.split("=")[1]);
  const [singleSelections, setSingleSelections] = useState();
  // const [multiSelections, setMultiSelections] = useState([]);
  const [currentValue, setCurrentValue] = useState('');
  const [filterBy, setFilterBy] = useState("callback");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [lastClicked, setLastClicked] = useState([search.split("=")[1]]);

  const filterByCallback = (option, props) => {
    // option.capital.toLowerCase().indexOf(props.text.toLowerCase()) !== -1 ||
    // option.name.toLowerCase().indexOf(props.text.toLowerCase()) !== -1

    var lowercaseQuery = props.text.toLowerCase();
    var words = lowercaseQuery.split(" ");

    var regex = words.map(word => "(?=.*" + word + ")").join("");
    var searchExp = new RegExp(regex, "i");
    //  console.log(props.text.toLowerCase().split(' ').map((item)=>option.capital.toLowerCase().indexOf(item))!==-1)
    return searchExp.test(option.query) || searchExp.test(option.lf);
  };
 let objectRequested=''
  let passApp=''
  const filterByFields = ["capital", "name"];
  console.log(singleSelections? 'true':'false')
  const handleClick = e => {

    console.log(lastClicked[0])
    setCurrentValue(objectsMap.apps.DOMM.qvobjects[singleSelections[0].query])
    // console.log(currentValue)
    // console.log(singleSelections[0].query);
    // console.log(objectsMap.apps.DOMM.qvobjects[singleSelections[0].query])
    // console.log((a==`objectsMap.apps.${lastClicked}.qvobjects[${singleSelections[0].query}]`)=>(`objectsMap.apps.${lastClicked}.qvobjects[${singleSelections[0].query}]`)())
// if (lastClicked[0]==='DOMM'){
//   // let abc=objectsMap.apps.DOMM.qvobjects[singleSelections[0].query]
//   console.log('entered the domm')
//   // console.log(objectsMap.apps.DOMM.qvobjects[singleSelections[0].query])
//   // setCurrentValue(objectsMap.apps.DOMM.qvobjects[singleSelections[0].query])
//   // console.log(async ()=>{console.log(await currentValue)})
//   // setCurrentValue(async (state) => {
//   //   console.log(state); // "React is awesome!"
//   //    objectRequested= await state;
//   //  return state;
//   // });
//   console.log( objectRequested)
//   objectRequested=objectsMap.apps.DOMM.qvobjects[singleSelections[0].query]
//   console.log(objectRequested)
//   passApp=cAppPromise;
// }else if(lastClicked[0]==='UVP'){
//   objectRequested=objectsMap.apps.UVP.qvobjects[singleSelections[0].query]
//   passApp=cAppPromise1;
// }else if(lastClicked[0]==='GDO LT'){

// }else {

// }


// console.log(objectToRetrive)
    MyComp = ({options})=> (
      // <Filter cAppPromise={cAppPromise} id="DGFsh"  />
        <Filter cAppPromise={cAppPromise} id={objectsMap.apps.DOMM.qvobjects[singleSelections[0].query]} options={options} />
        )
  };

  const changeDropDown = e => {
    setLastClicked(e);
   
  };

  // useEffect(() => {
      
  //   // setCurrentValue(singleSelections)

  //   }, [objectRequested]);

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
            <Card className="card-stats" style={{height:450}}>
              <CardHeader style={{height:35}}>
                <p className="text-info h3">Search Results</p>
              </CardHeader>
              <hr style={{height:1,marginBottom:0}}/>
              <CardBody>
              {/* {currentValue} */}
              <Filter cAppPromise={cAppPromise} id="CurrentSelections"  options={{ height: 50 }} />
              <MyComp options={{ height: 300 }}/>
              {/* <Filter cAppPromise={cAppPromise} id={currentValue}  /> */}
            
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
