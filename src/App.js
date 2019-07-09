import React from 'react';
import './App.css';
import Header from './Header';
import CardList from './CardList';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      people: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch(`https://swapi.co/api/people/?page=3`)
      .then(response => response.json())
      .then(people => this.setState({ people: people.results }));


  }



  render() {
    return (
      <div>
        <Header />,
      <CardList people={this.state.people} />
      </div>
    );
  }
}


// function App() {
//   return (
//     <div>
//       <Header />,
//       <CardList people={people} />
//     </div>
//   );
// }

export default App;
