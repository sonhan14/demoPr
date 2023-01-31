import React, { PureComponent, useState } from 'react';
import { View, Dimensions, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Background } from '../schedule/schedule';
import { EvaluateBonusDB } from './EvaluateBonusDB';
import { QualifyingData } from './QualifyingData';
import { SubjectsData } from './Subjectsdata';
import { TeacherComment } from './TeacherComment';


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const title_background = 'Kết quả học tập'




const Learning = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FAF8F7', }}>
            <Background title_background={title_background} />
            <Semester />
            <ScrollView style={{ marginBottom: '10%', marginTop: '5%' }}>
                <SubjectsActivities />
                <QualifyingAbilities />
                <CommentTeacher />
                <EvaluateBonus />
            </ScrollView>

        </View>

    )
}


export default Learning

const Semester = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '2%', }}>
            <View style={{ width: Width * 0.94, height: Height * 0.04, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ height: '100%', width: '22%', backgroundColor: '#F2F2F2', borderRadius: 16, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontWeight: '700', color: '#8E8E8E' }}>Giữa kỳ I</Text>
                </View>
                <View style={{ height: '100%', width: '22%', backgroundColor: '#F2F2F2', borderRadius: 16, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontWeight: '700', color: '#8E8E8E' }}>Cuối kỳ I</Text>
                </View>
                <View style={{ height: '100%', width: '22%', backgroundColor: '#F2F2F2', borderRadius: 16, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontWeight: '700', color: '#8E8E8E' }}>Giữa kỳ II</Text>
                </View>
                <View style={{ height: '100%', width: '22%', backgroundColor: '#F2F2F2', borderRadius: 16, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontWeight: '700', color: '#8E8E8E' }}>Cuối năm</Text>
                </View>
            </View>
        </View>

    )

}

const SubjectsActivities = () => {
    const [shouldShow, setShouldShow] = useState(true);
    const dataTable = SubjectsData
    return (

        <View style={{ alignItems: 'center', }}>
            {!shouldShow ?
                <View style={{ height: Height * 0.07, width: Width * 0.94 }}>
                    <View style={{
                        backgroundColor: '#F1F1F1', width: '100%', height: '100%', borderTopLeftRadius: 10,
                        borderTopRightRadius: 10, justifyContent: 'center', alignItems: 'center',
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
                            <Text style={{ color: '#1782C5', fontWeight: '700' }}>1. Các môn học và hoạt động giáo dục</Text>
                            <TouchableOpacity onPress={() => setShouldShow(!shouldShow)} style={{height: '100%'}}>
                                <Image source={require('../../../icons/Polygon-down.png')} style={{ marginRight: '5%'}}></Image>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                :

                <View style={{ width: Width * 0.94 }}>
                    <View style={{
                        backgroundColor: '#F1F1F1', width: '100%', height: Height * 0.07, borderTopLeftRadius: 10,
                        borderTopRightRadius: 10, justifyContent: 'center', alignItems: 'center',
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
                            <Text style={{ color: '#1782C5', fontWeight: '700' }}>1. Các môn học và hoạt động giáo dục</Text>
                            <TouchableOpacity onPress={() => setShouldShow(!shouldShow)} style={{height: '100%'}}>
                                <Image source={require('../../../icons/Polygon-down.png')} style={{ marginRight: '5%' }}></Image>
                            </TouchableOpacity>
                        </View>

                    </View>
                    {shouldShow ? <View >
                        <View style={{ width: '100%', height: Height * 0.06, flexDirection: 'row', borderTopWidth: 0.7, borderStyle: 'dashed', borderColor: '#8E8E8E' }}>
                            <View style={{ width: '30%', height: '100%', backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ color: 'black', fontWeight: '600' }}>Môn học</Text>
                            </View>
                            <View style={{ width: '30%', height: '100%', backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ color: 'black', fontWeight: '600' }}>Điểm ĐGĐK</Text>
                            </View>
                            <View style={{ flex: 1, backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ color: 'black', fontWeight: '600' }}>Mức đạt được</Text>
                            </View>
                        </View>
                        {dataTable.map((e) =>
                            <View key={e.monHoc} style={{ width: '100%' }}>
                                {e.monHoc === 'Tiếng dân tộc' ?
                                    <View style={{ width: '100%', flexDirection: 'row', }}>
                                        <View style={{ width: '30%', backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRightWidth: 0, borderBottomWidth: 0 }}>
                                            <Text style={{ color: 'black', fontWeight: '600', padding: 10, }}>{e.monHoc}</Text>
                                        </View>
                                        <View style={{ width: '30%', backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRightWidth: 0, }}>
                                            <Text style={{ color: 'black', fontWeight: '600', padding: 10, }}>{e.diem}</Text>
                                        </View>

                                        <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, }}>
                                            <Text style={{ color: 'black', fontWeight: '600', padding: 10, }}>{e.mucDat}</Text>
                                        </View>
                                    </View>

                                    :

                                    <View style={{ width: '100%', flexDirection: 'row', }}>
                                        <View style={{ width: '30%', backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRightWidth: 0, borderBottomWidth: 0 }}>
                                            <Text style={{ color: 'black', fontWeight: '600', padding: 10, }}>{e.monHoc}</Text>
                                        </View>
                                        <View style={{ width: '30%', backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderRightWidth: 0, borderBottomWidth: 0 }}>
                                            <Text style={{ color: 'black', fontWeight: '600', padding: 10, }}>{e.diem}</Text>
                                        </View>

                                        <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, borderBottomWidth: 0 }}>
                                            <Text style={{ color: 'black', fontWeight: '600', padding: 10, }}>{e.mucDat}</Text>
                                        </View>
                                    </View>
                                }

                            </View>
                        )}
                    </View> : null}

                </View>

            }
        </View>
    )
}


