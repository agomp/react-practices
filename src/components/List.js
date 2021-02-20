import React, { Component } from 'react';
import Loading from './Loading';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';

import { getVideos } from '../api';

class List extends Component  {
    constructor(props) {
        super(props);
        this.state =  {
            isLoading: false,
            videos: null
        }
    }
    async componentDidMount() {
        this.setState({ isLoading: true });
        
        // Promises example  
        // getVideos()
        //   .then(data => this.setState({ videos: data, isLoading: false }))
        //   .catch(error => this.setState({ error, isLoading: false }));
        
        try{
          const videos = await getVideos();
          this.setState({ videos , isLoading: false });
        } catch(error){
          this.setState({ error, isLoading: false });
        }
      }
    render() {
        const { videos, error, isLoading } = this.state;
        if( error ) {
            <alert>Whoooops!, something went wrong</alert>
        }
        if( isLoading ) {
            return (<Loading message="Loading..."/>);
        }
        return (
            
        <React.Fragment> {/* React.Fragment prevents crashes and prepares a void object to protect the exec */}
            <Header site="Codely"/>
            <div className="container">
                <div className="grid-container">
                    {
                        // map iterate over the array, JS vanilla
                        videos && videos.map((video,i) => {
                            return (
                                <Item key={i} data={video}/>
                            )
                        })
                    }
                </div>
            </div>
            <Footer name="Alberto"/>
        </React.Fragment>
        )
    }
}
export default List