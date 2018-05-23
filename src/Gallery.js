import React, { Component } from 'react';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { isFetching: false }
    }  

    render(){
        return (
            //spinner while fetching
            this.state.isFetching ? <img src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif" alt="*"/> :
            <div>
            {
                this.props.items.map((item, index) => {
                    //parse images from json
                    let {title, thumbnailLink} = item.image;
                    return (
                        <div 
                        key={index} 
                        className="gallery"
                        target="_blank">
                            <img 
                                src={thumbnailLink} 
                                alt={title}
                                className="gallery-img"
                            />
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Gallery;