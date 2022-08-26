import React, {useState} from 'react';
import '../index.css'

const Moon = ({moon, handleChange}) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
    handleChange(!checked);
  };

  const classes = ['moon', 'spaceItem'];

  if (checked) {
    classes.push('checked');
  }
  return (
    <div className={classes.join(' ')} onClick={handleClick}>
      {moon.title}
    </div>
  );
};

export default Moon;