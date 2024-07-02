import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component{
    render(){
        return(
            <>
            <button onClick={()=>{this.Alert()}}>{this.props.label}</button>
            </>
        )
    }
    Alert(){
        alert(`This button's 'label' prop is: ${this.props.label}`)
    }
}

Button.defaultProps = {
    label: 'Click here',
}

Button.propTypes ={
    label: PropTypes.string.isRequired
}

export default Button