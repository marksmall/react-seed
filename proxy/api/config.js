const appConfig = {
  trackingId: 'UA-143753043-1',
  mapbox_token: 'pk.eyJ1IjoidGhlcm1jZXJ0IiwiYSI6ImNqbmN5N2F6NzBnODYza3A2anVqYWExOW8ifQ.10y0sH8cDQp9AfZNg1-M3Q'
};

const getAppConfig = (req, res) => {
  console.log('Returning App Config');
  res.status(200);
  res.json(appConfig);
};

module.exports = {
  getAppConfig
};
