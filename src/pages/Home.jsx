import React, {useRef, useState} from 'react';
import '../stylesheet.css';
import {CSSTransition} from 'react-transition-group';
import IsInView from '../components/Utility/IsInView';

function Home() {
    const ref = useRef();
    const [isAppear, setIsAppear] = useState(true);

    const toggleAppear = () =>{
        setIsAppear(!isAppear);
    }



    return (
        <div className='home page' id='home'>
            <CSSTransition
                in={isAppear}
                appear={true}
                timeout={1000}
                classNames='fade_up'
            >
                <div className='home-title'>
                    <h1 className='home-welcome-1'>WELCOME</h1>
                    <h1 className='home-welcome-2'>TO</h1>
                    <h1 className='home-welcome-3'>CTRL.</h1> 
                </div>
            </CSSTransition>
            <video src={require('../images/home-tv.mp4')} type='video/mp4' className='home-video' autoPlay loop muted playsInline/>
        </div>
     );
}

export default Home;