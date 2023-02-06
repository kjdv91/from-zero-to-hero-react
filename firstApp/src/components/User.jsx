import {useState} from 'react';

function User  () {
    const [age, setAge] = useState(0);
    const [inputV, setInputV] = useState("");
    const [showName, setShowText]= useState();
    const [textColor, setColor] = useState("blue");
    const users = [
        {name: "Kevin", age:31, isRegistred: false},
        {name: "Janina",age: 31, isRegistred: true},
        {name: "Danna",age: 10, isRegistred: true},
       
      ];
    
    const increment = ()=>{
        
        setAge(age + 1);

    } 

    const decrement = ()=>{
        
        setAge(age - 1);
    }

     const zero = ()=>{
        
        setAge(0);
    }

    const handleIChange =(event)=>{
        setInputV(event.target.value);

    }
    const Notext = () =>{
        setShowText(false)
       
        
}    


const text = () =>{
    setShowText(true);
    setColor(textColor === "blue" ? "red"  : "blue");
    
}
    return (
       
        
       
         <>
        {users.map((user, key)=>{
            return <div key={key}>
                
               {user.name} {user.age} 
            
            </div>
    
          })}
          {age}<br></br>
        <button onClick={increment}>Increment </button>
        <button onClick={decrement}>Decrement</button><br/>
        <button onClick={zero}>Zero</button><br/>
        <input type="text" onChange={handleIChange}/><br></br>
        {inputV}
        <button onClick={Notext} > Ocultar Nombre</button>
        <button onClick={text} style={{color: textColor}}> Mostrar Nombre</button>
        {showName ? <h1>My name es Kevin</h1> : ""}
        </>
        
      
        );
       


    }
export default User;

// <div>
        //      {users.map((user,key) => {
        //     if (user.isRegistred) return <h1>{user.name} <h1/>;

        //     })}

        // </div>
        
        {/* //example map
       
     */}
