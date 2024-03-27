import * as React from 'react'
import { View, ScrollView } from 'react-native';
import { Text, TextInput, IconButton, useTheme, Dialog, Portal, Button } from 'react-native-paper';
import { Image } from 'expo-image';


const DrawerProfile = (userData) => {

    const theme = useTheme();

    const [visible, setVisible] = React.useState(false);
  
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [adress, setAdress] = React.useState("");

    return(
        <View style={{ marginHorizontal: 10, marginBottom: 10, rowGap: 15}}>

            <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Edit Profile</Dialog.Title>
                <Dialog.Content>
                    <ScrollView contentContainerStyle={{ alignItems: "center", rowGap: 30 }}>
                        <View style={{ alignItems: 'center'}}>
                            <Image 
                                style={{ width: 100, height: 100, borderRadius: 50 }} 
                                source="https://picsum.photos/seed/696/3000/2000" />
                            <IconButton
                                icon="camera-plus"
                                size={24}
                                onPress={() => console.log('Pressed Profile Picture')}
                            />                                
                        </View>
                        <View style={{ width: '80%', rowGap: 20 }}>
                            <TextInput
                                disabled={true}
                                placeholder="Full Name"
                            />

                            <TextInput
                                disabled={true}
                                placeholder="Company"
                            />                            

                            <TextInput
                                label="Phone"
                                placeholder="Current Phone"
                                value={phone}
                                onChangeText={phone => setPhone(phone)}
                            />

                            <TextInput
                                label="Email"
                                placeholder="Current Email"
                                value={email}
                                onChangeText={email => setEmail(email)}
                            />
                            <TextInput
                                label="Adress"
                                placeholder="Current Adress"
                                value={adress}
                                onChangeText={adress => setAdress(adress)}
                            />                                                        
                        </View>
                    </ScrollView>
                </Dialog.Content>
                <Dialog.Actions>
                    <View style={{ flexDirection: 'row', columnGap: 20, marginTop: 30 }}>
                        <Button textColor={theme.colors.error} onPress={hideDialog}>Cancel</Button>
                        <Button onPress={hideDialog} textColor="green">Save</Button>
                    </View>
                </Dialog.Actions>
              </Dialog>
            </Portal>

            <View style={{ marginHorizontal: 10 }}>
                <Text variant="headlineSmall">Welcome!</Text>
            </View>
            <View style={{ alignItems: 'center', rowGap: 10 }}>
                <View>
                    <Image 
                        style={{ width: 100, height: 100, borderRadius: 50 }} 
                        source="https://picsum.photos/seed/696/3000/2000" />
                </View>

                <View style={{ alignItems: 'start' }}>
                    <Text variant="bodyMedium">ID: 1235test6789</Text>
                    <Text variant="bodyMedium">Name: Jhon Smith</Text>
                    <Text variant="bodyMedium">Company: SpaceX</Text>
                    <Text variant="bodyMedium">Email: jhon@smith.com</Text>
                </View>
                <View>
                

                <IconButton
                    icon="account-edit-outline"
                    style={{ alignItems: 'center' }}
                    size={26}
                    onPress={showDialog}
                    iconColor={theme.colors.primary}
                />
                </View>
            </View>
        </View>
    );
}

export default DrawerProfile;