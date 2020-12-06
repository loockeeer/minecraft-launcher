import React from 'react';
import NewsComponent from '../components/NewsComponent';
import HomeHeader from '../components/HomeHeader';
import PlayButton from '../components/PlayButton';
import '../css/HomePage.css';

export default function HomePage() {
  return (
    <div className="HomePage">
      <HomeHeader />
      <NewsComponent />
      <PlayButton />
    </div>
  );
}
