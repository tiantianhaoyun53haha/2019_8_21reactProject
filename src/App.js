import React, { Component, Fragment } from 'react';
import {HashRouter as Router,Link,Route}from "react-router-dom";
import MWLayout from "./components/MWLayout";
import "./styles/iconfont.css"

// 定义组件
import  Home from "./pages/Home" ;
import  Cart from "./pages/Cart";
import  Mine from "./pages/Mine";
import GoodsDetail from "./pages/GoodsDetail";

import MWLoadding from "./components/MWLoadding";
import { connect  } from "react-redux";
 class App extends Component { 
 render() { 
 return ( 
 <Fragment>
  
     <div>
         <Router>
             {/* 注意Link中的L是大写的 */}
          
            {/* 建立路由和组件的匹配 */}
            {/* 注意component的c是小写 */}
             <Route path="/" render={(props)=><MWLayout {...props}> <Home  {...props}/></MWLayout> } exact />
             <Route path="/Cart" render={(props)=><MWLayout  {...props}> <Cart  {...props}/></MWLayout> }/>
             <Route path="/Mine" render={(props)=><MWLayout  {...props}><Mine/> </MWLayout>} />
             <Route path="/GoodsDetail/:id" component={GoodsDetail}  />
         </Router>
     </div>

 </Fragment> 
 );  
} 
 } 

 const mapStateToProps=(state)=>{
    console.log(state.commonReducer.showLoadding);
  
    return {
      showLoadding:state.commonReducer.showLoadding
    }
  }
  
  export default connect(mapStateToProps,null)(App); 
