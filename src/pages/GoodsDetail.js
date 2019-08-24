import React, { Component, Fragment } from 'react';
import { getGoodsInfo } from "../request";




class GoodsDetail extends Component {
    state = {
	    // 商品详情对象
	    goodsinfo: {},
	    // 轮播图数组
	    imglist: [],
	    imgHeight: 146
	  }
	  componentDidMount() {
	    const { id } = this.props.match.params;
	    getGoodsInfo(id)
	      .then(res => {
	        console.log(res);
	        const { goodsinfo, imglist } = res;
	        this.setState({ goodsinfo, imglist });
	      })
	  }
	  render() {
	    return (
	      <Fragment>GoodsDetail</Fragment>
	    );
	  }
	}
	export default GoodsDetail; 