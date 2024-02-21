import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    province: {
        type: String,
        required: true
    },
    salary: {
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

const Job = mongoose.model('Jobs', jobSchema);

export default Job;
