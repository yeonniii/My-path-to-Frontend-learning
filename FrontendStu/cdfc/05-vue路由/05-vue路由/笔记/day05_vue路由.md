[TOC]



## 1. 路由的基本概念

### 1.1. 什么是路由？

- 路由的概念

- 路由的本质就是一种对应关系，比如说我们在url地址中输入我们要访问的url地址之后，浏览器要去请求这个url地址对应的资源。


- 那么url地址和真实的资源之间就有一种对应的关系，就是路由，路由是根据不同的 url 地址展示不同的内容或页面；


### 1.2. 路由分为哪两种？

- 路由分为前端路由和后端路由
- 后端路由

​         浏览器在地址栏中切换不同的url时，每次都向后台服务器发出请求，服务器响应请求，在后台拼接html文件传给前端显示, 返回不同的页面, 意味着浏览器会刷新页面，网速慢的话说不定屏幕全白再有新内容。后端路由的另外一个极大的问题就是 前后端不分离。早期绝大多数网站都采用后端路由的方式。

- 优点：分担了前端的压力，html和数据的拼接都是由服务器完成。


- 缺点：当项目十分庞大时，加大了服务器端的压力，同时在浏览器端不能输入指定的url路径进行指定模块    的访问。另外一个就是如果当前网速过慢，那将会延迟页面的加载，对用户体验不是很友好。 


- 前端路由
  - 概念：根据不同的用户事件，显示不同的页面内容 
  - 本质：用户事件与事件处理函数之间的对应关系

  - 前端路由是依靠hash值(锚链接)的变化进行实现 

​        很重要的一点是页面不刷新，前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，每跳转到不同的URL都是使用前端的锚点路由. 随着（SPA）单页应用的不断普及，前后端开发分离，目前项目基本都使用前端路由，在项目使用期间页面不会重新加载。后端路由性能相对前端路由来说较低，所以，我们接下来主要学习的是前端路由。

- 前端路由的基本概念：根据不同的事件来显示不同的页面内容，即事件与事件处理函数之间的对应关系，
- 前端路由主要做的事情就是监听事件并分发执行事件处理函数 

- SPA（Single  Page Application）


-  SPA（Single Page Application）单页面应用程序：整个网站只有一个页面，内容的变化通过Ajax局部更新实现、同时支持浏览器地址栏的前进和后退操作 
-  SPA实现原理之一：基于URL地址的hash（hash的变化会导致浏览器记录访问历史的变化、但是hash的变化不会触发新的URL请求
-  在实现SPA过程中，最核心的技术点就是前端路由 

#### 优点:

​    1.用户体验好，和后台网速没有关系，不需要每次都从服务器全部获取，快速展现给用户

​    2.可以在览器中输入指定想要访问的url路径地址。

​    3.实现了前后端的分离，方便开发。有很多框架都带有路由功能模块。

####  缺点:

​    1.使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存

​    2.单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置

### 1.3.前端路由的初体验

- 前端路由是基于hash值的变化进行实现的（比如点击页面中的菜单或者按钮改变URL的hash值，根据hash值的变化来控制组件的切换）
- 核心实现依靠一个事件，即监听hash值变化的事件

```js
window.onhashchange = function(){
    //location.hash可以获取到最新的hash值
    location.hash
}
```

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <!-- 导入 vue 文件 -->
        <script src="./lib/vue_2.5.22.js"></script>
    </head>
    <body>
        <!-- 被 vue 实例控制的 div 区域 -->
        <div id="app">
        <!-- 切换组件的超链接 -->
        <a href="#/zhuye">主页</a> 
        <a href="#/keji">科技</a> 
        <a href="#/caijing">财经</a>
        <a href="#/yule">娱乐</a>

        <!-- 根据 :is 属性指定的组件名称，把对应的组件渲染到 component 标签所在的位置 -->
        <!-- 可以把 component 标签当做是【组件的占位符】 -->
        <component :is="comName"></component>
        </div>

        <script>
        // #region 定义需要被切换的 4 个组件
        // 主页组件
        const zhuye = {
            template: '<h1>主页信息</h1>'
        }

        // 科技组件
        const keji = {
            template: '<h1>科技信息</h1>'
        }

        // 财经组件
        const caijing = {
            template: '<h1>财经信息</h1>'
        }

        // 娱乐组件
        const yule = {
            template: '<h1>娱乐信息</h1>'
        }
        // #endregion

        // #region vue 实例对象
        const vm = new Vue({
            el: '#app',
            data: {
            comName: 'zhuye'
            },
            // 注册私有组件
            components: {
            zhuye,
            keji,
            caijing,
            yule
            }
        })
        // #endregion

        // 监听 window 的 onhashchange 事件，根据获取到的最新的 hash 值，切换要显示的组件的名称
        window.onhashchange = function() {
            // 通过 location.hash 获取到最新的 hash 值
            console.log(location.hash);
            switch(location.hash.substr(1)){
            case '/zhuye':
                vm.comName = 'zhuye'
            break
            case '/keji':
                vm.comName = 'keji'
            break
            case '/caijing':
                vm.comName = 'caijing'
            break
            case '/yule':
                vm.comName = 'yule'
            break
            }
        }
        </script>
    </body>
    </html>
```


核心思路：
在页面中有一个vue实例对象，vue实例对象中有四个组件，分别是tab栏切换需要显示的组件内容
在页面中有四个超链接，如下：

```html
<a href="#/zhuye">主页</a> 
<a href="#/keji">科技</a> 
<a href="#/caijing">财经</a>
<a href="#/yule">娱乐</a>
```
### 1.4.  理解前端路由的核心思路

1. 通过a标签的点击改变锚点hash值
2. 使用window.onhashchange监听hash值的改变
3. 通过location.hash获取到当前的hash值并进行判断，展示hash值对应的组件

## 2. Vue Router简介

- 它是一个Vue.js官方提供的路由管理器。是一个功能更加强大的前端路由器，推荐使用。
- Vue Router和Vue.js非常契合，可以一起方便的实现SPA(single page web application,单页应用程序)应用程序的开发。
- Vue Router依赖于Vue，所以需要先引入Vue，再引入Vue Router
- 官方参考地址：https://router.vuejs.org/zh/installation.html

### 2.1 Vue Router的特性：

- 支持H5历史模式或者hash模式
- 支持嵌套路由
- 支持路由参数
- 支持编程式路由
- 支持命名路由
- 支持路由过渡动画特效
- 支持路由懒加载
- 支持路由滚动行为

### 2.2 Vue Router的使用步骤(★★★)

​				

```
	A.导入js文件

​	B.定义路由组件

​	C.配置路由规则并创建路由实例

​	D.将路由挂载到Vue实例中

​	E.添加路由占位符(最后路由展示的组件就会在占位符的位置显示)

