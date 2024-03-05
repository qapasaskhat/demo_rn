import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

export default function Header({ title = 'Haader' }) {
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
            }}>
                {title}
            </Text>
        </View>
    </View>
}

// <View style={{
//     height: 56,
//     flexDirection: 'row',
//     alignItems: 'center'
// }}>
//     <TouchableOpacity>
//         <Text>
//             back
//         </Text>
//     </TouchableOpacity>
//     <View style={{ flexGrow: 1 }}>
//         <Text style={{
//             textAlign: 'center'
//         }}>
//             {title}
//         </Text>
//     </View>
// </View>

