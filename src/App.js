import React, {Component} from 'react';
import './App.css';
import {CardList} from './Components/CardList/CardList.jsx';
import {Searchbox} from './Components/Searchbox/Searchbox.jsx';

class App extends Component {

  constructor() {

    super();

    this.state = {

      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {

    this.setState({searchField: e.target.value})
  }

  render() {

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()))

    return (

      <div className="App">

        <h1 className="title">Monsters Rolodex</h1>
        <Searchbox placeholder='search monsters' handleChange={this.handleChange}/>

        <CardList monsters={filteredMonsters}>        
        </CardList>
          
      </div>
    );
  }
}

export default App;
