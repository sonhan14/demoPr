import React from "react";
import { Text, View, Dimensions, Image, ScrollView, TouchableOpacity } from "react-native";
import { Background } from "./home/homeScreen";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const UtilitiesScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Background />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <UtilitiesButton navigation={navigation} />
                    <ImageScoll />
                </ScrollView>
            </View>

        </View>
    )
}

export default UtilitiesScreen;

const UtilitiesButton = ({ navigation }) => {
    return (
        <View style={{ height: Height * 0.6, width: Width * 0.9, justifyContent: 'space-between', marginTop: Height * 0.02 }}>
            <View style={{ width: Width * 0.9, height: Height * 0.18, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: Width * 0.2, height: Height * 0.15, justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ height: Height * 0.12, width: Width * 0.2, justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', }}>
                        <Image source={require('../../icons/iconMenu/diemDanh.png')}></Image>
                    </View>
                    <Text style={{ color: '#1782C5', fontWeight: '500', textAlign: 'center' }}>Điểm danh</Text>
                </View>

                <View style={{ width: Width * 0.2, height: Height * 0.15, justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ height: Height * 0.12, width: Width * 0.2, justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', }}>
                        <Image source={require('../../icons/iconMenu/yTe.png')}></Image>
                    </View>
                    <Text style={{ color: '#1782C5', fontWeight: '500', textAlign: 'center' }}>Y tế</Text>
                </View>

                <View style={{ width: Width * 0.2, height: Height * 0.15, justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ height: Height * 0.12, width: Width * 0.2, justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', }}>
                        <Image source={require('../../icons/iconMenu/tamLy.png')}></Image>
                    </View>
                    <Text style={{ color: '#1782C5', fontWeight: '500', textAlign: 'center' }}>Tâm lý</Text>
                </View>

                <View style={{ width: Width * 0.2, height: Height * 0.15, justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ height: Height * 0.12, width: Width * 0.2, justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', }}>
                        <Image source={require('../../icons/iconMenu/xinNghi.png')}></Image>
                    </View>
                    <Text style={{ color: '#1782C5', fontWeight: '500', textAlign: 'center' }}>Xin nghỉ</Text>
                </View>

            </View>


            <View style={{ width: Width * 0.9, height: Height * 0.18, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: Width * 0.2, height: Height * 0.15, justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ height: Height * 0.12, width: Width * 0.2, justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', }}>
                        <Image source={require('../../icons/iconMenu/traoDoi.png')}></Image>
                    </View>
                    <Text style={{ color: '#1782C5', fontWeight: '500', textAlign: 'center' }}>Trao đổi</Text>
                </View>

                <View style={{ width: Width * 0.2, height: Height * 0.15, justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ height: Height * 0.12, width: Width * 0.2, justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', }}>
                        <Image source={require('../../icons/iconMenu/hocPhi.png')}></Image>
                    </View>
                    <Text style={{ color: '#1782C5', fontWeight: '500', textAlign: 'center' }}>Học phí</Text>
                </View>

                <TouchableOpacity style={{ width: Width * 0.2, height: Height * 0.15, justifyContent: 'space-between', alignItems: 'center', }}
                    onPress={() => { navigation.navigate('Thời Khóa Biểu') }}>
                    <View style={{ height: Height * 0.12, width: Width * 0.2, justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', }}>
                        <Image source={require('../../icons/iconMenu/thoiKhoaBieu.png')}></Image>
                    </View>
                    <Text style={{ color: '#1782C5', fontWeight: '500', textAlign: 'center' }}>Thời khoá biểu</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: Width * 0.2, height: Height * 0.15, justifyContent: 'space-between', alignItems: 'center', }}
                    onPress={() => { navigation.navigate('Kết Quả Học Tập') }}>
                    <View style={{ height: Height * 0.12, width: Width * 0.2, justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', }}>
                        <Image source={require('../../icons/iconMenu/ketQuaHT.png')}></Image>
                    </View>

                    <Text style={{ color: '#1782C5', fontWeight: '500', textAlign: 'center' }}>Kết quả học tập</Text>

                </TouchableOpacity>

            </View>

            <View style={{ width: Width * 0.9, height: Height * 0.18, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: Width * 0.2, height: Height * 0.15, justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ height: Height * 0.12, width: Width * 0.2, justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', }}>
                        <Image source={require('../../icons/iconMenu/thucDon.png')}></Image>
                    </View>
                    <Text style={{ color: '#1782C5', fontWeight: '500', textAlign: 'center' }}>Thực đơn</Text>
                </View>

                <View style={{ width: Width * 0.2, height: Height * 0.15, justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ height: Height * 0.12, width: Width * 0.2, justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', }}>
                        <Image source={require('../../icons/iconMenu/thongBao.png')}></Image>
                    </View>
                    <Text style={{ color: '#1782C5', fontWeight: '500', textAlign: 'center' }}>Thông báo</Text>
                </View>

                <View style={{ width: Width * 0.2, height: Height * 0.15, justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ height: Height * 0.12, width: Width * 0.2, justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', }}>
                        <Image source={require('../../icons/iconMenu/xeDuaDon.png')}></Image>
                    </View>
                    <Text style={{ color: '#1782C5', fontWeight: '500', textAlign: 'center' }}>Xe đưa đón</Text>
                </View>

                <View style={{ width: Width * 0.2, height: Height * 0.15, justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ height: Height * 0.12, width: Width * 0.2, justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', }}>
                        <Image source={require('../../icons/iconMenu/CLB.png')}></Image>
                    </View>
                    <Text style={{ color: '#1782C5', fontWeight: '500', textAlign: 'center' }}>CLB kỹ năng</Text>
                </View>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: Height * 0.01 }}>
                <Image source={require('../../icons/Rectangle-162630.png')}></Image>
                <Image source={require('../../icons/Rectangle-162631.png')}></Image>
            </View>

        </View>
    )
}

const ImageScoll = () => {
    return (
        <View style={{ height: Height * 0.48, width: Width * 0.9, alignItems: 'center', marginTop: Height * 0.05, marginBottom: Height * 0.3, backgroundColor: '#FADBC9', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10 }}>
            <Image source={require('../../icons/Rectangle-160609.png')} style={{ width: Width * 0.9, resizeMode: 'stretch' }}></Image>
            <View style={{ flex: 1, marginTop: Height * 0.04, width: Width * 0.8 }}>
                <View style={{ width: Width * 0.7 }}>
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>Ngày “tựu trường” đặc biệt tại Lômônôxốp Mỹ Đình</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: Height * 0.03 }}>
                    <Text>Quản trị trường</Text>
                    <Text>02/09/2022</Text>
                </View>

            </View>
        </View>
    )
}

