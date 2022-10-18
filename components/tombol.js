import react from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function tombol({
    jalan,
    Tombol1,
    Tombol2,
}){
    return(
        <>
        <TouchableOpacity style ={[styles.border, {backgroundColor: jalan ? '#141414' : '#424242'},]} onPress={Tombol2}>
            <View style={styles.tombol}>
                <Text style={{color: jalan ? '#FFFFFF' : '#FFFFFF'}}>
                    {jalan ? 'Putaran' : 'Ulang'}
                </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style ={[styles.border, {backgroundColor: jalan ? '#00a2ff' : '#00fbff'},]} onPress={Tombol1}>
            <View style={styles.tombol}>
                <Text style={{color: jalan ? '##017809' : '#FFFFFF'}}>
                    {jalan ? 'Berhenti' : 'Mulai'}
                </Text>
            </View>
        </TouchableOpacity>
        </>
    );
}
const styles = StyleSheet.create({
    border:{
        width:120,
        height:50,
        borderRadius:20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tombol: {
        width:120,
        height:50,
        borderRadius:20,
        borderColor:'#000000',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});