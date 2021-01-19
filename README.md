## Installation ##
Before installing, download and install Node.js. Node.js v10.12.0 or higher is required.
```bash
$ npm install
```

## Tests ##
```bash
$ npm test
```

## Run Server ##
```bash
$ npm start
```
View the website at: http://localhost:3000

## Description ##
Use an ip table in memory to record the access times of each ip address. The structure of the ip table is an JSON object.
Each key of this object is ip address. The type of value is an array containing all access times of each ip address within one minute.
When a request from client, server will lookup the ip table, then add this request time to the array and remove the access times of 
one minute ago from this array. If the length of this array is less or equal than 60, server will response length of the array. Otherwise,
the server will response 'Error'.

