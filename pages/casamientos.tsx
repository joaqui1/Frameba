import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.css';
import { Layout } from '../components/Layout';
import { CasamientosPage } from './CasamientosPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Layout ctaContext="wedding" ctaLabel="Consultar casamiento">
        <CasamientosPage />
      </Layout>
    </React.StrictMode>
  );
}
