import React from "react";
import {View, Text, StyleSheet, FlatList, SafeAreaView} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const notifications = [
    {
        id: "1",
        icon: "check-circle",
        title: "Bước 1. Xác định nhu cầu khách hàng",
        description: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
        time: "20/08/2020, 06:00",
    },
    {
        id: "2",
        icon: "users",
        title: "Bạn có khách hàng mới!",
        description: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
        time: "20/08/2020, 06:00",
    },
    {
        id: "3",
        icon: "user-times",
        title: "Khách hàng được chia sẻ bị trùng",
        description: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng khác.",
        time: "20/08/2020, 06:00",
    },
    {
        id: "4",
        icon: "users",
        title: "Khách hàng được thêm bị trùng",
        description: "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng khác.",
        time: "20/08/2020, 06:00",
    },
    {
        id: "5",
        icon: "check-circle",
        title: "Công việc sắp đến hạn trong hôm nay",
        description: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
        time: "20/08/2020, 06:00",
    },
    {
        id: "6",
        icon: "check-circle",
        title: "Công việc đã quá hạn",
        description: "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.",
        time: "20/08/2020, 06:00",
    },
    {
        id: "1",
        icon: "check-circle",
        title: "Bước 1. Xác định nhu cầu khách hàng",
        description: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
        time: "20/08/2020, 06:00",
    },
    {
        id: "7",
        icon: "users",
        title: "Bạn có khách hàng mới!",
        description: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
        time: "20/08/2020, 06:00",
    },
    {
        id: "8",
        icon: "user-times",
        title: "Khách hàng được chia sẻ bị trùng",
        description: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng khác.",
        time: "20/08/2020, 06:00",
    },
    {
        id: "9",
        icon: "users",
        title: "Khách hàng được thêm bị trùng",
        description: "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng khác.",
        time: "20/08/2020, 06:00",
    },
];

const App = () => {
    const renderNotification = ({item}) => (
        <View style={styles.notificationItem}>
            <Icon name={item.icon} size={30} color="#007bff" style={styles.icon} />
            <View style={styles.notificationContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.time}>{item.time}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Thông báo</Text>
            <FlatList data={notifications} keyExtractor={(item) => item.id} renderItem={renderNotification} contentContainerStyle={styles.list} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        marginTop: 40,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    list: {
        paddingHorizontal: 10,
    },
    notificationItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "#e9f5ff",
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
        marginTop: 5,
    },
    notificationContent: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    description: {
        fontSize: 14,
        color: "#555",
        marginVertical: 5,
    },
    time: {
        fontSize: 12,
        color: "#888",
    },
});

export default App;
