import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Experience.css";

function Experience(props) {

  const myProfileDetails = props.details;

  return (
    <div className="container">
        <h2 className="text-center">Experience</h2>
        <br />
        <br />
        {myProfileDetails.experiences.map((experience) => {
      return (
        <div key={experience.id} className="row" style={{ padding: "10px" }}>
          <Card className="root" variant="outlined">
            <CardContent>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                {experience.company}
              </Typography>
              {experience.positions.map((position) => {
                return (
                  <div key={position.id}>
                    <Typography variant="h6">{position.positions}</Typography>
                    <Typography className="pos" color="textSecondary">
                      {position.timeline}
                    </Typography>
                    {/* <Typography variant="body2">
                      {position.description}
                    </Typography> */}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      );})}
      </div>
        
  );
}

export default Experience
