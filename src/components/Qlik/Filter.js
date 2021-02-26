import React, { useRef, useEffect } from 'react';
import { QdtViz } from 'qdt-components';

const Filter = ({
  id, cAppPromise, options, styles,
}) => {
  const filterRef = useRef(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const cApp = await cAppPromise;
     console.log(`in filter: ${id}`)
     
      if (id) {
        QdtViz({
          element: filterRef.current,
          app: cApp,
          options: { id, ...options },
        });
      }
    })();
  }, []);
// console.log(filterRef)
  return (
    <div ref={filterRef} style={styles} />
  );
};

export default Filter;
