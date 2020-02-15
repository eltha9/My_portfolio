import React, { Component } from 'react'

import Logo from '../../images/logo.svg'
import git from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'
class Footer extends Component{
    constructor(props){
        super(props)
    }


    render(){

        return (

            <footer className="row footer border-none">
                <div className="left-marge"></div>

                <div className="content">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>

                    <div className="footer__credentials">
                        <span>Copyright Philippe Dos Santos 2019</span>
                        <span>Designed by Alban Delachaume</span>
                    </div>

                    <div className="footer__socials">
                        <a className="link linkedin" href="https://www.linkedin.com/in/philippe-dos-santos-788395173/" title="My linkedin"><img src={linkedin} alt="linkedin logo"/></a>
                        <a className="link git" href="https://github.com/eltha9" title="My github repo"><img src={git} alt="github logo"/></a>
                    </div>
                </div>

                <div className="right-marge"></div>
            </footer>

        )
    }
}

export default Footer