import React from "react";
import { View, Text, Dimensions, Image, ScrollView } from "react-native";
import { BottomNavigation } from "../../../App";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FAFAFE', alignItems: 'center', }}>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Background />
                    <DateInfo />
                    <ChuyenCan />
                    <ThucDon />
                    <ThoiKhoaBieu />
                    <TraoDoi />
                    <YTe />
                    <TamLy />
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

export const Background = () => {
    return (
        <View style={{ width: Width, height: Height * 0.2, backgroundColor: '#1782C5', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ width: Width * 0.9, height: Height * 0.15, backgroundColor: 'white', borderRadius: 20, flexDirection: 'row', }}>
                <View style={{ width: Width * 0.2, height: Height * 0.15, justifyContent: 'center', alignItems: 'center', marginLeft: Width * 0.02, }}>
                    <Image source={require('../../../icons/avatar.png')}></Image>
                </View>
                <View style={{ width: Width * 0.7, height: Height * 0.15, justifyContent: 'center', marginLeft: Width * 0.02, }}>
                    <Text style={{ color: '#1782C5', fontWeight: '700', fontSize: 16 }}>Phạm Ngọc Mai</Text>
                    <Text style={{ color: '#827D7C' }}>Lớp 1A</Text>
                    <Text style={{ color: '#827D7C' }}>Hệ thống giáo dục M.V.LÔMÔNÔXỐP</Text>
                </View>
            </View>
        </View>
    )
}

const DateInfo = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
                height: Height * 0.064, width: Width * 0.9,
                marginTop: Height * 0.02, backgroundColor: 'white',
                borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: Height * 0.045, }}>
                    <Image source={require('../../../icons/Polygon-1.png')}></Image>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', height: Height * 0.045, width: Width * 0.722 }}>
                    <Text style={{
                        fontWeight: '700', fontSize: 15, textTransform: 'uppercase', color: '#1782C5',
                    }}>
                        THỨ 3 NGÀY 06/12/2022
                    </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', height: Height * 0.045, }}>
                    <Image source={require('../../../icons/Polygon-2.png')}></Image>
                </View>
            </View>
        </View>

    )
}

