import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

// Corrigido para os nomes exatos das suas telas
import DespesasRecentes from './screens/DespesasRecentes';
import TodasDespesas from './screens/TodasDespesas';
import GerenciarDespesa from './screens/GerenciarDespesa';

import IconButton from './components/IconButton';
import DespesasContextProvider from './store/despesas-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function DespesasVisaoGeral() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: '#2b3990' },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: '#2b3990' },
        tabBarActiveTintColor: '#ffcc00',
        tabBarInactiveTintColor: '#a1b2d4',
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('GerenciarDespesa');
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="DespesasRecentes"
        component={DespesasRecentes}
        options={{
          title: 'Despesas Recentes',
          tabBarLabel: 'Recentes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="TodasDespesas"
        component={TodasDespesas}
        options={{
          title: 'Todas as Despesas',
          tabBarLabel: 'Todas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <DespesasContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#2b3990' },
              headerTintColor: 'white',
            }}
          >
            <Stack.Screen
              name="DespesasVisaoGeral"
              component={DespesasVisaoGeral}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GerenciarDespesa"
              component={GerenciarDespesa}
              options={{ title: 'Gerenciar Despesa', presentation: 'modal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DespesasContextProvider>
    </>
  );
}