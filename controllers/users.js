const User = require("../models/user");

/** POST: Create a User
 * FILTER: .save()
 */
exports.createUser = async (req, res, next) => {
  try {
    const user = await new User(req.body).save();
    res.status(200).json({ data: user });
  } catch (err) {
    next(err);
  }
};
