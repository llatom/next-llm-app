declare global {
    /** 使用此类型替代 any object */
    interface AnyObj {
      [key: string]: any
    }
    /** window 下的全局变量 */
    interface Window {}
  
    interface Storage {}
  
  }
  