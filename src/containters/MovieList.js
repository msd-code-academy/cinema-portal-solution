import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Item, Container, Grid} from 'semantic-ui-react';
import MovieItem from './../components/MovieItem';
import {getAllMovies, navigateToDetail} from './../actions/movies';
import LoadError from './../components/LoadError';

class MovieList extends Component {
  constructor (props) {
    super(props);

    this.handleReload = this.handleReload.bind(this);
  }

  componentDidMount () {
    this.props.getAllMovies();
  }

  handleReload () {
    this.props.getAllMovies(true);
  }

  render () {
    const {
      movies,
      error,
      isLoading,
      onBuy
    } = this.props;

    if (error) {
      return (
        <Grid centered>
          <Grid.Column width={8}>
            <LoadError
              title='Error while loading movies.'
              error={error}
              isLoading={isLoading}
              onReload={this.handleReload}
            />
          </Grid.Column>
        </Grid>
      );
    }

    return (
      <Container>
        <Item.Group divided>
          {movies.map(movie =>
            <MovieItem key={movie.id} movie={movie} onBuyClick={onBuy} />)
          }
        </Item.Group>
      </Container>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  error: PropTypes.object,
  isLoading: PropTypes.bool,
  onBuy: PropTypes.func
};

const mapStateToProps = (state) => ({
  movies: state.movies.ids.map(id => state.movies.movies[id]),
  error: state.movies.errorInList,
  isLoading: state.movies.isLoading,
});

const mapDispatchToProps = {
  getAllMovies,
  onBuy: navigateToDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);