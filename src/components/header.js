import React from 'react';
import { View } from 'react-native';
import { CompoundContext } from './layout';

export const Header = ({ children, ...otherProps }) => {
    const compoundContext = React.useContext( CompoundContext );

    return compoundContext?.valid? (
        <View style={{ ...otherProps?.style }}>{ children }</View>
    ) : null;
};
