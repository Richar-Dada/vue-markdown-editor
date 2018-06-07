import Editor from './components/Editor'

const install = (Vue, globalOptions) => {
  if (typeof window !== 'undefined' && window.Vue) {
    Vue = window.Vue
  }
  Vue.component(Editor.name, Editor)
}
const MdEditor = { Editor, install }

export default MdEditor
export { Editor, install }
