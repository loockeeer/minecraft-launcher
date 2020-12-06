import React from 'react';
import '../css/NewsComponent.css';
import ReactMarkdown from 'react-markdown';
import fetchNews from '../utils/scripts/fetchNews';
import HomeStrings from '../strings/Home';

class NewsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: HomeStrings.home__news__loading };
  }

  componentDidMount() {
    fetchNews().then((markdown) => {
      this.setState({ news: markdown });
    });
  }

  render() {
    const { news } = this.state;
    return (
      <div className="NewsComponent">
        <h2 className="NewsComponent__title">Nouveautés</h2>
        <hr className="solid" />
        <div className="NewsComponent__body">
          <ReactMarkdown>{news}</ReactMarkdown>
        </div>
      </div>
    );
  }
}
export default NewsComponent;
