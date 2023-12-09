
import TableDetails from "./tableData"


function Tableecomponent(TableDetails) {

  const {name,imageUrl,phoneNo,email} = TableDetails
    return (
        
      <table class="table table-striped">
      <tr>
        <td>{name}</td>
        <td>{imageUrl}</td>
        <td>{phoneNo}</td>
        <td>{email}</td>
      </tr>
    </table>
    )
}
export default Tableecomponent