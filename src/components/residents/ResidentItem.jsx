function ResidentItem({ character }) {

    const {
        name,
        status,
        species,
        type,
        gender,
        origin,
        image
    } = character

    return (
        <div className='card shadow-xl rounded-md bg-violet-300 p-5'>
            <div className='grid grid-cols-2 '>
                <div className='p-2 w-30'>
                    <img className='w-16 h-16' src={image} alt="rick-and-morty-character" />
                    <h3>{name}</h3>
                </div>
                <div>
                    <h4>{species}</h4>
                    <h4>{type}</h4>
                    <p>{gender}</p>
                    <p>{origin.name}</p>
                </div>
            </div>


        </div>
    )
}

export default ResidentItem
