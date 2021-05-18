Vue.component('menus', {
    data(){
        return {
            catalogUrl: '/api/products',
            showCart: false,
            userSearch: "",
            imgCatalog: 'https://via.placeholder.com/260x280',
        }
    },
    template: `
    <header class="header">
        <div class="container header__flex">
            <div class="header__left">
                <a href="/" class="logo"> <img class="logo__img" src="../img/Group_2.png" alt="logo">BRAN<span class=header__letter>D</span></a>
                <form v-if="$root.isOpenCatalog" class="header__form" action="#" @submit.prevent="$root.$refs.rout.$refs.routCatalog.$refs.catalog.filter(userSearch)">
                    <input type="text" class="getText" placeholder="Search for Item..." v-model="userSearch">
                    <button class="seaching" type="submit">
                        &#128269
                    </button>
                </form>
            </div>
            <div class="header__right"> 
                <a href="#" class="header__cart"> <img src="../img/Forma_1.svg" alt="cart">
                 </a>
                <a class="buttom" @click="showCart = !showCart" href="#">MyAccount &#9662;</a>
               
                    <div class="drop2" v-show="showCart">
                        <cart ref="cart"></cart>
                    </div> 
                
            </div>
        </div>
    </header>`
});