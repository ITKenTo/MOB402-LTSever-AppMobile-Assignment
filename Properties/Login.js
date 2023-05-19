import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Backgound from './Backgound'
import { darkGreen } from './Constans'
import Field from './Field'
import Btn from './Btn'
import AsyncStorage from '@react-native-async-storage/async-storage';
import bcrypt from 'bcryptjs';

const Login = (props) => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [err, seterr] = useState("")
    const [objU, setobjU] = useState([]);
 
    var data = {
        username: username,
        password: password
    }

//     const loginApp = async () => {
//         let url ='http://192.168.1.9:3000/api/users/login';
//         if (validate() == true) {
//             try {
//                 const response = await fetch(url, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({ username, password })
//                 });

//                 const data = await response.json();
//                 console.log(data);
//                 if (response.ok) {
//                     props.navigation.navigate("TabHome")
                    
//                 } else {
//                     seterr(data.message);
//                 }
//             } catch (error) {
//                 console.error('Lỗi:', error);
//             }
//     };
// }

    const loginApp = () => {
        let url = 'http://192.168.98.154:3000/api/users?username='+username;
        if (validate() == true) {

            fetch(url)
                .then((res) => {
                    return res.json();
                })
                .then(async (res_login) => {
                    console.log(res_login.data);
                    setobjU(res_login.data);
                    if (res_login.data.length !=1) {
                        return  seterr("không tồn tại hoặc bị trùng");
                    }

          
                        let obj = res_login.data[0];
                        console.log(obj);
                        let check= bcrypt.compare(password,obj.password);
                        
                        if (check) {
                            try {
                                await AsyncStorage.setItem("Login", JSON.stringify(obj));
                                //alert("Ghi xong dữ liệu")
                                // chuuen trang 
                                if (obj.manage == "KH") {
                                    props.navigation.navigate('TabHome');
                                } else {
                                   seterr("Admin không cho phép đăng nhập")
                                }
                            } catch (e) {
                                // saving error
                                console.log(e);
                            }
                        } else {
                            seterr("Sai password")
                        }
                    
                }

                )
        }
    }


    const validate = () => {
        if (username.length ==0) {
            seterr("Vui lòng nhập tên đăng nhập");
            return false;

        } else if (password.length==0) {
            seterr("Vui lòng nhập mật khẩu");
            return false;
        } else {
            seterr("");
            return true;

        }
    }
    return (

        <Backgound>
            <View style={{ alignItems: 'center', width: 460 }}>
                <Text style={{ color: '#F8F8FF', fontSize: 50, fontWeight: 'bold', marginVertical: 10 }}>Login</Text>
                <View style={{
                    backgroundColor: '#FFFAF0',
                    height: 700,
                    width: 460,
                    borderTopLeftRadius: 130,
                    paddingTop: 100,
                    alignItems: 'center'

                }}>

                    <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold' }}>
                        Welcome Back
                    </Text>
                    <Text style={{ color: 'grey', fontSize: 19, fontWeight: 'bold', marginBottom: 20, }}>
                        Login to your account
                    </Text>

                    <Field
                        onChangeText={(text) => { setusername(text) }} value={username}
                        placeholder=" Username"
                        keyboardType={'email-address'}

                    />
                    <Field
                        onChangeText={(text) => { setpassword(text) }} value={password}
                        placeholder="Password" secureTextEntry={true} />
                    <View
                        style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 80 }}>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                            Forgot Password ?
                        </Text>
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 13, alignSelf: 'center', marginTop: 10 }}>
                            {err}
                        </Text>

                    </View>

                    <Btn textColor='white' bgColor={darkGreen} btnLabel="Login"
                        Press={loginApp} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", }}>Don't have an account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
                            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>


        </Backgound>

    )
}

export default Login

const styles = StyleSheet.create({})