// import React from 'react';
// import { useSelector } from "react-redux"

// function App() {
//   const allposts = useSelector( state => state.myReducer.allPosts)
//   console.log(allposts,">>>>>>>>")
//   return (
//     <div className="App">
//       {
//         allposts.map((data, idx) => <div>
//           <p>{data.title}</p> <br />
//           </div>)
//       }
//     </div>
//   );
// }

// export default App;

import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './Routes';
import { Provider } from 'react-redux'
import store from './stores'
import Cardview from './components/Card'
import Navbarrender from './components/Navbar'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbarrender />
          <Switch>
            <Route exact path="/" component={Cardview} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
