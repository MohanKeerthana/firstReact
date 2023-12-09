import ListItems from "../listItems"


function ListsComponent() {
    return (
        
            <div>
                <ul>
                    <ListItems/>
                </ul>
                <ol>
                    <ListItems></ListItems>
                </ol>
            </div>
        
    )
}

export default ListsComponent