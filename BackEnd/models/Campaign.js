const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
    businessId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    task: {
        type: String,
        required: true,
    },
    reward: {
        type: String,
        required: true,
    },
    referralLink: {
        type: String,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Campaign', CampaignSchema);