const ChuyenCan = () => {
    return (
        <View style={{ height: Height * 0.2, width: Width * 0.9, backgroundColor: '#FFFFFF', marginTop: Height * 0.03, alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', width: Width * 0.8, height: Height * 0.05, borderBottomWidth: 1, borderColor: '#F2F2F2', borderStyle: 'dashed', marginTop: Height * 0.01 }}>
                <Image source={require('../../../icons/chuyenCanHome.png')} ></Image>
                <Text style={{ fontWeight: '700', fontSize: 15, color: 'black', marginLeft: Width * 0.05 }}>Chuyên cần</Text>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', width: Width * 0.8, height: Height * 0.04, marginTop: Height * 0.02 }}>
                <View style={{ width: Width * 0.08, backgroundColor: 'yellow', height: Height * 0.04 }}>
                </View>
                <Text style={{ fontWeight: '500', color: 'black', marginLeft: Width * 0.05 }}>Giáo viên:</Text>
                <Text style={{ fontWeight: '500', color: 'black', marginLeft: Width * 0.05 }}>Nguyễn Vân Anh</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', width: Width * 0.8, height: Height * 0.04, marginTop: Height * 0.02 }}>
                <View style={{ width: Width * 0.08, backgroundColor: 'yellow', height: Height * 0.04 }}>
                </View>
                <Text style={{ fontWeight: '500', color: 'black', marginLeft: Width * 0.05 }}>Thời gian:</Text>
                <Text style={{ fontWeight: '500', color: 'black', marginLeft: Width * 0.05 }}>07:00</Text>

                <View style={{ width: Width * 0.08, backgroundColor: 'yellow', height: Height * 0.04, marginLeft: '10%' }}>
                </View>
                <Text style={{ fontWeight: '500', color: 'black', marginLeft: Width * 0.05 }}>Đi học</Text>
            </View>

        </View>
    )
}


const ThucDon = () => {
    return (
        <View style={{ width: Width * 0.9, backgroundColor: '#FFFFFF', marginTop: Height * 0.03, borderRadius: 10, borderWidth: 1, borderColor: '#F2F2F2', alignItems: 'center', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: Width * 0.8, height: Height * 0.05, borderBottomWidth: 1, borderColor: '#F2F2F2', borderStyle: 'dashed', marginTop: Height * 0.01, }}>
                <Image source={require('../../../icons/thucDon.png')} ></Image>
                <Text style={{ fontWeight: '700', fontSize: 15, color: 'black', marginLeft: Width * 0.05, }}>Thực đơn</Text>
            </View>


            <View style={{ width: Width * 0.8, borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, marginTop: Height * 0.03, alignItems: 'center', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Width * 0.7, marginTop: Height * 0.01, marginBottom: Height * 0.01 }}>
                    <View style={{ justifyContent: 'space-between', }}>
                        <Text style={{ color: '#1782C5', fontWeight: '700', fontSize: 15 }}>ĂN SÁNG</Text>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginRight: Width * 0.1 }}>07:00</Text>
                            <Text>200 calories</Text>
                        </View>
                    </View>

                    <Image source={require('../../../icons/bunMoc.png')} style={{ width: Width * 0.1, height: Height * 0.08, resizeMode: 'stretch' }}></Image>
                </View>

                <View style={{ width: Width * 0.7, borderRadius: 10, backgroundColor: '#F7FBFC', borderColor: '#F2F2F2', borderWidth: 1, justifyContent: 'center', alignItems: 'center', margin: Height * 0.01 }}>
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, padding: 10, }}>Bún mọc</Text>
                </View>
            </View>

            <View style={{ width: Width * 0.8, borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, marginTop: Height * 0.03, alignItems: 'center', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Width * 0.7, marginTop: Height * 0.01, marginBottom: Height * 0.01 }}>
                    <View style={{ justifyContent: 'space-between', }}>
                        <Text style={{ color: '#1782C5', fontWeight: '700', fontSize: 15 }}>PHỤ SÁNG</Text>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginRight: Width * 0.1 }}>09:15</Text>
                            <Text>100 calories</Text>
                        </View>
                    </View>

                    <Image source={require('../../../icons/suaSang.png')} style={{ width: Width * 0.1, height: Height * 0.08, resizeMode: 'stretch' }}></Image>
                </View>

                <View style={{ width: Width * 0.7, borderRadius: 10, backgroundColor: '#F7FBFC', borderColor: '#F2F2F2', borderWidth: 1, justifyContent: 'center', alignItems: 'center', margin: Height * 0.01 }}>
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, padding: 10, }}>Sữa Vinamilk</Text>
                </View>
            </View>


            <View style={{ width: Width * 0.8, borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, marginTop: Height * 0.03, alignItems: 'center', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Width * 0.7, marginTop: Height * 0.01, marginBottom: Height * 0.01 }}>
                    <View style={{ justifyContent: 'space-between', }}>
                        <Text style={{ color: '#1782C5', fontWeight: '700', fontSize: 15 }}>ĂN TRƯA</Text>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginRight: Width * 0.1 }}>10:55</Text>
                            <Text>300 calories</Text>
                        </View>
                    </View>

                    <Image source={require('../../../icons/suaSang.png')} style={{ width: Width * 0.1, height: Height * 0.08, resizeMode: 'stretch' }}></Image>
                </View>

                <View style={{ width: Width * 0.7, borderRadius: 10, backgroundColor: '#F7FBFC', borderColor: '#F2F2F2', borderWidth: 1, justifyContent: 'center', alignItems: 'center', margin: Height * 0.01 }}>
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, padding: 10, }}>Gà file ngâm sữa chiên giòn</Text>
                </View>

                <View style={{ width: Width * 0.7, borderRadius: 10, backgroundColor: '#F7FBFC', borderColor: '#F2F2F2', borderWidth: 1, justifyContent: 'center', alignItems: 'center', margin: Height * 0.01 }}>
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, padding: 10, }}>Bắp cải xào cà rốt</Text>
                </View>

                <View style={{ width: Width * 0.7, borderRadius: 10, backgroundColor: '#F7FBFC', borderColor: '#F2F2F2', borderWidth: 1, justifyContent: 'center', alignItems: 'center', margin: Height * 0.01 }}>
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, padding: 10, }}>Canh khoai tây nấu thịt thăn</Text>
                </View>

                <View style={{ width: Width * 0.7, borderRadius: 10, backgroundColor: '#F7FBFC', borderColor: '#F2F2F2', borderWidth: 1, justifyContent: 'center', alignItems: 'center', margin: Height * 0.01 }}>
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, padding: 10, }}>Trứng cuộn</Text>
                </View>

                <View style={{ width: Width * 0.7, borderRadius: 10, backgroundColor: '#F7FBFC', borderColor: '#F2F2F2', borderWidth: 1, justifyContent: 'center', alignItems: 'center', margin: Height * 0.01 }}>
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, padding: 10, }}>Cơm trắng</Text>
                </View>

            </View>

            <View style={{ width: Width * 0.8, borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, marginTop: Height * 0.03, alignItems: 'center', marginBottom: Height * 0.03 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Width * 0.7, marginTop: Height * 0.01, marginBottom: Height * 0.01 }}>
                    <View style={{ justifyContent: 'space-between', }}>
                        <Text style={{ color: '#1782C5', fontWeight: '700', fontSize: 15 }}>PHỤ CHIỀU</Text>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginRight: Width * 0.1 }}>15:00</Text>
                            <Text>150 calories</Text>
                        </View>
                    </View>

                    <Image source={require('../../../icons/phuChieu.png')} style={{ width: Width * 0.1, height: Height * 0.08, resizeMode: 'stretch' }}></Image>
                </View>

                <View style={{ width: Width * 0.7, borderRadius: 10, backgroundColor: '#F7FBFC', borderColor: '#F2F2F2', borderWidth: 1, justifyContent: 'center', alignItems: 'center', margin: Height * 0.01 }}>
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, padding: 10, }}>Bánh Tràng An</Text>
                </View>

                <View style={{ width: Width * 0.7, borderRadius: 10, backgroundColor: '#F7FBFC', borderColor: '#F2F2F2', borderWidth: 1, justifyContent: 'center', alignItems: 'center', margin: Height * 0.01 }}>
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, padding: 10, }}>Sữa Milo nóng</Text>
                </View>

            </View>

        </View>


    )
}

