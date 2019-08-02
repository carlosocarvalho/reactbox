import React from 'react';
import Components from './components';


function App() {
  return (
   <React.Fragment>
    <Components.Layout fluid={false}>
      <h2>Oj</h2>
      <Components.Button danger>Mi</Components.Button>
    </Components.Layout>
   </React.Fragment>
  );
}

export default App;
