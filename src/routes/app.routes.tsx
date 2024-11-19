import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Scrn from '@screens/index';

const NStck = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <NStck.Navigator
      screenOptions={{ headerShown: false }}
    >
      <NStck.Screen name="groups" 
        component={Scrn.Groups}
      />
      <NStck.Screen name="new" 
        component={Scrn.NewGroup}
      />
      <NStck.Screen name="players" 
        component={Scrn.Players}
      />
    </NStck.Navigator>
  )
}