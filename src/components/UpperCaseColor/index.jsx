import React from "react";
import PropTypes from "prop-types";

class UpperCaseColor extends React.Component{
    render(){
        return(
            <>
            <p style={{color: this.props.desiredColor}}>{this.props.content.toUpperCase()}</p>
            </>
        )
    }
}

UpperCaseColor.defaultProps = {
    desiredColor: 'red',
    content: "This content is null, please insert 'content' prop",
}

UpperCaseColor.propTypes ={
    content: PropTypes.string.isRequired,
    desiredColor: PropTypes.string
}

export default UpperCaseColor