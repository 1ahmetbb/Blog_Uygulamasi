import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateScreen from "./screens/CreateScreen";
import IndexScreen from "./screens/IndexScreen";
import { BlogProvider } from "./context/BlogContext";
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitle: "Blok Uygulamasi" }}>
      <Stack.Screen name="Index" component={IndexScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </BlogProvider>
  );
}
