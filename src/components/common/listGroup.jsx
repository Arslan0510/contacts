import React from 'react';

function ListGroup({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem,
}) {
  return (
    <ul className='list-group'>
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item.id}
          className={
            item.name === selectedItem
              ? 'list-group-item active'
              : 'list-group-item'
          }
        >
          <img alt='' src={item.pic} width='150' height='150' />
          <label style={{ display: 'flex', alignItems: 'center' }}>
            {item.name}
          </label>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            {item.email}
          </label>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            {item.created}
          </label>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            {item.modified}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
