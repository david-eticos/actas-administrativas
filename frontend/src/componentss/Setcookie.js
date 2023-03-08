import Cookie from "js-cookie";
const REACTAPI = process.env.REACT_APP_API;

export const Setcookie = (cookiename, IdToken) => {
  Cookie.set(cookiename, IdToken, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: `${REACTAPI}`,
  });
  console.log(cookiename);
};
