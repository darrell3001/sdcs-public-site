// Dead simple component for the hello world (hi mom!)

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './HelloWorld.scss';

export default function HelloWorld() {
  return (
    <div className='hello-world-container'>
      <Helmet>
        <title>Hello World!</title>
      </Helmet>
      <h1 className="hello-world">Hello world!</h1>
      <p style={{ textAlign: 'center' }}>
      This is an ordinary react component.
        <br />
        <Link to="/codeSplit">Click here to see Nyan Cat rendered in a code-split component.</Link> 
      </p>
    </div>);
}
