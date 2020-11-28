import React from 'react';
import NewsComponent from '../components/NewsComponent';
import HomeHeader from '../components/HomeHeader';
import PlayButton from '../components/PlayButton';
import '../css/HomePage.css';

export default class HomePage extends React.Component {
  render() {
    return (
    	<div className="HomePage">
      		<HomeHeader/>
      		<NewsComponent/>
      		<PlayButton/>
      	</div>
    )
  }
}
