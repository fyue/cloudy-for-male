import React from 'react';
import classnames from 'classnames';
import css from './index.less';
import Products from './Products';



// small one
import s1 from './images/bod/1s.png';
import s2 from './images/bod/2s.png';
import s3 from './images/bod/3s.png';
import s4 from './images/bod/4s.jpg';
import s5 from './images/bod/5s.png';
import s6 from './images/bod/6s.png';
import s7 from './images/bod/7s.png';
import s8 from './images/bod/8s.png';
import s9 from './images/bod/9s.jpg';
import s10 from './images/bod/10s.png';
import s11 from './images/bod/11s.png';
import s12 from './images/bod/12s.png';

// big one
import b1 from './images/bod/1b.png';
import b2 from './images/bod/2b.png';
import b3 from './images/bod/3b.png';
import b4 from './images/bod/4b.png';
import b5 from './images/bod/5b.png';
import b6 from './images/bod/6b.png';
import b7 from './images/bod/7b.jpg';
import b8 from './images/bod/8b.png';
import b9 from './images/bod/9b.png';
import b10 from './images/bod/10b.png';
import b11 from './images/bod/11b.png';
import b12 from './images/bod/12b.png';

const playDatas = [
  {
    id: '557489349781',
    pic: b1,
    title: '爱华仕',
    description: '铝框拉杆箱',
    special1: '一体化铝框',
    special2: '3色可选',
    link: 'https://detail.tmall.com/item.htm?id=557489349781',
    price: '1111',
  },
  {
    id: '555314905202',
    pic: b2,
    title: '爱华仕',
    description: '无极系列',
    special1: '无极科技',
    special2: 'PP环保材质',
    link: 'https://detail.tmall.com/item.htm?id=555314905202',
    price: '1111',
  },
  {
    id: '551164061745',
    pic: b3,
    title: '爱华仕',
    description: '冲上云霄2系列',
    special1: '铝镁合金',
    special2: '拒水铝框',
    link: 'https://detail.tmall.com/item.htm?id=551164061745',
    price: '1111',
  },
  {
    id: '545410345885',
    pic: b4,
    title: '爱华仕',
    description: '航天11号系列',
    special1: '高精合金',
    special2: '一体化铝框',
    link: 'https://detail.tmall.com/item.htm?id=545410345885',
    price: '1111',
  },
  {
    id: '557489349781',
    pic: b5,
    title: '爱华仕',
    description: '商场同款铝框拉杆箱',
    special1: '球面铝框',
    special2: '密封拒水',
    link: 'https://detail.tmall.com/item.htm?id=557489349781',
    price: '1111',
  },
  {
    id: '44546724274',
    pic: b6,
    title: '爱华仕',
    description: '彩色瀑布系列1',
    special1: '炫彩5色可选',
    special2: '可扩展大容量',
    link: 'https://detail.tmall.com/item.htm?id=44546724274',
    price: '1111',
  },
  {
    id: '523225143978',
    pic: b7,
    title: '爱华仕',
    description: '铝框拉杆箱',
    special1: '一体化铝框',
    special2: '4色可选',
    link: 'https://detail.tmall.com/item.htm?id=523225143978',
    price: '1111',
  },
  {
    id: '556441720843',
    pic: b8,
    title: '爱华仕',
    description: '防撞铝框箱',
    special1: '金属防撞角',
    special2: '一体化铝框',
    link: 'https://detail.tmall.com/item.htm?sid=556441720843',
    price: '1111',
  },
  {
    id: '536916770723',
    pic: b9,
    title: '爱华仕',
    description: '轻商务双肩包',
    special1: '金属手提',
    special2: '三层分区',
    link: 'https://detail.tmall.com/item.htm?id=536916770723',
    price: '1111',
  },
  {
    id: '555258221706',
    pic: b10,
    title: '爱华仕',
    description: '辑盗者系列双肩包',
    special1: '三层防盗设计',
    special2: '防盗设计',
    link: 'https://detail.tmall.com/item.htm?id=555258221706',
    price: '1111',
  },
  {
    id: '557899207466',
    pic: b11,
    title: '爱华仕',
    description: '佛罗伦萨系列双肩包',
    special1: '商场同款',
    special2: '真皮拼贴',
    link: 'https://detail.tmall.com/item.htm?id=557899207466',
    price: '1111',
  },
  {
    id: '557841746119',
    pic: b12,
    title: '爱华仕',
    description: '头等舱系列双肩包',
    special1: '皮质拼贴',
    special2: '可背可提两用包',
    link: 'https://detail.tmall.com/item.htm?id=557841746119',
    price: '1111',
  },

];

