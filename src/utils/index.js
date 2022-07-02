export function localGet (key) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return value
    } else {
      return ''
    }
  }
  
export function localSet (key, value) {
    window.localStorage.setItem(key, value)
  }
  
export function localRemove (key) {
    window.localStorage.removeItem(key)
  }