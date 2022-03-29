<template>
<div>
    <a v-if="basicInformation" :href="basicInformation.site_url" class="logo" :title="basicInformation.site_title"></a>
    <header class="header">
        <nav class="main-nav">
            <button @click="toggleMenu" class="menu-icon"></button>
            <div class="primary-nav">
                <ul class="primary-nav-ul">
                    <li class="primary-nav-li" v-for="(main, mainIndex) in mainNavigation" :key="mainIndex">
                        <a :href="main.url" class="primary-nav-link">{{main.title}}</a>

                        <ul class="primary-dropdown">

                            <li v-for="(dropdown, dropdownIndex) in main.children" :key="dropdownIndex"><a :href="dropdown.url">{{dropdown.title}}</a></li>
                                                        
                        </ul>

                    </li>
                </ul>
            </div>
            <div :class="['nav-menu', {'open' : sidebarActive}]" >
                <button @click="toggleMenu" class="close-icon"></button>
                <div class="glavna-navigacija">
                    <ul>
                        <li v-for="(mobileMain, mobileMainIndex) in mainNavigation" :key="mobileMainIndex" @click="mobileNonVehicleDropdown(mobileMainIndex);" :class="['dropdown-container', {'open' : mobileMainIndex === mobileNonVehicleActive}]">
                            <a :href="mobileMain.url" class="nav-link">{{mobileMain.title}}</a>
                            <ul :class="['dropdown', {'show' : mobileMainIndex === mobileNonVehicleActive}]">
                                <li v-for="(dropdown, dropdownIndex) in mobileMain.children" :key="dropdownIndex"><a :href="dropdown.url">{{dropdown.title}}</a></li>                            
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="top-nav">
                    <ul>
                        <li v-for="(sidebar, sidebarIndex) in sideNavigation" :key="sidebarIndex" :class="[{'services dropdown-container' : sidebar.meta.subdropdown}, , {'open' : subdropdownIsOpen}]">
                            <a :href="sidebar.url" :target="sidebar.target" v-if="sidebar.active === 1" :class="[{'#' : sidebar.meta.subdropdown}]" @click="subdropdownOpen(sidebar.meta.subdropdown);">{{sidebar.title}}</a>
                            <ul v-if="sidebar.meta.subdropdown" :class="['dropdown', {'show' : subdropdownIsOpen}]">
                                <li v-for="(subdropdown, subdropdownIndex) in sidebar.children" :key="subdropdownIndex">
                                    <a :href="subdropdown.url" >{{subdropdown.title}}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
 
</div>

</template>

<script>

    import axios from 'axios';

    export default {
        name: 'Header',

        props: {
            url: {
                type: String
            }
        },

        created() {
            if ("HEADER_FOOTER_SETTINGS" in window) {
                this.fetchNavigation(window.HEADER_FOOTER_SETTINGS.apiUri);
            } else {
                if (this.url) {
                    this.fetchNavigation(this.url);
                }
            }

            window.addEventListener('click', this.del);


        },
        beforeDestroy() {
            window.removeEventListener('click', this.del)
        },
        
        data() {
            return {
                meganavActive: false,
                sidebarActive: false,
                subdropdownIsOpen: false,
                mobileNonVehicleActive: 40,
                vehicleTypeActive: 0,
                basicInformation: [],
                mainNavigation: [],
                sideNavigation: []
            }
        },

        computed: {
            livechatUrl() {
                return this.basicInformation && this.basicInformation.meta && this.basicInformation.meta.livechat_url;
            }
        },

        methods: {
            fetchNavigation(apiUri) {
                axios.get(apiUri)
                    .then((response) => {
                        this.basicInformation = response.data;
                        this.mainNavigation = response.data.header.schema;
                        this.sideNavigation = response.data.header_sidebar.schema;
                    })
            },
            toggleVehicle(index){
                if(index === 0){
                    this.meganavActive = true;
                    document.body.classList.add("hideOverflow");
                    return true;
                }
            },
            toggleMenu(){
                if(this.meganavActive && this.sidebarActive) {
                    this.meganavActive = false;
                } else if(this.meganavActive && !this.sidebarActive){
                    this.meganavActive = false;
                    document.body.classList.remove("hideOverflow");
                } else if(!this.sidebarActive){
                    this.sidebarActive = true;
                    document.body.classList.add("hideOverflow");
                } else {
                    this.sidebarActive = false;
                    document.body.classList.remove("hideOverflow");
                }
            },
            mobileNonVehicleDropdown(index) {
                if(this.mobileNonVehicleActive === index){
                    this.mobileNonVehicleActive = 40;
                } else {
                    this.mobileNonVehicleActive = index;
                }
            },
            subdropdownOpen(bool){
                if(this.subdropdownIsOpen && bool){
                    this.subdropdownIsOpen = false;
                } else if(!this.subdropdownIsOpen && bool) {
                    this.subdropdownIsOpen = true;
                }
            },
            toggleVehicleType(index) {
                this.vehicleTypeActive = index;
            },
            del(e) {
                if(! this.$el.contains(e.target)){
                    this.mobileDropdown = false
                }
            }
        }
    }
</script>

<style scoped src="./assets/css/nissan.css"></style>
