import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      {/* <CakeContainer></CakeContainer> */}
      {/* <HookCakeContainer></HookCakeContainer> */}
      <IceCreamContainer></IceCreamContainer>


      <UserContainer></UserContainer>
      </Provider>
    </div>
  );
}

export default App;
