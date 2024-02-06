import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Jobs = mongoose.model('Jobs', jobSchema);
