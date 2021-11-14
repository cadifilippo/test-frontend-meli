import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ProductDetail } from '../pages/ProductDetail';
import { SearchResult } from '../pages/SearchResult';

export const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<></>} end />
          <Route path="/items" element={<SearchResult />} end />
          <Route path="/items/:id" element={<ProductDetail />} end />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};
