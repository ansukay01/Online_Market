


export function addtocart(id, productName, productImage, price) {
    return {
        type: "Add_Item_To_Cart",
        item: {
            id: id,
            productName: productName,
            productImage: productImage,
            price: price
        }
    }
}

export function removefromcart(id) {
    return {
        type: "Remove_Item_From_Cart",
        id: id
        
    }
}