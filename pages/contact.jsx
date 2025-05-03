import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
import { SiUpwork } from 'react-icons/si';
import { HiMail, HiUser } from 'react-icons/hi';
import { BsChatTextFill } from 'react-icons/bs';
import Fiverr_Icon from '../components/Fiverr_Icon';
import Footer from '../components/Footer';
import { Modal } from 'antd';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to: 'sadibhatti274@gmail.com', // Your email address
      to_name : 'Saad Abdullah',
      from : formData.email,
      from_name : formData.name,
      message : `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    emailjs.send('service@789', 'template_53rmla3', templateParams, '8BRxhua_BYrdvUA6b')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setIsOpen(true);
        setFormData({ name: '', email: '', message: '' });
        setError(null);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setError('Failed to send message. Please try again later.');
      });
  };

  return (
    <BannerLayout>
      <div className="px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="text-LightGray md:text-sm">Pakistan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="text-LightGray md:text-sm">Islamabad</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Company:</span>
                <span className="text-LightGray md:text-sm">Undefined</span>
              </div>
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="text-LightGray text-sm">
                  username@gmail.com
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Linkedin:</span>
                <a 
                  href="https://www.linkedin.com/in/saadabdullah786/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-LightGray text-sm hover:text-Green transition-colors duration-300 flex items-center gap-2"
                >
                  <span>Click here</span>
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone:</span>
                <span className="text-LightGray text-sm">
                  +92 (318) 5914xxx
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="#"
            // target="_blank"
            rel="noreferrer"
          >
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://github.com/Saad-Abdulah"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://www.youtube.com/@saadabdullahintech"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700 hidden sm:block"
            href="https://www.fiverr.com/saad_abdulah/"
            target="_blank"
            rel="noreferrer"
          >
            <Fiverr_Icon />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1"
            href="https://www.upwork.com/freelancers/~01187b3f3184d6725b"
            target="_blank"
            rel="noreferrer"
          >
            <SiUpwork />
          </a>
        </div>

        <div className="my-12 w-full h-auto text-Snow">
          <h1 className="text-lg font-bold">Get In Touch</h1>
          <form onSubmit={handleSubmit} className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
            <div>
              <div className="flex flex-col w-full">
                <div className="userIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                  >
                    <HiUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input_stylings"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="mailIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                  >
                    <HiMail />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input_stylings"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="textIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                  >
                    <BsChatTextFill />
                  </div>
                  <textarea
                    rows={6}
                    cols={50}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input_stylings"
                    placeholder="Message"
                    required
                  />
                </div>
              </div>

              <div className="my-4">
                <button type="submit" className="button">
                  SEND MESSAGE
                </button>
              </div>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </form>
        </div>
      </div>
      {/* Success modal */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-Green font-bold text-2xl">Message Sent Successfully!</h1>
          <a
            className="underline text-Snow"
            target="_blank"
            href="https://www.linkedin.com/in/saad-abdullah-779a832a7/"
          >
            Send msg on LinkedIn
          </a>
        </div>
      </Modal>
      <Footer />
    </BannerLayout>
  );
};

export default Contact;