import './App.css';
import React from 'react';
import BannerSlider from './component/ฺBannerSlider';
import Bookmaredlist from './component/Bookmarkedlist';

function App() {
  return (
    <div>
      <BannerSlider />
      <div className="headBookmaredlist">
        <h2>รายการที่คั่นไว้</h2>
      </div>
      <Bookmaredlist/>
    </div>
    
  );
}

export default App;
