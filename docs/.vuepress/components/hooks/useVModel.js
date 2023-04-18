import { computed } from 'vue';

export default function useVModel(props, propName, emit) {
  return computed({
    get() {
      // 返回一个代理对象
      return new Proxy(props[propName], {
        // 赋值的时候会触发 set
        set(obj, name, val) {
          emit('update:' + propName, {
            ...obj,
            [name]: val
          })
          return true
        }
      })
    },
    set(val) {
      emit('update:' + propName, val)
    }
  })
}