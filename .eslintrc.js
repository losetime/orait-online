module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "singleQuote": true,
    // camelcase: 2,//制驼峰法命名
    "no-unexpected-multiline": 2, //避免多行表达式
    "no-unreachable": 2, //不能有无法执行的代码
    "no-unused-expressions": 2, //禁止无用的表达式
    "no-unused-vars": [
      2,
      {
        vars: "all",
        args: "after-used"
      }
    ], //不能有声明后未被使用的变量或参数
    "no-use-before-define": 2, //未定义前不能使用
    "no-useless-call": 2, //禁止不必要的call和apply
    "no-func-assign": 2, //禁止重复的函数声明
    "no-implicit-coercion": 1, //禁止隐式转换
    "no-var": 2, //要求使用 let 或 const 而不是 var
    "no-trailing-spaces": 2, //禁用行尾空格
    "no-whitespace-before-property": 2, //禁止属性前有空白
    "no-this-before-super": 2, //禁止在构造函数中，在调用 super() 之前使用 this 或 super-
    // "object-curly-spacing": 2,//制在大括号中使用一致的空格
    "operator-assignment": 2, //要求或禁止在可能的情况下使用简化的赋值操作符
    "array-bracket-spacing": [2, "never"], //是否允许非空数组里面有多余的空格
    "comma-style": [2, "last"], //逗号风格，换行时在行首还是行尾
    "curly": [2, "all"], //必须使用 if(){} 中的{}
    "default-case": 2, //switch语句最后必须有default
    "eqeqeq": 2, //必须使用全等
    "no-empty": 2, //块语句中的内容不能为空
    "strict": 2, //使用严格模式
    "quote-props": [0, "always"], //对象字面量中的属性名是否强制双引号
    // "indent": [2, 2],//缩进风格
    "max-depth": [0, 4], //嵌套块深度
    "consistent-this": [2, "that"], //this别名
    //在使用parseInt() 方法时，需要传递第二个参数，来帮助解析，告诉方法解析成多少进制。
    "radix": 2,
    //结束必须加分号
    "semi": [2, "always"],
    "space-in-parens": [0, "never"], //小括号里面要不要有空格
    //该规则规定了分号前后的空格，具体规定如下。
    "semi-spacing": [
      2,
      {
        before: false,
        after: true
      }
    ],
    //代码块前面需要加空格
    "space-before-blocks": [2, "always"],
    //函数圆括号前面需要加空格
    "space-before-function-paren": [2, "never"],
    //圆括号内部不需要加空格
    "space-in-parens": [2, "never"],
    //操作符前后需要加空格
    "space-infix-ops": 2
    // //一元操作符前后是否需要加空格，单词类操作符需要加，而非单词类操作符不用加
    // "space-unary-ops": [2, { "words": true, "nonwords": false }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
