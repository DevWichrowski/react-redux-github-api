import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import { fetchData } from '../../store/actions/apiActions';

class Main extends Component {
	componentDidMount() {
		this.props.dispatch(fetchData());
	}
	
	render() {
		const loading = this.props.gitstats.loading;
		const error = this.props.gitstats.error;
		const data = this.props.gitstats.items;

		if (error) {
			return <div>Error {error.message}</div>;
    }
    
    if(loading) {
      return <div> Loading... </div>
    }

		return (
			<div className="Main">
				<Header />
				<p>{this.props.gitstats.name}</p>
					
					{data.map(item => 
            <p key={item.id}>{item.title}</p>
						)}
						
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	gitstats: state.gitstats
});

export default connect(mapStateToProps, null)(Main);
