<template>
  <Header />
  <h1>Hi {{ this.name }}, welcome to home page</h1>
  <table border="1">
    <tr>
      <td>id</td>
      <td>name</td>
      <td>contact</td>
      <td>address</td>
      <td>actions</td>
    </tr>
    <tr v-for="restaurant in restaurants" :key="restaurant.id">
      <td>{{ restaurant.id }}</td>
      <td>{{ restaurant.name }}</td>
      <td>{{ restaurant.contact }}</td>
      <td>{{ restaurant.address }}</td>
      <td>
        <button type="button">
          <router-link :to="'/update/' + restaurant.id">update</router-link>
        </button>
        <button type="button" @click="deleteItem(restaurant.id)">delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import Header from "../components/Header.vue";
import axios from "axios";

export default {
    name:'Home',
    components:{
        Header
    },
    data(){
        return{
            name:'',
            restaurants:[]
        }
    },
    methods:{
        async deleteItem(id){
            let result = await axios.delete(`http://localhost:8081/restaurants/${id}`)
            if(result.status===200){
                this.loadData()
            }
        },
        async loadData(){
            let user = localStorage.getItem("user-info");
            this.name=JSON.parse(user).name
            console.log(user);
            if (!user) {
                this.$router.push({ name: "SignUp" });
            }

            let result=await axios.get('http://localhost:8081/restaurants')
            console.log(result)
            this.restaurants=result.data
        }
    },
    async mounted() {
        this.loadData()
    }
}
</script>

<style scoped>
h1 {
  font-family: "Courier New", Courier, monospace;
}
table{
    margin: auto;
}
td {
  width: 150px;
  height: 32px;
  font-family: "Courier New", Courier, monospace;
}
button {
  widows: 150px;
  height: 32px;
  font-family: "Courier New", Courier, monospace;
  background-color: sandybrown;
  text-decoration: none;
  color: #fff;
  margin-right: 3px;
}
</style>