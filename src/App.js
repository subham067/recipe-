import React from 'react';
import NavBar from './Compnonts/NavBar'
import Body from './Compnonts/Body'

function App() {
  // const [myVar, setMyVar] = useState()
  // function myFunction(s1) {
  //   clearTimeout(myVar)
  //   const mytime = setTimeout(() => {
  //     fetch(`https://api.edamam.com/search?q=${s1.target.value}&app_id=ec932433&app_key=b867b1d1c77f15df907d7a2b375666cd`)
  //       .then(response => response.json())
  //       .then(data => console.log(data.hits[4].recipe));
  //   }, 3000);
  //   setMyVar(mytime)
  // }
  return (
    <div className=" ">
    <NavBar/>
    <Body/>
        {/* <input type="text" className="text" onChange={e => myFunction(e)} /> */}
    </div>
  );
}

export default App;
