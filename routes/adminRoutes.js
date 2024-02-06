import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        "message": "Admin routes"
    });
});

router.post('/', (req, res) => {
    res.status(201).json({
        "message": "New job created"
    })
})

router.put('/', (req, res) => {
    res.status(200).json({
        "message": "Job Updated"
    })
})

export default router
