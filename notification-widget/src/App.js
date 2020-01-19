import React  from 'react';
import Notify from "./Components/Notify";
import Main   from "./Components/Main";
import {SnackbarProvider} from "notistack";

function App() {
  return (
    <SnackbarProvider
      
    >
      <Main/>  
    </SnackbarProvider>
  );
}

export default App;
