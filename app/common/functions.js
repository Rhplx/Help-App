export const getBaseApi = () => {
    return "http://192.168.100.15:5000";
}

export const checkSession = async (navigation) => {
    let sessionId = await AsyncStorage.getItem("sessionId");
    if (!sessionId) {
        navigation.navigate("Login");
    }
}