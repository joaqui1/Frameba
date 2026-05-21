import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.css';
import { Layout } from '../components/Layout';
import { CorporativosPage } from './CorporativosPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Layout ctaContext="corporate" ctaLabel="Solicitar cobertura corporativa">
        <CorporativosPage />
      </Layout>
    </React.StrictMode>
  );
}
