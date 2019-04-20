import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import styles from "./StarReview.style";

const StarReview = props => {
  container = [];
  const {
    stars,
    ratings,
    reviews,
    starSize,
    starColor,
    reviewsText,
    iconComponent
  } = props;

  function renderStars() {
    for (let index = 1; index <= stars; index++) {
      let starType = "star";
      if (index > ratings) {
        starType = "staro";
      }

      container.push(
        iconComponent || (
          <Icon
            key={index}
            name={starType}
            size={starSize}
            type="AntDesign"
            color={starColor}
          />
        )
      );
    }

    return container;
  }

  function renderReview() {
    return (
      <NumberFormat
        value={reviews}
        defaultValue={1}
        displayType={"text"}
        thousandSeparator={true}
        renderText={value => (
          <Text style={styles.reviewTextStyle}>{value} </Text>
        )}
      />
    );
  }

  function renderReviewContainer() {
    return (
      <Text style={styles.textContainer}>
        {renderReview()} {reviewsText}
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      {renderStars()}
      {renderReviewContainer()}
    </View>
  );
};

StarReview.propTypes = {
  stars: PropTypes.number,
  ratings: PropTypes.number,
  reviews: PropTypes.number,
  starSize: PropTypes.number,
  starColor: PropTypes.string,
  reviewsText: PropTypes.string
};

StarReview.defaultProps = {
  stars: 5,
  ratings: 0,
  reviews: 0,
  starSize: 16,
  starColor: "#ffa114",
  reviewsText: "reviews"
};

export default StarReview;
