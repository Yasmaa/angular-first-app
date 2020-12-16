const express = require('express');

const app = express();

app.use(express.static('./dist/angular-app-tp'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/angular-app-tp' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)