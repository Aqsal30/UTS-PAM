import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import {Tampilan} from './tampilan';

export default function Hasil({hasil}){
    return(
        <ScrollView>
            <View style={styles.tampil}/>

            {hasil.map((item, index) => (
                <View key={index} style={styles.tampil}>
                    <Text style={styles.tampilText}>
                        Step {hasil.length - index}
                    </Text>
                    <Text style={styles.tampilText}>{Tampilan(item)}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    tampil: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        height:50,
        paddingHorizontal:15,
    },
    tampilText: {color: '#FFFFFF'}
});