import AsyncStorage from '@react-native-async-storage/async-storage';
export async function clearAsyncStorage(navigation) {
    let keys = await AsyncStorage.getAllKeys();
    if (keys.length > 0) {
        await AsyncStorage.multiRemove(keys);
        navigation.navigate("Login");
    } else {
        navigation.navigate("Login");
    }
}