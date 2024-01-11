class EventBus{
  constructor() {
    this.listeners = {}
  }
  on(name, fn) {
    if (this.listeners[name]?.length) {
      this.listeners[name] = [fn]
    } else {
      this.listeners[name].push(fn)
    }
  }
  emit(name, ...data) {
    if (this.listeners[name]) {
      this.listeners[name].forEach(fn => {
        fn.apply(this, data)
      })
    }
  }
  once(name, fn) {
    const tem = (...data) => {
      fn(...data)
      this.removeListener(name)
    }
    this.on(name, tem)
  }
  removeListener(name) {
    if (this.listeners[name]) {
      delete this.listeners[name]
    }
  }
  removeListeners(names) {
    if (names?.length) {
      names.forEach(item => {
        if (this.listeners[item]) {
          delete this.listeners[item]
        }
      })
    } else {
      this.listeners = {}
    }
  }
}

export default EventBus