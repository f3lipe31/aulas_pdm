import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importando as Telas
import DespesaRecente from './screens/DespesaRecentes';
import TodasDespesas from './screens/TodasDespesas';
import GerenciarDespesa from './screens/GerenciarDespesa';

// IMPORTANDO O SEU COMPONENTE DA FOTO:
import IconButton from './components/IconButton';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Menu de Abas Inferiores
function BottomTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="DespesaRecentes" 
        component={DespesaRecente} 
        options={{
          title: 'Recentes',
          tabBarIcon: ({ color, size }) => <Ionicons name="time" size={size} color={color} />
        }}
      />
      <Tab.Screen 
        name="TodasDespesas" 
        component={TodasDespesas} 
        options={{
          title: 'Todas',
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}

// Navegação Principal (Pilha)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
          name="Despesas" 
          component={BottomTabScreen} 
          options={({ navigation }) => ({ // <-- O OPTIONS DA ATIVIDADE 2 FICA AQUI!
            title: 'Meu App de Despesas',
            headerRight: ({ tintColor }) => (
              <IconButton 
                icon="add" 
                size={24} 
                color={tintColor} 
                onPress={() => navigation.navigate('GerenciarDespesa')} // Abre a tela de gerir
              />
            ),
          })} 
        />

        <Stack.Screen 
          name="GerenciarDespesa" 
          component={GerenciarDespesa} 
          options={{ title: 'Gerenciar Despesa' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}