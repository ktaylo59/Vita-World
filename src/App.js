import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      data: []   
  }
}
  componentDidMount() {
    fetch('https://api.spoonacular.com/recipes/complexSearch')
    .then(response => response.json())
    .then(data => {
      this.setState({ data })
      console.log(data)
    })
  }
  render() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}
}
export default App;
