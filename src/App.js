import React, { Component, Fragment } from 'react';
import {HashRouter as Router,Link,Route}from "react-router-dom"

// 定义组件
const Home=()=><div>首页</div>
const Cart=()=><div>购物车</div>
const Mine=()=><div>我的</div>



 class App extends Component { 
 render() { 
 return ( 
 <Fragment>
     <div>
         <Router>
             {/* 注意Link中的L是大写的 */}
             <Link to="/">首页</Link>
             <Link to="/Cart">购物车</Link>
             <Link to="/Mine">我的</Link>
            {/* 建立路由和组件的匹配 */}
            {/* 注意component的c是小写 */}
             <Route path="/" component={Home} exact />
             <Route path="/Cart" component={Cart}/>
             <Route path="/Mine" component={Mine}  />

         </Router>
     </div>

 </Fragment> 
 );  
} 
 } 
 export default App;
