import React from "react";
import PropTypes from "prop-types";
import styles, { reviewTextStyle } from "./StarReview.style";
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
          <Text style={reviewTextStyle(textColor)}>{value} </Text>
        )}
      />
    );
  }

  function renderReviewContainer() {
    return (
      <Text style={styles.textContainer}>
        {renderReview()}{" "}
        <Text style={reviewTextStyle(textColor)}>{reviewsText}</Text>
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
  textColor: PropTypes.number,
  starColor: PropTypes.string,
  reviewsText: PropTypes.string
};

StarReview.defaultProps = {
  stars: 5,
  ratings: 0,
  reviews: 0,
  starSize: 16,
  textColor: "#757575",
  starColor: "#ffa114",
  reviewsText: "reviews"
};

export default StarReview;
