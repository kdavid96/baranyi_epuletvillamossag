import React, {useState} from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { Button } from './style';
  
const ScrollUp = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button style={{width: 'auto', left: '93%'}}>
     <BsFillArrowUpSquareFill onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  );
}
  
export default ScrollUp;