​	F.添加路由链接	
```

​			

#### A.导入js文件

```html
<script src="lib/vue_2.5.22.js"></script>
<script src="lib/vue-router_3.0.2.js"></script>
```

#### B.定义路由组件

```html
var User = { template:"<div>This is User</div>" }
var Login = { template:"<div>This is Login</div>" }
```



#### C.配置路由规则并创建路由实例

```react
var myRouter = new VueRouter({
    //routes是路由规则数组
​    routes:[
​        //每一个路由规则都是一个对象，对象中至少包含path和component两个属性
​        //path表示  路由匹配的hash地址，component表示路由规则对应要展示的组件对象
​        {path:"/user",component:User},
​        {path:"/login",component:Login}
​    ]
})
```

#### D.将路由挂载到Vue实例中

```
new Vue({
    el:"#app",
    //通过router属性挂载路由对象
    router:myRouter
})
```

#### E.添加路由填充位（路由占位符）

```html
<router-view></router-view>
```

#### F.添加路由链接:

​	<router-link>是路由中提供的标签，默认会被渲染为a标签，to属性默认被渲染为href属性，
​	to属性的值会被渲染为#开头的hash地址

```vue
<router-link to="/user">User</router-link>
<router-link to="/login">Login</router-link>
```

```html
<!DOCTYPE html>
<html lang='zh-CN'>
<head>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>Document</title>
<style>
</style>
<!-- 1.导包 -->
<script src='./js/vue.js'></script>
<script src="./js/vue-router_3.0.2.js"></script>
</head>
<body>
<div id='app'>
    <!--  6.路由跳转导航 -->
     <router-link to="/login">登录</router-link>
     <router-link to="/register">注册</router-link>
     <!-- 5.路由占位符 -->
     <router-view ></router-view>
</div>
<script>
// 2.创建路由组件
const login = {
  template:"<h1>登录组件</h1>"
}
const register = {
  template:"<h1>注册组件</h1>"
}
// 3.创建路由对象，并进行路由配置
const router = new VueRouter({
  routes : [
    {path : "/login", component:login},
    {path : "/register", component:register}
  ]
})
 const vm = new Vue({
  el:'#app',
   data:{
    
 },
   methods:{
    
   },
  //  4. 路由对象挂载
   router
   })
</script>
</body>
</html>
```

- 小结：

Vue Router的使用步骤还是比较清晰的，按照步骤一步一步就能完成路由操作

### 2.3 路由重定向：

- 可以通过路由重定向为页面设置默认展示的组件,在路由规则中添加一条路由规则即可，如下：


```react
const router = new VueRouter({
  routes : [
    // 路由重定向
    {path : "/", redirect: "/login"},
    {path : "/login", component:login},
    {path : "/register", component:register}
  ]
})
```

### 2.4 路由切换添加动画

```css
	 .router-link-active {
      padding: 10px;
      background-color: #ccc;
      border-radius: 5px;
      color: white;
      text-decoration: none;
    }
		  linkActiveClass: 'myactive' // 手动更改类名称，改行代码与routes属性平级
```

### 2.5 路由传参的第一种方式query

```
使用?形式传参<router-link to="/login?id=1&&name='zs'">登录</router-link>
接收参数使用 $route.query.id
 var login = {
            template: '<h1>登录组件-------{{$route.query.id}}----{{$route.query.name}}</h1>',
        }
```

### 2.6 路由传参的第二种方式params

```
使用/形式传参  <router-link to="/login/12/张三">登录</router-link>
接收参数使用  $route.params.id
路由配置修改成：{ path: '/login/:id/:name', component: login },
 var login = {
        template:'<h1>登录组件-------{{$route.params.id}}----{{$route.params.name}}</h1>'
      };
```

### 2.7使用watch监听路由地址的改变

```react
  watch: {
          '$route.path': function (newval, oldval) {
            console.log(newval + '----' + oldval);
            if (newval == '/login') {
              console.log('欢迎进入登录界面');
            } else if (newval == '/register') {
              console.log('欢迎进入注册界面');
            }
          }
        }
```



## 3. 嵌套路由，动态路由的实现方式

### 3.1.嵌套路由的概念

- 当我们进行路由切换的时候显示的组件中还有新的子级路由链接以及内容。

- 嵌套路由最关键的代码在于理解子级路由的概念：

- 比如我们有一个/login的路由

- 那么/login下面还可以添加子级路由，如:

  ```
  /login/account
  /login/phone
  ```

- 参考代码如下：

1.创建子路由组件.

```react
const account = {
  template:"<h3>账号登录</h3>"
}
const phone = {
  template:"<h3>手机登录</h3>"
}
```

2. 增加children嵌套属性 

```react
{path : "/login", component:login,children:[
    {path : "/login/account", component :account },
    {path : "/login/phone", component :phone },
]},
```

3. 在login组件模板内添加路由占位符与路由跳转链接

   ```react
   const login = {
     template:`<div>
       <h1>登录组件</h1>
        <router-link to="/login/account">账号登录</router-link>
        <router-link to="/login/phone">手机登录</router-link>
        <router-view ></router-view>
       </div>`
   }
   ```

### 3.2.动态路由匹配

### 3.2.1、什么是动态路由？

 		  动态路由就是可以接收参数数据的路由形式，路由地址的一部分是完全一样的，另一部分是会发生变化的，我们可以将一些动态变化的部分形成路由参数，这些路由参数就叫做动态路由匹配

### 3.2.2、如何接收动态路由传递的参数？

- $route.params


```react
    var myRouter = new VueRouter({
    //routes是路由规则数组
    routes: [
        //通过/:参数名  的形式传递参数 
        { path: "/user/:id", component: User },
        ]
    var User = { template:"<div>用户：{{$route.params.id}}</div>"}
    })
```

### 3.3.3、通过props属性获取与传递参数

- 如果使用$route.params.id来获取路径传参的数据不够灵活，我们可以通过props属性获取与传递参数数据的方式

- 我们可以将props属性设置为true，route.params将会被设置为组件属性,那么组件可以通过props接收route.params,我们可以通过props来接收参数

```react
	var myRouter = new VueRouter({
​    //routes是路由规则数组
​    routes: [
​    //通过/:参数名  的形式传递参数 
​    //如果props设置为true，route.params将会被设置为组件属性
​       { path: "/user/:id", component: User,props:true },
​        		]

})

​		var User = { 
​	    props:["id"],
​	    template:"<div>用户：{{id}}</div>"
​	    }
```

- 还有一种情况，我们可以将props设置为对象，那么就直接将对象的数据传递给组件进行使用,但是此时，我们无法获取传递的参数值


```react
	var myRouter = new VueRouter({
​    //routes是路由规则数组
​    routes: [
​        //通过/:参数名  的形式传递参数 
​        //如果props设置为对象，则传递的是对象中的数据给组件
​        { path: "/user/:id", component: User,props:{username:"jack",age:18} },
​      ]  

})

var User = { 
    props:["username","age"],
    template: '<h1>User 组件 -- 用户id为: {{id}} -- 姓名为:{{uname}} -- 年龄为：{{age}}</h1>'
    }
