import React from 'react';
import { View } from 'react-native';
import { CompoundContext } from './layout';

export const Footer = ({ children, ...otherProps }) => {
    const compoundContext = React.useContext( CompoundContext );

    return compoundContext?.valid? (
        <View
            style={{
                ...otherProps?.style,
                backgroundColor: 'white',
                borderTopColor: 'grey',
                borderTopWidth: 0.5,
                padding: 20,
            }}>
                { children }
            </View>
    ) : null;
};