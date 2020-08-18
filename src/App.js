import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import plate from './assets/plate-fork-spoon.jpg';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      data: [],
      recipe: ''   
  }
}
  handleSubmit = (e) => {
    e.preventDefault()
      console.log('handleSubmit');
 
  }
handleChange = (e) => {
  this.setState({ recipe: e.target.value}) 
}

  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response =>  {
     this.setState({ data: response.data}) 
     console.log(response.data);

    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
   
  return (
    <div className="App">
      
      <Header/>
      {/* <img src={ data } alt='text describing img'/> */}
      <Main img src={plate} alt='plate' handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      
      <Footer/>
    </div>
  );
}
}
export default App;
