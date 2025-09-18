'use client'
import React from 'react'
import { useState } from "react";

const Contactform = () => {

    const contactMethods = [
        {
            link:'mailto:ceo@afautogloss.com'
            ,
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            contact: "ceo@afautogloss.com"
        },
        {
            link:'tel:+919966004662'
            ,
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ,
            contact: "+91 9966004662"
        },
        {
            link:"javascript:void(0)"
            ,
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ,
            contact: "Dilkushnagar, IDPL Colony, Hyderabad, India (500037)."
        },
    ]

    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });
    const { username, email, phone, company, message } = data

    const [status, setStatus] = useState(null);

    const handleChange = e =>
    setData({ ...data, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setData("");

        try {
        const response = await fetch("https://v1.nocodeapi.com/mujjupalaan/google_sheets/KDlCxnByISmWVuhY?tabId=Sheet1", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify([[username, email, phone, company, new Date().toLocaleString(), message]]),
        });
        if (response.status === 200) {
            setData({
            username: "",
            email: "",
            phone: "",
            company: "",
            message: "",
            });
            setStatus("success");
        } else {
            setStatus("error");
        }
        }
        catch (err) {
        console.log(err);
        }
    };

    return (
        <main className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3">
                        <h3 className="text-indigo-600 font-semibold">
                            Contact
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Let us know how we can help
                        </p>
                        <p>
                            We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information bellow .
                        </p>
                        <div>
                            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                                {
                                    contactMethods.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-x-3">
                                            <a href={item.link}>
                                            <div className="flex-none text-gray-400">
                                                {item.icon}
                                            </div>
                                            </a>
                                            <p>{item.contact}</p>
                                            
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                        <form
                             onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            <div>
                                <label htmlFor="username" className="font-medium">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter your name"
                                    value={username}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="off"
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="font-medium">
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Enter your phone"
                                    value={phone}
                                    onChange={handleChange}
                                    required
                                    autoComplete="off"
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="company"  className="font-medium">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Enter your Company name"
                                    value={phone}
                                    onChange={handleChange}
                                    required
                                    autoComplete="off"
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="font-medium">
                                    Message
                                </label>
                                <textarea 
                                    name="message"
                                    // rows={5}
                                    placeholder="Enter your Message"
                                    value={message}
                                    onChange={handleChange}
                                    required
                                    autoComplete="off" 
                                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                            </div>

                            <div>
                                {status === "success" && (
                                    <p className={styles.success_msg}>
                                        Thank you for your message!
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className={styles.error_msg}>
                                        There was an error submitting your message. Please try again.
                                    </p>
                                )}
                            <button
                                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            >
                                Submit
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contactform