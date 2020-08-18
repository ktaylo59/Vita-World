import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import plate from './assets/plate-fork-spoon.jpg';
import Food from './components/Main/food';
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      data: [],
      recipe: '', 
      filtered: []  
  }
}
  handleSubmit = (e) => {
    e.preventDefault()
      console.log('handleSubmit');
      console.log(this.state.data);

    let selectedRecipe = this.state.data.filter(item => item.strCategory.toLowerCase()  === this.state.recipe.toLowerCase()) 
    console.log(selectedRecipe);
    this.setState({ filtered: selectedRecipe})
  }
handleChange = (e) => {
  this.setState({ recipe: e.target.value}) 
  console.log(this.state.recipe);
}

  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response =>  {
     this.setState({ data: response.data.categories}) 
     console.log(response.data);

    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
   
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      {/* <img src={ data } alt='text describing img'/> */}
      <Main img src={plate} alt='plate' handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      <Food filter={this.state.filtered}/>
      <Footer/>
    </div>
  );
}
}
export default App;
