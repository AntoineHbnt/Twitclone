const res = require("express/lib/response");

module.exports.registerErrors = (err) => {
  let errors = { userAt: "", userPseudo: "", email: "", password: "" };

  if (err.message.includes("userAt"))
    errors.userAt = "Nom d'utilisateur incorrect";

    if (err.message.includes("userPseudo"))
    errors.userPseudo = "Votre pseudo doit contenir au minimum 6 caractères";

  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit faire 6 caractères minimum";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("userAt"))
    errors.userAt = "Nom d'utilisateur déjà pris";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est déjà enregistré";

  return errors;
};

module.exports.loginErrors = (err) => {
  let errors = { identifiant: "", password: "" };
  console.log(err);

  if (err.message.includes("identifiant"))
    errors.identifiant = "L'identifiant renseigné est inexistant";
  if (err.message.includes("password"))
    errors.password = "Le mot de passe ne correspond pas";

  return errors;
};