const ThoiKhoaBieu = () => {
    return (
        <View style={{ width: Width * 0.9, backgroundColor: '#FFFFFF', marginTop: Height * 0.03, borderRadius: 10, borderWidth: 1, borderColor: '#F2F2F2', alignItems: 'center', marginBottom: Height * 0.02 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', width: Width * 0.8, height: Height * 0.05, borderBottomWidth: 1, borderColor: '#F2F2F2', borderStyle: 'dashed', marginTop: Height * 0.01, }}>
                <Image source={require('../../../icons/thoiKhoaBieu.png')} ></Image>
                <Text style={{ fontWeight: '700', fontSize: 15, color: 'black', marginLeft: Width * 0.05, }}>Thời khoá biểu</Text>
            </View>

            <View style={{ height: Height * 0.08, width: Width * 0.8, marginTop: Height * 0.02, }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: Height * 0.03, width: Width * 0.12, }}>
                        <Text style={{ fontSize: 15, fontWeight: '700', color: '#000000' }}>Tiết 1</Text>
                    </View>
                    <View style={{ width: Width * 0.1, height: Height * 0.082, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: Height * 0.025, width: Width * 0.053, borderRadius: 10, backgroundColor: '#F15829', borderWidth: 3, borderColor: '#F2F2F2', }}></View>
                        <View style={{ flex: 1, width: 1, backgroundColor: '#F2F2F2', }}></View>
                    </View>
                    <View style={{ height: Height * 0.08, flex: 1, borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 5, backgroundColor: '#F7FBFC', }}>
                        <View style={{ height: Height * 0.03, width: Width * 0.8, marginTop: Height * 0.012, marginLeft: Width * 0.027, }}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#000000' }}>Chào cờ</Text>
                        </View>
                        <View style={{ height: Height * 0.025, width: Width * 0.75, marginLeft: Width * 0.027, marginTop: Height * 0.0098, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ height: Height * 0.025, width: Width * Width * 0.25 }}>
                                <Text style={{ color: '#8E8E8E', fontSize: 12 }}>07:00 - 07:45</Text>
                            </View>
                            <View style={{ height: Height * 0.025, width: Width * 0.3, }}>
                                <Text style={{ color: '#8E8E8E', fontSize: 12 }}>GV: Nguyễn Thị Mai</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ height: Height * 0.08, width: Width * 0.8, marginTop: Height * 0.02, }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: Height * 0.03, width: Width * 0.12, }}>
                        <Text style={{ fontSize: 15, fontWeight: '700', color: '#000000' }}>Tiết 2</Text>
                    </View>
                    <View style={{ width: Width * 0.1, height: Height * 0.082, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: Height * 0.025, width: Width * 0.053, borderRadius: 10, backgroundColor: '#F15829', borderWidth: 3, borderColor: '#F2F2F2', }}></View>
                        <View style={{ flex: 1, width: 1, backgroundColor: '#F2F2F2', }}></View>
                    </View>
                    <View style={{ height: Height * 0.08, flex: 1, borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 5, backgroundColor: '#F7FBFC', }}>
                        <View style={{ height: Height * 0.03, width: Width * 0.8, marginTop: Height * 0.012, marginLeft: Width * 0.027, }}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#000000' }}>Toán</Text>
                        </View>
                        <View style={{ height: Height * 0.025, width: Width * 0.4, marginLeft: Width * 0.027, marginTop: Height * 0.0098, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ height: Height * 0.025, width: Width * 0.25 }}>
                                <Text style={{ color: '#8E8E8E', fontSize: 12 }}>07:55 - 08:40</Text>
                            </View>
                            <View style={{ height: Height * 0.025, width: Width * 0.3, }}>
                                <Text style={{ color: '#8E8E8E', fontSize: 12 }}>GV: Nguyễn Thị Mai</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ height: Height * 0.08, width: Width * 0.8, marginTop: Height * 0.02, }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: Height * 0.03, width: Width * 0.12, }}>
                        <Text style={{ fontSize: 15, fontWeight: '700', color: '#000000' }}>Tiết 3</Text>
                    </View>
                    <View style={{ width: Width * 0.1, height: Height * 0.082, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: Height * 0.025, width: Width * 0.053, borderRadius: 10, backgroundColor: '#F15829', borderWidth: 3, borderColor: '#F2F2F2', }}></View>
                        <View style={{ flex: 1, width: 1, backgroundColor: '#F2F2F2', }}></View>
                    </View>
                    <View style={{ height: Height * 0.08, flex: 1, borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 5, backgroundColor: '#F7FBFC', }}>
                        <View style={{ height: Height * 0.03, width: Width * 0.8, marginTop: Height * 0.012, marginLeft: Width * 0.027, }}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#000000' }}>Tiếng Việt</Text>
                        </View>
                        <View style={{ height: Height * 0.025, width: Width * 0.4, marginLeft: Width * 0.027, marginTop: Height * 0.0098, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ height: Height * 0.025, width: Width * 0.25 }}>
                                <Text style={{ color: '#8E8E8E', fontSize: 12 }}>08:50 - 09:35</Text>
                            </View>
                            <View style={{ height: Height * 0.025, width: Width * 0.3, }}>
                                <Text style={{ color: '#8E8E8E', fontSize: 12 }}>GV: Nguyễn Thị Mai</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ height: Height * 0.08, width: Width * 0.8, marginTop: Height * 0.02, }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: Height * 0.03, width: Width * 0.12, }}>
                        <Text style={{ fontSize: 15, fontWeight: '700', color: '#000000' }}>Tiết 4</Text>
                    </View>
                    <View style={{ width: Width * 0.1, height: Height * 0.082, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: Height * 0.025, width: Width * 0.053, borderRadius: 10, backgroundColor: '#F15829', borderWidth: 3, borderColor: '#F2F2F2', }}></View>
                        <View style={{ flex: 1, width: 1, backgroundColor: '#F2F2F2', }}></View>
                    </View>
                    <View style={{ height: Height * 0.08, flex: 1, borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 5, backgroundColor: '#F7FBFC', }}>
                        <View style={{ height: Height * 0.03, width: Width * 0.8, marginTop: Height * 0.012, marginLeft: Width * 0.027, }}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#000000' }}>Thể dục</Text>
                        </View>
                        <View style={{ height: Height * 0.025, width: Width * 0.4, marginLeft: Width * 0.027, marginTop: Height * 0.0098, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ height: Height * 0.025, width: Width * 0.25 }}>
                                <Text style={{ color: '#8E8E8E', fontSize: 12 }}>09:45 - 10:30</Text>
                            </View>
                            <View style={{ height: Height * 0.025, width: Width * 0.3, }}>
                                <Text style={{ color: '#8E8E8E', fontSize: 12 }}>GV: Nguyễn Thị Mai</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ height: Height * 0.08, width: Width * 0.8, marginTop: Height * 0.02, marginBottom: Height * 0.02 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: Height * 0.03, width: Width * 0.12, }}>
                        <Text style={{ fontSize: 15, fontWeight: '700', color: '#000000' }}>Tiết 5</Text>
                    </View>
                    <View style={{ width: Width * 0.1, height: Height * 0.082, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: Height * 0.025, width: Width * 0.053, borderRadius: 10, backgroundColor: '#F15829', borderWidth: 3, borderColor: '#F2F2F2', }}></View>
                        <View style={{ flex: 1, width: 1, backgroundColor: '#F2F2F2', }}></View>
                    </View>
                    <View style={{ height: Height * 0.08, flex: 1, borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 5, backgroundColor: '#F7FBFC', }}>
                        <View style={{ height: Height * 0.03, width: Width * 0.8, marginTop: Height * 0.012, marginLeft: Width * 0.027, }}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#000000' }}>Giáo dục công dân</Text>
                        </View>
                        <View style={{ height: Height * 0.025, width: Width * 0.4, marginLeft: Width * 0.027, marginTop: Height * 0.0098, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ height: Height * 0.025, width: Width * 0.25 }}>
                                <Text style={{ color: '#8E8E8E', fontSize: 12 }}>10:40 - 11:25</Text>
                            </View>
                            <View style={{ height: Height * 0.025, width: Width * 0.3, }}>
                                <Text style={{ color: '#8E8E8E', fontSize: 12 }}>GV: Nguyễn Thị Mai</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}


