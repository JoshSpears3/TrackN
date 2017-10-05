// Import dependencies.
import React, { Component } from 'react';

// Import components.
import Navigation from '../../components/navigation/index.jsx';
import TrackerForm from './components/form/index.jsx';
import TrackerTimer from './components/timer/index.jsx';

class TrackerScene extends React.Component{
  // Component constructor.
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Navigation/>
        <TrackerForm />
        <TrackerTimer hours="0" minutes="0" seconds="0" />
      </div>
    );
  }
}

// Export component.
export default TrackerScene;