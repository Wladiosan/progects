<template>
  <div class="container">
    <Header />
    <div class="content">
      <h1>Sign in</h1>
      <div><router-link to="/sign-in">Sign In One (Adaptive layout)</router-link></div>
      <div><router-link to="/sign-in-two">Sign In Two (Adaptive layout)</router-link></div>
      <div><router-link to="/sign-in-three">Sign In Three (No create)</router-link></div>
      <div><router-link to="/sign-in-four">Sign In Four (Adaptive layout)</router-link></div>
      <hr/>
      <hr/>
      <h1>Sign up</h1>
      <div><router-link to="/sign-up-one">Sign Up One (Adaptive layout)</router-link></div>
      <div><router-link to="/sign-up-two">Sign Up Two (Adaptive layout)</router-link></div>
      <div><router-link to="/sign-up-three">Sign Up Three (Adaptive layout)</router-link></div>
      <div><router-link to="/sign-up-four">Sign Up Four (Adaptive layout)</router-link></div>
      <div><router-link to="/sign-up-five">Sign Up Five (No create)</router-link></div>
      <hr/>
      <hr/>
      <h1>Profile</h1>
      <div><router-link to="/profile-one">Profile one (No adaptive)</router-link></div>
      <div><router-link to="/profile-two">Profile two (No adaptive)</router-link></div>
      <hr/>
      <hr/>
      <h1>Search</h1>
      <div><router-link to="/search-one">Search one (No adaptive)</router-link></div>
      <div><router-link to="/search-two">Search two (No adaptive)</router-link></div>
      <hr/>
      <hr/>
      <h1>Admin Zone</h1>
      <div><router-link to="/admin">Admin zone (No adaptive)</router-link></div>
      <hr/>
      <hr/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style lang="sass" scoped>
@media screen and (min-width: 320px) and (max-width: 425px)
  .container
    margin: 0 auto
    padding: 0 15px
    min-width: 320px

@media screen and (min-width: 426px) and (max-width: 1024px)
  .container
    margin: 0 auto
    padding: 0 15px
    min-width: 320px

@media screen and (min-width: 1025px) and (max-width: 1199px)
  .container
    margin: 0 auto
    padding: 0 15px
    min-width: 320px

@media screen and (min-width: 1200px)
  .container
    margin: 0 auto
    padding: 0 15px
    max-width: 1170px
</style>
