import React, {Component} from 'react'
import PropTypes from 'prop-types'

class SingleImageBorder extends Component{
    constructor(props){
        super(props)
    }
    static props ={
        data: PropTypes.object.isRequired
    }
    
    render(){

        return(
            <div className="custom-project-section single-image-border" style={{backgroundColor: '#'+this.props.data.bgc_color}} >
                <img src={this.props.data.image_link} />
            </div>
        )
    }
}

export default SingleImageBorder