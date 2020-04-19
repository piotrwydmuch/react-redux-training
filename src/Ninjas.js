import React from "react";
import { Button } from "@material-ui/core";

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map((ninja) => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id} style={{ marginTop: 10 }}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete
        </Button>
      </div>
    ) : null;
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
