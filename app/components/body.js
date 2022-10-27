import { Image, StyleSheet, View, Text, ImageBackground } from "react-native"
import Icons from "../../assets/Icons"
import themes from "../../assets/Themes/themes"
import Profiles from "../../assets/Profiles"


export default function Body() {
  return (

    <View style={styles.body}>

        <ImageBackground source={Profiles.mtl.image} style={styles.Image} imageStyle={{borderRadius: 15}}>
            <Text style = {styles.mtl} > MTL </Text>
            <Text style = {styles.twoMilesAway} > 2 miles away </Text>
        </ImageBackground>

        <View style={styles.audioMain}>
            <Text style={styles.audioCaption}> My hottest take </Text>

            <View style={styles.images}>
                <Image source={Icons.player.light} style={styles.play}> </Image>
                <Image source={Icons.audioWave.light} style={styles.soundImage}> </Image>
            </View>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({

  body: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
  },  
  
  Image: {
        shadowColor: themes.light.shadows.shadowColor,
        shadowOpacity: themes.light.shadows.shadowOpacity,
        shadowRadius: themes.light.shadows.shadowRadius,
        shadowOffset: themes.light.shadows.shadowOffset,
        width: '100%',
        justifyContent: 'space-between',
        aspectRatio: 1/1.1,
        marginTop: 300,
        borderRadius: 20
      },

      mtl: {
        fontFamily: 'Sydney',
        color: 'white',
        fontSize: 50,
        position: 'relative',
      },

      twoMilesAway: {
        fontFamily: 'Sydney',
        color: 'white',
        fontSize: 25,
        position: 'relative',
        bottom: 7
      },

      audioMain: {
        shadowOpacity: themes.light.shadows.shadowOpacity,
        shadowColor: themes.light.shadows.shadowColor,
        shadowOffset: themes.light.shadows.shadowOffset,
        shadowRadius: themes.light.shadows.shadowRadius,
        padding: 18,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
      },

      audioCaption: {
        fontSize: 28,
        marginBottom: 600,
        fontFamily: 'Sydney',
      },
      
      images: {
        flexDirection: 'row',
        alignItems: 'center'
      },

      play: {
        resizeMode: 'contain',
        width: '20%',
        aspectRatio: 1
      },

      soundImage: {
        width: '82%',
        resizeMode: 'contain',
        aspectRatio: 4
      },


})