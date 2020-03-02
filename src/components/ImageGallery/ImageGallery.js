import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ cards, onLargeImage }) => (
  <ul className={styles.imageGallery}>
    {cards.map(({ id, webformatURL, tags }) => (
      <li key={id} className={styles.imageGalleryItem}>
        <ImageGalleryItem
          id={id}
          webformatURL={webformatURL}
          tags={tags}
          onLargeImage={onLargeImage}
        />
      </li>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ImageGallery;
