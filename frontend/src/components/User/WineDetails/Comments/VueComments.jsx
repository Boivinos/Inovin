import React from "react";
import fakeComments from "../fakeComments";

function VueComments() {
  return (
    <>
      <p>Commentaires :</p>
      {fakeComments.map((com) => {
        return (
          <>
            <p>{`${com.user} le ${com.date} :`}</p>
            <p>{com.content}</p>
          </>
        );
      })}
    </>
  );
}

export default VueComments;
