import { useState, useEffect } from 'react';
import axios from 'axios';

const CampaignList = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/campaign')
            .then(response => setCampaigns(response.data))
            .catch(error => console.error("Error fetching campaigns:", error));
    }, []);

    return (
        <div className="max-w-3xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Campaigns</h2>
            <ul className="space-y-4">
                {campaigns.map((campaign) => (
                    <li key={campaign._id} className="p-4 bg-blue-100 border-l-4 border-blue-500 shadow-md rounded">
                        <h3 className="text-lg font-semibold text-blue-700">{campaign.title}</h3>
                        <p className="text-gray-600">{campaign.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CampaignList;
