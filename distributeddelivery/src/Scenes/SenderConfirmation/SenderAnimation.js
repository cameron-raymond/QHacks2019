import React from 'react'
import Lottie from 'react-lottie';
import animationData from './car.json'
 
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
              height={300}
              width={300}
             />
    
  }
}