const initialState = [{
    id: 1,
    name: 'Iphone 6s Plus',
    description: 'Iphone 6s Plus 64GB/Rose Gold',
    price: 150,
    imgUrl: 'http://product.hstatic.net/200000013662/product/1-1_41e079e683044d8c8c3d00d2f494c3fa_grande.png',
    rating: 3
},
{
    id: 2,
    name: 'Iphone XS MAX',
    description: 'Iphone XS MAX 128GB/White',
    price: 500,
    imgUrl: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg',
    rating: 4
},
{
    id: 3,
    name: 'Iphone 11 Promax',
    description: 'Iphone 11 Promax 256GB/Black',
    price: 700,
    imgUrl: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg',
    rating: 5
}];
const productReducer = (state = initialState, action) => {
    switch (action) {
        default: return [...state];
    }
}
export default productReducer;