import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.css';
import { Layout } from '../components/Layout';
import { BlogIndexPage } from './BlogIndexPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Layout ctaContext="general" ctaLabel="Consultar cobertura">
        <BlogIndexPage />
      </Layout>
    </React.StrictMode>,
  );
}
