


function ButtnComponent(buttonProperties){
const{bgColor,color,text,width}=buttonProperties
   
    return(
        <div>
        <button  onClick={()=> alert("hello")}
        style={
            {
                background: bgColor,
                color:color,
                width:width
            }
        }>{text}</button>
    </div>
    )
}
export default ButtnComponent