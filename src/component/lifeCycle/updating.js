import { Component } from "react";


class UpdatingPhase extends Component{
  constructor(){
    super()
    this.state={
      
    }
  }

    render(){
        return(
            <>
            <h1>Updating </h1>
                <Header favcol="Green"/>
            </>
        )
    }
}
export default UpdatingPhase

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red", count:0};

    }
    static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol };
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
   handleClick = ()=>{
    this.setState(
      {
        count:this.state.count+1
      }
    )
   }

   shouldComponentUpdate(){
    return true
   }

   componentDidMount(){
    document.title=`Count ${this.state.count}`
   }

   componentDidUpdate(){
    document.title=`Count ${this.state.count}`
   }

   getSnapshotBeforeUpdate(prevProps,prevstate){
       console.log("previousprop",prevProps,"previousstate",prevstate);
   }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor} {this.state.count}</h1>
        <button onClick={this.handleClick}>Update the Count</button>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }
  