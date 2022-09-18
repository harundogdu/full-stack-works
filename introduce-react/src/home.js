import Footer from './layouts/footer';
import Header from './layouts/header';
import Navbar from './layouts/navbar';
import PageContent from './layouts/page-content';

function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default Home;
