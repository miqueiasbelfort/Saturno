import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

// routes
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
