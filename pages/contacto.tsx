import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.css';
import { Layout } from '../components/Layout';
import { ContactoPage } from './ContactoPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Layout ctaContext="contact" ctaLabel="Pedir propuesta por WhatsApp">
        <ContactoPage />
      </Layout>
    </React.StrictMode>
  );
}
