import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, tags, onLargeImage, id }) => (
  <img
    src={webformatURL}
    alt={tags}
    className={styles.imageGalleryItemImage}
    onClick={() => {
      onLargeImage(id);
    }}
  />
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onLargeImage: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default ImageGalleryItem;
