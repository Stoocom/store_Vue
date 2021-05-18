Vue.component('navigation', {
    mounted(){
        this.$root.isOpenCatalog = false;
    },
    template: `
    <nav class="menu">
        <li class="menu-list">
            <router-link to="/" class="menu-link" exact>Home</router-link>
        </li>
        <li class="menu-list">
            <router-link to="/products" class="menu-link" exact>Catalog</router-link>
        </li>
        <li class="menu-list">
            <a href="#" class="menu-link">Man</a>
        </li>
        <li class="menu-list">
            <a href="#" class="menu-link">Woman</a>
        </li>
        <li class="menu-list">
            <a href="#" class="menu-link">Kids</a>
        </li>
        <li class="menu-list">
            <a href="#" class="menu-link">Featured</a>
        </li>
        <li class="menu-list">
            <a href="#" class="menu-link">Special Deals</a>
        </li>
    </nav>`
});