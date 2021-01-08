import { registerRootComponent } from 'expo';
// import { createStore } from 'redux';
// import rootReducer from './reducers/index';
// import { Provider } from 'react-redux';

import App from './App';

// const connectedApp = createStore(rootReducer, middleware)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
