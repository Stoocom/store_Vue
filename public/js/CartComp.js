Vue.component('cart', {
    data() {
        return {
            imgCart: 'https://via.placeholder.com/100x150',
            cartUrl: '/api/cart',
            cartItems: [],
        }
    },
    methods: {
        addProduct(product) {
            console.log(product);
            console.log(this.cartItems);

            let find = this.cartItems.find(el => el.id_product === product.id_product);
            console.log("сработал метод добавления");
            if (find) {
                this.$root.putJson(`${this.cartUrl}/${find.id_product}`, { quantity: 1 })
                    .then(data => {
                        if (data.result === 1) {
                            find.quantity++;
                        }
                    })
            } else {
                let prod = Object.assign({ quantity: 1 }, product);
                //console.log(prod);
                this.$root.postJson(`${this.cartUrl}`, prod)
                    .then(data => {
                        //console.log(product);
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                            //this.$root.cartAPI.push(prod);
                        }
                    });
            }
        },
        remove(item) {
            this.$root.removeJson(`${this.cartUrl}`, item)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1)
                        }
                    }
                })
        },
    },
    mounted() {
        this.$root.getJson(`${this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    console.log("Добавлен в корзину товар");
                    this.cartItems.push(el);
                    this.$root.cartAPI.push(el);
                }
            });
    },
    template: `
        <div>
            <div v-if="!cartItems.length">Корзина пуста</div>
            <div v-else>
                <cart-item 
                    ref="cart-item"
                    v-for="item of cartItems" 
                    :key="item.id_product" 
                    :item="item"
                    @remove="remove">
                </cart-item>
                <div class="border__text">
                    <p class="border__line2">TOTAL</p>
                    <p class="border__line2">$47.00</p>    
                </div>
                    <a class="drop2__buttom" href="#">Checkout</a>
                    <router-link to="/cart" class="drop2__buttom2" exact>Go to cart</router-link>
            </div>  
        </div>`
});

Vue.component('cart-item', {
    props: ['item'],
    template: `
        <div >
            <div class="cart__block1">
                <a href="#" class="cart__link">
                    <div class="block1__foto">
                        <img :src="'../' + item.urlImage" alt="stars">
                    </div>
                </a>
                <div class="block1__info">
                    <p class="block1__text1">{{item.product_name}}</p>
                    <div class="block__stars"><img src="../img/stars.png" alt="stars"></div>
                    <div class="cart-dlt">
                        <p class="block1__text2">{{item.quantity}} x {{item.price}}</p>
                        <button class="cart__link2" @click="$emit('remove', item)">&times;</button>
                    </div>
                    
                </div>
            </div>
            <p class="border__line"></p>
        </div>
    `
});
