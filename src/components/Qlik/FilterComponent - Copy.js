import cAppPromise from "api/qlik/cApp.js";
import React, { useEffect, useRef, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
  } from "reactstrap";

function FilterComponent (id)  {
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
    
    // console.log('entered useEffect')
    (async () => {
        const cApp = await cAppPromise;
        cApp.then(function(qApp){
    qApp.getObjectProperties(id).then(function(model){
      
        const {
                  layout: { layers}
                } = model
        resObj.header =  (layers.filter((e)=>e.layername==='Text 1')[0].textLayerContentText)
        resObj.kpiValue=  (layers.filter((e)=>e.layername==='Value 1')[0].textLayerContentText*100).toFixed(1)+'%'
        resObj.head2019 =  (layers.filter((e)=>e.layername==='Text 2')[0].textLayerContentText)
        resObj.v2019Val= (layers.filter((e)=>e.layername==='Value 2')[0].textLayerContentText)
        resObj.headTarget =  (layers.filter((e)=>e.layername==='Text 3')[0].textLayerContentText)
        resObj.targetVal=  (layers.filter((e)=>e.layername==='Value 3')[0].textLayerContentText)
        setMyfilter(resObj);   
        console.log(resObj)
    
    })
 
    })
})();

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
                <p className="card-category">{myfilter.header}</p>
                <CardTitle tag="p">150GB</CardTitle>
                <p />
              </div>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <hr />
          <div className="stats">
            <i className="fas fa-sync-alt" /> Update Now
          </div>
        </CardFooter>
      </Card>
      );
  
  }



export default FilterComponent;
