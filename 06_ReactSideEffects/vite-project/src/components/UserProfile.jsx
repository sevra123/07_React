import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const apiURL = "https://jsonplaceholder.typicode.com/users/";
  const [user, setUser] = useState(null);

  function fetchUser(apiURL, userId) {
    fetch(`${apiURL}${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }

  //ovo se izvrsava svaki put kada se komponenta renderira.
  //ovo ne raditi jer ce prouzrociti beskonacnu petlju, zbog togav sto se komponenta svaki put ponovo renderira kada promijenimo state
  //useEffect(() => {
  //fetch(`${apiURL}${userId}`)
  //  .then((res) => res.json())
  //  .then((data) => setUser(data));
  // });

  //izvrsava se nakon svakog renderiranja
  useEffect(() => {
    console.log("Rendered");
  });

  //izvrsava se samo jednom, nakon prvog/pocetnog renderiranja
  useEffect(() => {
    console.log("Mounted");
    fetchUser(apiURL, userId);
  }, []);

  //izvrsava se samo kada se userId promijeni (koristi se u realnom svijetu)
  useEffect(() => {
    console.log("User changed to: " + userId);
    fetchUser(apiURL, userId);
  }, [userId]);

  return <div>{user ? user.name : "Loading..."}</div>;
}

export default UserProfile;
