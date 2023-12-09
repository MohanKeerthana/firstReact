import logo from './logo.svg';
import './App.css';
import ButtonComponent from './component/button/class/buttonComponent';
import ButtnComponent from './component/button/functional/buttonComponent';
import ImageComponent from './component/image/class/imageComponent';
import ImageeComponent from './component/image/function/imagecomponent';
import ListComponent from './component/list/class/ListComponent';
import ListsComponent from './component/list/functional/listComponent';
import TableComponent from './component/table/class/tableComponent';
import Tableecomponent from './component/table/function/tablecomponent';  
import ProfileComponent from './component/profile/profile_component';
import Profile from './component/profile/profile';
import CardComponent from './component/cards/cardComponent';
import FooterComponent from './component/footer/footerComponent';
import NavBarComponent from './component/nav/navBarComponent';
import CardalignComponent from './component/cards/card';
import TextComponent from './component/text/text';
import ShowData from './component/text/showData';
import Table from './component/table/function/tableProp';
import YouTubeButton from './component/youTubeButton/youtube';
import CarouselComponent from './component/carosuel/carosuel';
import ProfileeComponent from './component/profile/profileComponent';
import NavBarComponents from './component/nav/navBarComponent-Keerthana_Mohan';
import LifeCycleComponent from './component/lifeCycle/lifecycle';
import NavBarsComponent from './component/nav/navBarComponent';
import CardsComponent from './component/cards/cardComponent';
import UpdatingPhase from './component/lifeCycle/updating';
import UnMounting from './component/lifeCycle/unMounting';
import Carousels from './component/carosuel/carosuels';
import Tables from './component/table/class/table';
import TimerComponent from './component/timer/timer';

function App() {
  
  function getDay(day){
    switch(day){
    case 0:
    return "Sunday"
    case 1:
    return "Monday"
    case 2:
    return "Tuesday"
    case 3:
    return "Wednesday"
    case 4:
    return "Thursday"
    case 5:
    return "Friday"
    case 6:
    return "Saturday"
    default:
    
    return "None"
    }
    }

    function Greet(hour){
      let greeting
      if(hour>=0&&hour<=11){
        greeting="Morning"
      }else if(hour>=12 && hour<16){
        greeting="afternoon"
      }else if(hour>=16 && hour<20){
        greeting="Evening"
      }else {
        greeting="Night"
      }
      return greeting
    }
    
  
    
    function getMonth(month){
      switch(month){
        case 1: 
        return "January";
          
        case 2:  return "February";
          
        case 3:  return "March";
            
        case 4: return "April";
            
        case 5: return "May";
            
        case 6: return "June"; 
            
        case 7: return "July";
          
        case 8: return "August";
         
        case 9: return "September";
      
        case 10: return "October";
        
        case 11: return "November";
          
        case 12: return "December";
            
        }
    }

    function getSeason(months){
      let season 
     if(months>=1 && months<=3){
       season="Winter"
    }else if(months>3 && months<7)
    {
        season="Summer"
    }else if(months>=7&&months<=9){
      season="Monsoon"
    }else{
      season="Rainy"
    }
    return season
  }
  return (
    <div>
     {/* <ShowData hour={Greet(new Date().getHours())} day={getDay(new Date().getDay())} 
     date = {new Date().getDate()} month = {getMonth(new Date().getMonth())} year = {new Date().getFullYear()}  
     season={getSeason(new Date().getMonth())}/> */}
     {/* <Table name= "name" age = "age" email = "email"/>
    <Table name= "Keer" age = "23" email = "Keer@123"/>
    <Table name= "Anu" age = "31" email = "Anu@123"/> */}
     {/* <NavBarComponents></NavBarComponents> */}
   
     {/* <NavBarsComponent/>
     <CardsComponent/>
     <FooterComponent/>    */}
      
   {/* <CarouselComponent /> */}
  {/* <Tables/> */}
  <TimerComponent/>

    </div>
  );
}

export default App;
