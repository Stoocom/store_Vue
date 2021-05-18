Vue.component('cartPage', {
    data() {
        return {
            cartAPI: this.$root.$refs.header.$refs.cart,
        }
    },
    template: `
        <div class="cart__container">
            <div class="slider2">
                <p class="slider2_text1">Cart</p>
                <p class="slider2_text2">Sometimes need to make our soul free</p>
            </div>
            <div class="cart__main">
                <cart-item2 
                    ref="cart-item" 
                    v-for="item of cartAPI.cartItems" 
                    :key="item.id_product" 
                    :prod="item"
                    @remove="cartAPI.remove"
                >
                </cart-item2>
            </div>
            <div class="border__text">
                <p class="border__line2">TOTAL</p>
                <p class="border__line2">$47.00</p>    
            </div>
            <a class="drop2__buttom" href="#">Pay</a>   
        </div>`
});

Vue.component('cart-item2', {
    props: ['prod'],
    template: `
            <div class="cart__main__block">
                <a href="#" class="cart__block_link">
                    <div class="cart__block__foto">
                        <img :src="'../' + prod.urlImage" alt="stars">
                    </div>
                </a>
                <div class="cart__block_info">
                    <p class="cart__block1__text1">{{prod.product_name}}</p>
                    <div class="cart__block__stars"><img src="../img/stars.png" alt="stars"></div>
                    <div class="cart-dlt_main">
                        <p class="cart__block1__text2">{{prod.quantity}} x {{prod.price}}</p>
                        <button class="cart__link2" @click="$emit('remove', prod)">&times;</button>
                    </div>    
                </div>
            </div>
    `
});
