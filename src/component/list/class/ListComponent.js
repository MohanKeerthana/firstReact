import { Component } from "react";
import ListItems from "../listItems";


class ListComponent extends Component{
    render(){
        return(
            <div>

            <ul>
              <ListItems></ListItems>
            </ul>
             <ol>
             <ListItems></ListItems>
         </ol>
         </div>
        )
    }
}
export default ListComponent