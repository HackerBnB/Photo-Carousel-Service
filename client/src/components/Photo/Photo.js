import React, { Component } from 'react';

import PhotoDisplay from '../PhotoDisplay';
import PhotoCarousel from '../PhotoCarousel';
import axios from 'axios';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photo: {},
      isCarouselHidden: true
    };

    this.showCarousel = this.showCarousel.bind(this);
    this.hideCarousel = this.hideCarousel.bind(this);
  }

  componentDidMount() {
    const room = window.location.pathname;
    console.log(room);
    axios.get(`/api${room}/photos`)
      .then((res) => {
        console.log(res.data.rows);
        this.setState({
          photos: res.data.rows
        }, () => {
          this.setState({
            photo: this.state.photos[0]
          })
        });
      })
      .catch((err) => {
        console.log('Error fetching data through axios: ', err);
      })
  }

  showCarousel(e) {
    e && e.stopPropagation && e.stopPropagation();
    document.body.classList.add('hide-all');
    this.setState({ isCarouselHidden: false });
  }

  hideCarousel() {
    document.body.classList.remove('hide-all');
    this.setState({ isCarouselHidden: true });
  }

  render() {
    return (
      <div className="photo-gallery">
        <PhotoDisplay
          photo={this.state.photo}
          showCarousel={this.showCarousel}
        />
        <PhotoCarousel
          photos={this.state.photos}
          isHidden={this.state.isCarouselHidden}
          hideCarousel={this.hideCarousel}
          photo={this.state.photo}
        />
      </div>
    );
  }
}

export default Photo;
