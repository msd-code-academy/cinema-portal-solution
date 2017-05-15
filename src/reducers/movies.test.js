import {rootReducer} from './index';
const movie = {
  id: 1,
  title: '12 Years a Slave',
  image: '/movies/12_years_slave.jpg',
  venue: 'Great hall, no. 1',
  description: 'Based on an incredible true story of one man\'s fight for survival and freedom. In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Facing cruelty personified by a malevolent slave owner, as well as unexpected kindnesses, Solomon struggles not only to stay alive, but to retain his dignity. In the twelfth year of his unforgettable odyssey, Solomon\'s chance meeting with a Canadian abolitionist will forever alter his life. Written by Fox Searchlight',
  when: new Date(2017, 3, 27, 18, 0),
  availableSeats: 273,
  price: 6.3,
  tags: ['IMAX', 'Oscar winner']
};

describe('reducers', function () {
  describe('movies', function () {
    describe('GET_ALL_MOVIES_SUCCESS', function () {
      it('successfully store list of movies', function () {
        const state = rootReducer({
            movies: {
              ids: [],
              movies: {},
              isLoading: true,
              isListLoaded: false,
              errorInList: new Error('Some error')
            }
          }, {
            type: 'GET_ALL_MOVIES_SUCCESS',
            movies: [
              movie
            ]
          });
        expect(state.movies).toEqual(
          {
            ids: [1],
            movies: {1: movie},
            isLoading: false,
            isListLoaded: true,
            errorInList: null
          });
      });
    });
  });
});