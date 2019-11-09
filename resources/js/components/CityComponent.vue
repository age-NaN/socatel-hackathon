<template>
        <div class="">
                <input class="form-control" type="text" value="result.name" v-model="search" @input="onChange" @keydown.down="onArrowDown" @keydown.up="onArrowUp" @keydown.enter="onEnter">
                <div id="relative" class="justify-content-center">
                    <ul id="absolute" class="autocomplete-results" v-show="isOpen">
                        <li class="autocomplete-result" v-for="(result, index) in results" :key="index" @click="setResult(result)" :class="{ 'is-active': index === arrowCounter }">
                                {{ result.name }}
                        </li>
                    </ul>
                </div>
        </div>          
</template>

<script>
    import axios from 'axios'

    export default {

        middleware: 'auth',
        
        data() {
            return {
                cities: [],
                isOpen: false,
                results: [],
                search: '',
                isLoading: false,
                arrowCounter: -1,
            };
        },
        
        methods: {

            onChange() {
                this.isOpen = true;
                this.filterResults();
            },
            onArrowDown(evt) {
                if (this.arrowCounter < this.results.length) {
                    this.arrowCounter = this.arrowCounter + 1;
                }
            },
            onArrowUp() {
                if (this.arrowCounter > 0) {
                    this.arrowCounter = this.arrowCounter -1;
                }
            },
            onEnter() {
                const searchid = this.search;
                this.isOpen = false;
                this.arrowCounter = -1;

                const parameters = {
                    id: searchid.id
                };

                // axios.post('/api/register/attach', parameters).then((response) => console.log(response));
                // axios.get('/api/categoryUser/data').then((response) => {this.userCategories = response.data;});

                this.search='';

            },
            filterResults() {
                const self = this
                
                this.results = this.cities.filter(function (city){
                   return city.name.toLowerCase().includes(self.search.toLowerCase());
                });
            },
            setResult(result) {
                resultId = this.search.id
                this.search = result.name;
                this.isOpen = false;
                this.$emit('city', resultId);
                return result;
            },
            handleClickOutside(evt) {
                if (!this.$el.contains(evt.target)) {
                    this.isOpen = false;
                    this.arrowCounter = -1;
                }
            },
        },

        mounted() {

            console.log('Component mounted.')

            document.addEventListener('click', this.handleClickOutside);
        },
        destroyed() {
            document.removeEventListener('click', this.handleClickOutside);
        }
    }
</script>

<style>

  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }
  .autocomplete-result.is-active,
  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }
</style>