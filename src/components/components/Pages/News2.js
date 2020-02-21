import React from "react";
import Modal from "react-modal";

import img1 from "../../img/five.jpg";
import img3 from "../../img/five.jpg";
import img2 from "../../img/five.jpg";
import img4 from "../../img/five.jpg";
import img5 from "../../img/five.jpg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: window.innerWidth <= 620 ? "96%" : "600px",
    height: "95vh",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%,-50%)",
    zIndex: 300,
    marginTop: "50px",
    transition: "1s all",
    background: "#161616"
  }
};
Modal.setAppElement("#root");

let data = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    featured: img1,
    head: "Headline",
    created_at: "Date",
    venue: "venue",
    event: " some event",
    col: 2,
    row: 1
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    featured: img2,
    head: "Headline",
    created_at: "Date",
    venue: "venue",
    event: " some event",
    col: 1,
    row: 1
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    featured: img1,
    head: "Headline",
    created_at: "Date",
    venue: "venue",
    event: " some event",
    col: 2,
    row: 1
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    featured: img5,
    head: "Headline",
    created_at: "Date",
    venue: "venue",
    event: " some event",
    col: 1,
    row: 1
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    featured: img4,
    head: "Headline",
    created_at: "Date",
    venue: "venue",
    event: " some event",
    col: 1,
    row: 1
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    featured: img2,
    head: "Headline",
    created_at: "Date",
    venue: "venue",
    event: " some event",
    col: 1,
    row: 1
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    featured: img3,
    head: "Headline",
    created_at: "Date",
    venue: "venue",
    event: " some event",
    col: 2,
    row: 1
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    featured: img4,
    head: "Headline",
    created_at: "Date",
    venue: "venue",
    event: " some event",
    col: 1,
    row: 1
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    featured: img1,
    head: "Headline",
    created_at: "Date",
    venue: "venue",
    event: " some event",
    col: 1,
    row: 1
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    featured: img5,
    head: "Headline",
    created_at: "Date",
    venue: "venue",
    event: " some event",
    col: 1,
    row: 1
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    featured: img1,
    head: "Headline",
    created_at: "Date",
    venue: "venue",
    event: " some event",
    col: 1,
    row: 1
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum est iusto provident ex nisi expedita iure adipisci sapiente suscipit sequi rerum magni beatae autem numquam, mollitia, ut tempora! Veniam excepturi, ipsam ullam maiores provident adipisci! Sequi assumenda iste iure doloremque facilis! Ipsam ipsa sunt praesentium, aliquam explicabo ullam odit sed!",
    featured: img2,
    head: "Headline",
    created_at: "Date",
    venue: "venue",
    event: " some event",
    col: 1,
    row: 1
  }
];

class News2 extends React.Component {
  state = {
    newsData: [],
    activeData: [],
    modelOpen: false
  };
  componentWillMount = async () => {
    let i = 0,
      n = this.props.value.length;
    let timer = setInterval(() => {
      let val = this.state.newsData;
      if (i < n) {
        val[i] = this.props.value[i];
        this.setState({ newsData: val });
        i++;
      } else {
        clearInterval(timer);
        let ele = document.querySelector(".animated-news2");
        ele.classList.remove("animated-news2");
      }
    }, 500);
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };
  render() {
    return (
      <div className="news2-container flex-h">
        {this.state.newsData &&
          this.state.newsData.map((val, i) => {
            let classNameVal =
              this.state.newsData.length === i + 1
                ? "news2-content flex-v animated-news2 bounceIn"
                : "news2-content flex-v";
            return (
              <div
                className={classNameVal}
                key={Math.random()}
                onClick={() => {
                  this.setState({ activeData: val, modalOpen: true });
                }}
              >
                <img src={val.featured} alt="img" className="news2-img" />
                <h1 className="news2-head">{val.head}</h1>
                <div className="news2-span-div">
                  <span className="news2-span">{val.created_at}</span>
                  <span className="news2-span">{val.venue}</span>
                  <span className="news2-span border-none">{val.event}</span>
                </div>
                <p className="news2-p">"{val.description.substring(0, 100)}"</p>
              </div>
            );
          })}
        {this.state.activeData && (
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
            <span
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                fontSize: 18,
                color: "white"
              }}
              className="cursor"
              onClick={() => {
                this.setState({ modalOpen: false });
              }}
            >
              X
            </span>
            <img
              src={this.state.activeData.featured}
              alt="img"
              className="modal-img"
              style={{ width: "100%", zIndex: 20 }}
            />
            <h1 className="modal-head">{this.state.activeData.head}</h1>
            <div style={{ marginTop: "20px" }}>
              <span className="modal-sub-text">
                {this.state.activeData.created_at} |
              </span>
              <span className="modal-sub-text">
                {this.state.activeData.venue} |
              </span>
              <span className="modal-sub-text">
                {this.state.activeData.event}
              </span>
            </div>
            <p className="modal-p">{this.state.activeData.description}</p>
          </Modal>
        )}
      </div>
    );
  }
}
export default News2;
