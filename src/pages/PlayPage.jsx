import React from 'react';
import NewsComponent from '../components/NewsComponent';
import HomeHeader from '../components/HomeHeader';
import '../css/PlayPage.css';

export default class PlayPage extends React.Component {
  render() {
    return (
    	<div className="PlayPage">
      		<div className="left">
              <HomeHeader/>
      		    <NewsComponent/>
            </div>
            <div className="right">
                <p>bite</p>
            </div>
        </div>
    )
  }
}
