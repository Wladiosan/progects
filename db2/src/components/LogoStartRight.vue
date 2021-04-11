<template>
  <div class="header__right">
    <div class="header__right-text">{{ question }}</div>
    <div class="header__right-link">
      <router-link to="/">{{ link }}</router-link>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  props: [
    'question', 'link'
  ]
}
</script>

<style lang="sass">
.header__right-link a
  font-weight: 700
  color: #2A74DB
</style>