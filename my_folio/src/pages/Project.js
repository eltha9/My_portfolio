import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

// special component
import SingleImage from './components/projectComponents/SingleImage'
import SingleImageBorder from './components/projectComponents/SingleImageBorder'
import TextWithRightImage from './components/projectComponents/TextWithRightImage'

class Project extends Component{
    constructor(props){
        super(props)

        this.state={}

    }
    componentDidMount(){
        document.title = `Philippe Dos Santos - ${this.props.match.params.name} project`
        
        this.setState({title:this.props.match.params.name})
        
        this.getProjectContent()

    }

    static props = {
        name : PropTypes.string.isRequired
    }

    getProjectContent(){
        let url = `./data/projects/${this.props.match.params.name}.json`

        fetch(url).then((json)=>{
            return json.json()
        }).then((_json)=>{
            this.setState({data:_json})
        })
    }
    

    render(){
        return(
            <div className="project">
                <div className="row project__top">
                    <div className="left-marge"></div>

                    <div className="content">
                        <img src={('data' in this.state)? this.state.data.main_image : ''} alt=""/>
                    </div>

                    <div className="right-marge"></div>
                </div>

                <div className=" row project__content border-none">
                    <div className="left-marge"></div>

                    <div className="content">
                        <div className="content__top">
                            <div className="content__top__left">
                                <h2 style={{color:'#'+ (('data' in this.state)? this.state.data.font_color : '000')}}>{('data' in this.state)? this.state.data.project_name : ''}</h2>
                                <p>
                                    {!('data' in this.state)? '': this.state.data.project_description.split('\n').map((item, key) => {
                                    return <span key={key}>{item}<br/></span>
                                    })}
                                </p>
                            </div>
                            
                            <div className="content__top__right">
                                <div className="capsule">
                                    <span style={{color:'#'+ (('data' in this.state)? this.state.data.font_color : '000')}} className="mini__title">Date</span>
                                    <span>{('data' in this.state)? this.state.data.date : ''}</span>
                                </div>
                                <div className="capsule">
                                    <span style={{color:'#'+ (('data' in this.state)? this.state.data.font_color : '000')}} className="mini__title">Rôle</span>
                                    <span>{('data' in this.state)? this.state.data.role : ''}</span>
                                </div>
                            </div>

                        </div>
                        <h3>Discover {('data' in this.state)? this.state.data.project_name : ''}</h3>

                        {!('data' in this.state) ? '': this.state.data.content.map((type,id)=>{

                            switch(type.type){
                                case 'single-image-border':
                                    return (
                                        <SingleImageBorder data={type} key={id} ></SingleImageBorder>
                                    )
                                    break 
                                case 'text-with-right-image':
                                    return (
                                        <TextWithRightImage data={type} key={id} ></TextWithRightImage>
                                    )
                                    break
                                case 'single-image':
                                    return (
                                        <SingleImage data={type} key={id} ></SingleImage>
                                    )
                                    break
                                default:
                                    return (
                                        <div key={id}></div> 
                                    )
                            }
                            
                        })}
                    </div>

                    <div className="right-marge"></div>
                </div>

                <div className=" row project__bottom border-none side-border-none">
                    <div className="left-marge"></div>

                    <div className="content">
                        <a className="next" href={!('data' in this.state) ? '/': `/project/${this.state.data.next_project.link}`}>
                            <div className="next__name">
                                <h2>{('data' in this.state)? this.state.data.next_project.name :''}</h2>
                                <div className="floating">Next Project</div>
                            </div>

                            <div className="next__role">
                                    <span className="mini__title">Rôle</span>
                                    <span>{('data' in this.state)? this.state.data.next_project.role :''}</span>
                            </div>

                            <div className="next__date">
                                <span className="mini__title">Date</span>
                                <span>{('data' in this.state)? this.state.data.next_project.date :''}</span>
                            </div>
                        </a>
                    </div>

                    <div className="right-marge"></div>
                </div>
                
            </div>
        )
    }
}

export default Project