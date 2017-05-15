import axios from './../utils/axios';
import {push} from 'react-router-redux';

const getAllMoviesStart = () => ({
  type: 'GET_ALL_MOVIES_START'
});

const getAllMoviesFail = () => ({
  type: 'GET_ALL_MOVIES_FAIL'
});

const getAllMoviesSuccess = (movies) => ({
  type: 'GET_ALL_MOVIES_SUCCESS',
  movies
});

export const getAllMovies = (forceRefresh = false) => {
  return (dispatch, getState) => {
    const state = getState();

    if (!forceRefresh && state.movies.isListLoaded) {
      return;
    }

    dispatch(getAllMoviesStart());

    axios('/movies').then(
      (response) => dispatch(getAllMoviesSuccess(response.data)),
      () => dispatch(getAllMoviesFail())
    );
  }
};

export const navigateToDetail = (movieId) => {
  return (dispatch) => {
    dispatch(push(`/movies/${movieId}`));
  };
};