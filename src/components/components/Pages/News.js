import React from 'react';
import Modal from 'react-modal';

import img1 from '../../img/prg1.jpg'; 
import img2 from '../../img/prg2.jpg'; 
import img3 from '../../img/prg3.jpg'; 
import img4 from '../../img/prg4.jpg'; 
import img5 from '../../img/prg5.jpg'; 

let data = [
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img1,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 2,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img2,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 1,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img3,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 1,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img4,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 2,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img5,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 1 ,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img3,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 1,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img2,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 1,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img1,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 2,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img5,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 1,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img4,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 1,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img2,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 1,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img3,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 2,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img4,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 1,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img1,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 1,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img5,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 1,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img1,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 1,row:1},
    {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!',img: img2,head: 'Headline',date: 'Date',venue: 'venue',event: ' some event',col: 1,row:1},
]

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: '500px',
        height: '95vh',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%,-50%)',
        zIndex: 30,
        transition: '1s all',
        background: '#161616'
    }
}
Modal.setAppElement("#root");

class News extends React.Component {
    state = {
        newsData: data,
        activeData: data[0],
        modalOpen: false
    } 
    closeModal = () => {
        this.setState({modalOpen: false})
    }
    render() {
        let {activeData} = this.state;
        let mid = Math.floor(this.state.newsData.length / 2);
        let arr1 = this.state.newsData.filter((val,i) => {
            if(mid <= i)
                return val
        });
        let arr2 = this.state.newsData.filter((val,i) => {
            if(mid > i)
                return val;
        }); 
        let row = 1; 
        let tempCol = 0;
        let temp1 = 0;
        let temp2 = 0;
        let adder = false;
        let row2 = 1;
        let tempCol2 = 0;
        return (
            <div className="main news-container flex-h">
                <div className="news-content-left animated-news slideInLeft">
                    {arr1.map((val,i) => {
                        tempCol = tempCol + val.col;
                        temp1++; 
                        if(adder) {
                            temp1++;
                            adder = false;
                            tempCol++;
                        }
                        if(tempCol > 3) {
                            tempCol = 1;
                            row++;temp1 =1;
                        }    
                        if(arr1[i].col === 2 && temp1 === 1) {
                            adder = true;
                        } 
                        return (
                            <div style={{overflow: 'hidden',width: '100%',height: '100%',gridColumn: `${temp1}/ span ${val.col}`,gridRow: `${row}/ span ${val.row}`}}
                                onClick={() => {
                                    this.setState({activeData: val})
                                    this.setState({modalOpen: true})
                                }}
                            >
                                <img src={val.img} className="news-img" alt="img" />
                            </div>
                        )
                    })}
                </div>
                
                <div className="news-content-right animated-news slideInRight">
                    {arr2.map((val,i) => {
                        temp2++;
                        tempCol2 = tempCol2 + val.col;
                        if(adder) {
                            temp2++;
                            adder = false;
                            tempCol++;  
                        }   
                        if(tempCol2 > 3) {      
                            tempCol2 = 1;
                            row2++;temp2=1;
                        }   
                        if(val.col === 2 && temp2 === 1) { 
                            adder = true;
                        }  
                        return (
                            <div style={{overflow: 'hidden',width: '100%',height: '100%',gridColumn: `${temp2}/ span ${val.col}`,gridRow: `${row2}/ span ${val.row}`}}
                                onClick={() => {
                                    this.setState({activeData: val})
                                    this.setState({modalOpen: true})
                                }}
                                
                            >
                                <img src={val.img} className="news-img" alt="img" />
                            </div>
                        )
                    })}
                </div>
                <Modal
                    isOpen={this.state.modalOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >
                    <img src={activeData.img} alt="img" className="modal-img" />  
                    <h1 className="modal-head">{activeData.head}</h1>
                    <div style={{marginTop: '20px'}}>
                        <span className="modal-sub-text">{activeData.date}</span>
                        <span className="modal-sub-text">{activeData.venue}</span>
                        <span className="modal-sub-text">{activeData.event}</span>
                    </div> 
                    <p className="modal-p">
                        {activeData.content}
                    </p>
                </Modal>    
            </div>
        )
    }
}
export default News;