import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Backgound from './Backgound'
import { darkGreen } from './Constans'
import Field from './Field'
import Btn from './Btn'
import bcrypt from 'bcryptjs';

let url ='http://192.168.98.154:3000/api/users'
const Signup = (props) => {
  const [username, setusername] = useState("")
  const [error, seterror] = useState("")
  const [fullname, setfullname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmpassword, setconfirmpassword] = useState("")

  // var salt = bcrypt.genSaltSync(10);
  // var hash = bcrypt.hashSync(password, salt);
  // setpassword(hash);
  const validate = () => {
    if (username.length == 0) {
      seterror('Vui lập nhập username');
      return false;
    } else if (fullname.length == 0) {
      seterror('Vui lập nhập fullname');
      return false;
    } else if (email.length == 0) {
      seterror('Vui lập nhập email or username');
      return false;
    } else if (password.length == 0) {
      seterror('Vui lập nhập password');
      return false;
    } else if (confirmpassword.length == 0) {
      seterror('Vui lập nhập confirm password');
      return false;
    }else{
      seterror("");
      return true;
    }
  }
  var data = {

    username: username,
    fullname: fullname,
    email: email,
    password: password,
    manage: "KH",
    image:'avt.jpg'

  }
  const SignupApp=()=>{

    if (validate()==true) {
      fetch(url, {
        method: 'POST',
        headers: { 
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data) 
      })
        .then((response) => {
          console.log(response.status);
          // nếu log là 201 thì là tạo thành công
          if (response.status == 201)
            alert("Thêm mới thành công");
            props.navigation.navigate("Login")
        })
        .catch((err) => { 
          console.log(err);
        });
    }
  }
  return (


    <Backgound>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text style={{ color: '#F8F8FF', fontSize: 35, fontWeight: 'bold', marginVertical: 10 }}>Register</Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 15,
          }}>
          Create a new account
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{
            backgroundColor: '#FFFAF0',
            height: 700,
            width: 460,
            flex: 1,
            borderTopLeftRadius: 130,
            paddingTop: 40,
            alignItems: 'center'
          }}>

            <Field placeholder="Username" onChangeText={(text) => { setusername(text) }} value={username} />
            <Field placeholder="Full Name" onChangeText={(text) => { setfullname(text) }} value={fullname} />
            <Field
              placeholder="Email"
              keyboardType={'email-address'}
              onChangeText={(text) => { setemail(text) }} value={email}
            />
  
            <Field placeholder="Password" secureTextEntry={true} onChangeText={(text) => { setpassword(text) }} value={password} />
            <Field placeholder="Confirm Password" secureTextEntry={true} onChangeText={(text) => { setconfirmpassword(text) }} value={confirmpassword} />

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '78%',
                paddingRight: 16
              }}>
              <Text style={{ color: 'grey', fontSize: 13 }}>
                By signing in, you agree to our{' '}
              </Text>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 13 }}>
                Terms & Conditions
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "center",
                width: '78%',
                paddingRight: 16,
                marginBottom: 10
              }}>
              <Text style={{ color: 'grey', fontSize: 13 }}>
                and {" "}
              </Text>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 13 }}>
                Privacy Policy
              </Text>

            </View>

            <Text style={{ color: 'red' }}>{error}</Text>
            <Btn textColor="white" bgColor={darkGreen} btnLabel="Signup" Press={SignupApp}/>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                Already have an account ?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text
                  style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>


      </View>
    </Backgound>

  )
}

export default Signup

const styles = StyleSheet.create({})