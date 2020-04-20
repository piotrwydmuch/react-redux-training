import React from "react";
import { Button } from "@material-ui/core";

const Ninjas = ({ ninjas, deleteNinja }) => {

  const styles = {
    marginTop: 20,
  }

  const ninjaList = ninjas.map((ninja) => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id} style={styles}>
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
