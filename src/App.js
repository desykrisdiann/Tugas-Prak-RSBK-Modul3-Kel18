import React from 'react';
import './App.css';
import Parent from "./modul3/Parent";
class App extends React.Component {
  state = {
    nama: "",
    nim : "",
    kelompok : "",
    hidenama : true
}
munculnama = () => {
  this.setState((state) => {
      return { nama: 'Desy Krisdian', nim : '21120117120020', kelompok : '18' }
  }
  )
}
  render() {
    return (
      
      <div className="App">
         <Parent />
        <button onClick={this.munculnama}>Saya</button>
        { 
          this.setState.hidenama 
          ? '' 
          : (<div> <span>{this.state.nama}</span> <br /> <span>{this.state.nim}</span> <br /><span>{this.state.kelompok}</span></div>)

        }
      
       
      </div>
    )
  }
}
export default App;