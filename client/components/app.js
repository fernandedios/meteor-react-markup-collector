import React from 'react';
import Header from './header';

// props.children provided by the nested route at client/main.js
export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