```



-  如果想要获取传递的参数值还想要获取传递的对象数据，那么props应该设置为函数形式。		


```react
var myRouter = new VueRouter({
       //routes是路由规则数组
   	    routes: [
           //通过/:参数名的形式传递参数 
           //如果props设置为函数，则通过函数的第一个参数获取路由对象
           //并可以通过路由对象的params属性获取传递的参数
           //这里的参数route，就是路由动态参数对象，path有几个参数项，route中就有几个值
        	   { path: "/user/:id", component: User,props:(route)=>{
            		   return {username:"jack",pwd:123,id:route.params.id}
               } 
           },
           ]
   	})

   var User = { 
   	    props:["username","pwd","id"],
   		    template:"<div>用户：{{id}} -> {{username}}---{{pwd}}</div>"
   	    }


```

## 4. 命名路由

- 什么是命名路由?：给路由取别名

案例：

```react
  1 .var myRouter = new VueRouter({
    //routes是路由规则数组

​     routes: [
​        //通过name属性为路由添加一个别名
​        { path: "/user/:id", component: User, name:"user", props: true},
​        ]

})
 2.Props:['id']
```

 3 . 添加了别名之后，可以使用别名进行跳转，同时可以通过params传递参数

```vue
<router-link to="/user">User</router-link> //传统方式
<router-link :to="{ name:'user' , params: {id:123} }">User</router-link>
```

4. 这里要给to加属性绑定，以及传递对应的参数

5. 还可以编程式导航
   
   ```vue
   myRouter.push( { name:'user' , params: {id:123} } )
   ```
   
   - 完整案例:

```vue
<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Document</title>
  <style>
    /**{margin:0;padding:0}
a {text-decoration:none}
ul,li {list-style:none}*/
    .myactive {
      padding: 10px;
      background-color: #ccc;
      border-radius: 5px;
      color: white;
      text-decoration: none;
    }

    .ziactive {
      font-size: 50px;
    }
  </style>
  <script src='./js/vue.js'></script>
  <script src="./js/vue-router_3.0.2.js"></script>
</head>

<body>
  <div id='app'>
    <router-link to="/login">登录</router-link>
    <router-link :to="{name:'register',params:{id:123,age:18}}">注册</router-link>
    <router-view></router-view>
  </div>
  <script>
    const login = {
      template: `<div>我是login组件
         <router-link to="/login/sj">手机登录</router-link>
         <router-link to="/login/sm">扫码登录</router-link>
         <router-view></router-view>
        </div>`
    }
    const register = {
      template: `<h1>我是注册组件----我就是动态路由参数{{id}}--{{age}}</h1>`,
      props: ['id', 'age']

    }
    const sjdenglu = {
      template: `<h1>我是手机登录组件</h1>`
    }
    const smdenglu = {
      template: `<h1>我是扫码登录组件</h1>`
    }
    const myRouter = new VueRouter({
      routes: [{
        path: "/", redirect: "/login"
      },
      {
        path: "/login", component: login, children: [
          { path: '/login', redirect: "/login/sj" },
          {
            path: "/login/sj", component: sjdenglu
          },
          {
            path: "/login/sm", component: smdenglu
          },
        ],

      },
      {
        path: "/register/:id/:age", component: register, name: "register", props: true
      },
      ],
      linkActiveClass: 'myactive' // 手动更改类名称，改行代码与routes属性平级
    })
    var vm = new Vue({
      el: '#app',
      data: {

      },
      methods: {

      },
      watch: {
        "$route.path": function (val1, val2) {
          console.log(val1, val2);
        }
      },
      router: myRouter
    })
  </script>
</body>

</html>
```

## 5. 编程式导航

- 页面导航的两种方式：
  - A.声明式导航：通过点击链接的方式实现的导航，比如:<a></a><router-link></router-link>
  - B.编程式导航：调用js的api方法实现导航比如location.href
  - C.在Vue中，实现编程示导航基本语法是:this.$router.push("hash地址")和;this.$router.go( n );

- Vue-Router中常见的导航方式：
  - this.$router.push("hash地址");
  - this.$router.push("/login");
  - this.$router.push({ name:'user' , params: {id:123} });
  - this.$router.push({ path:"/login" });
  - this.$router.push({ path:"/login",query:{username:"jack"} });
  - his.$router.go( n );//n为数字
  - this.$router.go( -1 );

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <!-- 导入 vue 文件 -->
    <script src="./lib/vue_2.5.22.js"></script>
    <script src="./lib/vue-router_3.0.2.js"></script>
  </head>
  <body>
    <!-- 被 vm 实例所控制的区域 -->
    <div id="app">
      <router-link to="/user/1">User1</router-link>
      <router-link to="/user/2">User2</router-link>
      <router-link to="/user/3">User3</router-link>
      <router-link :to="{name :'user',params:{id :123} }">User4</router-link>
      <!-- <router-link to="/register/5">Register</router-link> -->
      <router-link :to="{name :'register',params:{id :123}}">Register</router-link>

      <!-- 路由占位符 -->
      <router-view></router-view>
    </div>

    <script>
      const User = {
        props: ['id', 'uname', 'age'],
        template:`<div>
          <h1>User 组件 -- 用户id为: {{id}} -- 姓名为:{{uname}} -- 年龄为：{{age}}</h1>
          <button @click="goRegister">去注册</button>
          </div>`,
          methods: {
               goRegister () {
                  //  this.$router.push("/register/456")
                   this.$router.push({name :'register',params:{id :789}})
               }
      }
      }

      const Register = {
        template: `<div>
          <h1>Register 组件 -----{{this.$route.params.id}}</h1>
          <button @click="goBack">返回</button>
          </div>`,
          methods : {
            goBack () {
              this.$router.go(-1)
            }
          }
      }

      // 创建路由实例对象
      const router = new VueRouter({
        // 所有的路由规则
        routes: [
          { path: '/', redirect: '/user' },
          {
            path: '/user/:id',
            component: User,
            name : "user",
            props: route => {return { uname: 'zs', age: 20, id: route.params.id }}
          },
          { path: '/register/:id',
            component: Register,
            name:"register"
          }
        ]
      })

      // 创建 vm 实例对象
      const vm = new Vue({
        // 指定控制的区域
        el: '#app',
        data: {},
        // 挂载路由实例对象
        // router: router
        router
      })
    </script>
  </body>
</html>
```

## 6.实现后台管理案例

点击左侧的"用户管理","权限管理","商品管理","订单管理","系统设置"都会出现对应的组件并展示内容

其中"用户管理"组件展示的效果如上图所示，在用户管理区域中的详情链接也是可以点击的，点击之后将会显示用户详情信息。

案例思路：
1).先将素材文件夹中的基于vue-router的案例.html复制到我们自己的文件夹中。

看一下这个文件中的代码编写了一些什么内容，这个页面已经把后台管理页面的基本布局实现了

2).在页面中引入vue，vue-router

3).创建Vue实例对象，准备开始编写代码实现功能

