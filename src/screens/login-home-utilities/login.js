import { View, Dimensions, Text, Image, StyleSheet, TextInput, TouchableOpacity, } from "react-native"
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Login = () => {
    return (
        <View style={{ flex: 1, }}>
            <ImageLogin/>
            <LoginInput />
        </View>
    )

}

export default Login

const ImageLogin = () => {
    return (
        <View style={{ width: Width, height: Height * 0.515,}}>
            <Image style={{ width: Width, height: Height * 0.515,}} source={require('../../../icons/login.png')}></Image>
        </View>
    )
}
const LoginInput = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    return (
        <View style={{ width: Width, height: Height * 0.5, position: 'absolute', marginTop: Height * 0.5, backgroundColor: '#FFFFFF',  borderColor: '#E7E7E7', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: Height * 0.1, }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: Width * 0.5, }}>
                    <Image source={require('../../../icons/Logo_128_128_1.png')}></Image>
                    <Text style={{ color: '#F15829', fontWeight: '500' }}>
                        Hệ thống giáo dục M.V.LÔMÔNÔXỐP
                    </Text>
                </View>
            </View>

            <View style={{ flex: 1, alignItems: 'center'}}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: Width * 0.9, height: Height*0.06, borderBottomWidth: 1, marginTop: Height*0.01}}>
                    <View style={{ width: Width*0.13, height: Height*0.05, backgroundColor: 'yellow' }}>
                    </View>
                    <TextInput
                        style={{ flex: 1, marginLeft: Width*0.05, }}
                        value={email}
                        placeholder="Enter email"
                        onChangeText={text => setEmail(text)}
                    />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: Width * 0.9, height: Height*0.06, borderBottomWidth: 1, marginTop: '5%' }}>
                    <View style={{ width: Width*0.13, height: Height*0.05, backgroundColor: 'yellow' }}>

                    </View>
                    <TextInput
                        
                        style={{ flex: 1, marginLeft: Width*0.05, }}
                        value={password}
                        placeholder="Enter password"
                        onChangeText={text => setPassword(text)}
                    />

                    <View style={{ width: Width*0.1, height: Height*0.05, backgroundColor: 'yellow', }}></View>
                </View>

                <View style={{ height: Height*0.05, width: Width*0.9, marginTop: Height*0.03, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ height: Height*0.05, width: Width*0.3 }}>
                        <Text style={{ color: '#1782C5', fontSize: 15 }}>
                            Hiện mật khẩu
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: Height*0.05, width: Width*0.3 }}>
                        <Text style={{ color: '#1782C5', fontSize: 15 }}>
                            Quên mật khẩu?
                        </Text>
                    </TouchableOpacity>
                </View>

                <Button style={{ height: Height*0.05, width: Width*0.9, backgroundColor: '#1782C5', borderRadius: 10, }} textColor='white'
                    labelStyle={{ fontSize: 15, fontWeight: '700', }}>
                    ĐĂNG NHẬP
                </Button>
                <View style={{alignItems: 'center', width: Width*0.7, height: Height*0.07, justifyContent: 'center', marginTop: Height*0.04}}>
                    <Text style={{color: 'black'}}>2022 © Copyright M.V.LÔMÔNÔXỐP</Text>
                    <Text style={{color: 'black'}}>Design by TriNghiaTech</Text>
                </View>
                
            </View>
        </View>
    )
}