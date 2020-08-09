import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
       <main>
            Hello
       </main>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
