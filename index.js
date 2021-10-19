const xlsx = require("xlsx");
const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const exceljs = require("exceljs");
const { write } = require("fs");
app.use(bodyParser.json());
app.use(cors()); // middle ware : CORS : Cross Origin Resource Sharing
var wBook = xlsx.readFile("users.xlsx");
// GET ALL DATA of the services

var servicesSheet = wBook.Sheets[wBook.SheetNames[0]];
var excelData = xlsx.utils.sheet_to_json(servicesSheet);
app.get("/services", function (req, res) {
  res.send(excelData);
});
// GET ALL DATA of the main categories
var categoriesSheet = wBook.Sheets[wBook.SheetNames[1]];
var excelData_categories = xlsx.utils.sheet_to_json(categoriesSheet);
app.get("/categories", function (req, res) {
  res.send(excelData_categories);
});
// GET ALL DATA of the clients
var clientsSheet = wBook.Sheets[wBook.SheetNames[2]];
var excelData_clients = xlsx.utils.sheet_to_json(clientsSheet);
app.get("/clients", function (req, res) {
  res.send(excelData_clients);
});
app.listen(3030, () => {
  console.log("the server is running");
});
