import React from 'react'
// usualy we don't import react dom in component
import ReactDOM from 'react-dom'


// usualy we return an html code from component
const Modal = props =>{
    // the first arg is a div(jsx) that showed on the screen
    // the second arg is a ref to the element where the component is rendered
 return ReactDOM.createPortal(
     <div onClick={props.onDismiss} className="ui dimmer modals visible active">
        {/* e.stopPropagation stops the event bubbling */}
         <div onClick={(e)=> e.stopPropagation()} className="ui standard modal visible active">
             <div className='header'>{props.title}</div>
                 <div className='content'>
                    {props.content}
                 </div>
                 <div className="actions">
                     {props.actions}
                 </div>
             
         </div>
     </div>,
     document.querySelector('#modal')

 )
};

export default Modal;