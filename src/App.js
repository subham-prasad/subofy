import logo from './logo.svg';
import './App.css';
import Body from "./components/Body"
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <div>
      <Provider store={store}>
      <Body />
      </Provider>
      </div>
  );
}

export default App;
