import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';


const WelcomeScreen = () => {
    //states
    const navigation = useNavigation();
    return ( 
        <View className="flex-1 bg-white relative flex justify-center p-3">
            <View className="absolute -top-8 -left-8 w-32 h-32 bg-rose-400 rounded-full"></View>
            <View>
                <Text className="text-center text-rose-400 text-2xl font-bold ">QuizTime</Text>
            </View>
            <View className="w-44 h-44 mx-auto">
                <Image source={require("../assets/welcome.png")} className="w-full h-full object-cover"/>
            </View>
            

            <View className="mt-10">
                
                <Pressable className="bg-[#6a5ae0] py-3  rounded-full" onPress={()=>navigation.navigate("quiz")} >
                    <Text className="text-center text-xl text-white font-bold">Start</Text>
                </Pressable>
            </View>

            <View className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-400 rounded-full"></View>
           
        </View>
     );
}
 
export default WelcomeScreen;