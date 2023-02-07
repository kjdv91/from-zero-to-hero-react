import './App.css'
import { TwitterCard } from './TwitterCard';
export function App(){
    // const  format=(userName) => {
    //     return `@${username}`;
    // }

    
  //paso los props como objetos
    const bored50 = {name:"Bored Ape#50",username: "bored_ape50", img:"GdqcvpA.jpeg", initialIsFollowing: false}

    return(
        <>
         <TwitterCard  {...bored50}/>
         <TwitterCard
          //formatUser={format}
          username ="bored_ape30"
         
          name="Bored Ape#30"
           img= "kdatDud.png" />
         <TwitterCard 
         
         //formatUser={format}
         username ="cryptomusic5"
         name="Crypto Punk" 
         img= "msu8S2y.png" />
        
        
        </>
       
        
    );


}

