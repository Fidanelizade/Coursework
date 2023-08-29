import React from 'react';
import {store} from './redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Root} from './navigation/Root';
import {Provider} from 'react-redux';

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Root />
      </SafeAreaProvider>
    </Provider>
  );
};
