import React from 'react'
import Lottie from 'react-lottie';
import animationData from './success.json'
 
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
              height={500}
              width={500}
             />
    
  }
}