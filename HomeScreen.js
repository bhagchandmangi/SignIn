import React from 'react'
import { View, Text, Button } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button onPress={()=> {navigation.navigate('Details')}}
          title="Go to Details"
          />
        </View>
      );
}
