import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Locations from './pages/Locations';
import { RickAndMortyProvider } from './context/RickAndMortyContext'

function App() {
  return (
    <RickAndMortyProvider>
      <div >
        <Navbar />
        <Locations />
        <Footer />
      </div>
    </RickAndMortyProvider>
  );
}

export default App;