4).希望是通过组件的形式展示页面的主体内容，而不是写死页面结构，所以我们可以定义一个根组件：

```vue
//只需要把原本页面中的html代码设置为组件中的模板内容即可
1.  <div id="app">
        <App></App>
    </div>
2.    const App = {
        template:`
        <div>
        <!-- 头部区域 -->
      <header class="header">管理系统</header>
      <!-- 中间主体区域 -->
      <div class="main">
        <!-- 左侧菜单栏 -->
        <div class="content left">
          <ul>
            <li>用户管理</li>
            <li>权限管理</li>
            <li>商品管理</li>
            <li>订单管理</li>
            <li>系统设置</li>
          </ul>
        </div>
        <!-- 右侧内容区域 -->
        <div class="content right"><div class="main-content">添加用户表单</div></div>
      </div>
      <!-- 尾部区域 -->
      <footer class="footer">版权信息</footer>
      </div>
        `
      }    
3.  components: {
            App
          }
```
5).当我们访问页面的时候，默认需要展示刚刚创建的app根组件，我们可以创建一个路由对象来完成这个事情,然后将路由挂

载到Vue实例对象中即可

```react
    const router = new  VueRouter({
        routes:[
          {path:"/",component:App}
        ]
      })

  const vm = new Vue({
          el:"#app",
          data:{},
          methods: {
            
          },
          router
      })
```
补充：到此为止，基本的js代码都处理完毕了，我们还需要设置一个路由占位符
```html
<body>
  <div id="app">
        <router-view ></router-view>
    </div>
</body>
```
6).此时我们打开页面应该就可以得到一个VueRouter路由出来的根组件了

我们需要在这个根组件中继续路由实现其他的功能子组件

先让我们更改根组件中的模板：更改左侧li为子级路由链接，并在右侧内容区域添加子级组件占位符

```html
const App = {
    template:`<div>
        ........
        <div class="main">
          <!-- 左侧菜单栏 -->
          <div class="content left">
            <ul>
              <!-- 注意：我们把所有li都修改为了路由链接 -->
              <li><router-link to="/users">用户管理</router-link></li>
              <li><router-link to="/access">权限管理</router-link></li>
              <li><router-link to="/goods">商品管理</router-link></li>
              <li><router-link to="/orders">订单管理</router-link></li>
              <li><router-link to="/systems">系统设置</router-link></li>
            </ul>
          </div>
          <!-- 右侧内容区域 -->
          <div class="content right">
            <div class="main-content">
                <!-- 在 -->
                <router-view></router-view> 
            </div>
          </div>
        </div>
        .......
      </div>`
  }
```
然后，我们要为子级路由创建并设置需要显示的子级组件，并通过路由重定向将app根组件默认导航到users
```react
//建议创建的组件首字母大写，和其他内容区分
const Users = {template:`<div>
    <h3>用户管理</h3>
</div>`}
const Access = {template:`<div>
    <h3>权限管理</h3>
</div>`}
const Goods = {template:`<div>
    <h3>商品管理</h3>
</div>`}
const Orders = {template:`<div>
    <h3>订单管理</h3>
</div>`}
const Systems = {template:`<div>
    <h3>系统管理</h3>
</div>`}

//添加子组件的路由规则
 const router = new  VueRouter({
        routes:[
          {path:"/",component:App,
          redirect: "/users",
          children:[
                  {path:"/users",component:Users},
                  {path:"/access",component:Access},
                  {path:"/goods",component:Goods},
                  {path:"/orders",component:Orders},
                  {path:"/systems",component:Systems},
          ]},
          
        
        ]
      })

 const vm = new Vue({
          el:"#app",
          data:{},
          methods: {
            
          },
          router
      })
      
   //子组件内部   
```

7). 展示用户信息列表：
    A.为Users组件添加私有数据,并在模板中循环展示私有数据

```react
const Users = {
      template: `<div>
        <h3>用户管理</h3>
    </div>`,
      data() {
        return {
          userList: [
            { id: 1, name: 'zs', age: 18 },
            { id: 2, name: 'ls', age: 19 },
            { id: 3, name: 'wang', age: 20 },
            { id: 4, name: 'jack', age: 21 }
          ]
        };
      }
    };
```

```vue
 template:`<div>
<h3>用户管理</h3>
        <table>
            <thead>
                <tr>
                    <th>编号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="item.id" v-for="item in userList">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td><a href="javascript:;">详情</a></td>
                </tr>
            </tbody>
        </table>
  </div>`}
```

8).  当用户列表展示完毕之后，我们可以点击列表中的详情来显示用户详情信息，首先我们需要创建一个组件，用来展示详情信息,

​      这里需要注意的是当我们点击详情的时候，users组件消失了，对应显示的应该是详情页的组件，所以，我们的详情页应该是和之前创建的用户管理等5个子组件是平级关系，接下来创建UserInfo子组件，并匹配路由规则

```react
//定义组件
const UserInfo ={template:`<div>
  <h3>用户详情</h3>
  </div>`
}

//定义路由规则
									{path:"/users",component:Users},
                  {path:"/userinfo",component:UserInfo},
                  {path:"/access",component:Access},
                  {path:"/goods",component:Goods},
                  {path:"/orders",component:Orders},
                  {path:"/systems",component:Systems},


```

9). 此时点击用户管理组件中的a标签，我们希望可以跳转到对应的详情页，并拿到点击的信息的编号

```react
 						<tbody>
                <tr :key="item.id" v-for="item in userList">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td><a href="javascript:;" @click="goDetail(item.id)">详情</a></td>
                </tr>
            </tbody>
            
      	//Users    组件中的data和method   
           data(){
        return {
            userList:[
                {id:1,name:"zs",age:18},
                {id:2,name:"ls",age:19},
                {id:3,name:"wang",age:20},
                {id:4,name:"jack",age:21},
            ]
        }
         },
         methods: {
  			  goDetail(id) {
   			   console.log(id);
  		  }
  }    
```

10). 通过编程式导航实现路由的跳转,传入id的同时,在路由规则中把id的位置标记为动态参数

```react
  	//编程式导航实现路由的跳转并传入id
  goDetail(id) {
      console.log(id);
      this.$router.push("/userinfo/"+id)
    }
   	//在路由规则中将id标记为动态参数 
  children:[
                  {path:"/users",component:Users},
                  {path:"/userinfo/:id",component:UserInfo},
                  {path:"/access",component:Access},
                  {path:"/goods",component:Goods},
                  {path:"/orders",component:Orders},
                  {path:"/systems",component:Systems},
          ]},   
```

11). 在用户详情页中获取传递过来的编号，推荐使用props：true

```react
  //.1.路由规则使用props
  {path:"/userinfo/:id",component:UserInfo,props: true},
  // 2.在userinfo组件中定义id,并且引用到页面上
  const UserInfo ={template:`<div>
  <h3>用户详情-----用户id为{{id}}</h3>
  </div>`,
  props: ['id']

}
```

