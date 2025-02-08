import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainerWrapper} from './navigation/NavigationContainer';
import {theme} from './theme/theme';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainerWrapper />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
