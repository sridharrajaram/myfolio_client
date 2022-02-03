import React from 'react';
import './Certification.css';

function Certification(props) {
    const myProfileDetails = props.details;

  return (
    <div className="container">
      <h2 className="text-center">Certifications</h2>
      <br />
      <br />
      <div className="row">
        {myProfileDetails.certifications.map((certificate) => {
          return (
            <div className="col-12 col-md-6 certificate-tile text-center">
              <img src={certificate.image} className="certificateimage" alt="certifications" />
              <p>{certificate.coursename}</p>
            </div>
          );
        })}
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Certification
