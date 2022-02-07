import React from 'react';
import './styles.css';

const InputField = () => {
  return (
    <div>
      <form className="input">
        <input type="input" className="input__box" placeholder="enter a task" />
        <button type="submit" className="input__submit">Go</button>
      </form>
    </div>
  );
}

export default InputField;