import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.css';
import { Layout } from '../components/Layout';
import { BlogArticlePage } from './BlogArticlePage';
import { getBlogArticle } from './blogData';

const slug = document.body.dataset.articleSlug || '';
const article = getBlogArticle(slug);
const rootElement = document.getElementById('root');

if (rootElement && article) {
  ReactDOM.hydrateRoot(rootElement,
    <React.StrictMode>
      <Layout ctaContext={article.ctaContext} ctaLabel={article.ctaLabel} homeEditorial>
        <BlogArticlePage article={article} />
      </Layout>
    </React.StrictMode>,
  );
}
