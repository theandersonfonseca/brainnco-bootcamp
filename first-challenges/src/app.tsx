import Header from './Header';
import Menu from './Menu';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Header />
      <Menu />
      <div className='box'>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </>
  );
}
