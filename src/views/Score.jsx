import { View, Text, Pressable, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Score = () => {
    const navigation = useNavigation();
    const route = useRoute();
    console.log(route.params)
    return ( 
        <View className="flex-1 " >
            <View className="bg-green-500 h-20 w-full flex">
                <Text className="text-white text-xl p-1 m-auto font-bold">Resultat du Jeu</Text>
            </View>

            <View className="flex-1 justify-center items-center gap-3">
                <Image source={route.params.pointTotal < 2 ? require("../assets/pleure.png") : require("../assets/coupe.png")} className="w-40 h-40 object-cover"/>
                <Text className="text-black text-xl font-bold ">Merci vous avez eu <Text className="text-red-600 font-bold">{route.params.pointTotal}/{route.params.length}</Text> </Text>
            </View>

            <View className="p-2 flex-1  justify-center">
                <Pressable className="w-full bg-red-600 rounded-lg py-1" onPress={()=>navigation.navigate("welcome")}>
                      <Text className="text-white text-xl p-1 uppercase text-center font-bold">Nouvelle partie</Text>
                </Pressable>
            </View>
        </View>
     );
}
 
export default Score;