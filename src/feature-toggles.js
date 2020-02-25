// APP_CONFIG is set via the `config.js` script that's in /public
console.log('APP CONFIG: ', window.APP_CONFIG);
const featureToggles = window.APP_CONFIG.featureToggles;

export default featureToggles;
