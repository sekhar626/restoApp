<template>
  <img
    src="https://res.cloudinary.com/chandu626/image/upload/v1641964206/resto-logo_v4trcm.jpg"
    class="image"
  />
  <h1>Sign up</h1>
  <div class="register">
    <label for="name">Name</label>
    <input type="text" placeholder="enter your name" id="name" v-model="name" />
    <label for="email">Email</label>
    <input
      type="text"
      placeholder="enter your mail"
      id="email"
      v-model="email"
    />
    <label for="password">Password</label>
    <input
      type="password"
      placeholder="set your assword"
      id="password"
      v-model="password"
    />
  </div>
  <div>
    <button @click="register">Register</button>
    <button>
      <router-link to="/login">Login</router-link>
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      let result = await axios.post("http://localhost:8081/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      if (result.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    console.log(user);
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style scoped>
h1 {
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
}
.image {
  height: 150px;
}
.register input {
  display: block;
  width: 300px;
  height: 32px;
  padding-left: 20px;
  margin-bottom: 5px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register label {
  display: block;
  font-size: 16px;
  align-self: flex-start;
  justify-content: flex-start;
}
button {
  width: 150px;
  height: 32px;
  border: 1px solid skyblue;
  background-color: skyblue;
  cursor: pointer;
  margin: 5px;
}
</style>