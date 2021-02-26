import { qdtEnigma } from 'qdt-components';
const deployOptions = window.location.hostname === 'localhost' ? 'react' : 'qlik';

const config = {
  host: deployOptions === 'react' ? 'localhost' : window.location.hostname,
  secure: deployOptions === 'react' ? false : window.location.protocol === 'https:',
  port: deployOptions === 'react' ? 4848 : window.location.port,
  prefix: '',
  appId: 'c099dbc0-22cf-4b48-a72e-231c211a5a7f', // DOMM
};

const appPromise = qdtEnigma(config);

appPromise.then((app) => { app.clearAll(); });

export default appPromise;