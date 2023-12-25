import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Contact.css";


export default function Contact(){
    return (
        <div className="contactPadding">
          <div className="border shadow-sm mt-4">
            <div className="contactHeader">Contact</div>
          </div>
    
          <div className="contactContent">
            <div className="contactFlex d-flex align-items-center justify-content-between">
              <div>
                <img src={require("../assets/pic5.jpg")} alt="contact" />
              </div>
              <div className="contactText">
                <p className="teal-color lettalk">Let's talk</p>
                <p className="lettalktext">
                  Got any questions? Don't hesitate to get in touch
                </p>
                <p className="lettalktext1">
                  lorem ipsums dolor lorem ipsums dolor
                </p>
    
                <div className="d-flex align-items-center py-3">
                  <FontAwesomeIcon icon={faMapLocationDot} className="teal-color" />
                  <div className="px-4">
                    <p className="m-0 contactDot">Address</p>
                    <p className="m-0">Phnom Penh, Cambodia</p>
                  </div>
                </div>
    
                <div className="d-flex align-items-center py-3">
                  <FontAwesomeIcon icon={faPhone} className="teal-color" />
                  <div className="px-4">
                    <p className="m-0 contactDot">Phone</p>
                    <p className="m-0">(+855) 66584606</p>
                  </div>
                </div>
    
                <div className="d-flex align-items-center py-3">
                  <FontAwesomeIcon icon={faEnvelope} className="teal-color" />
                  <div className="px-4">
                    <p className="m-0 contactDot">Email</p>
                    <p className="m-0">kasisnbtp@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="contactLast my-5">
            <div className="contactLastContent d-flex border rounded shadow-sm p-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="contactMail teal-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
    
                <h5 className="mt-4">
                  If you like what you see, let's work together
                </h5>
    
                <p className="contactlasttext">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nam
                  perspiciatis dicta, ut debitis repudiandae obcaecati a voluptate,
                  illum nihil at neque voluptatem error doloremque ipsum
                  exercitationem incidunt odit? Tenetur?
                </p>
              </div>
    
              <div className="contactNoneMargin">
                <div className="d-flex align-items-center mb-2">
                  <input
                    type="text"
                    placeholder="Enter your fullname..."
                    className="contactInput form-control"
                  />
                  <input
                    type="text"
                    placeholder="Enter your email..."
                    className="contactInput form-control"
                  />
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="contactInput form-control"
                  placeholder="Your message..."
                ></textarea>
                <button className="btn btn-success mt-2">Send</button>
              </div>
            </div>
          </div>
        </div>
    );
}