import React, { Component, Fragment } from 'react';
import { Icon, NavBar, SwipeAction,Checkbox } from "antd-mobile";
// 1 准备接受store的数据
import { connect } from "react-redux";
 class Cart extends Component { 
 render() { 
 return ( 

 );  
} 
 } 
 
// 3 定义 store的数据 和 组件的props的映射对象
// 这个对象类似 vue中 computed 
const mapStateToProps = (state) => {

    return {
      carts: state.cartReducer.carts
    }
  }
  
  
  // 2 开始连接
  export default connect(mapStateToProps, null)(Cart); 