import React from 'react'
import { useState } from 'react';
import AlertPopUp from './AlertPopUp';

export default function EmailForm() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    function onSubmit(e) {
        e.preventDefault();

        fetch("https://formcarry.com/s/orkk1MFj1o", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ email: email, subject: subject, message: message })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.code === 200) {
                    setSubmitted(true);
                } else {
                    setError(res.message);
                }
            })
            .catch((error) => setError(error));
    }

    if (error) {
        return (
            <AlertPopUp
                title="Sorry, we couldn't send your email"
                subtitle="Oops! An error occurred while sending your email. Please try again later"
                status="failed"
            />
        )
    }

    if (submitted) {
        return (
            <AlertPopUp
                title="Your email has been sent successfully"
                subtitle="We appreciate your patience and will reach out to you soon"
                status="succuss"
            />
        )
    }


    return (
        <form class="scale-up-center" onSubmit={(e) => onSubmit(e)}>
            <div className='mb-[10px]'>
                <label for="email" className="block mb-2 text-sm font-medium text-dark-900 dark:text-light-900 font-roboto ">
                    Your email
                </label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow-sm  bg-gray-50 border border-gray-300 text-dark-900 font-roboto text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-500  dark:shadow-sm-light focus:outline-none " placeholder="name@email.com" required />
            </div>
            <div className='mb-[10px]'>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-light-900 font-roboto ">
                    Subject
                </label>
                <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-500 dark:text-dark-900 font-roboto dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light focus:outline-none " placeholder="Describe the subject" required />
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-light-900 font-roboto ">
                    Your message
                </label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-500 dark:text-dark-900 font-roboto dark:focus:ring-primary-500 dark:focus:border-primary-500 focus:outline-none " placeholder="Leave a comment . . ."></textarea>
            </div>
            <button type="submit" className=" py-3 px-5 bg-gray-900 dark:bg-[#00829b] mt-[15px] text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-8  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shadow-drop-center">
                Send message
            </button>
        </form>
    )
}
