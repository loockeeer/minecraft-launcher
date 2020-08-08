import React from 'react';
import '../css/NewsComponent.css';

class NewsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="NewsComponent">
        <h2 className="NewsComponent__title">Nouveautés</h2>
        <p className="NewsComponent__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a orci lacus. Aliquam ac posuere eros. Fusce sit amet malesuada ligula. Cras tellus leo, pretium a tortor et, condimentum tincidunt massa. Sed hendrerit nec velit et iaculis. Fusce vitae mollis quam. Donec at magna tincidunt, interdum enim nec, gravida est. Ut in nulla tincidunt, hendrerit augue ut, malesuada ligula. Nullam suscipit varius enim vel placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
      </div>
    );
  }
}
export default NewsComponent;
