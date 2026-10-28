import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.css';
import { Layout } from '../components/Layout';
import { QuincePage } from './QuincePage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Layout ctaContext="quince" ctaLabel="Pedir presupuesto" homeEditorial>
        <QuincePage />
      </Layout>
    </React.StrictMode>
  );
}
