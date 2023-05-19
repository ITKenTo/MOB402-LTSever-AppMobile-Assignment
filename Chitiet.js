import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Chitiet = ({navigation, route}) => {

  const [imagect, setimagect] = useState('http://192.168.98.154:3000/'+route.params.image);
  console.log(imagect);
  return (
    <View style={{alignItems:"center"}}>
          
          <View>
        <Image source={{ uri: imagect }} style={styles.imageSP} />
      {/* <Text style={{ fontWeight: '500', color: '#333333', fontSize: 15, fontStyle: 'italic', textAlign: 'auto' }}>Tên Sản Phẩm: {route.params.image} </Text> */}


              <Text style={{ fontWeight: '500', color: '#333333', fontSize: 15, fontStyle: 'italic', textAlign: 'center' }}>Tên Sản Phẩm: {route.params.name} </Text>
              <Text style={{ fontWeight: '500', color: '#333333', fontSize: 15, fontStyle: 'italic', textAlign: 'center' }}>Loại Sản Phẩm: {route.params.category}</Text>
              <Text style={{ fontWeight: '500', color: '#333333', fontSize: 15, fontStyle: 'italic', textAlign: 'center' }}>Nội dung: {route.params.content}</Text>

              <Text style={{ fontWeight: '500', color: '#DD0000', fontSize: 15, fontStyle: 'italic', textAlign: 'center' }}>Giá Sản Phẩm: {route.params.price}</Text>

          </View>
         
    </View>
  )
}

export default Chitiet

const styles = StyleSheet.create({
  imageSP: {
    width: 350, height: 200,
    marginTop: 10,
    borderRadius: 20
  },
})