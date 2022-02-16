var express = require('express');
var router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const cities = require('../config/cities');
const gender = require('../config/gender');
const intrests = require('../config/intrests');
const orientations = require('../config/orientations');
const roles = require('../config/roles');
const actions = require('../config/actions');
const toys = require('../config/toys');
const Form = require('../models/Form');

router.get('/', (req, res, next) => {
    res.render('home');
});
router.get('/form1', (req, res, next) => {
    res.render('./forms/form1',{
        user: req.user,
        cities,
        gender,
        intrests,
        orientations,
        roles,
        actions,
        toys,
    });
});
router.get('/form1-view', (req, res, next) => {
    var {formID} = req.query;
    Form.findById(formID, (err, form) => {
        res.render('./forms/form1-view',{
            user: req.user,
            cities,
            gender,
            intrests,
            orientations,
            roles,
            actions,
            toys,
            form,
        });
    })
})
router.get('/form1-list', (req, res, next) => {
    Form.find({}, (err, forms) => {
        res.render('./forms/form1-list',{
            user: req.user,
            forms,
        });
    })
})
router.post('/form1', (req, res, next) => {
    if(typeof(req.body.roles) == 'string') req.body.roles = [req.body.roles];
    if(typeof(req.body.actions) == 'string') req.body.actions = [req.body.actions];
    if(typeof(req.body.toys) == 'string') req.body.toys = [req.body.toys];
    console.log(req.body);
    var newForm = new Form(req.body);
    newForm.save().then(doc => {
        res.redirect(`/form1-view?formID=${newForm._id}`)
    }).catch(err => console.log(err));
})
module.exports = router;
