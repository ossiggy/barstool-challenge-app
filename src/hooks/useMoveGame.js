import { useState } from 'react';

const useMoveGame = () => {
  const [period, setPeriod] = useState(0);
  const [status, setStatus] = useState('pending');
  const [marker, setMarker] = useState('bot')
  const [buttonText, setButtonText] = useState('Start Game');

  const updateMlbMarker = (mark) => {
    switch (mark) {
      case 'top':
        return 'mid';
      case 'mid':
        return 'bot';
      case 'bot':
        return 'top';
      default:
        return '';
    };
  }

  const setNewGame = () => {
    setPeriod(0);
    setMarker('bot');
    setStatus('pending');
    setButtonText('Start Game');
  }

  const incrementMlb = (mark, inning) => {
    if (status === 'completed') {
      setNewGame();
    } else if (inning === 9 && mark === 'bot') {
      setStatus('completed');
      setButtonText('Reset');
    }
    else if (mark === 'bot'){
      setMarker(updateMlbMarker(mark));
      setPeriod(inning += 1);
      setStatus('in progress');
      setButtonText('Next');
    } else {
      setMarker(updateMlbMarker(mark));
    }
  }

  const incrementNba = (mark, quarter) => {
    if (status === 'completed') {
      setNewGame();
    } else if (quarter === 4) {
      setMarker('')
      setStatus('completed')
      setButtonText('Reset');
    } else if (quarter === 2 && mark !== 'Half') {
      setMarker('Half');
      setButtonText('Next');
    } else {
      setMarker('');
      setPeriod(quarter += 1)
      setButtonText('Next');
    }
  }

  return [period, status, marker, buttonText, incrementMlb, incrementNba];
}

export default useMoveGame;
