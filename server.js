const express = require('express');



const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/exercise', require('./routes/exerciseRoute'))
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server started on ${port}`);
})