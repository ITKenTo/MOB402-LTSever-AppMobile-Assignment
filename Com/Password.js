import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Field from '../Properties/Field'
import Btn from '../Properties/Btn'
import { TouchableOpacity } from 'react-native'

const Password = () => {
    const [oldpassword, setoldpassword] = useState("");
    const [newpassword, setnewpassword] = useState("");
    const [confimpassword, setconfimpassword] = useState("")


    const DoiMk =()=>{
      Validate();
    }

    const Validate=()=>{
        if (oldpassword.length==0) {
            alert("vui lòng nhập mật khẩu cũ")
            return false;
        }
        if ( newpassword.length==0){
            alert("vui lòng nhập mật khẩu mới")
            return false;
        }

        if (confimpassword.length==0){
            alert("vui lòng nhập lại mật khẩu")
            return false;
        }
        if ( newpassword!= confimpassword) {
            alert("Mật khẩu nhập lại không trùng khớp")
            return false;
        }
    }
  return (
    <View style={styles.container}>
          <Field placeholder="Mật khẩu cũ" onChangeText={(text) => { setoldpassword(text) }} value={oldpassword} ></Field>
          <Field placeholder="Mật khẩu mới" onChangeText={(text) => { setnewpassword(text) }} value={newpassword}></Field>
          <Field placeholder="Nhập Lại mật khẩu mới" onChangeText={(text) => { setconfimpassword(text) }} value={confimpassword}></Field>
          
          <TouchableOpacity style={{ backgroundColor:'#33FFCC', padding:10, borderRadius:20, margin:20}} onPress={DoiMk}>
              <Text title='Xác Nhận' style={{fontSize:17}}>Xác Nhận</Text>

          </TouchableOpacity>
    
    </View>
  )
}

export default Password

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        paddingTop:20
    }
})