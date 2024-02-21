import express from 'express';
import Job from '../models/jobModel.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        "message": "All Jobs"
    });
});

router.post('/', async (req, res) => {
    /*
    const { title, status, company, province, salary, body } = req.body;
    const newJob = Job.create({
      title,
      status,
      company,
      province,
      salary,
      body
    });
    */
    console.log(req.body);
});

router.post('/', (req, res) => {
    res.status(200).json({
        "message": "Update Job"
    });
});

router.delete('/', (req, res) => {
    res.status(200).json({
        "message": "Delete Job"
    });
});

export default router
