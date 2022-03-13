import { Routes, Route } from 'react-router-dom';
import ViewWeather from './pages/ViewWeather';
import AddWeather from './pages/AddWeather';
import EditWeather from './pages/EditWeather';

const App = () => (
  <div className="min-h-screen w-full flex flex-col bg-white pb-4">
    <Routes>
      <Route path="/" element={<ViewWeather />} />
      <Route path="/add" element={<AddWeather />} />
      <Route path="/edit/:locationId" element={<EditWeather />} />
    </Routes>
  </div>
);

export default App;
