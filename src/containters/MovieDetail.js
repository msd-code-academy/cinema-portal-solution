import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {
  Container,
  Grid,
  Image,
  Segment,
  Header,
  Input,
  Divider,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import BuyButton from './../components/buttons/BuyButton';
import Price from './../components/Price';

class MovieDetail extends Component {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      noOfTickets: 1
    };
  }

  handleChange (e) {
    this.setState({noOfTickets: e.target.value});
  }

  getImageSrc () {
    const {movie} = this.props;

    if (movie) {
      return movie.image;
    }

    return 'https://react.semantic-ui.com/assets/images/wireframe/image.png';
  }

  getDescription () {
    const {movie} = this.props;

    if (movie) {
      return movie.description;
    }

    return (
      <Image
        src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png'/>
    );
  }

  render () {
    const {
      isLoading,
      movie,
      onBuy
    } = this.props;
    let loadingIndicator = null;

    if (isLoading) {
      loadingIndicator = (
        <Dimmer active inverted>
          <Loader>Loading...</Loader>
        </Dimmer>
      );
    }

    return (
      <Container>
        <Header as='h2' attached='top'>
          {movie && movie.title ? movie.title : '...'}
        </Header>
        <Segment attached>
          {loadingIndicator}
          <Grid>
            <Grid.Column width={4}>
              <Image
                src={this.getImageSrc()} />
            </Grid.Column>
            <Grid.Column width={8}>
              {this.getDescription()}
            </Grid.Column>
            <Grid.Column width={4}>
              <div>
                <Input
                  value={this.state.noOfTickets}
                  onChange={this.handleChange}
                  size='mini'
                  action={<BuyButton onClick={onBuy}/>}
                  type='number'
                />
              </div>
              <Divider hidden/>
              <div>
                <Price price={movie && movie.price ? movie.price : NaN}/>
              </div>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

MovieDetail.propTypes = {
  movie: PropTypes.object,
  isLoading: PropTypes.bool,
  onBuy: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const mapStateToProps = (state, props) => {
  const movieId = Number(props.match.params.id);

  return {
    movie: state.movies.movies[movieId]
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);