// The starter code is made possible by codecademy. I added author to props.
const Tweet = Vue.component('tweet', {
    props: ['message', 'author'],
    template: '<div class="tweet"><h3>{{ author }}</h3><p>{{ message }}</p></div>'
   });