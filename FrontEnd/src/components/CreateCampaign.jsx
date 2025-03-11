import { useState } from 'react';
import axios from 'axios';

const CreateCampaign = ({ onCampaignCreated }) => {
    const [campaign, setCampaign] = useState({ title: '', description: '', task: '', reward: '' });

    const handleChange = (e) => {
        setCampaign({ ...campaign, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/campaign/create', campaign);
            console.log("Campaign created:", response.data);
            alert("Campaign created successfully!");
            setCampaign({ title: '', description: '', task: '', reward: '' }); // Reset form
            if (onCampaignCreated) {
                onCampaignCreated(); // Refresh campaign list if needed
            }
        } catch (error) {
            console.error("Error creating campaign:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Create a New Campaign</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" 
                    name="title" 
                    value={campaign.title}
                    placeholder="Campaign Title" 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input 
                    type="text" 
                    name="description" 
                    value={campaign.description}
                    placeholder="Description" 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input 
                    type="text" 
                    name="task" 
                    value={campaign.task}
                    placeholder="Task" 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input 
                    type="text" 
                    name="reward" 
                    value={campaign.reward}
                    placeholder="Reward" 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Create Campaign
                </button>
            </form>
        </div>
    );
};

export default CreateCampaign;
