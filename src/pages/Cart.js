import React, { Component, Fragment } from 'react';
import { Icon, NavBar, SwipeAction, Checkbox } from "antd-mobile";
// 1 准备接受store的数据
import { connect } from "react-redux";
class Cart extends Component {
  render() {
    return (
      <div className="cart">
        {/* 导航栏 开始 */}
        <NavBar
          icon={<Icon type="left" />}
          mode="dark"
          onLeftClick={() => this.props.history.go(-1)}
        >购物车</NavBar>
        {/* 导航栏 结束 */}
        {/* 购物车内容 开始 */}
        <div className="cart_content">
          {this.props.carts.map(v =>
            <div key={v.id} className="cart_item">
              <SwipeAction
                style={{ backgroundColor: 'gray' }}
                autoClose
                right={[
                  {
                    text: 'Cancel',
                    onPress: () => console.log('cancel'),
                    style: { backgroundColor: '#ddd', color: 'white' },
                  },
                  {
                    text: 'Delete',
                    onPress: () => console.log('delete'),
                    style: { backgroundColor: '#F4333C', color: 'white' },
                  },
                ]}
                onOpen={() => console.log('global open')}
                onClose={() => console.log('global close')}
              >
                <div className="cart_item_inner">
                  {/* 1 复选框 */}
                  <div className="chk_wrap">
                    <CheckboxItem />
                  </div>
                  {/* 2 图片 */}
                  <div className="goods_img_wrap">
                    <img src={v.img_url} alt="" />
                  </div>
                  {/* 3 商品名称+价格 */}
                  <div className="goods_info_wrap">
                    <div className="goods_name">{v.title}</div>
                    <div className="goods_price">￥{v.price}</div>
                  </div>
                  {/* 4 数量编辑工具 */}
                  <div className="goods_num_wrap">
                    <div className="nums_operation">-</div>
                    <div className="goods_num">{v.num}</div>
                    <div className="nums_operation">+</div>
                  </div>
                </div>
              </SwipeAction>
            </div>
          )}
        </div>
        {/* 购物车内容 结束*/}

        <div className="footer_tool">

          <div className="all_chk_wrap">
            <CheckboxItem onChange={this.props.itemAllCheck} checked={this.props.allChecked}>全选</CheckboxItem>
          </div>
          <div className="tota_price_wrap">
            合计 <span>￥{999}</span>
          </div>
          <div className="pay_wrap">
            去结算({10})
</div>

        </div>
        <style jsx>{`.cart_content {
  .cart_item {
    .cart_item_inner {
      padding: 10px 3px;
      border-bottom: 1px solid #ccc;
      display: flex;
      .chk_wrap {
        flex: 1;
      }
      .goods_img_wrap {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 80%;
        }
      }
      .goods_info_wrap {
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .goods_name {
        }
        .goods_price {
          color: red;
        }
      }
      .goods_num_wrap {
        flex: 3;
        display: flex;
        align-items: flex-end;
        > div {
          display: flex;
          .nums_operation {
            color: #666;
            font-size: 28px;
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .goods_num {
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 22px;
          }
        }
      }
    }
  }
}
.footer_tool {
  position: fixed;
  width: 100%;
  height: 45px;
  bottom: 50px;
  left: 0;
  background-color: #fff;
  border-top: 1px solid #ccc;
  display: flex;
    .all_chk_wrap {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      checkboxitem {
      }
    }
    .tota_price_wrap {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: orangered;
      }
    }
    .pay_wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      background-color: orangered;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
    }
}
`}</style>
      </div>
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