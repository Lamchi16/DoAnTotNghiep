/** @format */

import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { helperFunction } from '../../../utils';

function Item({ data }) {
    const navigation = useNavigation();

	return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', {
            transData: data
        })}>
        </TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 7,
        overflow: 'hidden'
    },
    containerImage: {width: 100, height: 150},

    content: {
        marginLeft: 10,
        flex: 1,
    },
    header: {
        fontSize: 20,
        marginBottom: 10
    },
    price: {
        fontSize: 15,
        marginBottom: 10
    },
});

export default Item;
