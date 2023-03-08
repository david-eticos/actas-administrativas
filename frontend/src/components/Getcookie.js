import Cookie from "js-cookie";

export const Getcookie = (cookiename) => {

  return Cookie.get(cookiename);
};
