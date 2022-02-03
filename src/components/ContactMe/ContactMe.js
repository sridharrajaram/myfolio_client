import React, { useState } from "react";
import "./ContactMe.css";
import axios from "axios";

//const uri = "http://localhost:5000/send_mail";
const uri = "https://sridharrajaram-myfolio-server.herokuapp.com/send_mail";



function ContactMe() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  // For reseting to initial form
  const resetContactForm = (e) => {
    setFullname("");
    setEmail("");
    setSubject("");
    setMessage("");

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    let contactData = { fullname, email, subject, message };
    
    try {
      await axios.post(`${uri}`, contactData)
      setSent(true);
    } catch (error) {
      console.log("Mail not sent");
    }
    resetContactForm();
  };

  return (
    <form onSubmit={handleSendMail}>
    <div className="container contact">
      
        <div className="row">
          <h2 className="text-center">Contact</h2>
          <br />
          <br />
          <div className="col-md-4">
            <div className="contact-info">
              <img
                src="https://image.ibb.co/kUASdV/contact-image.png"
                alt="contact"
              />
              <h2>Contact Me</h2>
              <h5>I am very glad to hear from you!!!</h5>
              <br />
            </div>
          </div>

          <div className="col-md-8">
            <div className="contact-form">
              <div className="form-group">
                <label className="control-label col-sm-2" for="fullname">
                  Full Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    placeholder="Enter your Fullname"
                    name="fullname"
                    value={fullname}
                    onChange={(e) => {setFullname(e.target.value)}}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  Email:
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="subject">
                  Subject:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Enter subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => {setSubject(e.target.value)}}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-sm-2" for="message">
                  Message:
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows="5"
                    id="message"
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => {setMessage(e.target.value)}}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                {!sent ? (<div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">
                    Send Mail
                  </button>
                </div>):(<h3 style={{color:"Yellow"}}>Mail Sent Successfully</h3>)}
                
              </div>
            </div>
          </div>
        </div>
      
    </div>
    </form>
  );
}

export default ContactMe;
