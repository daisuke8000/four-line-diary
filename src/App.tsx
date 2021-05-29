import React from 'react';
import './App.css';
import Config from './types/env';
import { Button, ChakraProvider } from "@chakra-ui/react";

const test = Config.api_url;

function App() {
  return (
      <ChakraProvider>
          <Button>
              {test}
          </Button>
      </ChakraProvider>
  );
}

export default App;
