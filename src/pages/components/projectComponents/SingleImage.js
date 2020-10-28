import React, {Component} from 'react'
import PropTypes from 'prop-types'

class SingleImage extends Component{
    constructor(props){
        super(props)
    }
    static props ={
        data: PropTypes.object.isRequired
    }
    render(){

        return(
            <div className="custom-project-section single-image" >
                <h2>{this.props.data.section_title}</h2>
                <img src={this.props.data.section_image} />
            </div>
        )
    }
}

export default SingleImage