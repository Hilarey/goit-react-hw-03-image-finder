import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
  };

  overleyRef = createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleOverleyClick = e => {
    const { current } = this.overleyRef;
    if (current && e.target !== current) {
      return;
    }
    this.props.onClose();
  };

  render() {
    const { src } = this.props;
    return (
      <div
        className={styles.overlay}
        ref={this.overleyRef}
        onClick={this.handleOverleyClick}
      >
        <div className={styles.modal}>
          <img src={src} alt="LargePhoto" />
        </div>
      </div>
    );
  }
}
