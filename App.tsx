import { registerRootComponent } from 'expo';
import mobileAds from 'react-native-google-mobile-ads';
import { Home, Item, List } from '@/presentation';
import { ThemeProvider } from '@/presentation/context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Item: undefined;
};

export default function App() {
  mobileAds()
    .initialize()
    .then((adapterStatuses) => {
      // Initialization complete!
    });

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <ThemeProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Item" component={Item} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
registerRootComponent(App);
