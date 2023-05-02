declare module '*.jpg'
declare module '*.png'
declare module '*.woff2'
declare module '*.woff'
declare module '*.ttf'
declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.svg'
declare global {
  /** 使用此类型替代 any object */
  interface AnyObj {
    [key: string]: any
  }
  /** window 下的全局变量 */
  interface Window {}

  interface Storage {}
}
