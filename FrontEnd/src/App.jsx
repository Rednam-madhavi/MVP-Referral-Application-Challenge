import CampaignList from './components/CampaignList';
import CreateCampaign from './components/CreateCampaign';

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">MVP Campaign Management</h1>
            <CreateCampaign />
            <CampaignList />
        </div>
    );
}

export default App;
