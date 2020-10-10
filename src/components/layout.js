import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Header from './header';
import Footer from './footer';

export const CompoundContext = React.createContext();

export default function BaseLayout(props) {
    const children = [];
    const headerChildren = [];
    const footerChildren = [];

    React.Children.forEach(props.children, (child) => {
        if ( child?.type === Header ) { 
            headerChildren.push(child);
        } else if (child?.type === Footer ) {
            footerChildren.push(child);
        } else {
            children.push(child);
        }
    });

    return (
        <CompoundContext.Provider value= {{ valid: true }}>
            <View style={ styles.root }>
                <SafeAreaView style={ styles.container }>
                    <View style={ styles.headerContainer }>{ headerChildren }</View>
                    <View style={ styles.main }>{ children }</View>
                    <View style={ styles.footerContainer }>{ footerChildren }</View>
                </SafeAreaView>
            </View>
        </CompoundContext.Provider>
    );
}

BaseLayout.Header = Header;
BaseLayout.Footer = Footer;


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
    },
    headerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    main: { 
        flex: 1, 
    },
    footerContainer: {
        postion: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});