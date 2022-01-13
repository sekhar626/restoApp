<template>
  <Header />
  <h1>welcome to Add Restaurant page</h1>
  <form class="add-restaurant">
    <label for="name">Name</label>
    <input
      type="text"
      id="name"
      placeholder="enter restaurant name"
      v-model="restaurant.name"
    />
    <label for="contact">contact</label>
    <input
      type="text"
      id="contact"
      placeholder="enter contact number"
      v-model="restaurant.contact"
    />
    <label for="address">Address</label>
    <input
      type="text"
      id="address"
      placeholder="enter address"
      v-model="restaurant.address"
    />
    <button type="button" @click="add">Add</button>
  </form>
</template>

<script>
import Header from "../components/Header.vue";
import axios from "axios";

export default {
  name: "Add",
  components: {
    Header,
  },
  data() {
    return {
      restaurant: {
        name: "",
        contact: "",
        address: "",
      },
    };
  },
  methods: {
    async add() {
        console.log(this.restaurant)
        const result=await axios.post('http://localhost:8081/restaurants',{
            name:this.restaurant.name,
            address:this.restaurant.address,
            contact:this.restaurant.contact
        })
        if(result.status===201){
            this.$router.push({name:'Home'})
        }
        
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    console.log(user);
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style scoped>
h1 {
  font-family: "Courier New", Courier, monospace;
}
.add-restaurant input {
  display: block;
  width: 300px;
  height: 32px;
  padding-left: 20px;
  margin-bottom: 5px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.add-restaurant label {
  display: block;
  font-size: 16px;
  align-self: flex-start;
  justify-content: flex-start;
}
.add-restaurant button {
  width: 150px;
  height: 32px;
  border: 1px solid skyblue;
  background-color: skyblue;
  cursor: pointer;
  margin: 5px;
}
</style>