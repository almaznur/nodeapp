const express = require('express');
const mongoose = require('mongoose');
const https = require('https');

require('dotenv').config();
const { MONGO_DB_CONNECT } = process.env;
const { getCatsApiData, getDbAllCatsCount, saveCatsToDb, getDbAllCats }  = require('./service/cats');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/cats', async (req, res) => {
    try {
        getDbAllCats().then((rq) => {
            res.json(rq);
        });
      } catch (err) {
        res.status(400).json(err.message);
      }
});

mongoose.connect(MONGO_DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err, database) => {
        if (err) {
            throw err
        } else {
            db = database;
            console.log('Connected to MongoDB');
            //Start app only after connection is ready
            app.listen(port, () => { 
                console.log(`Server running on port ${port}!`);

                getDbAllCatsCount().then( (res) => {
                    console.log('There are ' + res + ' cats in the DB');

                    getCatsApiData().then( (json) => {
                        //console.log(json.data);

                        saveCatsToDb(json.data).then( (res) => {
                            console.log(res);
                        });
                    });
                });
                
            });
        }
    }
);