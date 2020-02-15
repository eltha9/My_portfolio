import React, { Component } from 'react'

class HomeContact extends Component{
    constructor(props){
        super(props)
    }


    render(){

        return (

            <section className="row home__contact">
                <div className="left-marge"></div>

                <div className="content">
                    <div className="home__contact__title">
                        Contact
                    </div>
                    <h2>Let's talk</h2>
                    <div className="home__contact__container">
                        <div className="form__container">

                            <div className="form__container__illustration">
                                <div className="illustration__container">
                                    <img src="" alt=""/>
                                </div>
                            </div>

                            <form>
                                <div className="form__row">
                                    <label>
                                        <span>name</span>
                                        <input type="text"/>
                                    </label>
                                    <label>
                                        <span>name</span>
                                        <input type="text"/>
                                    </label>

                                </div>
                                <div className="form__row">
                                <label>
                                        <span>name</span>
                                        <input type="text"/>
                                    </label>
                                </div>
                                <div className="form__row">
                                    <input type="sumbit" value="Send"/>
                                </div>

                                
                            </form>
                        </div>
                    </div>

                </div>

                <div className="right-marge"></div>
            </section>

        )
    }
}

export default HomeContact