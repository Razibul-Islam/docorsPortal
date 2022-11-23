import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(
        `https://doctors-portal-server-three-nu.vercel.app/jwt?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            // console.log(data);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};
export default useToken;
