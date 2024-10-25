// src/Contact.js
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="bg-black text-white py-10   min-h-screen">
            <div className="container mx-auto p-4 sm:p-6 md:p-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Me</h2>
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Get in Touch Information */}
                    <div className="flex-1 mb-6 md:mr-4">
                        <div className="text-black bg-gradient-to-r from-purple-100 to-orange-200 p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                            <p className="mb-2 text-2xl font-medium">📧 Email: <span className='text-violet-900'>nurrahul12@gmail.com</span></p>
                            <p className="mb-2 text-2xl font-medium">📞 Phone: <span className='text-violet-900'>+8801673212616</span></p>
                            <p className="text-2xl mb-2 font-medium">🏠 Address: <span className='text-violet-900'>Feni,Bangladesh</span></p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="flex-1 mx-8">
                        <form onSubmit={handleSubmit} className="bg-white rounded-lg text-xl p-4 shadow-lg text-black">
                            <div className="mb-4">
                                <label className="block mb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-gray-700 text-white rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-gray-700 text-white rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2" htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-gray-700 text-white rounded"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="bg-gradient-to-r from-purple-500 to-yellow-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-transparent hover:text-white border-2 border-transparent hover:border-dashed hover:border-green-800">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
