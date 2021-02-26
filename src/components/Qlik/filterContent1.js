import cAppPromise from "api/qlik/cApp.js";

  function filterContent1 (id)  {
   let resObj={}
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
// const mypromise = new Promise((resolve,reject)=> {
  cAppPromise.then(function(qApp){
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
        console.log(resObj);
        
                
    })
  
    // })

})
// return mypromise;

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
      
  
  }



export default filterContent1;
