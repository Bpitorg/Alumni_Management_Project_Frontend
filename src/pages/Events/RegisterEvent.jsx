import React from 'react'
import Event_Form from '../../page-components/events/Event_Form';

const RegisterEvent=()=> {
    const handleformsubmit=(data)=>{
        console.log("Form data", data);

    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <Event_Form onSubmit={handleformsubmit}/>
    </div>
    );
}

export default RegisterEvent

