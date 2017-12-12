const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 10,
      jwksUri: ""
  }),
  audience: '',
  issuer: "",
  algorithms: ['RS256']
});

app.use(jwtCheck);


app.get('/', function(req, res){
  res.sendStatus(200);
});

app.get('/authorized', function (req, res) {
  res.send('Secured Resource Reached');
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

