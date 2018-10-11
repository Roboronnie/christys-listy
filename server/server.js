const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const studentRouter = require('./routes/student.router');
const companyAndRepresentative = require('./routes/companyAndRepresentative.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/student', studentRouter);
app.use('/api/companyAndRepresentatives', companyAndRepresentative);
app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
