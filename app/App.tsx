import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SongList as List} from './containers/screens/List/List';
import {ListDetails} from './containers/screens/Details/ListDetails';
import {SongList as AddSong} from './containers/screens/Add/SongList';
import {EditSong} from './containers/screens/Edit/Edit';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const Stack = createNativeStackNavigator();
export const NavigationHeaderStyle: any = {
  headerStyle: {
    backgroundColor: '#7DE695',
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
};

export default function Root() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={List}
            options={{title: 'Song List', ...NavigationHeaderStyle}}
          />
          <Stack.Screen
            name="Details"
            component={ListDetails}
            options={{title: 'Song Details', ...NavigationHeaderStyle}}
          />
          <Stack.Screen
            name="Add"
            component={AddSong}
            options={{title: 'Add Song', ...NavigationHeaderStyle}}
          />
          <Stack.Screen
            name="Edit"
            component={EditSong}
            options={{title: 'Edit Song', ...NavigationHeaderStyle}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

LogBox.ignoreAllLogs(); //Ignore all log notifications
