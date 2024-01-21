import React from "react";
import CoverImage from "./CoverImage";
import ComponentToImg from "./ComponentToImg";
import Select from 'react-select';
import RandomTheme from './RandomTheme';
import { ImgProvider } from '../utils/ImgContext'
import Header from "./Header";
import { Tab } from '@headlessui/react'

import theme1 from '../assets/images/theme1.webp'
import theme2 from '../assets/images/theme2.webp'
// import theme3 from '../assets/images/theme3.webp'
import theme4 from '../assets/images/theme4.webp'
import theme5 from '../assets/images/theme5.webp'
import theme6 from '../assets/images/theme6.webp'
// import theme7 from '../assets/images/theme7.webp'

import metoolsPng from '../assets/images/metools.png'
import easyCoverJpg from '../assets/images/easycover.jpeg'

// const yimoLogo='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAWuSURBVEhLnVVbbxVVFJ77zLn3LrcWS8ultTU1TXmCxpKQYBoTvPwBExIUH1R+ABE1ISG+4IORB6LxgRcaHzSgmJAoSDGhQkHbSm/U09Nzoz236dxn9vjtOYfaQuHB7+TM3rNmr2/WXt/aa1ji+wzDsPg/BT94VLuyGHyOZdngEjx/JrCW+jwBGPEyB4PvcxwHQ1kzM7l8fTy6o6kRpM/n3YQUhK5PTJdkciu6YcRiEY4XimXVIQx+9RFlR1NDWBaxUDdtRVZ4Fgx4MbP2pidJg+B8w3EXM3ndsjC3bRtXRQkzLO/DTfBlgdnR1IQdZHOFaEiOR8O2ZcfjMYHuiWIDKbKGO8L4meVCqaIRxGs4uq5zPBdSlEg0woKY5xiOkoPU9xieZVzXMUxzW0tzUyIWhIu8PybFRLfsVcO0bSe7suz7rCLLqcVUNFYnCCLje6tqKZPNZtKZcDjU1d3d2dEBbzjajmtYNkNIx85tYUni2McBQxbLsVVd1wx7anouk15+lC+kl3IXL36bXUpe+/mnz06f+uD9E2ph5fDQYHpxYer+PYmHN4dQcAWRz3Kp3Ar0AFuNFClfLq0atl3Wyo7nyzKiVCRR9Gznw/eOXfz6q559u/fv3+957vnzX/4xdrutrQ1E1B9h+YRjXIHzHcsuqTo14k8IyRYKqg7BGdO0ROw2gKDI7xw7sb21zTCMfD5fV1c3MzPb3t7e19c3MDAAR4iNSOHO8wLP8SzLFUtlWgoe41mu7RFGkERIS1xeFCUeqwRelvhEfezI8OuiIo3fv3vjxi+RiJJOZw8eeBVEFKBcB8houb7pOPypj09BH9PB2/hSqWJZNs0RBY+dwdjT0wspjr97/N743V27Og8fPrKqWjdvXi8Wiy9s2QJe13W9AFR6jg0rCjLCWrY/NTk9Pv5XsVgCmRAAb66UNV2zCiuF1u2tVy5fSSZTloPCyKezGZ6T0ktZFAO4CGoQZxei8YSwxLRM5JQtVsqzs3MP5x/mcjksAh2oM5nM5OTUgwfTvCx3dL/E8iEc/Ru/Xrs1+ls4EUkuLhimpmpmUaUFo+n27OzC0lKuWKiUKxXWI97138eSqTxOZJAZr6GxASrlcnlDNxOJRLm0cuf2ranJe+0v7m5u2ZrJpTW1pGka1hw78ZFLfEkQiUcMXVdCoWg02tIQRpdy/0k9yj4qSopIj4fjKIpi2XZFVT8/e3ZoaCify8/PT89M/93cvLW9Y09PX29jY+PU5ANFkffu7QKR4zpqRYWwENcyzZ59HZRU1R1N06kuLENcBwoxLBeLxS5f/mF0dHTf7j1H3zj649WrFy58c+S14XhD/fDwMIpJEAVIhK0hTJQT0ui5Pgq5IR7ZpEshqS4WEhIIyszNzc3Pz09MTFy6dAmW3t7ekydPdnV1oTCwJvDgghGMBK9JRJTNSAmxCZUrKEUPnTWVSqFLfHHu3IGDB998+y00ngB0QG0CEDZo9mAjCi88SVq9BRkmoIOMtuehSuZnZz89/cng4GAoFJIkqbW19dChQz5PvwI1+PR0YsQONom0CtjHxsZGRkZQMyjylubmiBIKh8PIwGSAM2fO7NzVDprqegwceIMO9VSkwa82DzKAYEVBRAg16zpgIaweFmJOiEDTsJEUk9rj4Caw4WkwgJHF0f4PVS8c92BCc4VGKAlC9emGSPFpsjzXpQmltOiNoCsVS2iCsiwJskRpaHAAIqOu2AhklwQ+FMLHioYJbCDF3GVIRcfXwalqBdLiSvH770ZkSXylvx+Hor9/AEag6oJl+AhGI+H1xg2kAG6RBN1yKhUVZUWL0SULczN/jt+BRLF4vOflvu7uLvR6NAkUpiiiQ4pV3WsUT5OuAXbDdVGCKBvH8Uxdc20rmUziEHd2doICZx+yrOdawzNJAZpaXAMvHGeMODAgopW4Gdcankf6P8Ew/wK+fLpsBsVLrQAAAABJRU5ErkJggg=='
const defaultIcon = { 'label': 'vuejs', 'value': 'vuejs' }

