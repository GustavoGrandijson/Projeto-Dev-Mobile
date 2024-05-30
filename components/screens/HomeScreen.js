import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-hmbJuN4kc_z-fCGCU7eo2CRV3DUlmVXVWiFUMXTFQ&s' }} 
          style={styles.profileImage} 
        /> 
        <Text style={styles.username}>Nome do Usuário</Text>
      </View>
      <Image
        source={{ uri: 'https://t4.ftcdn.net/jpg/05/50/33/47/360_F_550334715_0d2cdaljV4Xd3x7yVUhRxfmLLEUyMdXr.jpg' }} 
        style={styles.postImage}
      /> 
      <Text style={styles.caption}>4K Imagens – Procure 450,616 fotos, vetores e vídeos</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',  
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',  
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',  // Cor do texto alterada para branco para melhor contraste
  },
  postImage: {
    width: '100%',
    height: 300,
    marginTop: 10,
  },
  caption: {
    padding: 10,
    fontSize: 16,
    color: '#fff',  // Cor do texto alterada para branco para melhor contraste
  },
});

export default HomeScreen;