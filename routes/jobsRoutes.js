import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        "message": "All Jobs"
    });
});

router.post('/', (req, res) => {
    res.status(201).json({
        "message": "Create Job"
    });
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
