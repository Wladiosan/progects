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
        <div class="header__right-text">Already have an account?</div>
        <div class="header__right-link">
          <router-link to="/">Log in</router-link>
        </div>
      </div>
    </header>
    <div class="content">
      <form class="form">
        <div class="form__title">Complete your account</div>
        <input class="form__input"
               type="password"
               placeholder="Create password"
        />
        <div class="pass-level">
          <span class="pass-level__item pass-level__norm"></span>
          <span class="pass-level__item pass-level__norm"></span>
          <span class="pass-level__item"></span>
        </div>
        <input class="form__input"
               type="password"
               placeholder="Confirm password"
        />
        <div class="form__checkbox">
          <input type="checkbox" id="checkbox-2-1-1">
          <label for="checkbox-2-1-1"></label>
          <span>I agree to the myFixer.com</span>
          <span>Terms of Service</span>
        </div>
        <div class="form__checkbox">
          <input type="checkbox" id="checkbox-2-1-2">
          <label for="checkbox-2-1-2"></label>
          <span>I agree to the myFixer.com</span>
          <span>Privacy Police</span>
        </div>
        <div class="form__btn">
          <router-link to="/" class="btn" tag="button">Done!</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import logoMain from "@/assets/App-img/logoMain.png"
import logoName from '@/assets/App-img/logoName.png'

export default {
  data() {
    return {
      logoMain,
      logoName
    }
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

.container {
  margin: 0 auto;
  padding: 0 15px;
  min-width: 320px;
}

.content {
  display: flex;
}

.form {
  margin: 5% auto auto;
  padding: 50px 10% 80px;
  min-width: 290px;
  background: #ffffff;
  box-shadow: 0 5px 40px rgba(0, 45, 113, 0.06);
  border-radius: 10px;
}

.form__title {
  font-family: 'Exo 2', sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  text-align: left;
  padding-bottom: 20px;
  color: #01134E;
}

.form__input {
  margin-top: 13px;
  margin-bottom: 5px;
  padding-left: 10px;
  height: 40px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  background: #FCFCFC;
  border: 2px solid #f2f2f2;
  border-radius: 2px;
  text-align: left;
  color: #222428;
}

.form__input:focus {
  outline: none;
  border-left: 4px solid #2a74db;
}

.pass-level {
  display: flex;
  justify-content: space-between;
  height: 6px;
}

.pass-level span {
  background: #ebeff3;
  flex-grow: 1;
  max-width: 33%;
  border-radius: 5px;
}

.pass-level .pass-level__bad {
  background: #FF6359;
}

.pass-level .pass-level__norm {
  background: #FFB966;
}

.pass-level .pass-level__good {
  background: #38ECAC;
}

.form__checkbox {
  margin-top: 5px;
  padding: 5px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  color: #222428;
  height: 40px;
  display: flex;
  align-items: center;
}

.form__checkbox input {
  display: none;
}

label:before {
  margin-right: 10px;
  content: " ";
  display: inline-block;
  font: 20px/30px Arial;
  text-align: center;
  width: 24px;
  height: 24px;
  background: rgba(245, 247, 250, 0.5);
  border: 2px solid #F2F2F2;
  border-radius: 2px;
}

label {
  cursor: pointer;
  font-weight: normal;
}

input:checked + label:before {
  padding-bottom: 5px;
  color: #0AD69C;
  content: '\2714';
}

.form__checkbox {
  font-weight: 300;
}

.form__checkbox span:last-child {
  font-weight: 500;
  color: #002396;
  margin-left: 5px;
}

.form__btn {
  display: flex;
  justify-content: flex-end;
}

.btn {
  margin-top: 15px;
  width: 188px;
  height: 43px;
  background: #0AD69C;
  border: none;
  border-radius: 2px;
  font-family: 'Exo 2', sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #FFFFFF;
  cursor: pointer;
}

.btn:focus {
  outline: none;
}

.btn:active {
  box-shadow: 2px 2px 5px #222428;
}

@media screen and (min-width: 426px) and (max-width: 768px) {
  .container {
    min-width: 426px;
  }

  .form {
    width: 100%;
    min-width: 396px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .container {
    min-width: 769px;
  }

  .form {
    width: 632px;
    padding: 70px 115px 80px;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1199px) {
  .container {
    min-width: 1025px;
  }

  .form {
    width: 632px;
    padding: 70px 115px 80px;
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

  .form {
    width: 632px;
    padding: 70px 115px 80px;
  }
}
</style>