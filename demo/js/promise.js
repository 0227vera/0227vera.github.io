const STATUS = {
  PENDDING: 'pendding',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
}

class myPromise {
  constructor(rightnow) {
    this.status = STATUS.PENDDING
    this.value = undefined
    this.reason = undefined
    this.onRejectedCBs = []
    this.onResolvedCBs = []
    const resolve = value => {
      if (this.status = STATUS.PENDDING) {
        this.status = STATUS.FULFILLED
        this.value = value
        this.onResolvedCBs.forEach(fn => fn())
      }
    }
    const reject = reason => {
      if (this.status = STATUS.PENDDING) {
        this.status = STATUS.REJECTED
        this.reason = reason
        this.onRejectedCBs.forEach(fn => fn())
      }
    }
    try {
      rightnow(resolve, reject)
    } catch (error) {
      throw error
    }
  }

  then(onResolved, onRejected) {
    const re_promise =  new myPromise((resolve, reject) => {
      const actions = {
        [STATUS.FULFILLED]: () => {
          const x = onResolved(this.value)
          /**
           * resolvePromise需要满足如下含义
           * 1. 如果x为re_promise本身直接跳reject，否则无限循环
           * 2. 如果x不为promise，直接将x的值resolve到下一个then中去
           * 3. 如果x位reject，直接返回reject到下一个catch中去
           */
          resolvePromise(re_promise, x, resolve, reject)
        },
        [STATUS.REJECTED]: () => {
          const x = onRejected(this.reason)
          resolvePromise(re_promise, x, resolve, reject)
        },
        [STATUS.PENDDING]: () => {
          this.onRejectedCBs.push(() => {
            const x = onRejected(this.reason)
            resolvePromise(re_promise, x, resolve, reject)
          })
          this.onResolvedCBs.push(() => {
            const x = onResolved(this.value)
            resolvePromise(re_promise, x, resolve, reject)
          })
        }
      }
      actions[this.status]?.()
    })
    return re_promise
  }

  catch(onRejected) {
    this.then(null, onRejected)
  }
}

/**
 * 
 * @param {Promise} promise 返回的promise
 * @param {any} x 前一个then的return值
 * @param {function} resolve promise的resolve
 * @param {function} reject promise的reject
 * @returns Promise
 */
const resolvePromise = (promise, x, resolve, reject) => {
  if (promise === x) {
    return reject(new Error('then中的方法返回的promise和构造函数一样，会无限循环'))
  }
  let caller = false
  if (isPromiseLike(x)) {
    try {
      const then = x.then
      then.call(x, (y) => {
        if (caller) return
        caller = true
        resolvePromise(promise, y, resolve, reject)
      }, err => {
        if (caller) return
        caller = true
        reject(err)
      })
    } catch (error) {
      if (caller) return
      caller = true
      reject(error)
    }
  } else {
    resolve(x)
  }
}

// note: Promise A+ 规范: https://promisesaplus.com/
const isPromiseLike = p => p !== null && (typeof p === 'object' || typeof p === 'function') && typeof p.then === 'function'

new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolve')
  }, 1000)
  setTimeout(() => {
    reject('reject')
  }, 3000)
}).then((res => {
  console.log('res------>', res)
}), (err) => {
  console.log('err------>', err)
})

// note: promise

if(!Promise.all) {
  Promise.prototype.all = function(promises) {
    return new Promise((resolve, reject) => {
      let result = []
      let count = 0
      let fulfillCount
      for (const item of promises) {
        const index = count
        count++
        Promise.resolve(item).then(res => {
          result[index] = res
          fulfillCount++
          if(fulfillCount === count) {
            resolve(result)
          }
        }, reject)
      }
    })
  }
}