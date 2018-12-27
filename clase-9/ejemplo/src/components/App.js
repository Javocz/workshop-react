import React, { Component } from "react";
import "./../App.css";
import ProductList from "./ProductList";
import Navbar from "./Navbar"
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-modal';

Modal.setAppElement('#root')


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount(){
    fetch('http://localhost:3001/products')
    .then(response=>response.json())
    .then(response=>this.props.fillProducts(response))
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        
        <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>

          <div className="row">
            <div className="col">
              <ProductList />
            </div>
          </div>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  total: state.total
});

let mapDispatchToProps = dispatch => ({
    increment: () => dispatch({ type: "INCREMENT" }),
    fillProducts:(products)=>dispatch({type:'FETCH_PRODUCTS', products})
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
