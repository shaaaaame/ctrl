import React, {useState} from 'react'
import ExpandContent from './ExpandContent';


function ExpandOnClick(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () =>{
        setIsExpanded(!isExpanded);
    }

    return (
        <div className='expand_on_click'>
            <button onClick={handleClick} className='expand-btn horizontal-center'><img src={require('../../images/logo/keycap.png')} className='expand-btn-image' alt='expand-btn'/></button>
            <ExpandContent trigger={isExpanded} content={props.answer}/>
        </div>
  )
}

export default ExpandOnClick