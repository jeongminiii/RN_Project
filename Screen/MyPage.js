import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const MyPageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../images/mark.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.username}>@@@</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      {/* 추가적인 마이페이지 정보 및 설정 영역 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  editProfileButton: {
    padding: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
});

export default MyPageScreen;
