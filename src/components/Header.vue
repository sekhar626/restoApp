<template>
  <div class="nav">
    <img
      src="https://res.cloudinary.com/chandu626/image/upload/v1641964206/resto-logo_v4trcm.jpg"
      alt="logo"
      class="image"
    />
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add Restaurant</router-link>
      <a href="#" @click="logout">Log Out</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods:{
      logout(){
          localStorage.clear()
          this.$router.push({name:'Login'})
      }
  }
};
</script>

<style scoped>
.nav {
  background-color: chocolate;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0%;
  padding-top: 0%;
}
.nav a {
  font-family: "Courier New", Courier, monospace;
  text-decoration: none;
  padding: 14px 16px;
  color: #fff;
  text-align: center;
}
.image {
  height: 60px;
  width: 100px;
  border-radius: 50%;
  margin-left: 5%;
}
.nav a:hover{
    background-color: #fff;
    color: cornflowerblue;
}
</style>