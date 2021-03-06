import React, { useRef, useEffect } from 'react';
import { QdtViz } from 'qdt-components';

const Filter = ({
  id, cAppPromise, options, styles,
}) => {
  const filterRef = useRef(null);

  useEffect(() => {
    (async () => {
      const cApp = await cAppPromise;

      cApp.getObjectProperties(id).then(function(model){
        console.log(model.properties.layers)
      });	
      if (id) {
        QdtViz({
          element: filterRef.current,
          app: cApp,
          options: { id, ...options },
        });
      }
    })();
  }, []);

  return (
    <div ref={filterRef} style={styles} />
  );
};

export default Filter;
