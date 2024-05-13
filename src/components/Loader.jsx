import { ActivityIndicator } from "react-native";


import { useWindowDimensions } from "react-native";
import React from 'react';
import { View , Text} from "react-native";
const Loader = ({visible=false}) => {
    const {height, width} = useWindowDimensions()
    return visible && ( 
        <View className="flex-1 absolute z-20  flex justify-center items-center " style={[{backgroundColor:'rgba(0,0,0,0.5)'},{height, width}]}>

            <View className="w-40 h-20 bg-white flex flex-row items-center justify-evenly rounded-md">
              <ActivityIndicator size="large" color={"#000"}/>
              <Text className="text-black">Chargement ...</Text>
            </View>
        </View>
     );
}
 
export default Loader;