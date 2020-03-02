import axios from 'axios';

const fetchCardsWithQuery = (searchQuery, pageNumber = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${pageNumber}&key=15396872-c9327f1987334023142d3e162&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchCardsWithQuery,
};