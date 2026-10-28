import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import '../styles/main.css';
import { Layout } from '../components/Layout';
import { NEW_SERVICES } from './newServicesData';
import { NewServicePage } from './NewServicePage';

const service = NEW_SERVICES.find(item => item.slug === document.body.dataset.serviceSlug);
const root = document.getElementById('root');
if (root && service) {
  hydrateRoot(root, <Layout ctaContext={service.context} ctaLabel={service.cta} homeEditorial={service.slug === 'book-15-anos-buenos-aires' || service.slug === 'fotografia-corporativa-buenos-aires'}><NewServicePage service={service} /></Layout>);
}
