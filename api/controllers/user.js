import { db } from "../db.js";

export const getUsers = (req, res) => {
 const q = "SELECT * FROM usuarios";

 db.query(q, (err, data) => {
  if (err) return res.json(err);

  const username = req.body.usuario
  const password = req.body.senha

  const user = data.find((user) => {
   return user.usuario === username && user.senha === password;
  });


  if (user) {
   req.session.user = user;
   return res.status(200).json(user);
  } else {
   return res.status(200).json(0);
  }


 });
};
