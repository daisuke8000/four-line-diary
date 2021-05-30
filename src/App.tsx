import React from 'react';
import './App.css';
import Config from './types/env';
import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from './theme/theme';

const test = Config.api_url;

function App() {
  return (
      <ChakraProvider theme={theme}>
          <Button colorScheme={'teal'}>
              {test}
          </Button>
      </ChakraProvider>
  );
}

export default App;
