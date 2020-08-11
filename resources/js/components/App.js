import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";

const App = () => {
    return (
       <main>
           <Router>
               <Route path={'/'} exact component={Home} />
               <Route path={'/auth'} component={Auth}/>
           </Router>
       </main>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
