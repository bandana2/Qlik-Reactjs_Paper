import React, { useState,useEffect,useRef } from "react";
import { useParams } from "react-router-dom";

import {
  QdtViz,
  QdtSelect,
  qdtCompose,
  QdtPicasso,
  useBarChartSettings,
  usePieChartSettings,
  QdtButton,
  useLineChartSettings
} from "qdt-components";

import cAppPromise,{cAppPromise1} from "api/qlik/cApp.js";
import appPromise,{appPromise1} from "api/qlik/app.js";
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
  DropdownItem,
  Modal,
  ModalHeader, 
  ModalBody, 
  ModalFooter
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
  const filter1Element =useRef(null);
  const clearButton = useRef(null);
  // const clearButton1 = useRef(null);
  const [singleSelections, setSingleSelections] = useState();
  const [userTypedValue,setUserTypedValue] = useState();
  const [id, setID] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [lastClicked, setLastClicked] = useState(search.split("=")[1]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const modelToggle = () => setModal(!modal);
  let myChange = ''
  const {
    buttonLabel,
    className
  } = props;

 
 let passApp='';
 let passEapp=''
 let id1='CurrentSelections'
  console.log(`in filter: ${id}`)
  console.log(`in filter: ${cAppPromise}`)
  // const [loading, setLoading] = useState(true);

let options, styles
const handleClick=()=>{

  // setLoading(true);
  console.log('myChange',objectsMap.apps.[lastClicked].qvobjects[userTypedValue]);

  setID(objectsMap.apps.[lastClicked].qvobjects[userTypedValue]);
  console.log(lastClicked,id)
  if (lastClicked==='DOMM'){
    passApp=cAppPromise;
    passEapp=appPromise;
  }else if(lastClicked==='UVP'){
    passApp=cAppPromise1;
    passEapp=appPromise1;
  }else if(lastClicked==='GDO LT'){
  
  }else {
  
  }
}

const handleClickValidation=()=>{
setModal(true)
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
  setID(null);
 
 
};
const updateStateValue = (e,a) =>{
  a==='change'?setSingleSelections(e):setSingleSelections([{'query':e,'lf': ""}])

}

const exportVisualData=()=>{
  
  passApp.then((qapp)=>{
    
    qapp.visualization.get(id).then((visual) => {
      visual.exportData({ format: 'OOXML', state: 'A' })
      
      .then((result)=>{
        window.open(`${visual.qapp.model.rpcOptions.isSecure?'https://':'http://'}${visual.qapp.model.rpcOptions.host}${visual.qapp.model.rpcOptions.port?":":''}${visual.qapp.model.rpcOptions.port}/Exports${result.split('/Exports')[1]}`);
      })
      .catch((err)=>{
        console.log(err);
      });
    });
  })
}


useEffect(() => {
  (async () => {

    if (lastClicked==='DOMM'){
      passApp=cAppPromise;
      passEapp=appPromise;
    }else if(lastClicked==='UVP'){
      passApp=cAppPromise1;
      passEapp=appPromise1;
    }else if(lastClicked==='GDO LT'){
    
    }else {
    
    }

    console.log('id',id)
    const cApp = await passApp;
   const eApp= await passEapp;
   
    if (id) {
      QdtViz({
        element: filterRef.current,
        app: cApp,
        options: { id,height:350 },
      });

   

    }

    if (id1) {
      QdtViz({
        element: filterRef1.current,
        app: cApp,
        options: { id:id1,height:30 },
      });
      
    
    }

    
   if (id){ qdtCompose({
      app:eApp, 
      element: clearButton.current, 
      component: QdtButton,
      options: {
        type: 'clearSelections',
        label: 'Clear Selections',
        
      }
    });
  }

  })();
  // setLoading(false);
}, [id]);

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
                onChange={(e)=>e.length===0?setUserTypedValue(null):setUserTypedValue(e[0].query)}
                onInputChange={(e)=>setUserTypedValue(e)}
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
                {(userTypedValue ==="" || userTypedValue ===undefined || userTypedValue===null)
                ?(  <InputGroupText onClick={() =>handleClickValidation()} >
                <i className="nc-icon nc-zoom-split" />
                <Modal isOpen={modal} modelToggle={toggle} className={className}>
                <ModalHeader modelToggle={toggle}>Search Validation</ModalHeader>
                <ModalBody>
                 Please enter the text in search box and click on the search button. 
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={modelToggle}>Cancel</Button>
                </ModalFooter>
              </Modal> 
              </InputGroupText>
             )
              
              
              :(  <InputGroupText onClick={() =>handleClick()} >
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
              <p className="text-info h3 float-left">Search Results  </p>
              <p className="text-info h6 float-right"  ref={clearButton} ></p>
              <p className="text-info h6 float-right"><Button onClick={exportVisualData} style={{marginRight:5,backgroundColor:'#00485b',color:'#fff'}}> Export</Button></p>
             
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
