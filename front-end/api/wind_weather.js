// import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import API from '../../back-end/routes/app';

export default function PaddleConditions () {
    // const [ isLoading, setLoading ] = useState(true);
    const [ data, setData ] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.weather.gov/gridpoints/HFO/229,73')
    //         .then((response) => response.json())
    //         .then((json) => setData(json.properties.windSpeed.values))
    //         .catch((error) => console.error(error))
    //         .finally(() => setLoading(false))
    // }, []);

    setData(response => API(response.json.properties.windSpeed.values))

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {/* {isLoading ? <ActivityIndicator/> : ( */}
                <FlatList
                    data={data}
                    keyExtractor={({id}, index) => id}
                    renderItem={({item}) => (
                        <Text>{item.validTime}, {item.value}</Text>
                    )}
                    />
            {/* )} */}
        </View>
    );
};