<template>
    <ul>
      <li><a href="./localstorage.html" @click="setLocalStorage" id="first-link" target="_blank" rel="noopener">vue-router</a></li>
    </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    setLocalStorage: function(){
      localStorage.setItem('link', JSON.stringify([{
  testObj: {abcdef: '12345', ghijkl: '123123'},
  link: "https://devexpress.github.io/testcafe/example/"
}]));
    }

  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
