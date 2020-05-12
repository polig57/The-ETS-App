import React from 'react';
import ListItem from './ListItem.jsx';

//not currently relevent
const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.items.length } Items
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;