import React, { Component, Fragment } from 'react';
import Axios from "axios";
import { Carousel } from 'antd-mobile';
class Home extends Component {
    state = {
        //  轮播图数据
        sliderlist: [],
        imgHeight: 176,
    }
    //  获取轮播图数据
    getSliderList() {
	    Axios.get("http://react.zbztb.cn/site/goods/gettopdata/goods")
	      .then(res => {
	        this.setState({
	          sliderlist: res.data.message.sliderlist,
	          toplist: res.data.message.toplist
	        })
	      })
	  }
	
    //  发送请求
    componentDidMount() {
        // 组件加载完毕，就会触发
        // 获取轮播图数据
        this.getSliderList();
    }
    render() {
       
      {this.state.sliderlist.length&& <h1></h1>}
        return (
            <div className="mw_home">
                <div className="mw_swiper">
                    <Carousel
                        autoplay
                        infinite
                    >
                        {this.state.sliderlist.map(val => (
                            <a
                                key={val.id}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={val.img_url}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>
            </div>
        
        
        
        
        );
    }
}
export default Home;