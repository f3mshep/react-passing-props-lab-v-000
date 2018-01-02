import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

let debugging = (props) =>{
  debugger
  return <p></p>
}


const FruitBasket = props => (

  <div className="fruit-basket">
    <Filter handleChange={props.updateFilterCallback}
      filters={props.filters}
     />
    <FilteredFruitList 
      fruit={props.fruits}
      filter={props.selectedFilter} />
  </div>
);
  

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: [],
  updateFilterCallback: ""
}


export default FruitBasket;
