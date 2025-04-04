import { Tabs } from "expo-router";
import {Entypo} from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RootLayout(){
    return(
        <Tabs screenOptions={{tabBarActiveTintColor:"#00000", tabBarStyle:{backgroundColor:"#3b76c4", borderTopWidth:0 }}}>
            <Tabs.Screen name="index" options={{title:"Home", headerShown:false, tabBarIcon:({color}) => <Entypo name="home" size={24} color={color} />}} />
            <Tabs.Screen name="profile" options={{title: "Profile", headerShown:false, tabBarIcon:({color}) => <MaterialCommunityIcons name="account" size={24} color={color} /> }}/>
            <Tabs.Screen name="tasks" options={{title: "Tasks"}}/>
        </Tabs>
    )
}