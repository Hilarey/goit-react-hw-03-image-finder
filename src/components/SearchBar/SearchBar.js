import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";

export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    query: ""
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={styles.searchBar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.searchFormButton}>
            <span className={styles.searchFormButtonLabel}>Search</span>
          </button>
          <input
            className={styles.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
