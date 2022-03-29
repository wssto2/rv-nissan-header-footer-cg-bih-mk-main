<template>
    <div class="nissan-footer">
        <footer class="footer">
            <nav class="footer-nav top">
                <div class="grid-row">
                    <div v-for="(item, itemIndex) in mainNavigation" :key="itemIndex" class="grid-col col-3">
                        <h5 class="accordion-title" v-if="item.active === 1" @click.prevent="toggle(itemIndex)">
                            <a :href="item-url" :class="['accordion-toggle', {'show': isVisible(itemIndex)}]" >{{item.title}}</a>
                        </h5>
                        <ul :class="['accordion', {'show': isVisible(itemIndex)}]">

                            <li v-for="(child, childIndex) in item.children" :key="childIndex">
                                <a  v-if="child.active === 1" :title="child.title" :href="child.url" :target="child.target"><span>{{ child.title }}</span></a>
                            </li>

                        </ul>
                    </div>
                    
                    <div class="grid-col col-3">
                        <h5>
                            <a>{{ socialNavigation.title }}</a>
                        </h5>
                        <ul class="footer-social">
                            <li>
                                <a v-for="(social, socialIndex) in socialNavigation.schema" :key="socialIndex" :target="social.target" :class="['icon', social.icon]" :href="social.url" rel=""></a>
                            </li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </nav>
            <nav class="footer-nav bottom">
                <div class="grid-row">
                    <div class="grid-col col-6">
                            <ul>
                                <li v-for="(option, optionsIndex) in optionsNavigation.schema" :key="optionsIndex"><a v-if="option.active === 1" :href="option.url" title="">{{option.title}}</a></li>
                            </ul>
                    </div>
                    <div class="grid-col col-6">
                            <ul>
                                <li v-for="(legal, legalIndex) in legalNavigation.schema" :key="legalIndex"><a v-if="legal.active === 1" :href="legal.url" title="">{{legal.title}}</a></li>
                                <li>
                                    <a class="footer-copyright">{{ footerTrademark }}</a>
                                </li>
                            </ul>
                    </div>
                </div>
            </nav>
        </footer>
    </div>
    
</template>

<script>
    import axios from "axios";

    export default {
        name: "Footer",

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
        },

        data() {
            return {
                visibleIndex: null,
                basicInformation: [],
                mainNavigation: [],
                socialNavigation: [],
                optionsNavigation: [],
                legalNavigation: []
            }
        },

        computed: {
            footerTrademark() {
                return this.basicInformation && this.basicInformation.meta && this.basicInformation.meta.footer_trademark
            }
        },

        methods: {
            fetchNavigation(apiUri) {
                axios.get(apiUri)
                    .then((response) => {
                        this.basicInformation = response.data;
                        this.mainNavigation = response.data.footer.schema;
                        this.socialNavigation = response.data.social;
                        this.optionsNavigation = response.data.footer_options;
                        this.legalNavigation = response.data.footer_legal;
                    })
            },

            isVisible(itemIndex) {
                return this.visibleIndex === itemIndex;
            },

            toggle(itemIndex) {
                if (this.visibleIndex === itemIndex) {
                    this.visibleIndex = null;
                } else {
                    this.visibleIndex = Number(itemIndex);
                }
            },

            scrollToTop() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }
</script>

<style scoped src="./assets/css/nissan.css"></style>
