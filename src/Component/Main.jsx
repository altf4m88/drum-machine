import React from  'react';

const sounds = [
    {
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' 
    },
    {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    
    {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' 
    },
        
    {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' 
    },
    
    {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' 
    },
    
    {
        keyCode: 90,
        keyTrigger: 'Z',
        id: "Kick-n'-Hat",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' 
    },
    
    {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' 
    },
    
    {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' 
    }
];
    

class Drum extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sounds : sounds,
        };
        this.triggerByKeyboard = this.triggerByKeyboard.bind(this);
        this.triggerByClick = this.triggerByClick.bind(this);
        this.playAudio = this.playAudio.bind(this);
    }

    triggerByKeyboard = (e) => {
        let key = e.key.toUpperCase();
        let keyCode = key.charCodeAt(0);

        let button = document.querySelector(`#button-${keyCode}`);

        if(!button) {
            return
        }

        button.classList.add('active');

        this.playAudio(key);

        button.classList.remove('active');
    }

    triggerByClick = (e) => {

        let display = document.querySelector('#display');

        display.innerText = e.target.dataset.text;

        this.playAudio(e.target.dataset.keyTrigger);
    }

    playAudio = (keyTrigger) => {
        let audio = document.querySelector(`#${keyTrigger}`);

        audio.play();
    }

    render(){
        return(
            <div id="drum-machine" className="main d-flex justify-content-center align-items-center h-100 flex-column bg-secondary">
                <div id="display" class="my-2">DISPLAY</div>
                <div className="d-flex flex-column w-50">
                    <div className="bg-success w-100 d-flex flex-wrap justify-content-around">
                        {this.state.sounds.map((item) => [
                            <button onKeyPress={this.triggerByKeyboard} onClick={this.triggerByClick} className="btn btn-lg btn-primary my-4 drum-pad" id={'button-'+ item.keyCode} data-key-trigger={item.keyTrigger} data-text={item.id} key={item.keyCode}>
                                {item.keyTrigger}
                                <audio src={item.url} type="audio/mp3" className="clip" id={item.keyTrigger} key={'audio-' + item.keyTrigger}>
                                </audio>
                            </button>
                        ])}
                    </div>
                </div>
            </div>
        )
    }
}

export default Drum;