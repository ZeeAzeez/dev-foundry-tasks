import { Tabs } from "expo-router";

export default function RootLayout(){
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{title:"Home", headerTitle: "Bootcamp Buddy", headerTintColor:"#FF5700",}} />
            <Tabs.Screen name="profile" options={{title: "Profile"}}/>
        </Tabs>
    )
}