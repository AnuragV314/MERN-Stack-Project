// import Message from "./Message";

// function App() {

//   // return <div><Message></Message></div>
//   return <div><Message /></div>
// }


// import Alert from "./compenents/Alert";
// import ListGroup from "./compenents/ListGroup";
import { useState } from "react";
import Alert from "./compenents/Alert";
import Button from "./compenents/Button";

function App() {
  // let items = [
  //   'New Yark',
  //   'Swn Francisco',
  //   'Tokyo',
  //   'London',
  //   'Paris',
  // ]

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /></div>


  // return <div>
  //   <Alert>Hello <span>World</span> </Alert>
  //   </div>


  const [alertVisible, setAlertVisibility] = useState(false);




  return (
    <div>
      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>Why you click me Stupid</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>Click Me</Button>
    </div>
  )
}




export default App;



