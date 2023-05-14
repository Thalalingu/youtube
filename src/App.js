import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import { Counter } from './components/Counter';
import Head from './components/Head';
import store from './utils/store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <h1 className='text-3xl font-bold'>namaste</h1> */}
      <Head/>
      <Body/>
      <Counter/>
    </div>
    </Provider>
  );
}

export default App;
