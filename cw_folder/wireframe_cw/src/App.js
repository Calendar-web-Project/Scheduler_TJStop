import logo from './logo.svg';
import './reset.css';
import './App.css';
import User from './user';
import Page_animate from './components/page_animate';


function App() {
  return (
    <div className="App">
      <div className="side">
        <div className="container">
          <User></User>
          <div className="todayevent">
            <h3>Today Events</h3>
            <ul>
              <li className="holiday">공휴일</li>
              <li>김주빈 생일</li>
              <li>김재욱 생일</li>
            </ul>
            <a>upcoming</a>
          </div>
          <div className="memo">
            <h3><label for="memo">Memo</label></h3>
            <textarea id="memo" name="story" placeholder="메모를 입력하세요">
            </textarea>
          </div>
        </div>
        <div className="logout">Logout</div>
      </div>
      <div className="main">
        <div className="container">
          <Page_animate></Page_animate>
        </div>
      </div>
    </div>
  );
}

export default App;
