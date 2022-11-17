const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51M4oVpSJUmV5H7pwGsh3K8MtajWV3sB9ZSvZR1bimAveMCsZpnufb58j3nFP9LZkHXusJ1a5VVn8I9uc8coBN97W00LWdTllse')


// API

// App config
const app = express();

// middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// apiroutes
app.get('/' ,(request ,response) => response.status(200).send
('hello world'))


// Add this to your NodeJS Server below imports:

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved BOOM !!! for this amount >>>',total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });
    
      // OK - Created
      response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
});

// listen command
exports.api = functions.https.onRequest(app)
// http://127.0.0.1:5001/dbmsclone/us-central1/api