<template>
    <div class="search-images">
        <div class="photos">
            <div
                v-for="photo in photos"
                :key="photo.id"
                class="photos__item"
            >
                <img
                    alt="photo"
                    :src="photo.urls.regular"
                >
            </div>
        </div>
        <input
            v-model="query"
            class="search-images__input"
        >
    </div>
</template>

<script>

    const _debounce = require('lodash.debounce');

    export default {
        name: 'SearchImages',
        data: () => ({
            component: 'Search Images',
            photos: [],
            query: '',
        }),
        watch: {
            query: _debounce(function () {
                this.searchPhoto(this.query);
            }, 500),
        },
        created () {
            this.searchPhoto();
        },
        methods: {
            searchPhoto (query = 'mackbook') {
                const url = this.$unsplash._apiUrl;
                const appid = this.$unsplash._accessKey;

                axios
                    .get(`${url}/search/photos?page=1&per_page=10&query=${query}&client_id=${appid}`)
                    .then(res => this.photos = res.data.results)
                    .catch(console.log);
            },
        },
    };

</script>

<style scoped>

    .search-images {
        align-items: center;
        display: flex;
        flex-flow: column nowrap;
        height: 100vh;
        justify-content: space-around;
    }

    .photos {
        align-items: center;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .photos__item {
        margin: 1em;
        width: 10em;
    };

    .photos__item img {
        width: 100%;
    }

    .photos__item img:hover {
        box-shadow: 3px 0 3px rgba(0, 0, 0, .5);
    };

    .search-images__input {
        display: block;
        flex: 1 1 auto;
        height: 50px;
        width: 10em;
    }

</style>
