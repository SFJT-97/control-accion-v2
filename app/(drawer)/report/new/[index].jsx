import * as React from 'react';

import { View, ScrollView, StyleSheet } from 'react-native';

import { Text, TextInput, Button, Portal, Modal, PaperProvider } from 'react-native-paper';

import { Stack } from 'expo-router'

import { useLocalSearchParams } from 'expo-router';

import PickerComponent from './components/picker';
import PickerSeverity from './components/pickerseverity';
import DateTimeComponent from './components/date';
import HelpButton from '../Components/ReportScreen/HelpButton';



export default function NewReport() {

    const { test, name } = useLocalSearchParams();

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    return (
        <ScrollView style={{ margin: 25, paddingTop: 15, paddingBottom: 15, rowGap: 50, backgroundColor: "rgb(218, 229, 228)", borderRadius: 25 }}>
            <Stack.Screen
            options={{
                title: ( "New Report #" + test ),
                headerRight: () => <HelpButton />
            }}
            />
  
          <View>
              <TextInput 
                label="Nombre"
                value={name}
                disabled={true}
          />
          </View>

          <View style={{ rowGap: 25, marginTop: 25 }}>
              <Text style={styles.headind2}>
                Incident Type:
              </Text>
            <View style={{ display: 'flex', alignItems: 'center'}}>
              <PickerComponent />
            </View>
          </View>

          <View style={{ rowGap: 25, marginTop: 25 }}>
            <Text style={styles.headind2}>
              Time & Date
            </Text>
            <View style={{ display: 'flex', flexDirection: 'col', alignItems: 'center'}}>
                      <DateTimeComponent />
            </View>
          </View>

          <View style={{ rowGap: 25, marginTop: 25, marginBottom: 25 }}>
              <Text style={styles.headind2}>
                Severity:
              </Text>
            <View style={{ display: 'flex', alignItems: 'center'}}>
              <PickerSeverity />
            </View>
          </View>

          <View style={{ rowGap: 25, marginTop: 25, marginBottom: 25 }}>
              <Text style={styles.headind2}>
                Description:
              </Text>
            <View style={{ display: 'flex', alignItems: 'center'}}>
            <TextInput 
                mode="outlined"
                multiline={true}
                style={{ width: '80%' }}
          />
            </View>
          </View>



        </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    headind2: {
      fontSize: 24,
      marginLeft: 20,
    }
  })