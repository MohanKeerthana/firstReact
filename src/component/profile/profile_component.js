
import ProfileDetails from "./data"
import "./profilestyling.css"
import styles from "./profile.module.css"



const ProfileComponent = () =>{

    const {name, imageUrl,phoneNo,email,ImageDemensions} = ProfileDetails 

    return(
        <div>
           <h3 style={{color:"pink"}}>name:{name}</h3>
           <h4 style={{background:"green"}}>PhNo:{phoneNo}</h4>
           <h5 className="text">Email:{email}</h5>
           <h5 className={styles.bigblue}>phoneNo:{phoneNo}</h5>
            <img  src={imageUrl} width={ImageDemensions.width} height={ImageDemensions.height}></img>
        </div>
    )
}

export default ProfileComponent