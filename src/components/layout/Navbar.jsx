import logo from './assets/logo.png'

function Navbar() {
    return (
        <nav className="bg-violet-800" >
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="lg:block h-10 w-auto" src={logo} alt="RickAndMortyAPI" />
                            <h1 className="text-white font-bold px-3 py-2 rounded-md text-lg font-large">Rick And Morty Neighborhood Meetup</h1>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="/" className="bg-white text-violet-500 px-3 py-2 rounded-md text-md font-medium" aria-current="page">Locations</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="/" className="bg-gray-900 text-center text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Locations</a>
                </div>
            </div>
        </nav >

    )
}

export default Navbar