const QualifyingAbilities = () => {
    const [shouldShow, setShouldShow] = useState(true);
    const dataTable = QualifyingData
    return (

        <View style={{ alignItems: 'center', marginTop: '5%', }}>
            {!shouldShow ?
                <View style={{ height: Height * 0.07, width: Width * 0.94 }}>
                    <View style={{
                        backgroundColor: '#F1F1F1', width: '100%', height: '100%', borderTopLeftRadius: 10,
                        borderTopRightRadius: 10, justifyContent: 'center', alignItems: 'center',
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
                            <Text style={{ color: '#1782C5', fontWeight: '700' }}>2. Các năng lực phẩm chất</Text>
                            <TouchableOpacity onPress={() => setShouldShow(!shouldShow)} style={{height: '100%'}}>
                                <Image source={require('../../../icons/Polygon-down.png')} style={{ marginRight: '5%' }}></Image>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                :

                <View style={{ width: Width * 0.94 }}>
                    <View style={{
                        backgroundColor: '#F1F1F1', width: '100%', height: Height * 0.07, borderTopLeftRadius: 10,
                        borderTopRightRadius: 10, justifyContent: 'center', alignItems: 'center',
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
                            <Text style={{ color: '#1782C5', fontWeight: '700' }}>2. Các năng lực phẩm chất</Text>
                            <TouchableOpacity onPress={() => setShouldShow(!shouldShow)} style={{height: '100%'}}>
                                <Image source={require('../../../icons/Polygon-down.png')} style={{ marginRight: '5%' }}></Image>
                            </TouchableOpacity>
                        </View>

                    </View>
                    {shouldShow ? <View >
                        {dataTable.map((e) =>
                            <View key={e.title} style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderColor: '#F2F2F2', borderWidth: 1, borderTopWidth: 0 }}>
                                <View style={{ width: '98%', marginTop: '2%', }}>
                                    <View style={{ width: '100%', }}>
                                        <Text style={{ color: '#1782C5', fontSize: 15, fontWeight: '700', padding: 10, }}>
                                            {e.title}
                                        </Text>
                                        {e.skill.map((i) =>
                                            <View key={i.loaiNL} style={{ width: '100%' }}>
                                                <View style={{ width: '100%', flexDirection: 'row', marginTop: 5, }}>
                                                    <View style={{ width: '65%', padding: 10, borderColor: '#F2F2F2', borderWidth: 1, borderRightWidth: 0, }}>
                                                        <Text style={{ color: 'black', fontWeight: '600', }}>{i.loaiNL}</Text>
                                                    </View>
                                                    <View style={{ width: '35%', padding: 10, justifyContent: 'center', alignItems: 'center', borderColor: '#F2F2F2', borderWidth: 1, }}>
                                                        <Text style={{ color: 'black', fontWeight: '600', }}>{i.xepLoai}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                        }
                                        <View style={{ width: '100%', marginTop: '2%', }}>
                                            <Text style={{ color: 'black', fontSize: 15, fontWeight: '500', padding: 5, }}>Nhận Xét</Text>
                                            <Text style={{ color: 'black', padding: 5, }}>{e.xepLoai}</Text>
                                        </View>

                                    </View>
                                </View>
                            </View>
                        )
                        }

                    </View> : null}
                </View>
            }
        </View>
    )
}

const CommentTeacher = () => {
    const [shouldShow, setShouldShow] = useState(true);
    const dataTable = TeacherComment
    return (

        <View style={{ alignItems: 'center', marginTop: '5%', }}>
            {!shouldShow ?
                <View style={{ height: Height * 0.07, width: Width * 0.94 }}>
                    <View style={{
                        backgroundColor: '#F1F1F1', width: '100%', height: '100%', borderTopLeftRadius: 10,
                        borderTopRightRadius: 10, justifyContent: 'center', alignItems: 'center',
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
                            <Text style={{ color: '#1782C5', fontWeight: '700' }}>3. Nhận xét của giáo viên bộ môn</Text>
                            <TouchableOpacity onPress={() => setShouldShow(!shouldShow)} style={{height: '100%'}}>
                                <Image source={require('../../../icons/Polygon-down.png')} style={{ marginRight: '5%' }}></Image>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                :

                <View style={{ width: Width * 0.94 }}>
                    <View style={{
                        backgroundColor: '#F1F1F1', width: '100%', height: Height * 0.07, borderTopLeftRadius: 10,
                        borderTopRightRadius: 10, justifyContent: 'center', alignItems: 'center',
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
                            <Text style={{ color: '#1782C5', fontWeight: '700' }} >3. Nhận xét của giáo viên bộ môn</Text>
                            <TouchableOpacity onPress={() => setShouldShow(!shouldShow)} style={{height: '100%'}}>
                                <Image source={require('../../../icons/Polygon-down.png')} style={{ marginRight: '5%' }}></Image>
                            </TouchableOpacity>
                        </View>

                    </View>
                    {shouldShow ? <View >
                        {dataTable.map((e) =>
                            <View key={e.subject} style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderColor: '#F2F2F2', borderWidth: 1, borderTopWidth: 0 }}>
                                <View style={{ width: '98%', marginTop: '2%', }}>

                                    <View style={{ width: '100%', marginTop: '2%', }}>
                                        <Text style={{ color: '#1782C5', fontSize: 15, fontWeight: '700', padding: 5, }}>{e.subject}</Text>
                                        <Text style={{ color: 'black', padding: 10, }}>{e.comment}</Text>
                                    </View>

                                </View>
                            </View>
                        )
                        }
                    </View> : null}
                </View>
            }
        </View>
    )
}

const EvaluateBonus = () => {
    const dataTable = EvaluateBonusDB
    return (

        <View style={{ alignItems: 'center', marginTop: '5%', }}>
            <View style={{ width: Width * 0.94 }}>
                <View style={{
                    backgroundColor: '#F1F1F1', width: '100%', borderTopLeftRadius: 10,
                    borderTopRightRadius: 10, justifyContent: 'center', alignItems: 'center',
                }}>
                    <View style={{ justifyContent: 'space-between', width: '95%', paddingTop: 10, paddingBottom: 10 }}>
                        <Text style={{ color: '#1782C5', fontWeight: '700' }}>ĐÁNH GIÁ, KHEN THƯỞNG, HOÀN THÀNH CHƯƠNG TRÌNH LỚP HỌC</Text>
                    </View>

                </View>
                {dataTable.map((e) =>
                    <View key={e.title} style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderColor: '#F2F2F2', borderWidth: 1, borderTopWidth: 0 }}>
                        <View style={{ width: '98%', marginTop: '3%', }}>
                            <Text style={{ color: '#1782C5', fontSize: 15, fontWeight: '700', padding: 5, textTransform: 'uppercase' }}>{e.title}</Text>
                            {e.title === 'ĐÁNH GIÁ' ?
                                e.comment.map((i, index) =>
                                    <Text key={index} style={{ color: 'black', padding: 5, fontWeight: '700' }}>{i}</Text>) :
                                e.title === 'KHEN THƯỞNG' ?
                                    e.comment.map((i, index) =>
                                        <Text key={index} style={{ color: 'black', padding: 5, }}>- {i}</Text>) :
                                    e.comment.map((i, index) =>
                                        <Text key={index} style={{ color: 'black', padding: 5, }}>{i}</Text>)
                            }
                        </View>
                    </View>
                )
                }
            </View>
        </View>
    )
}
