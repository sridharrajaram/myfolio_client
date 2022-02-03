import React from "react";
import "./Achievements.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function Achievements(props) {
  const myProfileDetails = props.details;

  return (
    <div className="container">
      <h2 className="text-center">Achievements</h2>
      <br />
      <br />
      {myProfileDetails.achievements.map((achievement) => {
        return (
          <div key={achievement.id} className="row" style={{ padding: "10px" }}>
            <Card className="root" variant="outlined">
              <CardContent>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {achievement.star}
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Achievements;
