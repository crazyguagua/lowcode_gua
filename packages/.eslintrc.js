const {defineConfig} = require('eslint-define-config')

module.exports = defineConfig({
    env:{
        es6: true
    },
    parser:'@typescript-eslint/parser',
    parserOptions:{
        sourceType:'module',
        ecmaVersion:'2018'
    },
    overrides:[
        {
            files:['*.vue'],
            parser:'vue-eslint-parser',
            parserOptions:{
                parser:'@typescript-eslint/parser',
                sourceType:'module',
                ecmaVersion:'latest'
            },
            extends:['plugin:vue/vue3-recommended']
        }
    ]
});