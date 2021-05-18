Vue.component('catalog', {
    data(){
        return {
            catalogUrl: '/api/products',
            products: [],
            filtered: [],
            imgCatalog: 'https://via.placeholder.com/200x150',
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
        checkGetData() {
            if (this.filtered.length == 0) {
                this.$root.getJson(`${this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    console.log('We did it');
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
            } else {
                console.log('Нет данных');
            }
        },
    },
    mounted(){
        this.checkGetData();
        this.$root.isOpenCatalog = true;
    },
    template: `
    <div class="catalog">
        <div class="container catalog__content">
            <div class="catalog__menu">
                <a href="#" class="catalog__menu1">
                    <p class="catalog__text">Category</p>
                    <span class="catalog__symbol">&#9662;</span>
                </a>
                <ul class="catalog__menu2">
                    <li class="catalog-list"><a href="#" class="catalog__link">Accessories</a></li>
                    <li class="catalog-list"><a href="#" class="catalog__link">Bags</a></li>
                    <li class="catalog-list"><a href="#" class="catalog__link">Denim</a></li>
                    <li class="catalog-list"><a href="#" class="catalog__link">Hoodies & Sweatshirts</a></li>
                    <li class="catalog-list"><a href="#" class="catalog__link">Jackets & Coats</a></li>
                    <li class="catalog-list"><a href="#" class="catalog__link">Pants</a></li>
                    <li class="catalog-list"><a href="#" class="catalog__link">Polos</a></li>
                    <li class="catalog-list"><a href="#" class="catalog__link">Shirts</a></li>
                    <li class="catalog-list"><a href="#" class="catalog__link">Shoes</a></li>
                    <li class="catalog-list"><a href="#" class="catalog__link">Shorts</a></li>
                    <li class="catalog-list"><a href="#" class="catalog__link">Sweaters & Knits</a></li>
                    <li class="catalog-list"><a href="#" class="catalog__link">T-Shirts</a></li>
                    <li class="catalog-list"><a href="#" class="catalog__link">Tanks</a></li>
                </ul>
                <a href="#" class="catalog__menu1">
                    <p class="catalog__text1">BRAND</p>
                    <span class="catalog__symbol1">&#9662;</span>
                </a>
                <a href="#" class="catalog__menu1">
                     <p class="catalog__text1">dESIGNER</p>
                     <span class="catalog__symbol1">&#9662;</span>
                </a>
            </div>
            <div class="catalog__main">
                <div class="main_content1">
                    <div class="main__block1">
                        <p class="main__text">Trending now</p>
                    </div>
                    <div class="main__block1">
                        <p class="main__text">Size</p>
                    </div>
                    <div class="main__block1">
                        <p class="main__text">pRICE</p>
                    </div>
                </div>
                <div class="main_content2">
                    <div class="main1__block2">
                       <div class="block2__list">
                           <a href="#" class="block2__text1">Bohemian</a>
                            <p class="block2__text2">|</p>
                            <a href="#" class="block2__text1">Floral</a>
                           <p class="block2__text2">|</p>
                           <a href="#" class="block2__text1">Lace</a>
                       </div>
                       <div class="block2__list">
                           <a href="#" class="block2__text1">Lace</a>
                            <p class="block2__text2">|</p>
                            <a href="#" class="block2__text1">Floral</a>
                           <p class="block2__text2">|</p>
                           <a href="#" class="block2__text1">Bohemian</a>
                       </div>
                    </div>
                    <div class="main__block2">
                        <div class="block2__list1">
                           <p class=list1__text><input class="size" type="checkbox" value="XXS"> XXS </p>
                           <p class=list1__text><input class="size" type="checkbox"> XS </p>
                           <p class=list1__text><input class="size" type="checkbox"> S </p>
                           <p class=list1__text><input class="size" type="checkbox"> M </p>
                       </div>
                       <div class="block2__list2">
                           <p class="list1__text"><input class="size" type="checkbox"> L </p>
                           <p class="list2__text list1__text"><input class="size" type="checkbox"> XL </p>
                           <p class="list3__text list1__text"><input class="size" type="checkbox"> XXL </p>
                       </div>
                    </div>
                    <div class="main__block2">
                        <div class="block2__line"></div>
                        <div class="block2__line2">
                            <p class="line2__text">$52</p>
                            <p class="line2__text">$400</p>
                        </div>
                    </div>
                </div>
                <div class="main_content3">
                    <form class="content3__form1" action="#">
                        <a href="#" class="browse1">Sort By</a>
                        <a href="#" class="browse1 browse2">Name <span class="content__buttom">&#9662;</span></a>
                    </form>
                    <form class="content3__form2" action="#">
                        <a href="#" class="browse3">Show</a>
                        <a href="#" class="browse3 browse4">09<span class="content__buttom">&#9662;</span></a>
                    </form>
                </div>
                <div class="slider3-row1">
                    <product ref="product" v-for="item of filtered" :key="item.id_product" :filtered="this.filtered" :product="item"></product>
                </div>
                <div class="main_content5">
                    <div class="content5__seaching">
                        <a href="" class="seaching__buttom1">&#8249;</a>
                        <a href="" class="seaching__buttom2_red">1</a>
                        <a href="" class="seaching__buttom2">2</a>
                        <a href="" class="seaching__buttom2">3</a>
                        <a href="" class="seaching__buttom2">4</a>
                        <a href="" class="seaching__buttom2">5</a>
                        <a href="" class="seaching__buttom6">6</a>
                        <a href="" class="seaching__buttom3">.....</a>
                        <a href="" class="seaching__buttom4">20</a>
                        <a href="" class="seaching__buttom5">&#8250;</a>
                    </div>
                    <a class="content5__buttom" href="#">View All</a>
                </div>
            </div>
        </div>
    </div>`
});
Vue.component('product', {
    props: ['product', 'filtered'],
    data() {
        return {
            cartAPI: this.$root.$refs.header.$refs.cart,
        };
    },
    template: `
    <div class="slider3-product1">
        <router-link ref="prodCatalog" :to="'/products/'+product.id_product" exact>
            <img class="slider3-foto1" :src="product.urlImage" alt="t-shirt">
            <section class="text">
                <p class="slider3_text1">{{product.product_name}}</p>
                <p class="slider3_text2">&#36 {{product.price}}</p>
                <div class="product__stars"><img src="../img/stars.png" alt="stars"></div>
            </section>
            </router-link>
        <button class="product__add" @click="cartAPI.addProduct(product)">Add to Cart</button>
    </div>`
});

Vue.component('product2', {
    props: ['prod'],
    data() {
        return {
            cartNewAPI: this.$root.$refs.header.$refs.cart,
        };
    },
    mounted(){
    },
    template: `
    <div class="product_main">
            <p class="product_text_name">{{prod.product_name}}</p>
            <img class="product_image" :src="'../'+ prod.urlImage" alt="t-shirt">
            <div class="product_price">
                <p class="product_price_text">&#36 {{prod.price}}</p>
                <button class="product_price_add" @click="cartNewAPI.addProduct(prod)">Add to Cart</button>
            </div>
            <router-view></router-view>
    </div>`
});
