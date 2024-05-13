const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { feedback: '' });
});

app.post('/submit', (req, res) => {
    const { feedback } = req.body;
    res.render('index', { feedback: `You entered: ${feedback}` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
