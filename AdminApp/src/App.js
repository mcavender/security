/*
This is the main module of the AdminApp.  See the REAME.md
file in the security project to understand how to
run this code in the browser.

*/

import React from 'react';
import CustomTable from './components/custom-table.js';

/* const appUrl = 'http://localhost:8080/user';*/
function App({appUrl}) {

  return (
    <div>
      <CustomTable dataUrl={appUrl}/>
    </div>
  );
}
export default App;
