import React, { Fragment } from "react";
import  ReactDOM  from 'react-dom';
import classes from './Model.module.css';


const Backdrop=props=>{
    return <div className={classes.backdrop} onClick={props.onClick} />
}


const ModelOverlay=props=>{
    return (
         <div className={classes.modal}>
        <div >{props.children}</div>
    </div>
    )
}
const portalElement=document.getElementById('overlays');

const Model=props=>{
     return <Fragment>
       {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/> , portalElement)}
       {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay> , portalElement)}
     </Fragment>
}

export default Model;