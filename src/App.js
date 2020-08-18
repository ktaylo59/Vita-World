import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      data: [],   
  }
}
  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response =>  {
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
      <Main />
      <img src={plate} alt="plate-fork-spoon" />
      <Footer/>
    </div>
  );
}
}
export default App;
