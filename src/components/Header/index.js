/** @format */

import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

function Header({ label, goBack, rightButton, rightComponent }) {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content"></StatusBar>
      <View style={styles.container}>
        {goBack && (
          <TouchableOpacity onPress={goBack} style={styles.back}>
            <Ionicons
              name="ios-chevron-back"
              size={25}
              color="white"
              style={styles.icon}
            ></Ionicons>
          </TouchableOpacity>
        )}

        <View style={{marginLeft: 40}}>
          <Text style={styles.header} numberOfLines={1}>
            {label}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

Header.defaultProps = {
  label: "Header",
  goBack: null,
  rightButton: null,
};

export default Header;
