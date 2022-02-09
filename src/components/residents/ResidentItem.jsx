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
            <img className='w-16 h-16' src={image} alt="rick-and-morty-character" />
            <h3>{name}</h3>
        </div>
    )
}

export default ResidentItem
