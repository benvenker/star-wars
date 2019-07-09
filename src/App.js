import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CardList from './CardList';
// import { people } from './people';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      people: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch(`https://swapi.co/api/people/?page=2`)
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
