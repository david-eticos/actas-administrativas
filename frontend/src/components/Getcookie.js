import Cookie from "js-cookie";

export const Getcookie = (cookiename) => {
  console.log(cookiename);
  return Cookie.get(cookiename);
};
