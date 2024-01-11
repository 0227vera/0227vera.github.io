class mySetTnterval{
  constructor (fn, a, b){
    this.a = a
    this.b = b
    this.fn = fn
    this.timer = null
    this.count = 0
  }
  start () {
    this.fn()
    this.timer = setTimeout(() => {
      this.count++
      this.start()
      console.log(this.a + this.count * this.b)
    }, this.a + this.count * this.b);
  }
  stop () {
    clearTimeout(this.timer)
    this.count = 0
  }
}

const demo = new mySetTnterval(() => console.log(111), 1000, 2000)
demo.start()
demo.stop()