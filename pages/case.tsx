import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import '../styles/main.css';
import { Layout } from '../components/Layout';
import { CASES } from './casesData';
import { CasePage } from './CasePage';

const study = CASES.find(item => item.slug === document.body.dataset.caseSlug);
const root = document.getElementById('root');
if (root && study) {
  hydrateRoot(root, <Layout ctaContext={study.context} ctaLabel={study.cta} homeEditorial><CasePage study={study} /></Layout>);
}
