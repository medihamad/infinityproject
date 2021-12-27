//-------------------VARIABLES----------------------

const express = require('express');
const app = express();
const registrationRouter = require('./routers/candidatesRegistration');
//--------------END VARIABLES----------------------

//-------------------MIDDLEWARE----------------------

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/registration', registrationRouter);


//-------------------END MIDDLEWARE------------------

app.get('/', (req, res) => {
    res.send('home');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
})

