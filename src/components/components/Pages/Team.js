import React from 'react';
import jQuery from 'jquery';
import imgOne from '../../img/one.jpg';
import imgTwo from '../../img/two.jpg';
import imgThree from '../../img/three.jpg';
import imgFour from '../../img/four.jpg';
import imgFive from '../../img/five.jpg';
import imgSix from '../../img/six.jpg';
import imgSeven from '../../img/seven.jpg';

import btnNext from '../../img/left-btn.png';
import right from '../../img/right.png';
import axios from 'axios';
import { async } from 'q';



let data = [
    {name: 'Alwin', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',key: 'one',img:imgOne},
    {name: 'Rorge', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',key: 'two',img:imgTwo},
    {name: 'Brad', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',key: 'three',img:imgThree},
    {name: 'John Deo', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',key: 'four',img:imgFour},
    {name: 'Name', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',key: 'five',img:imgFive},
    {name: 'Name 6', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',key: 'six',img: imgSix},
    {name: 'Name 7', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',key: 'seven',img:imgSeven},
]
class Team extends React.Component {
    state = {
        property: {},
        content: {},
        work: false, 
        fadeIn: true,
        working: false,
        data,
        users:'',
        activeData: data[0],
        stateChangedActive: false
    } 
    componentDidMount = () => {
        var currentEle = jQuery("#parent");
        var right3Ele = jQuery("#parent-right-3");
        var right2Ele = jQuery("#parent-right-2");
        var rightEle = jQuery("#parent-right");
        var left3Ele = jQuery("#parent-left-3");
        var left2Ele = jQuery("#parent-left-2");
        var leftEle = jQuery("#parent-left");


        var eleStyle = {
            filter: 'blur(0px)',
            border: '2px solid white'
        }
        var ele1Style = {
            filter: 'blur(2px)',
            border: 'none'
        }
        var ele2Style = {
            filter: 'blur(3px)',
            border: 'none'
        }
        this.setState({ele1Style,ele2Style,eleStyle});
        this.reInit();

        let property = {};

        property.right3Property = {
            height: right3Ele.height(),
            width: right3Ele.width(),
            top: right3Ele.position().top,
            left: right3Ele.position().left
        }
        property.right2Property = {
            height: right2Ele.height(),
            width: right2Ele.width(),
            top: right2Ele.position().top,
            left: right2Ele.position().left
        }
        property.rightProperty = {
            height: rightEle.height(),
            width: rightEle.width(),
            top: rightEle.position().top,
            left: rightEle.position().left,
        }
        property.currentProperty = {
            height: currentEle.height(),
            width: currentEle.width(),
            top: currentEle.position().top,
            left: currentEle.position().left, 
        }
        property.leftProperty = {
            height: leftEle.height(),
            width: leftEle.width(),
            top: leftEle.position().top,
            left: leftEle.position().left
        } 
        property.left2Property = {
            height: left2Ele.height(),
            width: left2Ele.width(),
            top: left2Ele.position().top,
            left: left2Ele.position().left
        }
        property.left3Property = {
            height: left3Ele.height(),
            width: left3Ele.width(),
            top: left3Ele.position().top,
            left: left3Ele.position().left,
        }
        this.setState({property});
        let content = this.state.content;

        content.currentContent.css({...property.currentProperty});
        content.leftContent.css({...property.leftProperty});
        content.left2Content.css({...property.left2Property});
        content.left3Content.css({...property.left3Property});
        content.rightContent.css({...property.rightProperty});
        content.right2Content.css({...property.right2Property});
        content.right3Content.css({...property.right3Property});

    
        content.right2Content.css({...property.ele2Style});
        content.rightContent.css({...property.ele1Style});
        content.currentContent.css({...property.eleStyle});
        content.leftContent.css({...property.ele1Style});
        content.left2Content.css({...property.ele2Style});

        content.right2Content.css({...ele2Style});
        content.rightContent.css({...ele1Style});
        content.currentContent.css({...eleStyle});
        content.left2Content.css({...ele2Style});
        content.leftContent.css({...ele1Style});
    }
    reInit = () => {
        let data = this.state.content;
        data.left3Content = jQuery('#left-3');
        data.left2Content = jQuery('#left-2');
        data.leftContent = jQuery('#left');
        data.currentContent = jQuery('#current');
        data.rightContent = jQuery('#right');
        data.right2Content = jQuery('#right-2');
        data.right3Content = jQuery('#right-3');
        data.currentHead = jQuery("#p-name");
        data.currentP = jQuery("#p-content");
        
        this.setState({content: data})
    }
    onLeft = async () => {  
        await this.setState({fadeIn: false,working: true})
        this.reInit();   
        let content = this.state.content;
        let property = this.state.property;
        let {ele1Style,ele2Style,eleStyle} = this.state;

        content.left3Content.animate({...property.right3Property});
        content.left2Content.animate({...property.left3Property});
        content.leftContent.animate({...property.left2Property});
        content.currentContent.animate({...property.leftProperty});
        content.rightContent.animate({...property.currentProperty});
        content.right2Content.animate({...property.rightProperty});
        content.right3Content.animate({...property.right2Property});

        content.currentContent.attr('id', "left");
        content.leftContent.attr('id',"left-2");
        content.left2Content.attr('id',"left-3");
        content.left3Content.attr("id","right-3")
        content.right2Content.attr('id',"right");
        content.rightContent.attr('id',"current");
        content.right3Content.attr('id',"right-2");

        this.reInit();

        let data = this.state.data;
        let arr = data.filter(val => {
            return val.key === content.currentContent.attr('class').substring(4)
        }) 

        content.right2Content.css({...ele2Style});
        content.rightContent.css({...ele1Style});
        content.currentContent.css({...eleStyle});
        content.left2Content.css({...ele2Style});
        content.leftContent.css({...ele1Style}); 

        await setTimeout(() => {
            this.setState({activeData: arr[0],fadeIn: true})
            this.cb();
        },500) 
    }
    onRight = async () => { 
        await this.setState({fadeIn: false,working: true})
        this.reInit();   
        let content = this.state.content;
        let property = this.state.property;
        let {ele1Style,ele2Style,eleStyle} = this.state;

        content.left3Content.animate({...property.left2Property});
        content.left2Content.animate({...property.leftProperty});
        content.leftContent.animate({...property.currentProperty});
        content.currentContent.animate({...property.rightProperty});
        content.rightContent.animate({...property.right2Property});
        content.right2Content.animate({...property.right3Property});
        content.right3Content.animate({...property.left3Property});

        content.currentContent.attr('id', "right");
        content.leftContent.attr('id',"current");
        content.left2Content.attr('id',"left");
        content.left3Content.attr("id","left-2")
        content.right2Content.attr('id',"right-3");
        content.rightContent.attr('id',"right-2");
        content.right3Content.attr('id',"left-3");

        await this.reInit();

        let data = this.state.data;
        let arr = data.filter(val => {
            return val.key === content.currentContent.attr('class').substring(4)
        })
        
        content.right2Content.css({...ele2Style});
        content.rightContent.css({...ele1Style});
        content.left2Content.css({...ele2Style});
        content.leftContent.css({...ele1Style});
        await setTimeout(() => {
            content.currentContent.css({...eleStyle});
        },100)
        await setTimeout(() => {
            this.cb();
            this.setState({activeData: arr[0],fadeIn: true})
        },500) 
    }
    cb() {
        this.setState({working: false})
    }
    handleReadMore = () => {
        let value = window.innerWidth;
        let dim = value <= 700 ? 180 : 100;
        let dimVh = value <= 700 ? '70vh' : '30vh'; 
        dimVh = value > 700 && '30vh'
        dimVh = value <= 500 ? '60vh' : '40vh'; 
        this.setState({stateChangedActive: true});
        let container = jQuery("#active-container");
        container.css({opacity: 1,zIndex: 10})
        let parentContent = jQuery("#active-content");
        let parentImg = jQuery("#active-img");
        let contentImg = jQuery("#current");
        let currentContent = jQuery("#current-content"); 

        let left = value <= 700 ? '0' : parentImg.position().left;
        let imgProperty = {
            height: parentImg.height(),
            width: parentImg.width(),
            top: parentImg.position().top,
            left: left, 
        }  
        let contentProperty = {
            height: '300px',
            width: parentContent.width(),
            top: parentContent.position().top,
            left: parentContent.position().left
        } 
        if(value <= 700) {
            contentImg.animate({...imgProperty,top: imgProperty.top + dim,left: '50%'});
        } else {
            contentImg.animate({...imgProperty,top: imgProperty.top + dim,});
        }
        currentContent.animate({...contentProperty,top:  dimVh});
        if(value <= 700) {
            contentImg.css({width: '100%',height: '100%',zIndex: 10,transform: 'translate(-50%,0%)'});
        } else {
            contentImg.css({width: '100%',height: '100%',zIndex: 10,transform: 'none'});
        }
        currentContent.css({width: '100%',height: '100%',zIndex: 10});
    }
    onCloseActive = () => {
        let container = jQuery("#active-container");
        let value = window.innerWidth;
        let dimWh = value <= 500 ? '150' : '150';
        container.css({opacity: 0,zIndex: -1})
        let parentContent = jQuery("#parent-content");
        let parentImg = jQuery("#parent");
        let contentImg = jQuery("#current");
        let currentContent = jQuery("#current-content"); 

        let imgProperty = {
            height: parentImg.height(),
            width: parentImg.width(),
            top: parentImg.position().top,
            left: parentImg.position().left
        }
        let contentProperty = {
            height: parentContent.height(),
            width: parentContent.width(),
            top: parentContent.position().top,
            left: parentContent.position().left
        }  
        contentImg.animate({...imgProperty});
        currentContent.animate({...contentProperty,top: contentProperty.top - dimWh});
        contentImg.css({zIndex: 1,transform: 'none'});
        currentContent.css({zIndex: 1});   
        this.setState({stateChangedActive: false})
    }
    none = () => {
    }
    render() { 
        // {console.log(this.users);}
        console.log(this.state)
        let pHeadCls = this.state.fadeIn ? "p-name anime-fade-text fadeInLeft" : "p-name fadeOutRight anime-fade-text";
        let pContentCls = this.state.fadeIn ? "p-content anime-fade-text fadeInLeft" : "p-content anime-fade-text fadeOutRight"; 
        return (
            <div className="main-div">
                <div className="item-container flex-h"> 
                    <div className="main-active-container" id="active-container" style={{opacity: 0,zIndex: -1}}>
                        {this.state.stateChangedActive && <span className="close" onClick={this.onCloseActive}>X</span>}
                        <div className="active-container flex-h">
                            <div className="active-content-img" >
                                <div className="active-img" id="active-img"></div>
                            </div>
                            <div className="active-content-container flex-v" id="active-content"> 
                                
                            </div>
                        </div>
                    </div> 
                    <img alt="pangle team" src={btnNext} id="left-btn" className="btn-next" onClick={() => {
                        this.state.working ? this.none() : this.onLeft();
                    }} />
                    <div className="item-content" style={{position: 'relative'}}> 
                        <div style={{justifyContent: 'center'}} className="flex-h next-3" id="parent-left-3" ></div>
                        <div style={{justifyContent: 'center'}} className="flex-h next-2" id="parent-left-2"></div>
                        <div style={{justifyContent: 'center'}} className="flex-h next" id="parent-left"></div>
                        <div style={{justifyContent: 'center'}} className="flex-h current" id="parent"></div>
                        <div style={{justifyContent: 'center'}} className="flex-h next" id="parent-right"></div>
                        <div style={{justifyContent: 'center'}} className="flex-h next-2" id="parent-right-2"></div>
                        <div style={{justifyContent: 'center'}} className="flex-h next-3" id="parent-right-3"></div>

                        <img alt="pangle team" src={imgSeven} className="pos seven" id="left-3" /> 
                        <img alt="pangle team" src={imgSix} className="pos one" id="left-2" />
                        <img alt="pangle team" src={imgFive} className="pos two" id="left" />
                        <img alt="pangle team" src={imgFour} className="pos three" id="current" />
                        <img alt="pangle team" src={imgThree} className="pos four" id="right" />
                        <img alt="pangle team" src={imgTwo} className="pos five" id="right-2" /> 
                        <img alt="pangle team" src={imgOne} className="pos six" id="right-3" />  
                    </div> 
                    <img alt="pangle team" src={right} id="right-btn" className="btn-next right" onClick={() => {
                        this.state.working ? this.none() : this.onRight();
                    }} />
                </div>
                <div className="current-content" id="parent-content">&nbsp;</div>
                <div className="current-content" id="current-content">
                    <h2 className={pHeadCls} >
                        {this.state.activeData.name}
                    </h2>
                    <div className={pContentCls}>
                        {this.state.stateChangedActive
                            ?
                        this.state.activeData.content 
                            :
                        <div>{this.state.activeData.content.substring(0,250)} <span className="link" onClick={this.handleReadMore}>Read More</span></div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Team;