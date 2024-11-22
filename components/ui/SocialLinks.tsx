import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { Link } from 'expo-router'

type Props = {
    iconsJustify?:"flex-start" | "center" | "space-between"
}

const links=[
{
    platform:"Whatsapp",
    link:"",
    icon:<FontAwesome name='whatsapp' size={40} color='#fff' />

},{
    platform:"Telegram",
    link:"",
    icon:<Feather name='send' size={40} color='#fff' />

},{
    platform:"TikTok",
    link:"",
    icon:<FontAwesome5 name='tiktok' size={40} color='#fff' />

},{
    platform:"Instagram",
    link:"",
    icon:<FontAwesome name='instagram' size={45} color='#fff' />

},
]

const SocialLinks = ({iconsJustify="flex-start"}: Props) => {
  return (
    <View>
      <Text style={styles.text}>Join our verified social handles for more information on how Phenom works:</Text>

      <View style={[styles.links,{justifyContent:iconsJustify}]}> {links.map(({link,platform,icon})=>(<Link href={link}>{icon}</Link>))}</View>
    </View>
  )
}

export default SocialLinks

const styles = StyleSheet.create({
    text:{

        color:"#fff",
        marginBottom:10,
        marginTop:5,
        //textAlign:"center",
        fontSize:16

    },
    links:{
        flexDirection:"row",
        gap:25,
        width:"100%",
        padding:15
    }
})
