/* @refresh reload */
import { render } from 'solid-js/web';
import { lazy } from 'solid-js';
import { Route, Router } from '@solidjs/router';

import './index.css';
// const App = lazy(() => import('./App'));
const Home = lazy(() => import('./pages/Home'));
const ServiceBoard = lazy(() => import('./pages/ServiceBoard'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/produkty" component={Products} />
    <Route path="/sluzby" component={ServiceBoard} />
    <Route path="/kontakt" component={Contact} />
  </Router>
), root );
