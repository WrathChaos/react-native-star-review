import React from "react";
import PropTypes from "prop-types";
import styles, { _reviewTextStyle } from "./StarReview.style";
import { View, Text } from "react-native";
import NumberFormat from "react-number-format";
import Icon from "react-native-dynamic-vector-icons";

const StarReview = props => {
  container = [];
  const {
    stars,
    ratings,
    reviews,
    starSize,
    starColor,
    textColor,
    reviewsText,
    enableStars,
    iconComponent,
    reviewTextStyle,
    enableParentheses
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
          <Text style={reviewTextStyle || _reviewTextStyle(textColor)}>
            {enableStars && parseFloat(ratings).toFixed(1)}{" "}
            {enableParentheses ? `(${value})` : value}
          </Text>
        )}
      />
    );
  }

  function renderReviewContainer() {
    return (
      <Text style={styles.textContainer}>
        {renderReview()} <Text style={{ color: textColor }}>{reviewsText}</Text>
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerGlue}>
        {renderStars()}
        {renderReviewContainer()}
      </View>
    </View>
  );
};

StarReview.propTypes = {
  stars: PropTypes.number,
  ratings: PropTypes.number,
  reviews: PropTypes.number,
  starSize: PropTypes.number,
  textColor: PropTypes.string,
  starColor: PropTypes.string,
  enableStars: PropTypes.bool,
  reviewsText: PropTypes.string,
  enableParentheses: PropTypes.bool
};

StarReview.defaultProps = {
  stars: 5,
  ratings: 0,
  reviews: 0,
  starSize: 16,
  enableStars: false,
  textColor: "#757575",
  starColor: "#ffa114",
  reviewsText: "reviews",
  enableParentheses: true
};

export default StarReview;
