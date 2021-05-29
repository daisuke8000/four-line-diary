import React from 'react';
import './App.css';
import { Button, ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
      <ChakraProvider>
          <Button>
              TestButton
          </Button>
      </ChakraProvider>
  );
}

export default App;
