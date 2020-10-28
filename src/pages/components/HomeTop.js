import React, { Component } from 'react'

class HomeTop extends Component{
    constructor(props){
        super(props)
    }


    render(){

        return (

            <section className="row home__top ">
                <div className="left-marge"></div>

                <div className="content">
                    <span className="home__top__name">Philippe</span>
                    <span className="home__top__name">Dos Santos</span>
                    <span className="home__top__title">Back & Front-end Developer</span>
                </div>

                <div className="right-marge"></div>
            </section>

        )
    }
}

export default HomeTop