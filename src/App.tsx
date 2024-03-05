import React from "react";
import { RepositoryProvider } from "./provider/RepositoryProvider";
import { renderRoutes } from 'react-router-config';
import routes from './routes';

function App() {
  return (
    <RepositoryProvider>
      {renderRoutes(routes)}
    </RepositoryProvider>
  );
}

export default App;
