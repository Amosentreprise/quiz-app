import { Alert, Pressable, Text, View } from "react-native";
import questions from "../data/questions";
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

const QuizScreen = () => {
    const navigation = useNavigation();
    const data = questions;

    const [isCorrect, setIsCorrect] = useState(null)
   
    const [index, setIndex] = useState(0)
    const currentQuestion = data[index];
       const [selectAnswerIndex, setSelectAnswer] = useState(null);

    useEffect(()=>{
        if (selectAnswerIndex !== null) {
            if (selectAnswerIndex === currentQuestion?.correctAnswerIndex) {
                setIsCorrect(true);
                
                setPoint((prev)=> prev+1);
                
            }
            else{
                setIsCorrect(false);
               
            }
            
        }

    }, [selectAnswerIndex])

    useEffect(()=>{
       setSelectAnswer(null),
       setIsCorrect(null)

    },[currentQuestion])

 
    const [point, setPoint] = useState(0);
    const progressPercentage = Math.floor((index/data.length) * 100)
    function next(index){
        if(index < data.length-1){
            setIndex(index+1)
        }
        else{
            navigation.navigate("score", {
                pointTotal:point,
                length:data.length,
               
            })
        }  

    }
   
    return ( 
     <View className="flex-1 bg-slate-200">
        <View className="w-full h-10 mt-3 px-5 flex items-end">
            <View className="w-8 h-8 rounded-full bg-green-400 flex p-1 "><Text className="m-auto font-bold text-black">{index+1}/{data.length}</Text></View>
        </View>
        <View className="w-full h-4 bg-white my-1">
            <Text className={`h-4 absolute bg-rose-500 `} style={{ width : `${progressPercentage}%`}}></Text>

        </View>
        
        <View className="p-2 my-8">
          <Text className="text-black text-xl text-center py-4 font-bold">{currentQuestion.question}</Text>
          
          <View className="flex flex-col gap-3 w-full mt-4">
           {
            currentQuestion.options.map((options, index)=>(
                <Pressable key={options.id} className={`border border-[#6a5ae0]  bg-white rounded-lg p-2 ${selectAnswerIndex === index && index === currentQuestion.correctAnswerIndex ? " bg-green-500 text-white" : selectAnswerIndex !== null && selectAnswerIndex === index ? " bg-red-500 text-white" : " bg-white"}  flex flex-row gap-2 items-center w-full`} onPress={()=> selectAnswerIndex === null && setSelectAnswer(index)}>
                    <View className="w-10 h-10 bg-rose-400 rounded-full flex ">
                      <Text className="text-black  m-auto font-bold ">{options.option}</Text>
                    </View>
                    
                    <Text className="text-slate-700">{options.answer}</Text>
                </Pressable>
            ))
           }
           </View>
           
        </View>
        <View className="p-2 mt-6">
             <Pressable className="w-full p-3 bg-rose-400 rounded-full" onPress={()=>next(index)}>
                <Text className="text-white text-center font-bold">Suivant</Text>
             </Pressable>
        </View>
     </View>
     );
}
 
export default QuizScreen;