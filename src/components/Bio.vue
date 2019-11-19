<template>
    <div class="flex flex-row-ns flex-column-m flex-column justify-center relative bio-wrapper">
        <div class="tc pt4 pb2 pv5-ns self-center mr4-ns">
            <img
                src="https://media.licdn.com/dms/image/C5603AQFAbbfrr4vDBQ/profile-displayphoto-shrink_200_200/0?e=1578528000&v=beta&t=Nb8ZSMdqAmhuhH5muh4akEEgzqaJkQVWCEKaqZdvlCY"
                class="br3 ba b--black-10 h4-ns w4-ns"
                alt="avatar"
            >
            <h1 class="f5 f4-ns fw6 black-70">Denis Kalenik</h1>
            <h2 class="f6 black-70 fw2 ttu tracked">Minsk</h2>
            <footer class="pv2 ph3 ph5-ns tc">
                <a
                    v-for="item in social"
                    :key="item.title"
                    class="link black-70 hover-silver dib h1 w1 mr2"
                    :href="item.link"
                    :title="item.title"
                    target="_blank"
                >
                    <img
                        :src="item.icon"
                        :alt="item.title"
                    >
                </a>
            </footer>
        </div>
        <div class="fl pa3 pa4-ns f3">
            <header class="bb b--black-70 pv2 tc tl-ns">
                <h3 class="f4 f3-ns fw7 ttu tracked lh-title mt0 mb2">Front-end developer</h3>
                <h4 class="f5 f4-ns fw4 i lh-title mt0 mb2 mb3-ns">Snteam | Web Development</h4>
            </header>
            <section class="pv3 pv4-ns">
                <p class="times lh-copy measure f4 mt0 mb0 mb2-ns">
                    Hello! I'm working with JavaScript.
                </p>
                <p class="times lh-copy measure f4 mt0 mb0 mb2-ns">
                    My current stack of technologies is: Vue.js and it's ecosystem - Vuex, Vue-router, Vuetify, etc.
                    I prefer simple and lightweight solutions.
                </p>
                <p class="times lh-copy measure f4 mt0 mb0 mb2-ns">
                    I'm also interested in technologies such as Node.js, MongoDB and Mongoose ODM.
                </p>
            </section>
        </div>
    </div>
</template>

<script>

    import IconFacebook from'@/assets/icons/icon-facebook.svg';
    import IconGithub from'@/assets/icons/icon-github.svg';
    import IconInstagram from'@/assets/icons/icon-instagram.svg';
    import IconLinkedIn from'@/assets/icons/icon-linkedin.svg';
    import IconTwitter from'@/assets/icons/icon-twitter.svg';

    export default {
        name: 'Bio',
        data: () => ({
            component: 'Bio',
            social: [
                { icon: IconFacebook, link: 'https://facebook.com/denis.kalenik.5', title: 'Facebook' },
                { icon: IconGithub, link: 'https://github.com/neo0910', title: 'GitHub' },
                { icon: IconInstagram, link: 'https://www.instagram.com/j.o.h.n.smith/', title: 'Instagram' },
                { icon: IconLinkedIn, link: 'https://linkedin.com/in/denikkalenik/', title: 'LinkedIn' },
                { icon: IconTwitter, link: 'https://twitter.com/Denis62615590', title: 'Twitter' },
            ],
        }),
    };

</script>

<style scoped>

    @media screen and (min-width: 30em) {
        .bio-wrapper {
            top: 50vh;
            transform: translateY(-50%);
        }
    }

</style>
