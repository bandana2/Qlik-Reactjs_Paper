// import cAppPromise from "api/qlik/cApp.js";
import React, { useEffect, useRef, useState } from "react";
import {
    Card,
    Button,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
  } from "reactstrap";
import { height, typography } from "@material-ui/system";

function FilterComponent ({
    id, cAppPromise,classname
  })  {
const [myfilter,setMyfilter] = useState({});
console.log(id);
  
//   const filterRef = useRef(null);
// var cApp =null;
//     (async () => {
//         cApp = await cAppPromise;
//     })()
    //   const cApp =  cAppPromise();
    //  const  model = await cApp.getObjectProperties(id);
    //  const {
    //     layout: { layers}
    //   } = model
// const layers =await model.layout.layers
// console.log(cAppPromise.then(function(qApp){console.log(qApp)}))
let resObj={}
useEffect(() => {
    
    // console.log('entered useEffect', id)
    // (async () => {

    //     const cApp = await cAppPromise;
    //     const model = await cApp.getObjectProperties(id);
    // //     const res = model.resolve()
    //     console.log( model.properties.title);
  cAppPromise.then(function(qApp){
    //   console.log(qApp)
    qApp.getObject(id).then(function(model){
      console.log(model);
        const {
                  layout: { layers}
                } = model
        resObj.header =  (layers.filter((e)=>e.layername==='Text 1')[0].textLayerContentText)
        resObj.kpiValue=  (layers.filter((e)=>e.layername==='Value 1')[0].textLayerContentText*100).toFixed(1)+'%'
        resObj.head2019 =  (layers.filter((e)=>e.layername==='Text 2')[0].textLayerContentText)
        resObj.v2019Val= layers.filter((e)=>e.layername==='Value 2')[0].textLayerContentText==='-' ? '-' : (layers.filter((e)=>e.layername==='Value 2')[0].textLayerContentText*100).toFixed(1)+'%'
        resObj.headTarget =  (layers.filter((e)=>e.layername==='Text 3')[0].textLayerContentText)
        resObj.targetVal=  (layers.filter((e)=>e.layername==='Value 3')[0].textLayerContentText)
        setMyfilter(resObj);   
        console.log(resObj)
    
    }).catch(err=>console.log(err.message))
 
    })
// })();

}, []);


    // cAppPromise.then(function(qApp){qApp.getObjectProperties(id).then(function(model){
    //     const {
    //       layout: { layers}
    //     } = model
    //     resObj.header =  (layers.filter((e)=>e.layername==='Text 1')[0].textLayerContentText)
    //     resObj.kpiValue=  (layers.filter((e)=>e.layername==='Value 1')[0].textLayerContentText*100).toFixed(1)+'%'
    //     resObj.head2019 =  (layers.filter((e)=>e.layername==='Text 2')[0].textLayerContentText)
    //     resObj.v2019Val= (layers.filter((e)=>e.layername==='Value 2')[0].textLayerContentText)
    //     resObj.headTarget =  (layers.filter((e)=>e.layername==='Text 3')[0].textLayerContentText)
    //     resObj.targetVal=  (layers.filter((e)=>e.layername==='Value 3')[0].textLayerContentText)
    //     console.log( resObj)
    //     console.log(layers)
    //     // console.log((layers.filter((e)=>e.layername==='Value 1')[0].textLayerContentText*100).toFixed(1)+'%')
    //   });	
    //   console.log(resObj)
    // console.log(myfilter.header)
    return (
        <Card className="card-stats" >
        <CardBody>
          <Row>
            <Col md="4" xs="5">
              <div className="icon-big text-center icon-warning">
                <i className={classname} />
              </div>
            </Col>
            <Col md="8" xs="7">
              <div className="numbers">
                <p className="card-category">{myfilter.header}</p>
                <CardTitle tag="p">{myfilter.kpiValue}</CardTitle>
                <p />
              </div>
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="card-footer text-center">
          <hr />
          <button className="btn btn-primary btn-sm float-left"
                        id="left" style={{fontSize:8}}> 
                 {myfilter.head2019}{myfilter.v2019Val}
            </button> 
              
           
              
            <button className="btn btn-danger btn-sm float-right"
                    id="right" style={{fontSize:8}}> 
                {myfilter.headTarget}{myfilter.targetVal}
            </button> 
          {/* <div className="stats">
             {myfilter.head2019}{myfilter.v2019Val} <span>{myfilter.headTarget}{myfilter.targetVal}</span>
           
          </div> */}
  
        </CardFooter>
      </Card>
      );
  
  }



export default FilterComponent;
