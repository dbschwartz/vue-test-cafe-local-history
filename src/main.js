import Vue from 'vue'
import App from './App.vue'

localStorage.setItem('link', JSON.stringify([{
  testObj: {abcdef: '12345', ghijkl: '123123'},
  link: "https://router.vuejs.org"
}]));
new Vue({
  render: h => h(App),
}).$mount('#app')
