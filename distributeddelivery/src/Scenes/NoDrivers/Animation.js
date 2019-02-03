import React from 'react'
import Lottie from 'react-lottie';
import animationData from './empty.json'

export default class LottieControl extends React.PureComponent {
  render() {
    const defaultOptions = {
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return <Lottie options={defaultOptions}
              height={200}
              width={200}
             />
    
  }
}