const TraoDoi = () => {
    return (
        <View style={{ width: Width * 0.9, backgroundColor: '#FFFFFF', marginTop: Height * 0.03, borderRadius: 10, borderWidth: 1, borderColor: '#F2F2F2', alignItems: 'center', marginBottom: Height * 0.02, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: Width * 0.8, height: Height * 0.05, borderBottomWidth: 1, borderColor: '#F2F2F2', borderStyle: 'dashed', marginTop: Height * 0.01 }}>
                <Image source={require('../../../icons/traoDoi.png')} ></Image>
                <Text style={{ fontWeight: '700', fontSize: 15, color: 'black', marginLeft: Width * 0.05 }}>Trao đổi</Text>
            </View>

            <View style={{ width: Width * 0.8, borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, marginTop: Height * 0.03, }}>

                <View style={{ width: Width * 0.8, height: Height * 0.1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderBottomWidth: 1, borderColor: '#F2F2F2', borderStyle: 'dashed', }}>

                    <View style={{ height: Height * 0.1, width: Width * 0.2, justifyContent: 'center', }}>
                        <Image source={require('../../../icons/teacher1.png')}></Image>
                    </View>

                    <View style={{ height: Height * 0.06, width: Width * 0.5, justifyContent: 'space-between' }}>
                        <Text style={{ color: '#1782C5', fontWeight: '700', fontSize: 16 }}>Ngô Tuyết Mai</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#827D7C' }}>GV Chủ nhiệm</Text>
                            <Text style={{ color: '#827D7C' }}>20/12/2022</Text>
                        </View>
                    </View>

                </View>

                <View style={{ width: Width * 0.8, height: Height * 0.1, alignItems: 'center', marginTop: Height*0.01}}>
                    <View style={{ width: Width * 0.7, height: Height * 0.1,}}>
                        <Text style={{ color: '#1782C5', fontWeight: '700', fontSize: 16 }}>Nội dung</Text>
                        <Text style={{ color: 'black', fontWeight: '400', fontSize: 15, marginTop: Height*0.01 }}>Em có ý thức tự học và tự chủ trong mọi vấn đề.</Text>
                    </View>
                    
                </View>

            </View>

            <View style={{ width: Width * 0.8, borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, marginTop: Height * 0.03, marginBottom: Height * 0.02}}>

                <View style={{ width: Width * 0.8, height: Height * 0.1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderBottomWidth: 1, borderColor: '#F2F2F2', borderStyle: 'dashed', }}>

                    <View style={{ height: Height * 0.1, width: Width * 0.2, justifyContent: 'center', }}>
                        <Image source={require('../../../icons/teacher2.png')}></Image>
                    </View>

                    <View style={{ height: Height * 0.06, width: Width * 0.5, justifyContent: 'space-between' }}>
                        <Text style={{ color: '#1782C5', fontWeight: '700', fontSize: 16 }}>Nguyễn Thu Thảo</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#827D7C' }}>GV Tiếng Việt</Text>
                            <Text style={{ color: '#827D7C' }}>20/12/2022</Text>
                        </View>
                    </View>

                </View>

                <View style={{ width: Width * 0.8, height: Height * 0.1, alignItems: 'center', marginTop: Height*0.01,}}>
                    <View style={{ width: Width * 0.7, height: Height * 0.1,}}>
                        <Text style={{ color: '#1782C5', fontWeight: '700', fontSize: 16 }}>Nội dung</Text>
                        <Text style={{ color: 'black', fontWeight: '400', fontSize: 15, marginTop: Height*0.01 }}>Tự tin trong học tập, trung thực, đoàn kết yêu quý bạn bè.</Text>
                    </View>
                    
                </View>

            </View>

        </View>
    )
}

