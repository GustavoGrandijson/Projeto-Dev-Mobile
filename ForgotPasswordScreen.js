import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleSendEmail = () => {
    console.log('Email enviado para:', email);
    // Lógica para enviar o email de recuperação de senha
  };

  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Problemas para entrar?</Text>
      <Text style={styles.smallText}>Insira o seu nome de usuário ou email e enviaremos um link para você. </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        onChangeText={setEmail}
        value={email}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
        <Text style={styles.buttonText}>Enviar Email</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0E0D0D',
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25, 
    color: 'white',
  },
  smallText: {
    fontSize: 16,
    marginBottom: 30, 
    color: 'white',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#2B2A2A',
    color: 'white',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#2B2A2A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backText: {
    marginTop: 20,
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default ForgotPasswordScreen;