import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import '../styles/main.css';
import { Layout } from '../components/Layout';
import { CasesIndexPage } from './CasesIndexPage';

const root = document.getElementById('root');
if (root) hydrateRoot(root, <Layout ctaContext="general" ctaLabel="Consultar cobertura" homeEditorial><CasesIndexPage /></Layout>);
