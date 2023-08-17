import {reactive} from 'vue'
const ydata = reactive({
    message:"Hello World",
    count:20,
    increase(){
      this.count+=2
    },
    decrease(){
      this.count-=2
    }
  })

  export {ydata}