import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';


import { RepositoryProvider } from './provider/RepositoryProvider.tsx';
import AdminApp from './AdminsRoutes.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
 
 
  hydrateRoot(rootElement, 
    <React.StrictMode>
      <RepositoryProvider>
        <BrowserRouter>
        <>
          <App />
          {typeof window !== 'undefined' && <AdminApp />}
        </>
        </BrowserRouter>
      </RepositoryProvider>
    </React.StrictMode>
  );
}
