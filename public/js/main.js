const Home = { 
    template: `
    <div>
        <navigation></navigation>
        <promo></promo>
        <slider></slider>
        <offer></offer>
    </div>`,
};

const ProductsMain = { 
    template: `
    <div>
        <navigation ref="nav"></navigation>
        <note-one ref="noteOne"></note-one>
        <router-view ref="routCatalog"></router-view>
    </div>`
};

const Products = { 
    template: `
    <div>
        <catalog ref="catalog"></catalog>
    </div>`
};

const Cart = { 
    template: `
    <div>
        <navigation ref="nav"></navigation>
        <cart-page ref="cart"></cart-page>
    </div>`
};

const Item = {
    props: ['id'],
    data() {
        return{
            item: this.$root.$refs.rout.$refs.routCatalog.$refs.catalog.filtered,
            currentItem: {},
        }
    },
    methods: {
        getCurrentItemData(id) {
            this.currentItem = this.item.find(el => el.id_product == id);
        }   
    },
    mounted(){
        this.getCurrentItemData(this.id);
        console.log(this);
    },
    template: `
    <div>
        <product2 ref="product2" :prod="currentItem"></product2>
    </div>` 
};


const routes = [
    { 
      path: '/', 
      component: Home 
    },
    { 
        path: '/products', 
        component: ProductsMain,
        children: [
            { 
                path: '', component: Products 
            },
            { 
                path: ':id', component: Item, props: true 
            },
    ]
    },
    { 
        path: '/cart', 
        component: Cart 
    },
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
});

const app = new Vue({
    el: '#app',
    data() {
        return{
            newCatalog: [],
            isOpenCatalog: false,
            isEmptyCart: true,
            cartAPI: [],
        }
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                })
        },

        putJson(url, data) {
            return fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                })
        },
        removeJson(url, item) {
            return fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(item)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                })
        },
    },
    router,
    mounted() {
        this.$root.isOpenCatalog = false;
    },
    template: `
        <div>
            <menus ref="header"></menus>      
            <router-view ref="rout"></router-view>
            <feedback></feedback>
            <about></about>
            <footer-links></footer-links>
        </div>
    `
});

