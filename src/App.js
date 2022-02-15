import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Locations from './pages/Locations';
import Residents from './pages/Residents';
import { RickAndMortyProvider } from './context/RickAndMortyContext'

function App() {
  return (
    <RickAndMortyProvider>
      <Router>
        <div className="flex flex-col h-screen justify-between bg-violet-100">
          <Navbar />
          <Routes>
            <Route path='/' element={<Locations />} />
            <Route path='/location/:id/residents' element={<Residents />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </RickAndMortyProvider>
  );
}

export default App;