12). 在详情页中提供一个后退按钮，实现后退功能

```react
const UserInfo ={template:`<div>
  <h3>用户详情-----用户id为{{id}}</h3>
  <button @click="goback">后退</button>
  </div>`,
  props: ['id'],
  methods: {
    goback () {
    //实现后退功能
      this.$router.go(-1)
    }
  }

}

```

- 完整代码如下:


```react
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>基于vue-router的案例</title>
    <style type="text/css">
      html,
      body,
      #app {
        margin: 0;
        padding: 0px;
        height: 100%;
      }
      .header {
        height: 50px;
        background-color: #545c64;
        line-height: 50px;
        text-align: center;
        font-size: 24px;
        color: #fff;
      }
      .footer {
        height: 40px;
        line-height: 40px;
        background-color: #888;
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        color: #fff;
      }
      .main {
        display: flex;
        position: absolute;
        top: 50px;
        bottom: 40px;
        width: 100%;
      }
      .content {
        flex: 1;
        text-align: center;
        height: 100%;
      }
      .left {
        flex: 0 0 20%;
        background-color: #545c64;
      }
      .left a {
        color: white;
        text-decoration: none;
      }
      .right {
        margin: 5px;
      }
      .btns {
        width: 100%;
        height: 35px;
        line-height: 35px;
        background-color: #f5f5f5;
        text-align: left;
        padding-left: 10px;
        box-sizing: border-box;
      }
      button {
        height: 30px;
        background-color: #ecf5ff;
        border: 1px solid lightskyblue;
        font-size: 12px;
        padding: 0 20px;
      }
      .main-content {
        margin-top: 10px;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      ul li {
        height: 45px;
        line-height: 45px;
        background-color: #a0a0a0;
        color: #fff;
        cursor: pointer;
        border-bottom: 1px solid #fff;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      td,
      th {
        border: 1px solid #eee;
        line-height: 35px;
        font-size: 12px;
      }

      th {
        background-color: #ddd;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <router-view></router-view>
    </div>
  </body>
  <script src="../js/vue.js"></script>
  <script src="../js/vue-router_3.0.2.js"></script>
  <script>
    //建议创建的组件首字母大写，和其他内容区分
    const Users = {
      template: `<div>
          <h3>用户管理</h3>
          <table>
              <thead>
                  <tr>
                      <th>编号</th>
                      <th>姓名</th>
                      <th>年龄</th>
                      <th>操作</th>
                  </tr>
              </thead>
              <tbody>
                  <tr :key="item.id" v-for="item in userList">
                      <td>{{item.id}}</td>
                      <td>{{item.name}}</td>
                      <td>{{item.age}}</td>
                      <td><a href="javascript:;" @click="goDetail(item.id)">详情</a></td>
                  </tr>
              </tbody>
          </table>
      </div>`,
      data() {
        return {
          userList: [
            { id: 1, name: 'zs', age: 18 },
            { id: 2, name: 'ls', age: 19 },
            { id: 3, name: 'wang', age: 20 },
            { id: 4, name: 'jack', age: 21 }
          ]
        };
      },
      methods: {
        goDetail(id) {
          // console.log(id);
          this.$router.push('/userinfo/' + id);
        }
      }
    };
    const Access = {
      template: `<div>
          <h3>权限管理</h3>
      </div>`
    };
    const Goods = {
      template: `<div>
          <h3>商品管理</h3>
      </div>`
    };
    const Orders = {
      template: `<div>
          <h3>订单管理</h3>
      </div>`
    };
    const Systems = {
      template: `<div>
          <h3>系统管理</h3>
      </div>`
    };
    //定义组件
    const UserInfo = {
      template: `<div>
    <h3>用户详情</h3>
    <h3>当前用户的id是 {{id}}</h3>
    <button @click="goback">后退</button>
    </div>`,
      props: ['id'],
      methods: {
        goback() {
          this.$router.go(-1);
        }
      }
    };

    const App = {
      template: `<div>
              <!-- 头部区域 -->
            <header class="header">管理系统</header>
            <!-- 中间主体区域 -->
            <div class="main">
              <!-- 左侧菜单栏 -->
              <div class="content left">
                <ul>
                 <router-link to="/users"> <li>用户管理</li>  </router-link>
                 <router-link to="/access"> <li>权限管理</li>  </router-link>
                 <router-link to="/goods"> <li>商品管理</li>  </router-link>
                 <router-link to="/orders"> <li>订单管理</li>  </router-link>
                 <router-link to="/systems"> <li>系统设置</li>  </router-link>
                </ul>
              </div>
              <!-- 右侧内容区域 -->
              <div class="content right">
                <div class="main-content">
                  <router-view></router-view>
                  </div>
              </div>
            </div>
            <!-- 尾部区域 -->
            <footer class="footer">版权信息</footer>
              </div>`
    };
    const router = new VueRouter({
      routes: [
        {
          path: '/',
          component: App,
          redirect: '/users',
          children: [
            {
              path: '/users',
              component: Users
            },
            {
              path: '/access',
              component: Access
            },
            {
              path: '/goods',
              component: Goods
            },
            {
              path: '/orders',
              component: Orders
            },
            {
              path: '/systems',
              component: Systems
            },
            {
              path: '/userinfo/:id',
              component: UserInfo,
              props: true
            }
          ]
        }
      ]
    });
    const vm = new Vue({
      el: '#app',
      data() {
        return {};
      },
      methods: {},
      components: {
        App
      },
      router
    });
  </script>
</html>
```

## 7、路由守卫

- `Vue-router`中的路由守卫，主要是对其内容进行保护，如果没有对应的权限，则不允许访问。

我们首先来看一下全局守卫，也就是所有的路由都会经过全局守卫来进行检测。

```react
  //实现全局守卫
      router.beforeEach((to, from, next) => {
        //to:去哪个页面，from来自哪个页面，next继续执行.
        //判断哪个路由需要进行守卫，这里可以通过元数据方式
        if (to.meta.auth) {
          if (window.isLogin) {
            next();
          } else {
            next("/login?redirect=" + to.fullPath);
          }
        } else {
          next();
        }
      });
```

在上面的代码中，创建了路由守卫，但是需要判断的是需要对哪个路由进行守卫，这里就是通过元数据来进行判断的。如果所跳转到的路由有元数据，并且对应的`auth`属性为`true`表明是需要进行守卫的，那么下面就需要校验用户是否登录,这里是通过判断否`window.isLogin`的值是否为`true`来进行判断的（这里简化了操作,实际应用中应该存储到`sessionStorage`），如果条件成立则表明用户登录，就继续访问用户希望访问到的页面，否则跳转到登录页面，而且将用户希望访问的页面地址也传递到了登录页面，这样用户登录成功后，可以直接跳转到要访问的页面。

如果没有元数据，则继续访问用户要访问的页面。演示如下：

首先创建login组件，代码如下：

