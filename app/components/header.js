import { StyleSheet, View, Text, Image } from 'react-native';
import Icons from '../../assets/Icons/index.js';
import { Themes } from '../../assets/Themes/index.js';

export default function Header() {
  return(
    <View style={styles.topRow}>
        <Image source={Icons.menu.light} style={styles.buttons}> </Image>
        <Text style={styles.logo}> ensom </Text>
        <Image source={Icons.sun} style={styles.buttons}> </Image>
    </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
      width: 50,
      height: 50
    },

    topRow: {
      flexDirection: 'row',
      marginTop: '15%',
      paddingHorizontal: 15,
      backgroundColor: Themes.light.bg,
      justifyContent: 'center',
      width: '100%',
      justifyContent: 'space-between'
    },

    logo: {
      fontSize: 32,
      textAlign: 'center',
      fontFamily: 'SydneyBold',
      color: Themes.light.text
    },

  });