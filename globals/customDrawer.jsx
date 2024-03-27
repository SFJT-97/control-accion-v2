import { View } from 'react-native';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import DrawerProfile from './drawerProfile';

import { Button, IconButton, useTheme } from 'react-native-paper';

const CustomDrawer = (props) => {

    const theme = useTheme();
    /* const insets = useSafeAreaInsets(); */

    return(
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <DrawerProfile />
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View style={{ alignItems: 'center', marginVertical: 50 }}>

        {/* Drawer Footer */}

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: 50, marginHorizontal: 20, position: 'absolute', bottom: 0 }}>
        <View>
            <IconButton 
                mode='outlined' 
                icon="lightbulb-outline" 
                size={28}
                onPress={() => console.log('Theme Button pressed')}
                iconColor={theme.colors.primary} />
        </View>
        <View>
            <Button icon="hand-wave-outline" textColor={theme.colors.onError} buttonColor={theme.colors.error} mode="contained" onPress={() => console.log('Log out pressed')}>
                Log out
            </Button>
            {/* for managing log out https://docs.expo.dev/router/navigating-pages/#imperative-navigation  */}
        </View>
    </View>
        </View>
      </View>
    )
}

export default CustomDrawer;