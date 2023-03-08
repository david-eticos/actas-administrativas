import Cookie from "js-cookie";

export const Removecookie = (cookiename) => {
  return Cookie.remove(cookiename);
};
