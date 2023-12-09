
function Table(prop){
    return(
        <div>
            <table>
                <tr>
                    <th>{prop.name}</th>
                    <th>{prop.age}</th>
                    <th>{prop.email}</th>
                </tr>
                
               
            </table>
        </div>
    )
}
export default Table