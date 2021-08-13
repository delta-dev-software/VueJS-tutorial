new Vue({
    el:'#app',
    data:{
     name:'John'
    },
    methods:{
      greet:function(period){
          return 'Good '+period+' '+this.name
      }
    }
})
