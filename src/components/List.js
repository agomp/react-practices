import React, { Component } from 'react';
import Loading from './Loading';

class List extends Component  {
    constructor(props) {
        super(props);
        this.state =  {
            isLoading: false,
            videos: null
        }
    }
    componentDidMount() {
        this.setState({isLoading: true});
        // With this, we're simulating an async post
        setTimeout(() => {
            this.setState({
                isLoading: false,
                videos:[{id:1},{id:2},{id:3}]
            });
        }, 2000);
    }
    render() {
        const { videos, isLoading } = this.state;
        if( isLoading ) {
            return (<Loading message="Loading..."/>);
        }
        return (
        <React.Fragment> {/* React.Fragment prevents crashes and prepares a void object to protect the exec */}
            <div className="container">
                <div className="grid-container">
                    {
                        // map iterate over the array, JS vanilla
                        videos && videos.map((video,i) => {
                            return (
                                <span> #{video.id} </span>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
        )
    }
}
export default List