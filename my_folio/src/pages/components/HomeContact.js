import React, { Component } from 'react'

import ContactIllustration from '../../images/contact_illu.svg'

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
                                    <img src={ContactIllustration} alt=""/>
                                </div>
                            </div>

                            <form>
                                <div className="form__row">
                                    <label>
                                        <span>Name</span>
                                        <input type="text" placeholder="what is your name ?"/>
                                    </label>
                                    <label>
                                        <span>Email</span>
                                        <input type="email" placeholder="Your email"/>
                                    </label>

                                </div>
                                <div className="form__row">
                                <label>
                                        <span>Message</span>
                                        <textarea name="" id="" cols="30" rows="10" placeholder="Say hello!"></textarea>
                                    </label>
                                </div>
                                <div className="form__row">
                                    <input type="submit" value="Send"/>
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