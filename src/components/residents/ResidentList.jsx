import ResidentItem from './ResidentItem'

function ResidentList({ residents }) {

    console.log(residents)



    return (
        <div>
            {
                residents.forEach(element => {
                    <div>
                        <p>Hello</p>
                        <ResidentItem itemID={element.substring(42)} />
                    </div>

                })
            }

        </div>
    )
}

export default ResidentList
