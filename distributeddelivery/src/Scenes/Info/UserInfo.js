import React from 'react'
import Places from './Places'
import './info.css'

export default class Map extends React.Component {
  constructor(props) {
    super(props);
   
  };

  render() {
    return (
      <div className='container'>
        <p className='title'>I'm going from</p>
        <Places></Places>
      </div>
    );
  }
}