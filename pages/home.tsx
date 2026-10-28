import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.css';
import { Layout } from '../components/Layout';
import { HomePage } from './HomePage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Layout ctaContext="general" ctaLabel="Pedir presupuesto" homeEditorial>
        <HomePage />
      </Layout>
    </React.StrictMode>
  );
}
