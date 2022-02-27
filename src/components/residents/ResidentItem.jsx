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

    let statusColor = ''

    switch (status) {
        case 'Alive':
            statusColor = 'text-green-500'
            break
        case 'unknown':
            statusColor = 'text-yellow-500'
            break
        case 'Dead':
            statusColor = 'text-red-500'
            break
        default:
            break;
    }

    return (
        <section className='card shadow-xl rounded-md bg-violet-300 p-5 w-full font-mono shadow-violet-500/50 transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-110'>
            <div className='grid grid-cols-2 justify-items-evenly divide-x divide-dashed divide-black'>
                <div className='ml-7 flex flex-col gap-1 place-items-start'>
                    <img className='w-24 h-24' src={image} alt={name} />
                    <h3 className='font-black text-lg'>{name}</h3>
                    <div className='flex flex-row gap-2'>
                        <span className={statusColor}>&#x25cf;</span>
                        <p className='italic'>{status}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-1 px-3'>
                    <h4><b>Species:</b> {species}</h4>
                    <h4><b> Type:</b> {type === '' ? 'Unknown' : type}</h4>
                    <p><b> Gender: </b> {gender}</p>
                    <p><b>Origin:</b> {origin.name}</p>
                </div>
            </div>


        </section>
    )
}

export default ResidentItem
