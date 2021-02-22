import React, { Component } from 'react';
import Loading from './Loading';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';
import Add from './Add';
import { getRealVideos } from '../api';

class List extends Component  {
    constructor(props) {
        super(props);
        this.state =  {
            isLoading: false,
            videos: null,
            showAdd: false
        };
        this.handleAdd = this.handleAdd.bind(this) // IMPORTANT TO GIVE ACCESS TO CONTEXT, CAN BE DONE ALSO INLINE
        this.handleCloseAdd = this.handleCloseAdd.bind(this) 
    }
    async componentDidMount() {
        this.setState({ isLoading: true });
        
        // Promises example  
        // getVideos()
        //   .then(data => this.setState({ videos: data, isLoading: false }))
        //   .catch(error => this.setState({ error, isLoading: false }));
        
        try{
          const videos = await getRealVideos();
          this.setState({ videos , isLoading: false });
        } catch(error){
          this.setState({ error, isLoading: false });
        }
      }
    handleAdd(event) {
       event.preventDefault();
       this.setState({showAdd: true})  
    }
    handleCloseAdd(reload) {
        return () => {
            if(reload) {
                this.setState({ isLoading: true, showAdd: false});
                getRealVideos().then(data => this
                    .setState({ videos: data, isLoading: false, showAdd: false})
                    .catch(error => this.setState({ error, isLoading: false, showAdd: false})))
            } else {
                this.setState({ showAdd: false})
            }
        }
    }
    render() {
        const { videos, error, isLoading } = this.state;
        if( error ) {
            <div>Whoops, something went wrong</div>
        }
        if (isLoading) return <Loading message={`Cargando videos ...`}/>
        return (
            
        <React.Fragment> {/* React.Fragment prevents crashes and prepares a void object to protect the exec */}
            <Header site="Codely" onClickAdd={this.handleAdd}/>
            <div className="container">
                <div className="grid-container">
                    {
                        // map iterate over the array, JS vanilla
                        videos && videos.results.map((video,i) => {
                            return (
                                <Item key={i} data={video}/>
                            )
                        })
                    }
                </div>
            </div>
            <Footer name="Alberto"/>
            { this.state.showAdd && (<Add onClose={ this.handleCloseAdd} />)}
        </React.Fragment>
        )
    }
}
export default List