```react
 const Login = {
        data() {
          return {
            isLogin: window.isLogin,
          };
        },

        template: `<div>
          <button @click="login" v-if="!isLogin">登录</button>
          <button @click="logout" v-else>注销</button>
          </div>`,
        methods: {
          login() {
            window.isLogin = true;
            this.$router.push(this.$route.query.redirect);
          },
          logout() {
            this.isLogin = window.isLogin = false;
          },
        },
      };
```

在上面的代码中创建了login组件，下方代码给users,access,systems,userinfo都添加了元数据,并配置了login路由规则

```react
  const router = new VueRouter({
      routes: [
        {
          path: '/login',
          component: Login
        },
        {
          path: '/',
          component: App,
          redirect: '/users',
          children: [
            {
              path: '/users',
              component: Users,
              meta: {
                auth: true
              }
            },
            {
              path: '/access',
              component: Access,
              meta: {
                auth: true
              }
            },
            {
              path: '/goods',
              component: Goods
            },
            {
              path: '/orders',
              component: Orders
            },
            {
              path: '/systems',
              component: Systems,
              meta: {
                auth: true
              }
            },
            {
              path: '/userinfo/:id',
              component: UserInfo,
              props: true,
              meta: {
                auth: true
              }
            }
          ]
        }
      ]
    });  
```

配置全局路由守卫：

```react
   //实现全局守卫
    router.beforeEach((to, from, next) => {
        //to:去哪个页面，from来自哪个页面，next继续执行.
        //判断哪个路由需要进行守卫，这里可以通过元数据方式
        if (to.meta.auth) {
          if (window.isLogin) {
            next();
          } else {
          // console.log(to.fullPath);
            next("/login?redirect=" + to.fullPath);
          }
        } else {
          next();
        }
      });
```

打开浏览器发现，我们的重定向被修改至登录页

