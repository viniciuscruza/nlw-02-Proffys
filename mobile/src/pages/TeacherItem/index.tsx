import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
//import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
    return (
    <View style={styles.container} >
        <View style={styles.profile}>
            <Image
                style={styles.avatar}
                source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQEH2eCWU9h7xA/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=6Vl0skeWMLpG4ODdAkNPkMgzUE-3pu2say_BcR5u8yM'}}
            />
            <View style={styles.profileInfo}>
                <Text style={styles.name}>Vinícius Cruz</Text>
                <Text style={styles.subject}>Química</Text>
            </View>
        </View>

        <Text style={styles.bio}>
            Bio bio bio bio bio bio
        </Text>

        <View style={styles.footer}>
            <Text style={styles.price}>
                Preço/hora {'   '}
                <Text style={styles.priceValue}>R$ 100,00</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, styles.favorited]}>
                    {<Image source={heartOutlineIcon} /> }
                    {/* <Image source={unfavoriteIcon} /> */}
                </RectButton>

                <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon} />
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>
            </View>
        </View>
    </View>

    

    
)};

export default TeacherItem;