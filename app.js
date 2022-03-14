const express = require("express");
const requestLogger = require("./utils/requestLogger");
const db = require("./db");
const bodyParser = require("body-parser");
const { purchaseQuery } = require("./data/purchase");
const app = express();
app.use(bodyParser.json());
app.use(requestLogger);

app.post("/stores", async (req, res, next) => {
  try {
    const data = req.body;
    await db(
      `create table if not exists stores(name varchar(50),address varchar(100),phone varchar(50),emailid varchar(50)); insert into stores values ('${data.name}','${data.address}','${data.phone}','${data.emailid}');`
    );

    res.send(data);
  } catch (err) {
    console.error(err);
  }
});

app.get("/stores", async (req, res, next) => {


  try {
    const data = await db("SELECT * FROM stores");

    res.send(data);
  } catch (err) {
    console.error(err);
  }
});

app.get("/stores/storename", async (req, res, next) => {
  try {
    const data1 = req.body;
    const data = await db(
      `SELECT * FROM stores where stores.name='${data1.name}'`
    );

    res.send(data);
  } catch (err) {
    console.error(err);
  }
});

app.post("/purchase", async (req, res, next) => {
  try {
    var finaltotal = 0;

    const { name, phone, dt, items } = req.body;
    for (let i = 0; i < items.length; i++) {
      const data = items[i];
      const query = purchaseQuery(name, phone, dt, data);
      await db(query);
      finaltotal =
        finaltotal +
        (data.price -
          data.price * (data.discount / 100) -
          data.price * (data.gst / 100)) *
          data.quantity;
    }

    const d1 = req.body;
    console.log(finaltotal);
    await db(
      `create table if not exists transaction(customer_name varchar(50), phone varchar(50) ,dt varchar(50), total int,status varchar(10));insert into transaction values('${d1.name}','${d1.phone}','${d1.dt}',${finaltotal},'${d1.status}' )`
    );
    res.send("purchase made");
  } catch (err) {
    console.error(err);
  }
});


app.get("/purchase", async (req, res, next) => {
  try {
    const data = await db("SELECT * FROM transaction");

    res.send(data);
  } catch (err) {
    console.error(err);
  }
});

app.get("/purchase/customername", async (req, res, next) => {
  try {
    const data2 = req.body;
    const data = await db(
      `SELECT * FROM transaction where transaction.customer_name='${data2.name}'`
    );

    res.send(data);
  } catch (err) {
    console.error(err);
  }
});

app.all("*", (req, res, next) => {
  res.send("Cannot find " + req.originalUrl + " on this server!");
});

module.exports = app;
