import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Lists from './components/Lists';
import ParticlesBg from "particles-bg";
import Modal from './components/modal/modal';
import { connect } from "react-redux";


class  App extends Component {
constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render()
  {

    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [.1, 0.4],
      position: "all",
      color: ["random", "#ff0000"],
      cross: "dead",
      // emitter: "follow",
      random: 15
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        }
      });
    }
  return (

    <div style={{padding:'0px 0px 0px 0px',height:'100vh',overflowX:'hidden'}}className='container-fluid'>
     <Nav/>
     <div className='container'>
      <Lists/>
     </div>
    <Modal show={this.props.modalShow}/>
     <ParticlesBg  type='custom' config={config} bg={true}/>
    </div>
    
  );
  }
}

const mapStateToProps = state => ({
 modalShow:state.modalShow
});
export default connect(mapStateToProps,null)(App);
