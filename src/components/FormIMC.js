import {View, TextInput, Button, StyleSheet} from 'react-native';
import Result from './Result';
import { useState } from 'react';

const FormIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setIMC] = useState(null);

    const calcularIMC = () => {
        if(peso && altura){
            const alturaMetros = parseFloat(altura) /100;
            const imcCalculado = (parseFloat(peso)/(alturaMetros*alturaMetros)).toFixed(2);
            setIMC(imcCalculado);
        }
    }

    return(
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder='peso (kg)'
                keyboardType='numeric'
                value={peso}
                onChangeText={setPeso}
            />

            <TextInput
                style={styles.input}
                placeholder='altura (cm)'
                keyboardType='numeric'
                value={altura}
                onChangeText={setAltura}
            />

            <Button title='calcular' onPress={calcularIMC} />
            {imc && <Result imc={imc}/>}
        </View>
    );
};

const styles = StyleSheet.create({

    formContainer:{
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 10,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },

});

export default FormIMC;