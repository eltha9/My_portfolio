import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TextWithRightImage extends Component{
    constructor(props){
        super(props)
    }
    static props ={
        data: PropTypes.object.isRequired
    }
    
    render(){

        return(
            <div className="custom-project-section text-with-right-image">
                <h2>{this.props.data.section_title}</h2>
                <div className="container">
                    <p>{this.props.data.section_description}</p>
                    <img src={this.props.data.section_image} />
                </div>
            </div>
        )
    }
}

export default TextWithRightImage