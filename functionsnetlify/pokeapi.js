const fetch = require("node-fetch");

const API_ENDPOINT = "https://pokeapi.co/api/v2";
const FIXED_PART = '.netlify/functions/pokeapi/'

exports.handler = async function(event, context, callback) {
  const URL = `${API_ENDPOINT}${event.path.replace(FIXED_PART, '')}`.replace('/api/api', '/api');
  return fetch(URL)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: JSON.stringify(data)
    }))
    .catch(error => {
      console.log(error);
      return { statusCode: 422, body: String(error)};
    });
}