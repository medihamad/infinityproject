//-------------------VARIABLES----------------------

const express = require('express');
const registrationRouter = express.Router();

//--------------END VARIABLES----------------------

registrationRouter.route('/').get((req, res) => {
    res.render('add-candidate');
});

module.exports = registrationRouter;