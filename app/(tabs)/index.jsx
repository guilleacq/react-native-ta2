import React, { useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

// aca guardo las dimensiones de la pantalla pa q sea responsive
const { width } = Dimensions.get('window');

// esto es un array con todas las imgs q voy a usar
const imageData = [
  {
    id: 1,
    source: require('../../assets/images/imagenes/img1.jpg'),
    description: 'ta demás esta foto',
  },
  {
    id: 2,
    source: require('../../assets/images/imagenes/img2.jpg'),
    description: 'alto paisaje bro',
  },
  {
    id: 3,
    source: require('../../assets/images/imagenes/img3.jpg'),
    description: 'mira esa vista papá',
  },
  // podes agregar mas imagenes aca
];

const ImageGallery = () => {
  // esto es pa controlar q imagen se muestra en grande
  const [selectedImage, setSelectedImage] = useState(imageData[0]);

  // Funcion pa cambiar la imagen cuando toco el boton
  const changeImage = () => {
    const currentIndex = imageData.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % imageData.length;
    setSelectedImage(imageData[nextIndex]);
  };

  return (
    <View style={styles.container}>
      {/* Aca va la imagen grande q se puede cambiar */}
      <View style={styles.selectedImageContainer}>
        <Image
          source={selectedImage.source}
          style={styles.selectedImage}
          resizeMode="cover"
        />
        <Text style={styles.selectedImageText}>{selectedImage.description}</Text>
        <TouchableOpacity style={styles.button} onPress={changeImage}>
          <Text style={styles.buttonText}>Cambiar Imagen</Text>
        </TouchableOpacity>
      </View>

      {/* Aca va la galeria horizontal con todas las fotos */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.galleryContainer}>
          {imageData.map((image) => (
            <TouchableOpacity
              key={image.id}
              onPress={() => setSelectedImage(image)}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={image.source}
                  style={styles.thumbnailImage}
                  resizeMode="cover"
                />
                <Text style={styles.imageText}>{image.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  selectedImageContainer: {
    alignItems: 'center',
    padding: 10,
  },
  selectedImage: {
    width: width - 20,
    height: width - 20,
    borderRadius: 10,
  },
  selectedImageText: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  galleryContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  imageContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  thumbnailImage: {
    width: width / 3,
    height: width / 3,
    borderRadius: 8,
  },
  imageText: {
    fontSize: 12,
    marginTop: 5,
    maxWidth: width / 3,
    textAlign: 'center',
  },
});

export default ImageGallery;