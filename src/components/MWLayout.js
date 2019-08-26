import { TabBar } from 'antd-mobile';
import React, { Component, Fragment } from 'react';
import {connect  } from "react-redux";
class MWLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',

      fullScreen: true,
    };
  }



  render() {
    return (
      // 因为style表示的时候，需要用{}包裹属性
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<span className="iconfont icon-home" />}
            
            selectedIcon={<span style={{ color: "#108ee9" }} className="iconfont icon-home" />}
           
            selected={this.props.match.url==="/"}
            onPress={() => {
              this.props.history.push("/")
            }}
            data-seed="logId"
          >
              {this.props.match.url === "/"&&this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-gouwuche" />}
            selectedIcon={<span style={{ color: "#108ee9" }} className="iconfont icon-gouwuche" />}
        
            title="购物车"
            key="Cart"
            badge={this.props.totalNums}
            selected={this.props.match.url==="/Cart"}
            onPress={() => {
              this.props.history.push("/Cart")
            }}
            data-seed="logId1"
          >
         
        
            {/* 加{}表示它是一个变量 */}
            {this.props.match.url === "/Cart"&&this.props.children}
          </TabBar.Item>
          <TabBar.Item
         icon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
         selectedIcon={<span style={{ color: "#108ee9" }} className="iconfont icon-weibiaoti2fuzhi12" />}
            title="我的"
            key="Mine"
  
            selected={this.props.match.url==="/Mine"}
            onPress={() => {
              this.props.history.push("/Mine")
            }}
          >
               {this.props.match.url === "/Mine"&&this.props.children}
          </TabBar.Item>

        </TabBar>
      </div>
    );
  }
}

// 映射对象 负责 组件的props和 store中的数据state的映射
const mapStateToProps=(state)=>{
  let {carts}=state.cartReducer;
  return{
    // 购买的数量
    totalNums: carts.reduce((beforeSum, v) => (v.checked ? (beforeSum + v.num) : beforeSum), 0)
  }
}


export default connect(mapStateToProps,null)(MWLayout); 