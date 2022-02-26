import logo from './assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-violet-800 font-mono" >
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-center md:items-center md:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                        <img className="lg:block h-10 w-auto" src={logo} alt="RickAndMortyAPI" />
                        <h1 className="text-white font-bold px-3 py-2 rounded-md text-lg font-large">
                            Rick And Morty Universe
                        </h1>
                    </div>
                    <div className="hidden md:block md:ml-6 flex space-x-4">
                        <Link to="/" className="text-center bg-gray-900 text-white block rounded-md p-2 px-7 font-medium shadow-xl  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-60">
                            Locations
                        </Link>
                    </div>
                </div>
            </div>
            <div className="md:hidden font-mono px-10 pt-2 pb-3 space-y-1" id="mobile-menu">
                <Link to="/" className="text-center bg-gray-900 text-white block rounded-md p-2 px-7 font-medium shadow-xl  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-60">
                    Locations
                </Link>
            </div>
        </nav >

    )
}

export default Navbar





