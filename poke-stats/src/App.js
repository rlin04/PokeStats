import axios from "axios";
import { useEffect } from "react";
function App (){

    

const fetchData = async ()=>{
    const response = await axios.get('https://pogoapi.net//api/v1/pokemon_stats.json');
    <div>{response.data[0].pokemon_name}</div>
        console.log(response.data[0].pokemon_name)
}
useEffect(() =>{
    fetchData();
},[]);



    return (
    <div>
        <h1>Poke Stats</h1>
        
        </div>
    )
}

export default App;