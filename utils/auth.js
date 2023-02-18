// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// check for user's login status
const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    console.log(req.session);
    res.redirect("/login");
  } else {
    console.log(req.session);
    next();
  }
};

// const sellWithAuth = (req, res, next) => {
//   if (!req.session.logged_in) {
//     res.redirect("/sell");
//   } else {
//     next();
//   }
// };

module.exports = withAuth;

// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
