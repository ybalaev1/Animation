import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  Animated,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView
} from "react-native";
let wi = require("./imag/thumbs-up.png");
let height = Dimensions.get("window").height;
let width = Dimensions.get("window").width;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Anim: new Animated.Value(0),
      ready: false,
      SlideInUp: new Animated.Value(0),
      op: new Animated.Value(0),
      butClick: "123",
      wifi: wi
    };
    this.click = this.click.bind(this);
  }

  componentDidMount() {
    this.click();
    // this.refresh()
  }

  click() {
    Animated.timing(this.state.Anim, {
      toValue: 1,
      duration: 1000
    }).start();
  }
  addButton = () => {
    Animated.timing(this.state.op, {
      toValue: 1,
      duration: 500
    }).start();
  };
  refresh = () => {
    Animated.parallel([
      Animated.timing(this.state.SlideInUp, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true
      })
      // Animated.timing(this.state.op,{
      //   toValue:1,
      //   duration:10000
      // })
    ]).start();
  };
  render() {
    let { SlideInUp } = this.state;
    return (
      <View style={stst.bColor}>
        <Animated.View style={([stst.backb], [{ opacity: this.state.Anim }])}>
          <TouchableOpacity onPress={() => this.refresh()}>
            <View style={stst.back}>
              <TouchableOpacity>
                <Text style={stst.butt}>
                  {this.state.butClick}
                  {"\n"}
                </Text>
                <Text style={stst.butt}>{this.state.butClick}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={stst.butt}>
                  {this.state.butClick}
                  {"\n"}
                </Text>
                <Text style={stst.butt}>{this.state.butClick}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateY: SlideInUp.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0]
                })
              }
            ],
            flex: 1,
            alignItems: "center",
            opacity: 0.9,
            margin: 20,
            borderRadius: 10,
            padding: 10,
            backgroundColor: "#383838"
          }}
        >
          <TouchableOpacity onPress={() => this.addButton()}>
            <Text style={stst.butt}>{"Узнать подробности"}</Text>
            <Animated.View
              style={{
                opacity: this.state.op
              }}
            >
              <Text style={stst.butt}>{"asf2211221"}</Text>
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

let stst = StyleSheet.create({
  backb: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  back: {
    // flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 3
    },
    opacity: 0.9,
    shadowRadius: 5,
    shadowOpacity: 0.6,
    borderRadius: 10,
    margin: 20,
    backgroundColor: "#383838"
    // width:110
  },
  bColor: {
    height: height,
    backgroundColor: "#383838"
  },
  butt: {
    backgroundColor: "",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    padding: 10,
    margin: 5,
    shadowRaduis: 2,
    color: "white",
    textAlign: "center"
  }
});
