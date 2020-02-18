import React, { Component } from 'react';

import './App.css';

// components
import Contact from './components/Contact'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Education from './components/Education'
import Langue from './components/Langue'



class App extends Component {
  constructor(props){
    super(props)
    this.state={}

  }
  componentDidMount(){
    this.getCv()
  }

  getCv(){
    const url = '/data/cv.json'

    fetch(url).then((json)=>{
      return json.json()
    }).then((_json)=>{
      this.setState({cv:_json})
    })
  }

  render(){

    return (
      <div className="App">
        <div className="top">
          <img src={('cv' in this.state) ? this.state.cv.profile_picture: 'https://pbs.twimg.com/profile_images/1092451830758547457/EqQ6Csl3_400x400.jpg'} />
          <h1>{('cv' in this.state) ? this.state.cv.name : ''}</h1>
        </div>
        <div className="container">
            <div className="container__title">
              <h2>Contacts</h2>
            </div>

            <div className="container__top">
              <p className="description">{('cv' in this.state) ? this.state.cv.description : ''}</p>
              <ul>
                {!('cv' in this.state) ? '' : this.state.cv.contacts.map((contact,id)=>(
                  <Contact key={id} data={contact} />  
                ))}
              </ul>
            </div>

            <div className="container__bottom">
              <div className="columun">
                
                <div className="enum">
                  <h2>Expertise</h2>
                  <ul>
                    {!('cv' in this.state) ? '' : this.state.cv.expertise.map((expertise,id)=>(
                      <Expertise key={id} data={expertise} />  
                    ))}
                  </ul>
                  
                </div>

                <div className="enum">
                  <h2>Langues</h2>
                  <ul>
                    {!('cv' in this.state) ? '' : this.state.cv.langues.map((langue,id)=>(
                      <Langue key={id} data={langue} />  
                    ))}
                  </ul>
                  
                </div>

              </div>

              <div className="columun">
                <h2>éducation</h2>
                <ul>
                  {!('cv' in this.state) ? '' : this.state.cv.education.map((edu,id)=>(
                    <Education key={id} data={edu} />  
                  ))}
                </ul>

              </div>
            </div>
        </div>
        <div className="container">
            <div className="container__title">
              <h2>Expérience</h2>
            </div>
            <div className="container__content">
                {!('cv' in this.state) ? '' : this.state.cv.experiences.map((exp,id)=>(
                  <Experience key={id} data={exp} />  
                ))}

            </div>
        </div>
      </div>
    )
  } 
}

export default App;
