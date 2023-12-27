import React, { useEffect, useState } from "react";
import axios from "axios";

interface RandomUser {
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
  cell: string;
}

const RandomUserGenerator: React.FC = () => {
  const [user, setUser] = useState<RandomUser | null>(null);

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((response) => {
      setUser(response.data.results[0]);
    });
  }, []);

  return (
    <div className="flex flex-wrap p-20 "> 
      {user && (
        <div className="flex flex-col items-center">
          <img className="imgTeam rounded-full  " src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
          <div className="infoTeam text-slate-700 pt-5">
            <p> Nome: {user.name.first} {user.name.last}</p>
            <p> E-mail: {user.email}</p>
            <p> Tel.: {user.cell}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomUserGenerator;
