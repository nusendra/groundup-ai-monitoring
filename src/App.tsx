import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>test</div>} />
        <Route path="users/*" element={<div>users</div>} />
      </Routes>
    </BrowserRouter>
  );
}
