import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image, Dimensions, ScrollView, StyleSheet, StatusBar } from "react-native";
import { dataTest } from "./dataSchedule";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const THEO_NGAY = 'Theo ngày';
const THEO_TUAN = 'Theo tuần';
const title_background = 'Thời khóa biểu'

const dataAPI = dataTest


const CallAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAPI)
            console.log('Da tra ve data')
        }, 1000);
    });
}

const GetData = async (setData) => {
    let data = await CallAPI()
    setData(data)
}


const ScheduleScreen = ({ navigation }) => {
    const [dataAPI, setData] = useState([
        {
            id: '',
            day: '',
            date: '',
            schedule: [],
        }
    ]);

    useEffect(() => {
        console.log('Moi vao man hinh')
        GetData(setData)
        return () => {
            console.log('Huy man hinh nay')
        }
    }, [])

    // useEffect(() => {
    //     // console.log('data da lang nghe: ', dataList)
    // }, [dataAPI])

    const [page, setPage] = useState(THEO_TUAN)
    return (
        <View style={{ flex: 1, backgroundColor: '#FAF8F7', }}>
            <Background title_background={title_background} />
            <DayOrWeek page={page} setPage={setPage} />
            {page === THEO_NGAY ? <ScheduleDate dataAPI={dataAPI} />
                : <View>
                    <ScheduleWeek />
                    <ScheduleWeekData />
                </View>}
            
        </View>

    )
}

export default ScheduleScreen;


export const Background = ({ title_background }) => {
    return (
        <View style={{ backgroundColor: '#5F93D9', height: Height * 0.08, width: Width, }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: Height * 0.03, }}>
                <View style={{ width: Width * 0.03, marginLeft: Width * 0.07, marginRight: Width * 0.229 }}>
                    <TouchableOpacity>
                        <Image source={require('../../../icons/Icon.png')} style={{ height: Height * 0.016 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ height: Height * 0.03, width: Width * 0.37, alignItems: 'center', marginRight: Width * 0.314 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: '700' }}>{title_background}</Text>
                </View>
            </View>
        </View>
    )
}
const DayOrWeek = ({ page, setPage }) => {


    return (
        <View style={{
            backgroundColor: '#F2F2F2', height: Height * 0.06, width: Width * 0.914, marginLeft: Width * 0.0426, marginRight: Width * 0.0426,
            marginTop: Height * 0.02, flexDirection: 'row', borderRadius: 15, justifyContent: 'center', alignItems: 'center'
        }}>

            {page === THEO_NGAY ?
                <View style={{
                    width: Width * 0.424, height: Height * 0.04, alignItems: 'center', backgroundColor: '#1782C5',
                    justifyContent: 'center', borderRadius: 10
                }}>
                    <Text style={{ color: '#FFFFFF', }}>Theo ngày</Text>
                </View>
                :
                <View style={{ width: Width * 0.424, height: Height * 0.04, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        setPage(THEO_NGAY)
                    }}>
                        <Text>Theo ngày</Text>
                    </TouchableOpacity>
                </View>
            }
            {page === THEO_TUAN ? <View style={{
                width: Width * 0.424, height: Height * 0.04, alignItems: 'center', backgroundColor: '#1782C5',
                justifyContent: 'center', borderRadius: 10
            }}>

                <Text style={{ color: '#FFFFFF', }}>Theo tuần</Text>
            </View>
                :
                <View style={{ width: Width * 0.424, height: Height * 0.04, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        setPage(THEO_TUAN)
                    }}>
                        <Text>Theo tuần</Text>
                    </TouchableOpacity>
                </View>
            }

        </View>
    )
}

