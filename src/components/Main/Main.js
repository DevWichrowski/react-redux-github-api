import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <p>{this.props.gitstats.name}</p>
        <Footer />
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
	gitstats: state.gitstats
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);