import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateScreen from "./screens/CreateScreen";
import IndexScreen from "./screens/IndexScreen";
import { Provider } from "./context/BlogContext";
import ShowScreen from "./screens/ShowScreen";
import { TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EditScreen from "./screens/EditScreen";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitle: "Blog Uygulamasi" }}>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
              <FontAwesome name="plus-square-o" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen
        name="Show"
        component={ShowScreen}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Edit", { id: route.params.id })
              }
            >
              <FontAwesome name="pencil-square-o" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Edit" component={EditScreen} />
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
