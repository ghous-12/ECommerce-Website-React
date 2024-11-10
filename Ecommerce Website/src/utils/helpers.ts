export const getToken = () => {
  return Cookies.get("token") || null;
};
