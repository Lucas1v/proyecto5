import React from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const Clock =({sessionChange, breakeChange, session, breake, refresh, touch, offTouch}) => {
    const [actualTime, setActualTime] = useState(true);
    const [minutos, setMinutos] = useState(session);
    const [segundos, setSegundos] = useState(0);
    const [valor, setValor] = useState(false);
    const [name, setName] = useState("session");
    let audio = document.getElementById("beep");
    useEffect(() => {
        let interval = null;
        if(actualTime){
            if(!valor && touch){
            setMinutos(session);
            setSegundos(0)
            }
        }else{
            if(!valor && touch){
                setMinutos(breake);
                setSegundos(0)
                }
        }
        if(minutos === 0 && segundos === 0){
            audio.play();
            setTimeout(() => {
                audio.pause()
            }, 1000);
        }
        console.log(segundos)
        if(valor){
            offTouch()
            interval = setInterval(() => {
                if(actualTime){
                    if(minutos === 0 && segundos === 0){
                        setActualTime(prevSession => !prevSession);
                        setMinutos(breake + 1);
                        if(segundos === 0){
                            setSegundos(prevTime => prevTime + 59);
                            setMinutos(prevTime => prevTime - 1);
                        }else{
                            setSegundos(prevTime => prevTime - 1);
                        }   
                    }else{
                        if(segundos === 0){
                            setSegundos(prevTime => prevTime + 59);
                            setMinutos(prevTime => prevTime - 1);
                        }else{
                            setSegundos(prevTime => prevTime - 1);
                        }
                    }
                }else{
                    if(minutos === 0 && segundos === 0){
                        setActualTime(prevSession => !prevSession);
                        setMinutos(session + 1);
                        if(segundos === 0){
                            setSegundos(prevTime => prevTime + 59);
                            setMinutos(prevTime => prevTime - 1);
                        }else{
                            setSegundos(prevTime => prevTime - 1);
                        }
                        }else{
                        if(segundos === 0){
                            setSegundos(prevTime => prevTime + 59);
                            setMinutos(prevTime => prevTime - 1);
                        }else{
                            setSegundos(prevTime => prevTime - 1);
                        }
                        }
                }
            },1000)
        }else{
            clearInterval(interval);
        }
        if(actualTime){
            setName("Session")
        }else{
            setName("Break")
        }
        return () => {clearInterval(interval)}
    }, [segundos, minutos, session, breake, actualTime, valor, touch, name, offTouch, audio])
    const handleRefresh = () => {
        setValor(false);
        setSegundos(0);
        setActualTime(true);
        setMinutos(session)
        audio.pause();
        audio.currentTime = 0;
        setName("Session")
    };
    return (
        <div id="reloj">
            <h1 className="first">25 + 5 Clock</h1>
            <div id="secondCompleto">
                <span className="second" id="break-label">Break Length</span>
                <span className="second" id="session-label">Session Length</span>
            </div>
            <div id="completo">
                <div className="third">
                    <div className=" fa fa-arrow-down fa-2x derecha div" id="break-decrement" onClick={() => breakeChange(-1, !valor, false)}></div>
                    <span className="derecha" id="break-length">{breake}</span>
                    <div className=" fa fa-arrow-up fa-2x derecha div" id="break-increment" onClick={() => breakeChange(+1, !valor, true)}></div>
                </div>
                <div className="third" id="sesion">
                    <div className=" fa fa-arrow-down fa-2x derecha div" id="session-decrement" onClick={() => sessionChange(-1, !valor, false)}></div>
                    <span className="derecha" id="session-length">{session}</span>
                    <div className=" fa fa-arrow-up fa-2x derecha div" id="session-increment" onClick={() => sessionChange(+1, !valor, true)}></div>
                </div>
            </div>
            <div className="forth">
                <span id="timer-label">{name}</span>
                <div id="time-left">{('0' + minutos).slice(-2)}{':'}{('0' + segundos).slice(-2)}</div>
            </div>
            <div className="fifth">
            <div id="start_stop" className={`fa fa-2x ${(!valor?"fa-play": "fa-pause")} div`} onClick={() => setValor(!valor)}></div>
            <div id="reset" className=" fa fa-refresh fa-2x  div" onClick={() => {refresh(); handleRefresh()}}></div>
            </div>
            <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
    )
}

const mapStateToPops = state => ({
    session: state.session,
    breake: state.breake,
    touch: state.touch
});

const mapDispatchToProps = dispatch => ({
    sessionChange(o, play, up) {
        dispatch({
           type: "CSESSION",
           o: o,
           play: play,
           up: up
        })
    },
    breakeChange(o, play, up) {
        dispatch({
           type: "CBREAKE",
           o: o,
           play: play,
           up: up
        })
    },
    refresh(){
        dispatch({
            type: "REFRESH"
        })
    },
    offTouch(){
        dispatch({
            type: "OFFTOUCH"
        })
    }
});

export default connect(mapStateToPops, mapDispatchToProps)(Clock);