const YTe = () => {
    return (
        <View style={{ width: Width * 0.9, backgroundColor: '#FFFFFF', marginTop: Height * 0.03, borderRadius: 10, borderWidth: 1, borderColor: '#F2F2F2', alignItems: 'center', marginBottom: Height * 0.02, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: Width * 0.8, height: Height * 0.05, borderBottomWidth: 1, borderColor: '#F2F2F2', borderStyle: 'dashed', marginTop: Height * 0.01 }}>
                <Image source={require('../../../icons/yTe.png')} ></Image>
                <Text style={{ fontWeight: '700', fontSize: 15, color: 'black', marginLeft: Width * 0.05 }}>Y tế</Text>
            </View>

                <View style={{ width: Width * 0.8, height: Height * 0.1, alignItems: 'center', marginTop: Height*0.01}}>
                    <View style={{ width: Width * 0.7, height: Height * 0.1,}}>
                        <Text style={{ color: '#1782C5', fontWeight: '700', fontSize: 16 }}>Nội dung</Text>
                        <Text style={{ color: 'black', fontWeight: '400', fontSize: 15, marginTop: Height*0.01 }}>Trong giờ toán bạn Nhi bị mệt, xuống phòng y tế trường để nghỉ.</Text>
                    </View>
                </View>

                <View style={{ width: Width * 0.8, height: Height * 0.1, alignItems: 'center', marginTop: Height*0.01, marginBottom: Height*0.02}}>
                    <View style={{ width: Width * 0.7, height: Height * 0.1,}}>
                        <Text style={{ color: '#1782C5', fontWeight: '700', fontSize: 16 }}>Thuốc sử dụng</Text>
                        <Text style={{ color: 'black', fontWeight: '400', fontSize: 15, marginTop: Height*0.01 }}>Thuốc giảm đau Panadol 500mg Liều dùng: 1 viên</Text>
                    </View>
                </View>

        </View>
    )
}

