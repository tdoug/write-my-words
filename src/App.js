import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import './App.css';

function App() {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>I'm afraid your browser does not support speech recognition.</div>
  }
  return (
    <div className="App">
     <button onClick={SpeechRecognition.startListening}>Start Listening</button>
     <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
     <button onClick={resetTranscript}>Reset</button>
     <p>{transcript}</p>
    </div>
  );
}

export default App;
