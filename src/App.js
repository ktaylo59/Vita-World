import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imageURL: '',   
  }
}
  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response =>  {
     this.setState({ imageURL: response.data.message });
    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
    const { imageURL } = this.state;
  return (
    <div className="App">
      <img src={imageURL} alt='text describing img'/>
      <Header/>
      <Footer/>
    </div>
  );
}
}
export default App;
