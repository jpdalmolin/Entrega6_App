import { Button, FlatList, SafeAreaView, Text, View } from "react-native";

import { PRODUCTS } from "../../constants/data";
import { ProductItem } from "../../components";
import React from "react";
import { colors } from "../../constants/theme/colors";
import { styles } from "./styles";

const Products=({navigation,route})=>{
    const{categoryId,title} =route.params;

    const filteredProducts=PRODUCTS.filter((product)=>product.categoryId===categoryId);

    console.warn(categoryId,title);
    const onSelected=(item)=>{
        navigation.navigate('ProductDetail',{
            productId:item.id,
            title:item.title,
        });
        
    };
    const renderItem=({item})=> <ProductItem item={item} onSelected={onSelected}/>;
    const keyExtractor=(item)=>item.id.toString();

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={filteredProducts}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.contentList}
            />
        </SafeAreaView>
    )

}

export default Products;