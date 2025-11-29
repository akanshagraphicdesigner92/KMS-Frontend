import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import RightSidebar from "./Components/RightSidebar";


function App() {
  return (
    <div className="app-container d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Topbar />
      <div className="flex-grow-1 d-flex overflow-hidden main-container">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <Footer />

    </div>
  );
}

export default App;





