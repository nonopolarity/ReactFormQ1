import React from 'react';

const Message = (props) => {
    return (
        <div>
            <h3 className="text-center message">
                { props.isFormValid ? "Form is Complete!" : "Form is Incomplete!" }
            </h3>
        </div>
    )
}

export default Message;
