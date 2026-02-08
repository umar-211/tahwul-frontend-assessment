import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Perspectives from './pages/Perspectives';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="perspectives" element={<Perspectives />} />
          <Route path="tasks" element={<Dashboard />} />
          <Route path="projects/:projectId" element={<Details />} />
          <Route path="documents" element={<Dashboard />} />
          <Route path="reports" element={<Dashboard />} />
          <Route path="users" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
