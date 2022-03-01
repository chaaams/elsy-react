import React from "react";
import './App.css';
import './styles/global.css'
import Box from "./Componement/Box";
const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      water: 0,
      heart: 120,
      temperature: 10,
      steps: 3000,
    }
  }
  onHeartChange=(e)=>{
    this.setState=({
      heart: e.target.value
    })

    
  }

  onStepChange=(e)=>{
    this.setState=({
      steps: e.target.value
    })

    
  }

  onTempChange=(e)=>{
    this.setState=({
      temperature: e.target.value
    })

    
  }
  render(){

    return(
      <div className="container-fluid"> 
        <div className="row">
          {/* Water */}
          <Box icon="local_drink" value={1.5} unit="L" color="#3A85FF" />
		            
		            {/* Steps */}
		            <Box icon="directions_walk" min={stepsMin} max={stepsMax} value={this.state.steps}  unit="steps" color="black" />
		            
		            {/* Heart */}
		            <Box icon="favorite" min={heartMin} max={heartMax}  value={this.state.heart} onChange={this.onHeartChange} unit="bpm" color="red" />
		            
		            {/* Temperatur */}
		            <Box icon="wb_sunny" value={this.state.temperature}  unit="°C" color="yellow" />
        </div>
      </div>
    )
  }
}
export default App;