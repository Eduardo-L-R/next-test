// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fetch = require('isomorphic-unfetch');

export default async function handler(req, res) {
	const response = await fetch('https://mindicador.cl/api');
	const data = await response.json();
	res.json(data);
}
