import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { Link } from 'expo-router'

type Props = {
    iconsJustify?:"flex-start" | "center" | "space-between"
    textAlign?:"center"| "left"|"right"
}

const links=[
{
    platform:"Whatsapp",
    link:"https://t.me/PhenomOfficialRep",
    icon:<FontAwesome name='whatsapp' size={40} color='#fff' />

},{
    platform:"Telegram",
    link:"https://t.me/PhenomOfficialRep",
    icon:<Feather name='send' size={40} color='#fff' />

},{
    platform:"TikTok",
    link:"https://t.me/PhenomOfficialRep",
    icon:<FontAwesome5 name='tiktok' size={40} color='#fff' />

},{
    platform:"Instagram",
    link:"",
    icon:<FontAwesome name='instagram' size={45} color='#fff' />

},
]

const SocialLinks = ({iconsJustify="flex-start",textAlign="center"}: Props) => {
  return (
    <View>
      {/* Text Component */}
      <Text style={[styles.text,{textAlign}]}>
        Join our verified social handles for more information on how Phenom works:
      </Text>

      {/* View Component for Links */}
      <View style={[styles.links, { justifyContent: iconsJustify }]}>
        {links.map(({ link, platform, icon }) => (
          <Link key={platform} href={link}>
            {icon}
          </Link>
        ))}
      </View>
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
