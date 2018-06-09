# vue-markdown-editor

markdown editor component for Vue, support SPA and SSR

## Install

### NPM
```
npm install markdown-editor-vue --save
```

### Mount
```
import Vue from 'vue'
import MdEditor from 'markdown-editor-vue'

Vue.use(MdEditor)
```

### demo
```
<template>
    <md-editor height="500px" @change="handleChange"></md-editor>
</template>

// nuxt or ssr
<template>
    <no-ssr>
        <md-editor height="500px" @change="handleChange"></md-editor>
    </no-ssr>
</template>

export default {
    name: 'demo',
    methods: {
        handleChange (content) {
            console.log(content)
        }
    }
}

```
- height--set the editor height(设置编辑器的高度) 
- defaultContent-- set the default content of editor (设定编辑器默认内容)
- change--get the editor content