当单击登录按钮后，进行将`window.isLogin`设置为`true`, 并且进行跳转至原页面。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>基于vue-router的案例</title>
    <style type="text/css">
      html,
      body,
      #app {
        margin: 0;
        padding: 0px;
        height: 100%;
      }
      .header {
        height: 50px;
        background-color: #545c64;
        line-height: 50px;
        text-align: center;
        font-size: 24px;
        color: #fff;
      }
      .footer {
        height: 40px;
        line-height: 40px;
        background-color: #888;
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        color: #fff;
      }
      .main {
        display: flex;
        position: absolute;
        top: 50px;
        bottom: 40px;
        width: 100%;
      }
      .content {
        flex: 1;
        text-align: center;
        height: 100%;
      }
      .left {
        flex: 0 0 20%;
        background-color: #545c64;
      }
      .left a {
        color: white;
        text-decoration: none;
      }
      .right {
        margin: 5px;
      }
      .btns {
        width: 100%;
        height: 35px;
        line-height: 35px;
        background-color: #f5f5f5;
        text-align: left;
        padding-left: 10px;
        box-sizing: border-box;
      }
      button {
        height: 30px;
        background-color: #ecf5ff;
        border: 1px solid lightskyblue;
        font-size: 12px;
        padding: 0 20px;
      }
      .main-content {
        margin-top: 10px;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      ul li {
        height: 45px;
        line-height: 45px;
        background-color: #a0a0a0;
        color: #fff;
        cursor: pointer;
        border-bottom: 1px solid #fff;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      td,
      th {
        border: 1px solid #eee;
        line-height: 35px;
        font-size: 12px;
      }

      th {
        background-color: #ddd;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <router-view></router-view>
    </div>
  </body>
  <script src="../js/vue.js"></script>
  <script src="../js/vue-router_3.0.2.js"></script>
  <script>
    //建议创建的组件首字母大写，和其他内容区分
    const Users = {
      template: `<div>
          <h3>用户管理</h3>
          <table>
              <thead>
                  <tr>
                      <th>编号</th>
                      <th>姓名</th>
                      <th>年龄</th>
                      <th>操作</th>
                  </tr>
              </thead>
              <tbody>
                  <tr :key="item.id" v-for="item in userList">
                      <td>{{item.id}}</td>
                      <td>{{item.name}}</td>
                      <td>{{item.age}}</td>
                      <td><a href="javascript:;" @click="goDetail(item.id)">详情</a></td>
                  </tr>
              </tbody>
          </table>
      </div>`,
      data() {
        return {
          userList: [
            { id: 1, name: 'zs', age: 18 },
            { id: 2, name: 'ls', age: 19 },
            { id: 3, name: 'wang', age: 20 },
            { id: 4, name: 'jack', age: 21 }
          ]
        };
      },
      methods: {
        goDetail(id) {
          // console.log(id);
          this.$router.push('/userinfo/' + id);
        }
      }
    };
    const Access = {
      template: `<div>
          <h3>权限管理</h3>
      </div>`
    };
    const Goods = {
      template: `<div>
          <h3>商品管理</h3>
      </div>`
    };
    const Orders = {
      template: `<div>
          <h3>订单管理</h3>
      </div>`
    };
    const Systems = {
      template: `<div>
          <h3>系统管理</h3>
      </div>`
    };
    //定义组件
    const UserInfo = {
      template: `<div>
    <h3>用户详情</h3>
    <h3>当前用户的id是 {{id}}</h3>
    <button @click="goback">后退</button>
    </div>`,
      props: ['id'],
      methods: {
        goback() {
          this.$router.go(-1);
        }
      }
    };

    const Login = {
      data() {
        return {
          isLogin: window.isLogin
        };
      },

      template: `<div>
          <button @click="login" v-if="!isLogin">登录</button>
          <button @click="logout" v-else>注销</button>
          </div>`,
      methods: {
        login() {
          window.isLogin = true;
          this.$router.push(this.$route.query.redirect);
        },
        logout() {
          this.isLogin = window.isLogin = false;
        }
      }
      // mounted() {
      //   console.log(this.isLogin);
      // }
    };

    const App = {
      template: `<div>
              <!-- 头部区域 -->
            <header class="header">管理系统</header>
            <!-- 中间主体区域 -->
            <div class="main">
              <!-- 左侧菜单栏 -->
              <div class="content left">
                <ul>
                 <router-link to="/users"> <li>用户管理</li>  </router-link>
                 <router-link to="/access"> <li>权限管理</li>  </router-link>
                 <router-link to="/goods"> <li>商品管理</li>  </router-link>
                 <router-link to="/orders"> <li>订单管理</li>  </router-link>
                 <router-link to="/systems"> <li>系统设置</li>  </router-link>
                </ul>
              </div>
              <!-- 右侧内容区域 -->
              <div class="content right">
                <div class="main-content">
                  <router-view></router-view>
                  </div>
              </div>
            </div>
            <!-- 尾部区域 -->
            <footer class="footer">版权信息</footer>
              </div>`
    };

    const router = new VueRouter({
      routes: [
        {
          path: '/login',
          component: Login
        },
        {
          path: '/',
          component: App,
          redirect: '/users',
          children: [
            {
              path: '/users',
              component: Users,
              meta: {
                auth: true
              }
            },
            {
              path: '/access',
              component: Access,
              meta: {
                auth: true
              }
            },
            {
              path: '/goods',
              component: Goods
            },
            {
              path: '/orders',
              component: Orders
            },
            {
              path: '/systems',
              component: Systems,
              meta: {
                auth: true
              }
            },
            {
              path: '/userinfo/:id',
              component: UserInfo,
              props: true,
              meta: {
                auth: true
              }
            }
          ]
        }
      ]
    });

    //实现全局守卫
    router.beforeEach((to, from, next) => {
      //to:去哪个页面，from来自哪个页面，next继续执行.
      //判断哪个路由需要进行守卫，这里可以通过元数据方式
      if (to.meta.auth) {
        if (window.isLogin) {
          next();
        } else {
          // console.log(to.fullPath);
          next('/login?redirect=' + to.fullPath);
        }
      } else {
        next();
      }
    });

    const vm = new Vue({
      el: '#app',
      data() {
        return {};
      },
      methods: {},
      components: {
        App
      },
      router
    });
  </script>
</html>
```

- 以上是全局守卫，对所有的路由都起作用。


- 如果项目比较简单，路由规则定义的比较少，可以将守卫定位到某个路由规则内。这就是**路由独享守卫**,以下案例只对系统和用户详情做了守卫。


```react
 const router = new VueRouter({
      routes: [
        {
          path: '/login',
          component: Login
        },
        {
          path: '/',
          component: App,
          redirect: '/users',
          children: [
            {
              path: '/users',
              component: Users
            },
            {
              path: '/access',
              component: Access
            },
            {
              path: '/goods',
              component: Goods
            },
            {
              path: '/orders',
              component: Orders
            },
            {
              path: '/systems',
              component: Systems,
              beforeEnter(to, from, next) {
                if (window.isLogin) {
                  next();
                } else {
                  next('/login?redirect=' + to.fullPath);
                }
              }
            },
            {
              path: '/userinfo/:id',
              component: UserInfo,
              props: true,
              beforeEnter(to, from, next) {
                if (window.isLogin) {
                  next();
                } else {
                  next('/login?redirect=' + to.fullPath);
                }
              }
            }
          ]
        }
      ]
    });
```

在上面的代码中，给系统和用户详情这2个进行路由守卫，注意这里的方法名为`beforeEnter`.同时，这里将守卫定义在/system 和/userinfo 路由规则内，所以不需要对元数据进行判断，只需要判断用户是否登录就可以了。（注意：在进行以上测试时，需要将全局守卫的代码注释掉）

**组件内守卫**

可以在路由组件内直接定义以下路由导航守卫。

```
beforeRouteEnter
beforeRouteUpdate
beforeRouteLeave
```

将如下的代码直接添加到组件内。

```react
 const Systems = {
      template: `<div>
          <h3>系统管理</h3>
      </div>`,
      beforeRouteEnter(to, from, next) {
        if (window.isLogin) {
          next();
        } else {
          next('/login?redirect=' + to.fullPath);
        }
      }
    };
```

在上面的代码中，直接将路由守卫对应的方法添加到了组件中。

注意：在测试之前将路由规则中定义的路由守卫的代码注释掉。

## 8、addRoutes动态路由添加

​       在前面的案例中，我们都是将路由定义好，然后通过路由守卫来判断，某个用户是否登录，从而决定能否访问某个路由规则对应的组件内容。

但是，如果某些路由规则只能用户登录以后才能够访问，那么我们也可以不用提前定义好，而是在登录后，通过`addRoutes`方法为其动态的添加。

首先这里还需要全局的路由守卫来进行校验判断，只不过这里全局路由守卫的逻辑发生了变化。

```react
router.beforeEach((to, from, next) => {
        //to:去哪个页面，from来自哪个页面，next继续执行.
        if (window.isLogin) {
          //用户已经登录
          if (to.path === "/login") {
            // 用户已经登录了，但是又访问登录页面，这里直接跳转到用户列表页面
            next("/");
          } else {
            //用户已经登录，并且访问其它页面，则运行访问
            next();
          }
        } else {
          //用户没有登录,并且访问的就是登录页，则运行访问登录页
          if (to.path === "/login") {
            next();
          } else {
            //用户没有登录，访问其它页面，则跳转到登录页面。
            next("/login?redirect=" + to.fullPath);
          }
        }
      });
```

下面对登录组件进行改造：

- 注意：对应的原有的路由规则应该注释掉。（实际上只是将原来定义的routes数组中的路由规则，除登录规则以外的全部规则，全都添加到this.$router.addRoutes([])的方括号中
- this.$router.addRoutes([...]) 书写在 window.isLogin = true;之后和this.$router.push(this.$route.query.redirect);之前

```react
// 登录组件
const Login = {
        data() {
          return {
            isLogin: window.isLogin,
          };
        },

        template: `<div>
            <button @click="login" v-if="!isLogin">登录</button>
            <button @click="logout" v-else>注销</button>
            </div>`,
        methods: {
          login() {
            window.isLogin = true;
            if (this.$route.query.redirect) {
              //动态添加路由：
              this.$router.addRoutes([
                {
                  path: "/",
                  component: App,
                  redirect: "/users",
                  children: [
                    {
                      path: "/users",
                      component: Users,
                      meta: {
                        auth: true,
                      },
                    },
                    { path: "/userinfo/:id", component: UserInfo, props: true },
                    { path: "/access", component: Access },
                    { path: "/goods", component: Goods },
                    { path: "/orders", component: Orders },
                    { path: "/systems", component: Systems },
                  ],
                },
              ]);
              this.$router.push(this.$route.query.redirect);
            } else {
              this.$router.push("/");
            }
          },
          logout() {
            this.isLogin = window.isLogin = false;
          },
        },
      };

```

在登录成功后，通过`addRoutes`方法动态的添加路由规则，也就是所添加的路由规则只能是在登录以后才能够访问，所以全局守卫的判断条件发生了变化，不在判断是否有元数据，而只是判断是否登录。如果登录了，想访问上面的路由规则，则运行访问，如果没有登录则不允许访问。

注意：对应的原有的路由规则应该注释掉。

完整代码如下：

```react
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>基于vue-router的案例</title>
    <style type="text/css">
      html,
      body,
      #app {
        margin: 0;
        padding: 0px;
        height: 100%;
      }
      .header {
        height: 50px;
        background-color: #545c64;
        line-height: 50px;
        text-align: center;
        font-size: 24px;
        color: #fff;
      }
      .footer {
        height: 40px;
        line-height: 40px;
        background-color: #888;
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        color: #fff;
      }
      .main {
        display: flex;
        position: absolute;
        top: 50px;
        bottom: 40px;
        width: 100%;
      }
      .content {
        flex: 1;
        text-align: center;
        height: 100%;
      }
      .left {
        flex: 0 0 20%;
        background-color: #545c64;
      }
      .left a {
        color: white;
        text-decoration: none;
      }
      .right {
        margin: 5px;
      }
      .btns {
        width: 100%;
        height: 35px;
        line-height: 35px;
        background-color: #f5f5f5;
        text-align: left;
        padding-left: 10px;
        box-sizing: border-box;
      }
      button {
        height: 30px;
        background-color: #ecf5ff;
        border: 1px solid lightskyblue;
        font-size: 12px;
        padding: 0 20px;
      }
      .main-content {
        margin-top: 10px;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      ul li {
        height: 45px;
        line-height: 45px;
        background-color: #a0a0a0;
        color: #fff;
        cursor: pointer;
        border-bottom: 1px solid #fff;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      td,
      th {
        border: 1px solid #eee;
        line-height: 35px;
        font-size: 12px;
      }

      th {
        background-color: #ddd;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <router-view></router-view>
    </div>
  </body>
  <script src="../js/vue.js"></script>
  <script src="../js/vue-router_3.0.2.js"></script>
  <script>
    //建议创建的组件首字母大写，和其他内容区分
    const Users = {
      template: `<div>
          <h3>用户管理</h3>
          <table>
              <thead>
                  <tr>
                      <th>编号</th>
                      <th>姓名</th>
                      <th>年龄</th>
                      <th>操作</th>
                  </tr>
              </thead>
              <tbody>
                  <tr :key="item.id" v-for="item in userList">
                      <td>{{item.id}}</td>
                      <td>{{item.name}}</td>
                      <td>{{item.age}}</td>
                      <td><a href="javascript:;" @click="goDetail(item.id)">详情</a></td>
                  </tr>
              </tbody>
          </table>
      </div>`,
      data() {
        return {
          userList: [
            { id: 1, name: 'zs', age: 18 },
            { id: 2, name: 'ls', age: 19 },
            { id: 3, name: 'wang', age: 20 },
            { id: 4, name: 'jack', age: 21 }
          ]
        };
      },
      methods: {
        goDetail(id) {
          // console.log(id);
          this.$router.push('/userinfo/' + id);
        }
      }
    };
    const Access = {
      template: `<div>
          <h3>权限管理</h3>
      </div>`
    };
    const Goods = {
      template: `<div>
          <h3>商品管理</h3>
      </div>`
    };
    const Orders = {
      template: `<div>
          <h3>订单管理</h3>
      </div>`
    };
    const Systems = {
      template: `<div>
          <h3>系统管理</h3>
      </div>`
    };
    //定义组件
    const UserInfo = {
      template: `<div>
    <h3>用户详情</h3>
    <h3>当前用户的id是 {{id}}</h3>
    <button @click="goback">后退</button>
    </div>`,
      props: ['id'],
      methods: {
        goback() {
          this.$router.go(-1);
        }
      }
    };

    // 登录组件
    const Login = {
      data() {
        return {
          isLogin: window.isLogin
        };
      },

      template: `<div>
            <button @click="login" v-if="!isLogin">登录</button>
            <button @click="logout" v-else>注销</button>
            </div>`,
      methods: {
        login() {
          window.isLogin = true;
          if (this.$route.query.redirect) {
            //动态添加路由：
            this.$router.addRoutes([
              {
                path: '/',
                component: App,
                redirect: '/users',
                children: [
                  {
                    path: '/users',
                    component: Users,
                    meta: {
                      auth: true
                    }
                  },
                  { path: '/userinfo/:id', component: UserInfo, props: true },
                  { path: '/access', component: Access },
                  { path: '/goods', component: Goods },
                  { path: '/orders', component: Orders },
                  { path: '/systems', component: Systems }
                ]
              }
            ]);
            this.$router.push(this.$route.query.redirect);
          } else {
            this.$router.push('/');
          }
        },
        logout() {
          this.isLogin = window.isLogin = false;
        }
      }
    };

    const App = {
      template: `<div>
              <!-- 头部区域 -->
            <header class="header">管理系统</header>
            <!-- 中间主体区域 -->
            <div class="main">
              <!-- 左侧菜单栏 -->
              <div class="content left">
                <ul>
                 <router-link to="/users"> <li>用户管理</li>  </router-link>
                 <router-link to="/access"> <li>权限管理</li>  </router-link>
                 <router-link to="/goods"> <li>商品管理</li>  </router-link>
                 <router-link to="/orders"> <li>订单管理</li>  </router-link>
                 <router-link to="/systems"> <li>系统设置</li>  </router-link>
                </ul>
              </div>
              <!-- 右侧内容区域 -->
              <div class="content right">
                <div class="main-content">
                  <router-view></router-view>
                  </div>
              </div>
            </div>
            <!-- 尾部区域 -->
            <footer class="footer">版权信息</footer>
              </div>`
    };

    const router = new VueRouter({
      routes: [
        {
          path: '/login',
          component: Login
        }
      ]
    });

    //实现全局守卫
    router.beforeEach((to, from, next) => {
      //to:去哪个页面，from来自哪个页面，next继续执行.
      if (window.isLogin) {
        //用户已经登录
        if (to.path === '/login') {
          // 用户已经登录了，但是又访问登录页面，这里直接跳转到用户列表页面
          next('/');
        } else {
          //用户已经登录，并且访问其它页面，则运行访问
          next();
        }
      } else {
        //用户没有登录,并且访问的就是登录页，则运行访问登录页
        if (to.path === '/login') {
          next();
        } else {
          //用户没有登录，访问其它页面，则跳转到登录页面。
          next('/login?redirect=' + to.fullPath);
        }
      }
    });

    const vm = new Vue({
      el: '#app',
      data() {
        return {};
      },
      methods: {},
      components: {
        App
      },
      router
    });
  </script>
</html>
```

## 9、Hash模式与History模式

### Hash模式与History模式区别

- 前端路由中，不管是什么实现模式，都是客户端的一种实现方式，也就是当路径发生变化的时候，是不会向服务器发送请求的。


- 如果需要向服务器发送请求，需要用到`ajax`方式。


- 两种模式的区别


- 首先是表现形式的区别


- Hash`模式


```
https://www.baidu.com/#/showlist?id=22256
```

`hash`模式中路径带有`#`, `#`后面的内容作为路由地址。可以通过问号携带参数。

当然这种模式相对来说比较丑，路径中带有与数据无关的符号，例如`#`与`?`

- `History`模式

```
https://www.baidu.com/showlist/22256
```

- `History`模式是一个正常的路径的模式，如果要想实现这种模式，还需要服务端的相应支持。
- 下面再来看一下两者原理上的区别。
- Hash`模式是基于锚点，以及`onhashchange`事件。
- 通过锚点的值作为路由地址，当地址发生变化后触发`onhashchange`事件。
- History`模式是基于`HTML5`中的`History API`
- 也就是如下两个方法
- `history.pushState( )`  `IE10`以后才支持
- history.replaceState( )`
- 更改方式：添加下方属性即可：

```
 // mode: "history", 需要运行在服务器端
```