const backpacks = [
  [
    [s1, '黑色'], [s2, '黑色'], [s3, '香槟金'], [s4, '银灰色'], [s5, '银色'], [s6, '银色']
  ],
  [
    [s7, '银色'], [s8, '银色'], [s9, '黑色'], [s10, '黑色'], [s11, '黑色'], [s12, '黑色']
  ]
];

export default class Top extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeId: 0,
    };
    this.renderHeadWrapper = this.renderHeadWrapper.bind(this);
    this.renderBod = this.renderBod.bind(this);
    this.showTopProduct = this.showTopProduct.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    this.play();
  }

  componentWillUnmount() {
    clearInterval(this.autoPlay);
  }


  play() {
    this.autoPlay = setInterval(() => {
      this.setState((preState) => {
        if (preState.activeId < 11) {
          preState.activeId += 1;
        } else {
          preState.activeId = 0;
        }
      });
    }, 5000);
  }

  showTopProduct(id) {
    this.setState({
      activeId: id,
    });
  }

  mapIdxToPosRem(id) {
    let left = id * 1040;
    return -(left / 108) + 'rem';
  }

  goToDetails(idx, mainPlayCatas, ev) {
    ev.preventDefault();
    this.props.goDiffCataSecond(8); // the number 8 is actually 7;
    this.props.goDetail(idx, mainPlayCatas);
  }

  /*  {
   id: '',
   pic: b1,
   title: '爱华仕',
   description: '铝框拉杆箱',
   special1: '一体化铝框',
   special2: '3色可选',
   link: 'https://detail.tmall.com/item.htm?id=557489349781',
   price: '1111',
   }, */

  renderHeadWrapper() {
    let position = this.mapIdxToPosRem(this.state.activeId);
    let mainData = this.props.mainData;
    return (
      <div className={css.head}>
        <div className={css.flexRight}>
          <div className={css.longPicWrapper} style={{left: position}} >
            {playDatas.map((item, idx) => (
              <div className={css.eachPlayItem} key={idx}>
                <img className={css.leftImg} src={item.pic} />
                <div className={css.rightDetails}>
                  <div className={css.top}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                  <ul className={css.center}>
                    <li>{item.special1}</li>
                    <li>{item.special2}</li>
                  </ul>
                  <div className={css.bottom}>
                    <p><span>￥</span><span>{mainData ? mainData['item_' + item.id].subPrice : '加载中...'}</span></p>
                    <a href="###" onClick={this.goToDetails.bind(this, idx, 7)}><span>点击查看详情</span></a>{/*number 7 is the mainPlayCatas index*/}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  renderBod() {
    return (
      <div className={css.bod}>
        {backpacks.map((items, index) => {
          return (
            <div className={css.eachRow} key={index}>
              {items.map((item, idx) => {
                return (<Products key={idx}
                                  product={item}
                                  active={this.state.activeId === index * 6 + idx}
                                  showTopProduct={this.showTopProduct.bind(this, index * 6 + idx)} />);
              })}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const top = classnames([css.top], [css[`bg${this.props.index}`]]);
    return (
      <div className={top}>
          {this.renderHeadWrapper()}
          {this.renderBod()}
      </div>
    );
  }
}


