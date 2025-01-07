import React from "react";
import {View, Text, StyleSheet} from "react-native";

const App = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.square}>
                <Text style={styles.text}>Hello, world</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1, // Chiếm toàn bộ không gian màn hình
        justifyContent: "center", // Căn giữa theo chiều dọc
        alignItems: "center", // Căn giữa theo chiều ngang
    },
    square: {
        width: 100, // Chiều rộng của hình vuông
        height: 100, // Chiều cao của hình vuông
        backgroundColor: "black", // Màu nền
        justifyContent: "center", // Căn giữa nội dung theo chiều dọc
        alignItems: "center", // Căn giữa nội dung theo chiều ngang
    },
    text: {
        color: "white", // Màu chữ
        fontSize: 16, // Kích thước chữ
    },
});

export default App;