const ScheduleDate = ({ dataAPI }) => {
    const [choosenDate, setChoosenDate] = useState(0)
    return (
        <View>
            <View style={{ height: Height * 0.064, width: Width, marginTop: Height * 0.02, backgroundColor: '#F1F1F1' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ position: 'absolute', }}
                    contentContainerStyle={{ width: Width * 0.14 * dataAPI.length, height: Height * 0.074, }}>
                    {dataAPI.map((e, index) =>
                        <TouchableOpacity key={index} onPress={() => setChoosenDate(index)}>
                            {index === choosenDate ?
                                <View style={{
                                    backgroundColor: '#F15829', borderBottomEndRadius: 12,
                                    borderBottomStartRadius: 12, height: Height * 0.074, width: Width * 0.14,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{e.day}</Text>
                                    <Text style={{ color: 'white' }}>{e.date}</Text>
                                </View>
                                :
                                <View style={{ height: Height * 0.074, width: Width * 0.14, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>{e.day}</Text>
                                    <Text style={{ color: 'black' }}>{e.date}</Text>
                                </View>
                            }
                        </TouchableOpacity>

                    )}

                </ScrollView>
            </View>


            <View style={{ backgroundColor: 'white', height: Height * 0.54, width: '92%', marginLeft: Width * 0.04, marginRight: Width * 0.04, marginTop: Height * 0.025 }}>
                <View style={{ backgroundColor: 'white', height: '100%', width: '100%', borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 10, }}>
                    <ScrollView style={{ height: '95%', width: '95%', marginLeft: Width * 0.04, marginBottom: 10 }}
                        showsVerticalScrollIndicator={false}>
                        {dataAPI[choosenDate].schedule.map((e, index) =>
                            <View key={index} style={{ height: Height * 0.082, width: '95%', marginTop: Height * 0.02, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ height: Height * 0.022, width: '15%', }}>
                                        <Text style={{ fontSize: 15, fontWeight: '700', color: '#000000' }}>Tiết {e.lesson}</Text>
                                    </View>
                                    <View style={{ width: '10%', height: Height * 0.082, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ height: Height * 0.0246, width: Width * 0.053, borderRadius: 10, backgroundColor: '#F15829', borderWidth: 3, borderColor: '#F2F2F2', }}></View>
                                        <View style={{ flex: 1, width: 1, backgroundColor: '#F2F2F2', }}></View>
                                    </View>
                                    <View style={{ height: '100%', flex: 1, borderColor: '#F2F2F2', borderWidth: 1, borderRadius: 5, backgroundColor: '#F7FBFC', }}>
                                        <View style={{ height: Height * 0.03, width: '90%', marginTop: Height * 0.012, marginLeft: Width * 0.027, }}>
                                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#000000' }}>{e.subject}</Text>
                                        </View>
                                        <View style={{ height: Height * 0.025, width: '95%', marginLeft: Width * 0.027, marginTop: Height * 0.0098, flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ height: '100%', width: '40%' }}>
                                                <Text style={{ color: '#8E8E8E', fontSize: 12 }}>{e.time}</Text>
                                            </View>
                                            <View style={{ height: '100%', width: '60%', }}>
                                                <Text style={{ color: '#8E8E8E', fontSize: 12 }}>{e.teacher}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}
                    </ScrollView>

                </View>
            </View>
        </View>
    )
}

const ScheduleWeek = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
                height: Height * 0.064, width: Width * 0.92,
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
                        thời khoá biểu tuần 16
                    </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', height: Height * 0.045, }}>
                    <Image source={require('../../../icons/Polygon-2.png')}></Image>
                </View>
            </View>
        </View>

    )
}

const ScheduleWeekData = () => {
    return (
        <View style={{height: Height * 0.65, marginTop: Height * 0.01}}>
        <ScrollView style={{ }}>
            <View style={{ height: Height * 0.6, width: Width * 0.92, marginTop: Height * 0.01, marginLeft: Width * 0.042, }}>
                <View style={{ height: '10%', width: '100%' }}>
                    <Text style={{ color: '#1782C5', fontSize: 15, fontWeight: '700' }}>Thứ 2, 19/12/2022</Text>
                </View>
                <View style={{ flex: 1, borderRadius: 10, borderColor: '#F2F2F2' }}>
                    <View style={{ width: '100%', height: '15%', flexDirection: 'row', }}>
                        <View style={{ height: '100%', width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', borderTopLeftRadius: 10 }}>
                            <Text style={{ fontWeight: '700', color: '#000000' }}>Tiết</Text>
                        </View>
                        <View style={{ height: '100%', width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', }}>
                            <Text style={{ fontWeight: '700', color: '#000000' }}>Thời gian</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', borderTopRightRadius: 10 }}>
                            <Text style={{ fontWeight: '700', color: '#000000' }}>Môn học</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ height: '20%', flexDirection: 'row' }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>1</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>07:00 - 07:45</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Chào cờ</Text>
                                {/* <Text style={{fontWeight: '400', color: '#000000'}}></Text> */}
                            </View>
                        </View>

                        <View style={{ height: '20%', flexDirection: 'row', }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>2</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>07:55 - 08:40</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Toán</Text>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>GV: Trịnh Minh Tú</Text>
                            </View>
                        </View>

                        <View style={{ height: '20%', flexDirection: 'row', }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>3</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>08:50 - 09:35</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Tiếng Việt</Text>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>GV: Trịnh Minh Tú</Text>
                            </View>
                        </View>

                        <View style={{ height: '20%', flexDirection: 'row', }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>4</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>09:45 - 10:30</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Thể dục</Text>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>GV: Phan Mạnh An</Text>
                            </View>
                        </View>

                        <View style={{ height: '20%', flexDirection: 'row', }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderBottomLeftRadius: 10 }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>5</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>10:40 - 11:25</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderBottomRightRadius: 10 }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Giáo dục công dân</Text>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>GV: Đỗ Thị Lan</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ height: Height * 0.6, width: Width * 0.92, marginTop: Height * 0.02, marginLeft: Width * 0.042, }}>
                <View style={{ height: '10%', width: '100%' }}>
                    <Text style={{ color: '#1782C5', fontSize: 15, fontWeight: '700' }}>Thứ 2, 19/12/2022</Text>
                </View>
                <View style={{ flex: 1, borderRadius: 10, borderColor: '#F2F2F2' }}>
                    <View style={{ width: '100%', height: '15%', flexDirection: 'row', }}>
                        <View style={{ height: '100%', width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', borderTopLeftRadius: 10 }}>
                            <Text style={{ fontWeight: '700', color: '#000000' }}>Tiết</Text>
                        </View>
                        <View style={{ height: '100%', width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', }}>
                            <Text style={{ fontWeight: '700', color: '#000000' }}>Thời gian</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', borderTopRightRadius: 10 }}>
                            <Text style={{ fontWeight: '700', color: '#000000' }}>Môn học</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ height: '20%', flexDirection: 'row' }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>1</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>07:00 - 07:45</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Chào cờ</Text>
                                {/* <Text style={{fontWeight: '400', color: '#000000'}}></Text> */}
                            </View>
                        </View>

                        <View style={{ height: '20%', flexDirection: 'row', }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>2</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>07:55 - 08:40</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Toán</Text>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>GV: Trịnh Minh Tú</Text>
                            </View>
                        </View>

                        <View style={{ height: '20%', flexDirection: 'row', }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>3</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>08:50 - 09:35</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Tiếng Việt</Text>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>GV: Trịnh Minh Tú</Text>
                            </View>
                        </View>

                        <View style={{ height: '20%', flexDirection: 'row', }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>4</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>09:45 - 10:30</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Thể dục</Text>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>GV: Phan Mạnh An</Text>
                            </View>
                        </View>

                        <View style={{ height: '20%', flexDirection: 'row', }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderBottomLeftRadius: 10 }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>5</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>10:40 - 11:25</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderBottomRightRadius: 10 }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Giáo dục công dân</Text>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>GV: Đỗ Thị Lan</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ height: Height * 0.6, width: Width * 0.92, marginTop: Height * 0.02, marginLeft: Width * 0.042, }}>
                <View style={{ height: '10%', width: '100%' }}>
                    <Text style={{ color: '#1782C5', fontSize: 15, fontWeight: '700' }}>Thứ 2, 19/12/2022</Text>
                </View>
                <View style={{ flex: 1, borderRadius: 10, borderColor: '#F2F2F2' }}>
                    <View style={{ width: '100%', height: '15%', flexDirection: 'row', }}>
                        <View style={{ height: '100%', width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', borderTopLeftRadius: 10 }}>
                            <Text style={{ fontWeight: '700', color: '#000000' }}>Tiết</Text>
                        </View>
                        <View style={{ height: '100%', width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', }}>
                            <Text style={{ fontWeight: '700', color: '#000000' }}>Thời gian</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', borderTopRightRadius: 10 }}>
                            <Text style={{ fontWeight: '700', color: '#000000' }}>Môn học</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ height: '20%', flexDirection: 'row' }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>1</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>07:00 - 07:45</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Chào cờ</Text>
                                {/* <Text style={{fontWeight: '400', color: '#000000'}}></Text> */}
                            </View>
                        </View>

                        <View style={{ height: '20%', flexDirection: 'row', }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>2</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>07:55 - 08:40</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Toán</Text>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>GV: Trịnh Minh Tú</Text>
                            </View>
                        </View>

                        <View style={{ height: '20%', flexDirection: 'row', }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>3</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>08:50 - 09:35</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Tiếng Việt</Text>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>GV: Trịnh Minh Tú</Text>
                            </View>
                        </View>

                        <View style={{ height: '20%', flexDirection: 'row', }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>4</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>09:45 - 10:30</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Thể dục</Text>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>GV: Phan Mạnh An</Text>
                            </View>
                        </View>

                        <View style={{ height: '20%', flexDirection: 'row', }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderBottomLeftRadius: 10 }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>5</Text>
                            </View>
                            <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>10:40 - 11:25</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderBottomRightRadius: 10 }}>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>Giáo dục công dân</Text>
                                <Text style={{ fontWeight: '400', color: '#000000' }}>GV: Đỗ Thị Lan</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        </View>
    )
}
