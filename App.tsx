import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppNav from './src/routes/AppNav';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import reducers from './src/redux/reducers/reducers';

const store = createStore(reducers);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
    background: 'blue'
  },
};

const App = () => {

  return (
    <PaperProvider theme={theme}>
      <ReduxProvider store={store}>
        <AppNav store={store} />
      </ReduxProvider>
    </PaperProvider>
  );
};
export default App;