const TamLy = () => {
    return (
        <View style={{ width: Width * 0.9, backgroundColor: '#FFFFFF', marginTop: Height * 0.03, borderRadius: 10, borderWidth: 1, borderColor: '#F2F2F2', alignItems: 'center', marginBottom: Height * 0.02, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: Width * 0.8, height: Height * 0.05, borderBottomWidth: 1, borderColor: '#F2F2F2', borderStyle: 'dashed', marginTop: Height * 0.01 }}>
                <Image source={require('../../../icons/tamLy.png')} ></Image>
                <Text style={{ fontWeight: '700', fontSize: 15, color: 'black', marginLeft: Width * 0.05 }}>Tâm lý</Text>
            </View>

                <View style={{ width: Width * 0.8, height: Height * 0.1, alignItems: 'center', marginTop: Height*0.01, marginBottom: Height*0.02}}>
                    <View style={{ width: Width * 0.7, height: Height * 0.1,}}>
                        <Text style={{ color: '#1782C5', fontWeight: '700', fontSize: 16 }}>Nội dung</Text>
                        <Text style={{ color: 'black', fontWeight: '400', fontSize: 15, marginTop: Height*0.01 }}>Tự tin trong học tập, trung thực, đoàn kết yêu quý bạn bè.</Text>
                    </View>
                </View>

        </View>
    )
}