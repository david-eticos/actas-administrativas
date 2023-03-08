import Cookie from "js-cookie";

export const Removecookie = (cookiename) => {
  console.log(cookiename);
  return Cookie.remove(cookiename);
};
