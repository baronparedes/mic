import * as axios from 'axios'

export function getInTouch(name, email, contact, message, completedCallback) {
    const emailMessage = {
        title: "Get In Touch",
        name,
        email,
        contact,
        message
    };
    sendMessage(emailMessage, completedCallback);
}

export function inquireIndividualPlan(name, age, email, contact, message, completedCallback) {
    const emailMessage = {
        title: "Inquire Individual Plan",
        name,
        age,
        email,
        contact,
        message
    };
    sendMessage(emailMessage, completedCallback);
}

export function inquireCorporatePlan(company, employees, natureOfBusiness, email, contactPerson, contact, message, completedCallback) {
    const emailMessage = {
        title: "Inquire Corporate Plan",
        company,
        employees,
        natureOfBusiness,
        email,
        contactPerson,
        contact,
        message
    };
    sendMessage(emailMessage, completedCallback);
}

function sendMessage(message, completedCallback) {
    axios.post('/sendmail', { 
        ...message 
    }).then((data) => {
        if (completedCallback) {
            completedCallback();
        }
    }).catch((e) => {
        console.log(e.toString());
        if (completedCallback) {
            completedCallback();
        }
    });
}