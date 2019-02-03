const assert = require('assert');
const router = require('express').Router();
const db = require('../utils/db');
const Emp = require('../models/emp');

router.get('/', (req, res) => {
    Emp.find({}, (err, docs) => {
        if (err) {
            console.log('[data]', err.message);
            res.send(err.message);
        } else
            res.send(docs);
    });
});

router.get('/:id', (req, res) => {
    let empId = Number.parseInt(req.params.id);
    Emp.findOne({
        id: empId
    }, (err, doc) => {
        if (err) {
            console.log('[data]', err.message);
            res.send(err.message);
        } else
            res.send(doc);
    });
});

router.post('/', (req, res) => {
    let empData = req.body;
    let newEmp = new Emp();
    newEmp.name = empData.name;
    newEmp.dob = Date.parse(empData.dob);
    newEmp.salary = empData.salary;
    newEmp.skills = empData.skills;
    newEmp.save((err, doc) => {
        if (err) {
            console.log('[data]', err.message);
            res.send(err.message);
        } else
            res.send(doc);
    });
});

router.patch('/:id', (req, res) => {
    let empId = Number.parseInt(req.params.id);
    let patchData = req.body;
    Emp.findOneAndUpdate({
        id: empId
    }, patchData, {
        new: true
    }, (err, doc) => {
        if (err) {
            console.log('[data]', err.message);
            res.send(err.message);
        } else
            res.send(doc);
    });
});

router.delete('/:id', (req, res) => {
    let empId = Number.parseInt(req.params.id);
    Emp.findOneAndDelete({
        id: empId
    }, (err, doc) => {
        if (err) {
            console.log('[data]', err.message);
            res.send(err.message);
        } else
            res.send(doc);
    });
});

module.exports = router;