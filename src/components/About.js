import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { getDescription } from '../api';
import Loading from './Loading';
import Footer from './Footer'

class Detail extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }
    componentDidMount() {
        const { match } = this.props;
        this.setState({isLoading: true});
        getDescription()
        .then(data => this.setState({ description: data, isLoading: false}))
        .catch(err => this.setState({ error: err, isLoading: false}));
    }
    render() {
        const { isLoading, error, description} = this.state;
        const { match } = this.props
        if (error) return <p className="error">Whooops.... {error.message}</p>
        if (isLoading || !description) return <Loading message={`Loading description...`}/>

        return (<React.Fragment>
            <div className="detail-container">
                    <p>{description}</p>
            </div>
        <Footer name="Alberto"/>
        </React.Fragment>)
   }
}
export default withRouter(Detail);