// import passportJWT from "../config/passport";
import passportJWT from "passport";

export default {
  authenticate: (req, res, next) => {
    passportJWT.authenticate("jwt", { session: false }, (err, user) => {
      if (err) {
        return res.json(err);
      }

      if (!user) {
        return res.status(200).json({
          success: true,
          msg: "An error occurred!",
        });
      }

      req.user = user;
      return next();
    })(req, res, next);
  },
};
