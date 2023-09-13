import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const parameter = useParams();

  useEffect(() => {
    console.log(parameter.userId);
  }, [parameter]);

  return (
    <div>
      <h1>Profile of {`${parameter.userId}`}</h1>
    </div>
  );
}

export default Profile;
