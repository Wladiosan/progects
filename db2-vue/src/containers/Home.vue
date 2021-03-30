<template>
  <div class="container">
    <header class="header">
      <router-link to="/">
        <div class="header__left">
          <div class="logo-img">
            <img :src="logoMain" alt="logoMain.png">
          </div>
          <div class="logo-name">
            <img :src="logoName" alt="logoName.png">
          </div>
        </div>
      </router-link>
    </header>
    <div class="content">
      <h1>Sign in</h1>
      <div><router-link to="/sign-in-one">Sign In One</router-link></div>
      <div><router-link to="/sign-in-two">Sign In Two</router-link></div>
      <div><router-link to="/sign-in-three">Sign In Three</router-link></div>
      <div><router-link to="/sign-in-four">Sign In Four</router-link></div>
      <hr/>
      <hr/>
      <h1>Sign up</h1>
      <div><router-link to="/sign-up-one">Sign In One</router-link></div>
      <div><router-link to="/sign-up-two">Sign In Two</router-link></div>
      <div><router-link to="/sign-up-three">Sign In Three</router-link></div>
      <div><router-link to="/sign-up-four">Sign In Four</router-link></div>
      <div><router-link to="/sign-up-five">Sign In Five</router-link></div>
      <hr/>
      <hr/>
      <h1>Profile</h1>
    </div>
  </div>
</template>

<script>
import logoMain from "../assets/App-img/logoMain.png"
import logoName from "../assets/App-img/logoName.png"

export default {
  data() {
    return {
      logoMain, logoName
    };
  }
}
</script>

<style>
header {
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header__left {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo-img {
  margin-right: 5px;
}

@media screen and (min-width: 320px) and (max-width: 425px) {
  .container {
    margin: 0 auto;
    padding: 0 15px;
    min-width: 320px;
  }
}

@media screen and (min-width: 426px) and (max-width: 1024px) {
  .container {
    margin: 0 auto;
    padding: 0 15px;
    min-width: 320px;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1199px) {
  .container {
    margin: 0 auto;
    padding: 0 15px;
    min-width: 320px;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    margin: 0 auto;
    max-width: 1170px;
  }

  .logo-img {
    margin-right: 10px;
  }
}
</style>