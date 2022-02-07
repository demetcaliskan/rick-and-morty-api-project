import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LocationList from './components/locations/LocationList';

function App() {
  return (
    <div className="bg-violet-100">
      <Navbar />
      <LocationList />
      <Footer />
    </div>
  );
}

export default App;
