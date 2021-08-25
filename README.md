# Engineering-Test-Notebook

The notebook can be ran by checking out the file and using the followinbg command in command line (Windows)

> jupyter notebook Traverse_folder.ipynb

# Simple Node app

This is the small Node.js app that 
- checks how many records are there in the database already
- calls into a public API https://catfact.ninja/
- gets the data into JSON format
- saves that data to MongoDb
- provides an endpoint /cats to selects all available records in the db (usage http://localhost:3000/cats)

---
## Requirements

For development, you will only need Node.js and a node global package, installed in your environement.

### Node
- #### Node installation on Windows

Just go on [official Node.js website](https://nodejs.org/) and download the installer.

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.5.0

    $ npm --version
    7.19.1

If you need to update `npm`, you can make it using `npm`! After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

## Install

    $ git clone https://github.com/almaznur/nodeapp.git
    $ cd nodeapp
    $ npm i

## Configure app

Create a file .env in the working directory 
You will need:

- A setting MONGO_DB_CONNECT which points to the MongoDb;

## Running the project

    $ npm start

the server will start, check the number of existing records in db, call for the cats API and save the result to database
the endpoint http://localhost:3000/cats can be called to see the actual data in db