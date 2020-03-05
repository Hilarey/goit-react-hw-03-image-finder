import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Layout from "./Layout/Layout";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import LoadMore from "./LoadMore/LoadMore";
import cardsApi from "../services/cardsApi";
import scrollTo from "../services/scrollTo";

export default class App extends Component {
  state = {
    cards: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    largeImage: null
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchCards();
    }
  }

  fetchCards = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });

    cardsApi
      .fetchCardsWithQuery(searchQuery, page)
      .then(cards =>
        this.setState(prevState => ({
          cards: [...prevState.cards, ...cards],
          page: prevState.page + 1
        }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }, scrollTo));
  };

  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      cards: []
    });
  };

  // webformatURL - ссылка на маленькое изображение для списка карточек
  // largeImageURL - ссылка на большое изображение для модального окна;

  unsetLargeImageUrl= () => {
      this.setState({ largeImage: null });
    };

  onLargeImage = largeImageURL => {
      this.setState({ largeImage: largeImageURL });
  };

  render() {
    const { cards, loading, error, largeImage } = this.state;

    return (
      <Layout>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {cards.length > 0 && (
          <ImageGallery cards={cards} onLargeImage={this.onLargeImage} />
        )}
        {loading && (
          <Loader type="Puff" color="#00BFFF" height={50} width={50} />
        )}
        {cards.length > 0 && !loading && <LoadMore onClick={this.fetchCards} />}
        {largeImage && <Modal src={largeImage} onClose={this.unsetLargeImageUrl} />}
      </Layout>
    );
  }
}
