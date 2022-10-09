import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages';
import { Footer, Navbar } from '@/components';
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
