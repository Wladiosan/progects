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
      <div class="header__right">
        <div class="header__right-text">Do not have an account?</div>
        <div class="header__right-link"><a href="#">Sign up</a></div>
      </div>
    </header>
    <div class="content">
      <router-view />
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

<style scoped>
.header {
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

.header__right-text {
  display: none;
}

.header__right-link a {
  font-weight: 700;
  color: #2A74DB;
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

  .header__right {
    display: flex;
    flex-direction: row;
    font-family: 'Roboto', sans-serif;
  }

  .header__right-text {
    display: flex;
    margin-right: 5px;
    font-size: 16px;
    font-weight: 300;
    line-height: 18px;
    font-style: normal;
    color: #222428;
  }
}
</style>