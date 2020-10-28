import React, { Component } from 'react'
import PropTypes from 'prop-types'

class About extends Component{
    constructor(props){
        super(props)

        this.state={}
    }
    // static props ={
        
    // }
    componentDidMount(){
        document.title = "Philippe Dos Santos - About"

        document.body.style.overflow = 'hidden'
        this.getExperiences()
        
    }

    getExperiences(){
        let url = '/data/experiences.json'

        fetch(url).then((json)=>{
            return json.json()
        }).then((_json)=>{

            this.setState({data:_json})
        })
    }

    render(){
        // this.getExperiences()
        return(
            <div className="about">
                <section className="row about__content">
                    <div className="left-marge"></div>

                    <div className="content">
                        <div className="content__left">
                            <span>Hello...</span>
                        </div>
                        <div className="content__right">
                            <div className="scrollable">
                                <div className="experience">

                                    <span className="experience__mini"> My name is </span>
                                    <span className="experience__name">{'data' in this.state ? this.state.data.name : ' '}</span>
                                    <p className="experience__description">{'data' in this.state ? this.state.data.about_description : ' '}</p>

                                    <table className="experience__table">
                                        <thead>
                                            <tr>
                                                <th>Experiences</th>    
                                                <th><div className="table__line"></div></th>    
                                            </tr>
                                        </thead>

                                        <tbody>
                                            { !('data' in this.state) ?  '': this.state.data.about_experience.map((experience,id)=>(
                                                <tr key={id}>
                                                    <td className="table__left">{experience.year}</td>
                                                    <td className="table__right">
                                                        <span className="table__right__title">{experience.name}</span>
                                                        <span className="table__right__span">{experience.position}</span>
                                                    </td>
                                                </tr>
                                            ))}      
                                        </tbody>                            
                                    </table>

                                    <table className="experience__table">
                                        <thead>
                                            <tr>
                                                <th>About</th>    
                                                <th><div className="table__line"></div></th>    
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>

                                                <td className="table__left">What I do</td>

                                                <td className="table__right">
                                                    {!('data' in this.state)? '': this.state.data.about_other.do.map((item,id)=>(

                                                        <span className="table__right__span" key={id} >{item}</span>
                                                    ))}
                                                </td>

                                                
                                            </tr>
                                            <tr>

                                                <td className="table__left">What I love</td>

                                                <td className="table__right">
                                                    {!('data' in this.state)? '': this.state.data.about_other.love.map((item,id)=>(

                                                        <span className="table__right__span" key={id} >{item}</span>
                                                    ))}
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-marge"></div>
                </section>

                <div className="row about__bottom border-none">
                    <div className="left-marge"></div>

                    <div className="content"></div>

                    <div className="right-marge"></div>
                </div>
            </div>
        )
    }
}

export default About