const savedData = localStorage.getItem('coverData') ? JSON.parse(localStorage.getItem('coverData')) : null;
const defaultSettings = Object.assign({
  title: "一个长长的文章标题",
  bgColor: "#dcd6f7",
  pattern: "",
  download: "PNG",
  author: '易墨',
  icon: defaultIcon,
  devIconOptions: [defaultIcon],
  font: 'font-Anek',
  theme: 'basic',
  customIcon: '',//yimoLogo
  platform: 'juejin',
  scale: 20,
}, savedData)

const devIconsUrl = "/devicon.json"
// const devIconOptions = [
// 	{ value: 'None', label: 'None' },
// 	{ value: 'javascript', label: 'Javascript' },
// 	{ value: 'python', label: 'Python' },
// ]

class Editor extends React.Component {


  state = defaultSettings;
  componentDidMount() {
    console.log("Mount")
    fetch(devIconsUrl).then(r => r.json()).then(data => {
      data.unshift({ name: 'custom' })
      data.unshift({ name: 'yimo' })
      this.setState({ devIconOptions: data.map(item => ({ 'value': item.name, 'label': item.name })) })
    })
  }
  handleReset = () => {
    localStorage.removeItem('coverData')
    const { devIconOptions, msg, ...defaultSets } = defaultSettings
    this.setState({ msg: '重置成功!' })
    this.setState(defaultSets);
  };
  saveSetting = () => {
    const { devIconOptions, msg, ...coverData } = this.state
    console.log(coverData)
    if (coverData.customIcon) {
      //转为base64
      this.blobToBase64(coverData.customIcon).then(res => {
        coverData.customIcon = 'data:image/png;base64,' + res
        localStorage.setItem('coverData', JSON.stringify(coverData));
      })
    } else {
      localStorage.setItem('coverData', JSON.stringify(coverData));
    }
    this.setState({ msg: '保存成功!' })
  }
  // 将 blob 对象转换为 base64 字符串
  blobToBase64 = (blobUrl) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', blobUrl, true);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        if (xhr.status === 200) {
          const reader = new FileReader();
          reader.readAsDataURL(xhr.response);
          reader.onload = () => resolve(reader.result.split(',')[1]);
          reader.onerror = error => reject(error);
        } else {
          reject(new Error(`Failed to load image file: ${xhr.status}`));
        }
      };
      xhr.onerror = error => reject(error);
      xhr.send();
    });
  }
  getRandomTheme = (theme, Pattern) => {
    this.setState({ bgColor: theme.bgColor, borderColor: theme.bdColor, pattern: Pattern });
  }

  formatOptionLabel = ({ value, label }) => (
    <div className="flex">
      <span className="mr-2">{label}</span>
      <div className="ml-auto mr-2">
        <i className={`devicon-${value}-plain dev-icon text-2xl`}></i>
      </div>
    </div>
  );
  changeIcon = (selectedOption) => {
    // console.log(selectedOption, window.oldCustomIcon, this.state.customIcon)
    let customIcon = ''
    if (selectedOption.value !== 'custom' && this.state.customIcon) {
      window.oldCustomIcon = this.state.customIcon
      customIcon = ''
    }
    else if (selectedOption.value === 'custom' && window.oldCustomIcon) {
      customIcon = window.oldCustomIcon
    }
    this.setState({ icon: selectedOption, customIcon })
  }

  scaleChange = (event) => {
    this.setState({ scale: event.target.value })
  };


  render() {
    return (
      <div>
        <Header />

        <ImgProvider>
          <div className="flex md:flex-row flex-col bg-gray-50 ">

            <div className="bg-white flex flex-col h-100 md:w-4/12">

              <Tab.Group>
                <div className="flex md:flex-row flex-col">

                  <Tab.List className=" bg-white md:p-0 p-2 flex flex-row md:flex-col">
                    <Tab className="flex  items-center font-semibold  ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-gray- bg-white rounded-xl w-12 m-2 h-12 p-2 rounded border" width="24" height="24" viewBox="0 0 24 24" ><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path></svg>
                    </Tab>

                    <Tab className="flex items-center   font-semibold    text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" text-gray-800 bg-white rounded-xl w-12 h-12 p-2 m-2 rounded border" width="24" height="24" viewBox="0 0 24 24" ><path d="M11.024 11.536 10 10l-2 3h9l-3.5-5z"></path><circle cx="9.503" cy="7.497" r="1.503"></circle><path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z"></path></svg>
                    </Tab>
                    <Tab className="flex items-center   font-semibold    text-lg">
                      <svg fill="currentColor" t="1705816493676" className="text-gray-800 bg-white rounded-xl w-12 h-12 p-2 m-2 rounded border" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4257" width="80" height="80"><path d="M826.863642 381.784286c-71.958892 0-130.501216 58.542324-130.501216 130.500193s58.542324 130.500193 130.501216 130.500193c71.957869 0 130.500193-58.542324 130.500193-130.500193S898.822534 381.784286 826.863642 381.784286zM826.863642 591.562057c-43.714617 0-79.278601-35.563984-79.278601-79.277578s35.563984-79.277578 79.278601-79.277578c43.713594 0 79.277578 35.563984 79.277578 79.277578S870.577237 591.562057 826.863642 591.562057zM504.12617 381.784286c-71.957869 0-130.500193 58.542324-130.500193 130.500193s58.541301 130.500193 130.500193 130.500193 130.500193-58.542324 130.500193-130.500193S576.084039 381.784286 504.12617 381.784286zM504.12617 591.562057c-43.713594 0-79.276554-35.563984-79.276554-79.277578s35.56296-79.277578 79.276554-79.277578 79.277578 35.563984 79.277578 79.277578S547.838741 591.562057 504.12617 591.562057zM197.53033 381.784286c-71.957869 0-130.500193 58.542324-130.500193 130.500193s58.542324 130.500193 130.500193 130.500193 130.500193-58.542324 130.500193-130.500193S269.489222 381.784286 197.53033 381.784286zM197.53033 591.562057c-43.713594 0-79.277578-35.563984-79.277578-79.277578s35.563984-79.277578 79.277578-79.277578 79.277578 35.563984 79.277578 79.277578S241.243925 591.562057 197.53033 591.562057z" p-id="4258"></path></svg>
                    </Tab>
                  </Tab.List>


                  <Tab.Panels className="bg-white border-l w-full p-4 ">
                    <Tab.Panel>

                      <div className="m-2 flex flex-col">
                        <span className="font-medium pb-1">文章标题</span>
                        <textarea
                          type="text"
                          value={this.state.title}
                          placeholder="请输入文章标题"
                          className="focus:outline-none border text-gray-700 text-xl rounded p-2 h-24"
                          onChange={(e) => this.setState({ title: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col m-2 ">
                        <span className="font-medium pb-1">作者</span>
                        <input
                          type="text"
                          value={this.state.author}
                          placeholder="Author"
                          className="focus:outline-none border text-gray-700 text-xl rounded bg-white p-2"
                          onChange={(e) => this.setState({ author: e.target.value })}
                        ></input>
                      </div>

                      <div className="flex flex-col m-2 ">
                        <span className="font-medium pb-1">图标</span>
                        <Select value={this.state.icon}
                          onChange={(selectedOption) => this.changeIcon(selectedOption)}
                          options={this.state.devIconOptions}
                          formatOptionLabel={this.formatOptionLabel}
                          className="outline-none focus:outline-none text-xl text-gray-700"
                        />
                      </div>

                      {this.state.icon.label === 'custom' ?
                        <div className="flex items-center justify-center m-2">{this.state.customIcon ?
                          <div className="w-20 h-20 mr-3 group relative">
                            <button
                              onClick={() => this.setState({ 'customIcon': '' })}
                              className="ml-auto mr-1 cursor-pointer">
                              <svg className="group-hover:inline-block absolute top-4 right-2  bg-gray-500 hidden w-8 h-8 p-2 text-white rounded-full z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                            <img src={this.state.customIcon} alt="img" className="rounded-full bg-white p-1 border-white" />
                          </div> : <div></div>}
                          <input type="file"
                            className="focus:outline-none text-lg cursor-pointer bg-white rounded border"
                            onChange={(e) => this.setState({ 'customIcon': URL.createObjectURL(e.target.files[0]) })}
                          />
                        </div>
                        :
                        <div></div>
                      }


                      <div className="flex items-center">

                        <div className="flex flex-col m-2 w-1/2">
                          <span className="font-medium pb-1">字体</span>

                          <select
                            value={this.state.font}
                            onChange={(e) => this.setState({ font: e.target.value })}
                            className="focus:outline-none text-gray-700 text-xl p-2 rounded border">
                            <option>font-serif</option>
                            <option>font-sans</option>
                            <option>font-mono</option>
                            <option>font-Inter</option>
                            <option>font-Poppins</option>
                            <option>font-Anek</option>
                          </select>
                        </div>
                        <div className="flex flex-col m-2 w-1/2">
                          <span className="font-medium pb-1">颜色</span>
                          <div className="border rounded flex items-center p-2">

                            <span className="text-xl text-gray-700  mx-2">{this.state.bgColor}</span>
                            <input type="color" value={this.state.bgColor}
                              onChange={(e) => this.setState({ bgColor: e.target.value })}
                              className="h-8 w-8 ml-auto mr-1 rounded"
                            />
                          </div>
                        </div>

                      </div>


                      <div className="flex items-center">
                        <div className="flex flex-col m-2 w-1/2">
                          <span className="font-medium pb-1">背景图案</span>
                          <select
                            onChange={(e) => this.setState({ pattern: e.target.value })}
                            className="focus:outline-none border text-xl p-2 rounded"
                            value={this.state.pattern}>
                            <option value="none">无</option>
                            <option value="graph-paper">方格纸</option>
                            <option value="jigsaw">拼图</option>
                            <option value="hideout">藏身处</option>
                            <option value="dots">点</option>
                            <option value="falling-triangles">下落的三角形</option>
                            <option value="circuit-board">电路板</option>
                            <option value="temple">寺庙</option>
                            <option value="anchors">锚点</option>
                            <option value="brickwall">砖墙</option>
                            <option value="overlapping-circles">重叠的圆圈</option>
                            <option value="wiggle">摇摆</option>
                            <option value="tic-tac-toe">井字棋</option>
                            <option value="leaf">叶子</option>
                            <option value="bubbles">气泡</option>
                            <option value="squares">正方形</option>
                            <option value="explorer">探险家</option>
                            <option value="jupiter">木星</option>
                            <option value="sun">太阳</option>
                          </select>
                        </div>

                        <div className="flex flex-col m-2 w-full">
                          <span className="font-medium pb-1">平台</span>

                          <select
                            onChange={(e) => this.setState({ platform: e.target.value })}
                            value={this.state.platform}
                            className="focus:outline-none text-gray-700 text-xl p-2 rounded border">
                            <option value="juejin">掘金</option>
                            <option value="cnblogs">博客园</option>
                            <option>dev</option>
                            <option>hashnode</option>
                          </select>
                        </div>

                      </div>

                      <div className="flex items-center">
                        <div className="flex flex-col m-2 w-1/2">
                          <span className="font-medium pb-1">主题</span>
                          <select
                            onChange={(e) => this.setState({ theme: e.target.value })}
                            className="focus:outline-none border text-xl p-2 rounded"
                            value={this.state.theme}>
                            <option value="basic">常规</option>
                            <option value="modern">现代</option>
                            <option value="outline">平铺</option>
                            {/* <option>stylish</option> */}
                            <option value="preview">桌面预览</option>
                            <option value="mobile">移动预览</option>
                            {/* <option>background</option> */}
                          </select>
                        </div>

                        <div className="flex flex-col m-2 w-1/2">
                          <span className="font-medium pb-1">保存倍数:{(this.state.scale * 0.1).toFixed(1)}</span>
                          <div className="border text-xl p-2 rounded ">
                            <input type="range" min={5} max={100} value={this.state.scale} onChange={this.scaleChange} />
                          </div>
                          {/* <select
                            onChange={(e) => this.setState({ platform: e.target.value })}
                            value={this.state.platform}
                            className="focus:outline-none text-gray-700 text-xl p-2 rounded border">
                            <option>juejin</option>
                            <option>cnblogs</option>
                            <option>dev</option>
                            <option>hashnode</option>
                          </select> */}
                        </div>

                      </div>
                      <div className="flex">

                        <button
                          title="将会缓存到本地存储"
                          className="flex items-center bg-gray-700 text-white rounded-lg mt-6 text-lg font-semibold p-1 px-4 mx-auto border"
                          onClick={this.saveSetting}>
                          <span>保 存</span>
                        </button>
                        <button
                          title="将会清空本地存储信息"
                          className="flex items-center bg-gray-600 text-white rounded-lg mt-6 text-lg font-semibold p-1 px-4 mx-auto border"
                          onClick={this.handleReset}>
                          <span>重 置</span>
                        </button>
                      </div>
                      <div className="flex">
                        <span>{this.state.msg}</span>
                      </div>
                    </Tab.Panel>


                    <Tab.Panel className="h-99 w-full flex flex-col justify-center">

                      <div className="flex items-center border rounded-xl border-gray-50 px-4">
                        <h2 className="text-lg pl-2 font-inter font-semibold">主题</h2>
                        <div className="ml-auto mr-1 p-2">
                          <RandomTheme onThemeChange={this.getRandomTheme} />

                        </div>
                      </div>

                      <div className="p-4  flex flex-wrap  overflow-y-scroll ">

                        {/* <img src={theme7} alt="background theme"
                          onClick={(e) => this.setState({ theme: "background" })}
                          className=" cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-105 duration-300 m-2"
                        /> */}
                        <img src={theme1} alt="basic theme"
                          onClick={(e) => this.setState({ theme: "basic" })}
                          className=" cursor-pointer border-gray-100 hover:scale-105 duration-300 hover:border-gray-200 border m-2 "
                        />
                        <img src={theme2} alt="basic theme"
                          onClick={(e) => this.setState({ theme: "modern" })}
                          className="cursor-pointer border-gray-100 hover:scale-105 hover:border-gray-200 duration-300 border m-2 "
                        />
                        {/* <img src={theme3} alt="basic theme"
                          onClick={(e) => this.setState({ theme: "stylish" })}
                          className=" cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-105 duration-300 m-2"
                        /> */}

                        <img src={theme5} alt="basic theme"
                          onClick={(e) => this.setState({ theme: "outline" })}
                          className=" cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-105 duration-300 m-2"
                        />

                        <img src={theme4} alt="basic theme"
                          onClick={(e) => this.setState({ theme: "preview" })}
                          className=" cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-105 duration-300 m-2"
                        />
                        <img src={theme6} alt="basic theme"
                          onClick={(e) => this.setState({ theme: "mobile" })}
                          className=" cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-105 duration-300 m-2"
                        />
                      </div>
                    </Tab.Panel>
                    <Tab.Panel className="h-99 w-full flex flex-col justify-start">
                      <div className="flex items-center border rounded-xl border-gray-50 px-4">
                        <h2 className="text-lg font-inter font-semibold  p-2">其他工具推荐</h2>
                      </div>
                      <div className="p-2  flex flex-wrap ">
                        <a href="https://jiandan.link/EasyCover/index.html#/" className="w-20 h-20 mr-3 text-center  flex flex-wrap justify-center" target="_blank" rel="noopener noreferrer" title="简单封面">
                          <img src={easyCoverJpg} className="rounded-full bg-white p-1 border-white" alt="简单封面" />
                          <span>简单封面</span>
                        </a>
                        <a href="https://github.com/yimogit/metools-plugin" className="w-20 h-20 mr-3 text-center  flex flex-wrap justify-center" target="_blank" rel="noopener noreferrer" title="MeTools">
                          <img src={metoolsPng} className="rounded-full bg-white p-1 border-white" alt="MeTools" />
                          <span>MeTools</span>
                        </a>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>

                </div>
              </Tab.Group>


              {/* <div className="mx-4 my-1">
						<h6>Download As</h6>
						<select onChange={(e) => this.setState({ download: e.target.value })}
							className="form-control input"
							value={this.state.download}>
							<option>PNG</option>
							<option>JPEG</option>
						</select>
					</div> */}



            </div>

            <div className=" flex m-6 flex-col items-center justify-center ">

              <ComponentToImg downloadAs={this.state.download} scale={this.state.scale}>
                <CoverImage {...this.state} />
              </ComponentToImg>
            </div>

          </div>
        </ImgProvider>
      </div>

    );
  }
}

export default Editor;
