import { qdtCapabilityApp } from 'qdt-components';
const deployOptions = window.location.hostname === 'localhost' ? 'react' : 'qlik';

const config = {
  host: deployOptions === 'react' ? 'localhost' : window.location.hostname,
  secure: deployOptions === 'react' ? false : window.location.protocol === 'https:',
  port: deployOptions === 'react' ? 4848 : window.location.port,
  prefix: '',
  appId: 'eed5154a-5446-4179-a19f-02b0bc0c944d', // DOMM
};

const cAppPromise = qdtCapabilityApp(config);

export default cAppPromise;