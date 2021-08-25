const express = require('express');
const https = require('https');

const Cat = require('../model/Cat');

const publicUrl = 'https://catfact.ninja/breeds?limit=1';

// Middlewares
const getCatsApiData = async () => {
  let json = '';
  let p = new Promise((resolve, reject) => {
    const request = https.get(publicUrl, (resp) => {
      let data = '';

      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        try {
          json = resolve(JSON.parse(data));
        } catch (error) {
          console.error(error.message);
        };
      });

    });
    request.on('error', (err) => {
      reject(err);
    });

  });

  return await p;
}

const getDbAllCats = async () => {
  try {
    const cats = await Cat.find();
    return cats;
  } catch (err) {
    throw new Error('No cats found ' + err);
  }
};

const getDbAllCatsCount = async () => {
  try {
    const cats = await Cat.find();
    return cats.length;
  } catch (err) {
    throw new Error('No cats found ' + err);
  }
};

const saveCatsToDb = async (catsJson) => {
  try {
    const response = await Cat.insertMany(catsJson);
    return response;
  } catch (err) {
    throw new Error('Could not save cats ' + err);
  }
};

module.exports = {
  getCatsApiData,
  getDbAllCatsCount,
  saveCatsToDb,
  getDbAllCats
};