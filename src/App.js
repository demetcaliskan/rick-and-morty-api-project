import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LocationList from './components/locations/LocationList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LocationList />
      <Footer />
    </div>
  );
}

export default App;
