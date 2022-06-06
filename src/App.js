import './App.css';
import "./styles.css";
import Sidebar from './components/Sidebar';
import Analytics from './components/Analytics';
import Main from './components/Main';

function App() {
  return (
<div className='whole'>
  <div className='sideBar'>
    <Sidebar/>
    </div>
    <div className='rightSide'>
    <div className='analyticResults'>
    <Analytics whichAnalytics="Reviews"/>
    <Analytics whichAnalytics="Average Rating"/>
    <Analytics whichAnalytics="Sentiment Analysis"/>
    </div>
    <div className='mainContent'>
    <Main/>
    </div>
    </div>
</div>
  );
}

export default App;
