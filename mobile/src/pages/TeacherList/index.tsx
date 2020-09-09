import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../TeacherItem';

import styles from './styles';

function TeacherList() {

    const [isFilterVisible, setIsFilterVisible] = useState(false);

    function handleToggleFilterVisible() {
        setIsFilterVisible(!isFilterVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Available Proffys"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFilterVisible}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}
            >
                {isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Subject</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="What is the subject?"
                            placeholderTextColor="#c1bcc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Day of the week</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Which day?"
                                    placeholderTextColor="#c1bcc"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Schedule</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Which hour?"
                                    placeholderTextColor="#c1bcc"
                                />
                            </View>
                        </View>

                        <RectButton style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filter</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}

export default TeacherList;