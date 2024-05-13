import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Image, Text} from "react-native";



const SplashScreen = () => {
  const navigation = useNavigation();
   useEffect(() => {
     // Simuler une attente de 3 secondes avant de passer à l'écran principal
     const timer = setTimeout(() => {
      navigation.navigate("welcome") // Remplace l'écran actuel par l'écran principal
     }, 3000);

     return () => clearTimeout(timer);
   }, [navigation]);
  return (
    <View className='flex-1  flex-col justify-center items-center'>
      <Image source={require("../assets/logo.png")} className="w-20 h-20 object-cover" />
      <Text className="text-[#6a5ae0] py-5 text-xl font-bold">Quiz App</Text>
    </View>
  );
};

export default SplashScreen;
