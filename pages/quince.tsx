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
      <Layout ctaContext="quince" ctaLabel="Estoy organizando un 15">
        <QuincePage />
      </Layout>
    </React.StrictMode>
  );
}
