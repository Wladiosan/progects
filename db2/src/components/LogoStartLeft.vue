<template>
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
</template>

<script>
import logoMain from '@/assets/App-img/logoMain.png'
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

<style lang="sass">
.header__left
  display: flex
  flex-direction: row
  align-items: center

.logo-img
  margin-right: 5px
</style>