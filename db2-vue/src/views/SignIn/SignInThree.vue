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
        <div class="header__right-text">Back to</div>
        <div class="header__right-link"><router-link to="/">Sign in</router-link></div>
      </div>
    </header>
    <div class="content"></div>
  </div>
</template>

<script>
import logoMain from "@/assets/App-img/logoMain.png"
import logoName from "@/assets/App-img/logoName.png"

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

.header__right-link a {
  font-weight: 700;
  color: #2A74DB;
}

.container {
  margin: 0 auto;
  padding: 0 15px;
  min-width: 320px;
}

.content {
  display: flex;
}

@media screen and (min-width: 426px) and (max-width: 768px) {
  .container {
    min-width: 426px;
    max-width: 768px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .container {
    min-width: 769px;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1199px) {
  .container {
    min-width: 1025px;
  }
}

@media screen and (min-width: 1200px) {
  .container {
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