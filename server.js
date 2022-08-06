const PORT = process.env.PORT || 3008;
const express = require('express');
const app = express();







app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`);
});