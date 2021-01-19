import './App.css';
import Header from './components/Header/Header.component';
import Sidebar from './components/Sidebar/Sidebar.component';
import Feed from './components/Feed/Feed.component';
import WidgetBar from './components/WidgetBar/WidgetBar.component';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Feed />
        <WidgetBar/> 
      </div>
    </div>
  );
}

{/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

export default App;
