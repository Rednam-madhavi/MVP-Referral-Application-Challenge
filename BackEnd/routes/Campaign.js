const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');

// GET all campaigns
router.get('/', async (req, res) => {
    try {
        const campaigns = await Campaign.find();
        res.json(campaigns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create a new campaign
router.post('/create', async (req, res) => {
    try {
        const { title, description, task, reward } = req.body;

        const newCampaign = new Campaign({
            title,
            description,
            task,
            reward,
            // Optionally, add businessId or generate a referralLink here
        });

        const savedCampaign = await newCampaign.save();
        res.status(201).json(savedCampaign);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
