import ResidentItem from './ResidentItem'

function ResidentList({ residents }) {

    console.log(residents)



    return (
        <div>
            {
                residents.forEach(element => {
                    <ResidentItem itemID={element.substring(42)} />
                })
            }

        </div>
    )
}

export default ResidentList
