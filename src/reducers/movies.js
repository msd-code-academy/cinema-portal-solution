const initialState = {
  ids: [],
  movies: {},
  isLoading: false,
  isListLoaded: false,
  errorInList: null
};

const movies = (state = initialState, action) => {
  let movies = {};
  let ids = [];

  switch (action.type) {
    case 'GET_ALL_MOVIES_START':
      return {...state, isLoading: true};
    case 'GET_ALL_MOVIES_FAIL':
      return {...state, isLoading: false, errorInList: new Error('Error while loading')};
    case 'GET_ALL_MOVIES_SUCCESS':
      movies = action.movies.reduce(
        (memo, movie) => {
          const movies = memo;
          movies[movie.id] = movie;

          return movies;
        },
        {}
      );
      ids = action.movies.map(movie => movie.id);

      return {...state, isLoading: false, isListLoaded: true, movies, ids, errorInList: null};
    default:
      return state;
  }
};

export default movies;