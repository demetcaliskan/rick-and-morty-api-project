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
            statusColor = 'text-gray-500'
            break
        case 'Dead':
            statusColor = 'text-red-500'
            break
        default:
            break;
    }

    return (
        <div className='card shadow-xl rounded-md bg-violet-300 p-5 max-w-md font-mono'>
            <div className='grid grid-cols-2 justify-items-evenly divide-x divide-dashed '>
                <div className='ml-7 flex flex-col gap-1 place-items-start'>
                    <img className='w-24 h-24' src={image} alt="rick-and-morty-character" />
                    <h3 className='font-bold'>{name}</h3>
                    <div className='flex flex-row gap-2'>
                        <span className={statusColor}>&#x25cf;</span>
                        <p className='italic'>{status}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-1 px-3'>
                    <h4>Species: {species}</h4>
                    <h4>Type: {type === '' ? 'Unknown' : type}</h4>
                    <p>Gender: {gender}</p>
                    <p>Origin: {origin.name}</p>
                </div>
            </div>


        </div>
    )
}

export default ResidentItem
