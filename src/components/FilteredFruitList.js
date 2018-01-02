import React, { Component } from 'react';


const getList = (props) =>{
  const list =
  !props.filter || props.filter === "all" ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);
  return list.map((item, index) => <li key={index}>{item.char}</li>);
}

const FilteredFruitList = props => (
  <ul className="fruit-list">
    {getList(props)}
  </ul>
);

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;
