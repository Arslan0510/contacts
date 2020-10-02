import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Edit = (props) => {
  // let classes = 'fa fa-heart';
  // if (!props.liked) classes += '-o';
  if (props.icon === 'edit')
    return <EditIcon style={{ cursor: 'pointer' }} onClick={props.onClick} />;
  else if (props.icon === 'del')
    return <DeleteIcon style={{ cursor: 'pointer' }} onClick={props.onClick} />;
};

export default Edit;
