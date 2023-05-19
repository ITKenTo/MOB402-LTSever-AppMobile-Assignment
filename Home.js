import { FlatList, Image, RefreshControl, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const Home = (props) => {
  const [reloading, setreloading] = useState(false)
  const [listproduct, setlistProduct] = useState([])

  const [filterData, setfilterData] = useState([])

  const [search, setsearch] = useState('')
  var url = 'http://192.168.98.154:3000/api/product'

  const getData = async () => {
    try {
      const response = await fetch(url); //lấy dữ liệu về 
      const jsonProduct = await response.json(); // chuyển dũ liêu thành đt json
      // console.log(jsonSP);
      setlistProduct(jsonProduct.data);
      setfilterData(jsonProduct.data);
      console.log(jsonProduct.data);

    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  const searchFilter= (text)=>{
    if (text){
      const newData = listproduct.filter((item)=>{
        const itemData = item.name ? item.name.toUpperCase(): ''.toUpperCase();
        const textData= text.toUpperCase();
        return itemData.indexOf(textData) >-1;
      });
      setfilterData(newData);
      setsearch(text);
      
    }else{
      setfilterData(listproduct);
      setsearch(text);
    }
  }

  const renderProduct = ({ item }) => {
    
    const ChiTiet =(props)=>{
      props.navigation.navigate('ChiTiet', { name: item.name, image: item.image, category: item.item.id_category.name, price:item.price , content:item.content});
    }
    return (

      <View style={styles.item}>
        
        <View style={{ width: '100%' }}>
          <TouchableOpacity>
            {/* <Image source={{ uri: url ? url : null }} style={styles.imageSP} /> */}
            <Image source={{ uri: 'http://192.168.98.154:3000/'+item.image}} style={styles.imageSP} />

          </TouchableOpacity>
          <Text style={{ fontWeight: '500', color: '#333333', fontSize: 15, fontStyle: 'italic', textAlign: 'auto' }}>Tên Sản Phẩm: {item.name} </Text>
          <Text style={{ fontWeight: '500', color: '#333333', fontSize: 15, fontStyle: 'italic', textAlign: 'auto' }}>Loại Sản Phẩm: {item.id_category.name}</Text>
          <Text style={{ fontWeight: '500', color: '#DD0000', fontSize: 15, fontStyle: 'italic', textAlign: 'auto' }}>Giá Sản Phẩm: {item.price}</Text>

          <TouchableOpacity 
          style={{ backgroundColor:'#33CCCC', 
          width:'100%', 
          alignItems:'center', 
          padding:5, 
          borderRadius:10,
              marginTop: 10
            }} onPress={() => props.navigation.navigate('ChiTiet', { name: item.name, image:item.image, category: item.id_category.name, price: item.price, content: item.content })}>
            <AntDesign name="eyeo" size={24} color="black" />
            </TouchableOpacity>
        </View>
      </View>


    )
  }
  const reloadData = React.useCallback(() => {
    // xử lý công việc load lại dữ liệu đổ vào danh sách
    setreloading(true); // set trạng thái bắt đầu reload
    getData();
    // mô phỏng đợi reload, nếu là reload từ server thật thì không cần viết lệnh dưới
    setTimeout(() => {
      setreloading(false); // sau 2s thì đổi trạng thái không rload nữa
    }, 2000);


  });

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
 
      getData();
    
    });
    return unsubscribe;
  }, [props.navigation]);

  return (
    <View style={{height:'100%'}}>
 
    <View style={{
      padding:10,
      width:'95%',
       marginTop:5,
       marginBottom:5,
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        borderRadius:10,
        marginLeft:10
        }}>

        <Feather name="search" size={20} color="black" style={{marginLeft:1, marginRight:4}} />
      <TextInput placeholder='Search' style={styles.input}
      // underlineColorAndroid="transparent"
      onChangeText={(text)=> searchFilter(text)}
      >

      </TextInput>
    </View>

    <View style={{ height: '90%' }}>
      <FlatList
        data={filterData}
        keyExtractor={item => item._id}
        refreshControl={
          <RefreshControl refreshing={reloading} onRefresh={reloadData} />
        }
        renderItem={renderProduct}
      >
      </FlatList>
    </View>
    
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({

  imageSP: {
    width: "100%", height: 200,
    marginTop: 10,
    borderRadius: 20
  },

  item: {
    alignItems: 'flex-start',
    elevation:5,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15
  },
  input:{
     fontSize:15,
     width:"90%",
     height:30, 

  }

})