import { useResponsive } from './services/utils';

import "./assets/css/mdb.dark.min.css";
import "./App.css";
import "./global.css";

import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import SidebarMobile from './containers/SidebarMobile';
import Content from './containers/Content';
import Footer from './containers/Footer';

// import logo from './logo.svg';


function App() {
  // eslint-disable-next-line
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return (
    <main>
      <header>
        <Header isMobile={isMobile} />
      </header>

      <aside>
        <Sidebar />
        <SidebarMobile isMobile={isMobile} />
      </aside>

      <article>
        <Content />
      </article>

      <footer>
          <Footer />
      </footer>
    </main>
  );
}

export default App;
