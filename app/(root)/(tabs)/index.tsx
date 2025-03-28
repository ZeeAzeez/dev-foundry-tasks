import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/packageDetails">Package Details</Link>
      <Link href="/profile"> Profile Page</Link>
      <Link href="/message">Messages</Link>
    </View>
  );
}
