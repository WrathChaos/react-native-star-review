import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import StarReview from "react-native-star-review";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundStyle}
          source={require("./assets/MagicMint.png")}
        >
          <View style={styles.containerGlue}>
            <StarReview />
            <StarReview ratings={1} stars={5} reviews={1} />
            <StarReview ratings={2} stars={5} reviews={2} />
            <StarReview ratings={3} stars={5} reviews={3} />
            <StarReview ratings={4} stars={5} reviews={4} />
            <StarReview ratings={5} stars={5} reviews={5} />
            <View style={styles.customReviewsStyle}>
              <StarReview
                ratings={1}
                stars={3}
                starColor="#4286f4"
                reviews={1301495}
              />
              <StarReview
                ratings={2}
                stars={4}
                starColor="#41f4cd"
                reviews={6421495}
                reviewsText="points"
              />
              <StarReview
                ratings={3}
                stars={5}
                starColor="#d10404"
                reviews={10501495}
                reviewsText="scores"
              />
              <StarReview
                ratings={4}
                stars={6}
                starColor="#03a7d1"
                reviews={49450495}
                reviewsText="ratings"
              />
              <StarReview
                ratings={5}
                stars={7}
                starColor="#ff0aff"
                reviews={69301495}
              />
              <StarReview
                ratings={5}
                stars={10}
                starColor="#8409ff"
                reviews={219301495}
                reviewsText="contributions"
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  backgroundStyle: {
    width: "100%",
    height: "100%"
  },
  containerGlue: {
    top: "30%",
    alignItems: "center"
  },
  customReviewsStyle: {
    top: 32,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  }
});
