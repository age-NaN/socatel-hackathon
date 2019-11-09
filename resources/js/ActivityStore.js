import axios from 'axios';
import DistrictStore from './DistrictStore.js';

const ActivityStore = {

    methods: {
        getAll: async function() {
            //this.ajaxHttpRequest('get', 'https://datos.madrid.es/portal/site/egob/menuitem.ac61933d6ee3c31cae77ae7784f1a5a0/?vgnextoid=00149033f2201410VgnVCM100000171f5a0aRCRD&format=json&file=0&filename=206974-0-agenda-eventos-culturales-100&mgmtid=6c0b6d01df986410VgnVCM2000000c205a0aRCRD&preview=full');
            return [
                {
                    id: "01",
                    name: "Tango para iniciados",
                    description: await this.getFake.description(),
                    district: "01",
                    category: "Deportes"
                },
                {
                    id: "02",
                    name: "Danza para iniciados",
                    description: await this.getFake.description(),
                    district: "01",
                    category: "Deportes"
                },
                {
                    id: "03",
                    name: "Escape Room",
                    description: await this.getFake.description(),
                    district: "01",
                    category: "Deportes"
                },
                {
                    id: "04",
                    name: "Fotografia",
                    description: await this.getFake.description(),
                    district: "01",
                    category: "Deportes"
                },

            ]
        },
        ajaxHttpRequest: function(method,url) {
            axios[method](url)
                .then(response => { console.log(response.data) })
                .catch(e => console.error('No se puede conectar a la API'));
        },
        getFake: {
            description: async function() {
                return await axios.get('https://jsonplaceholder.typicode.com/posts/' + Math.floor(Math.random() * (10)))
                    .then(response => { return response.data.body })
                    .catch(e => console.error('No se puede conectar a la API'));
            }
        }
    }
}

export default ActivityStore;
