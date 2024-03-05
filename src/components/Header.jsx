import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

export default function Header() {
    return <View style={{
        height: 56,
        flexDirection: 'row',
        alignItems: 'center'
    }}>
        <TouchableOpacity>
            <Text>
                back
            </Text>
        </TouchableOpacity>
        <View style={{ flexGrow: 1 }}>
            <Text style={{
                textAlign: 'center'
            }}>Header</Text>
        </View>
    </View>
}