import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/saracorreia07.png' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Sara Correia</Text>
                    <Text style={styles.subject}>English</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                English enthusiast.
                {'\n'}{'\n'}
                Have taught no one so far.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Price/Hour {'   '}
                    <Text style={styles.priceValue}>20€</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Reach out</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;