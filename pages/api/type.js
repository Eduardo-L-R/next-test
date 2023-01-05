const fetch = require("isomorphic-unfetch");

export default async function getType(context) {
  const response = await fetch(`https://mindicador.cl/api/${context}`);
  const data = await response.json();
  return {
    data,
  };
}
