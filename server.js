const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/keys');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const app = express();

const { compile } = require('morgan');

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(morgan('dev'));

// DB config
const db = config.mongoURI;

//mongo db
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(db, (err) => {
  if (err) {
    console.log(err);
  }
  else console.log('Db Connected');
});

app.use(express.static(path.join(__dirname, '/client/build')));
const routes = require('./routes');
app.use('/api', routes);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// producation
if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`server created http://localhost:${PORT}`));
