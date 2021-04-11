<template>
  <header class="header">
    <LogoStartLeft />
    <LogoStartRight :question="question" :link="link"/>
  </header>
</template>

<script>
import LogoStartLeft from '@/components/LogoStartLeft'
import LogoStartRight from '@/components/LogoStartRight'

export default {
  data() {
    return {}
  },
  components: {
    LogoStartLeft,
    LogoStartRight
  },
  props: [
    'question', 'link'
  ]
}
</script>

<style lang="sass" scoped>
.header
  padding: 15px
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
</style>