const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from this demo...");
});
 
module.exports.app = app;
