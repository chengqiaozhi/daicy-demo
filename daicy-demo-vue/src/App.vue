<template>
  <div id="app">
    <div class="markdown-body" v-html="readme"></div>
    <router-view/>
  </div>
</template>

<script>
import 'github-markdown-css/github-markdown.css'
import README from '../README.md'
export default {
  name: 'App',
  data(){
    return {
      readme: this.md2html(README)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
