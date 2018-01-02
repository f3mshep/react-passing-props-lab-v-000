import React from 'react';

import FruitBasket from './FruitBasket';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


// const App = () => <FruitBasket />;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    };
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit()
  }

  fetchFruit = () => {
    var that = this
    fetch("/api/fruit")
      .then(response => response.json())
      .then(items => { 
        that.setState({ fruit: items })} )
  }

  fetchFilters = () => {
    var that = this;
    fetch("/api/fruit_types")
      .then(response => response.json())
      .then(filters => that.setState({ filters: filters }) )
  };

  handleFilterChange = event => {
    console.log("new filter: ", event.target.value);
    this.setState({ currentFilter: event.target.value });
  };

  render() {
    return (
      <FruitBasket
        updateFilterCallback={this.handleFilterChange.bind(this)}
        selectedFilter={this.state.currentFilter}
        filters={this.state.filters}
        fruits={this.state.fruit}
      />
    );
  }
}

export default App;
