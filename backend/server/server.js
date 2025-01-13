const express = require('express');
const route1 = require('./adapters/routes/route1');
const route2 = require('./adapters/routes/route2');

const app = express();
const port = process.env.PORT || 6000;

app.use('/r1', route1);
app.use('/r2', route2);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);

