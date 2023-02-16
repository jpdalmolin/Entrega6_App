import { Button, FlatList, SafeAreaView, Text, View } from "react-native";

import { CATEGORIES } from "../../constants/data";
import { CategoryItem } from "../../components";
import Products from "../products";
import React from "react";
import { colors } from "../../constants/theme/colors";
import { styles } from "./styles";

const Categories=({navigation})=>{
    const onSelected=(item)=>{
        navigation.navigate('Products',{
            categoryId:item.id,
            title:item.title,
        });
    };
    const renderItem=({item})=> <CategoryItem item={item} onSelected={onSelected} />;
    
    const keyExtractor=(item)=>item.id.toString();
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={CATEGORIES}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.containerList}
            />
            
        </SafeAreaView>
    )

}

export default Categories;