import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateScreen from "./screens/CreateScreen";
import IndexScreen from "./screens/IndexScreen";
import { Provider } from "./context/BlogContext";
import ShowScreen from "./screens/ShowScreen";
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitle: "Blok Uygulamasi" }}>
      <Stack.Screen name="Index" component={IndexScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Show" component={ShowScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}
