const Nominal = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const nominal = await Nominal.find();
      res.render("admin/nominal/view_nominal", { nominal });
    } catch (error) {
      console.log(error);
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render("admin/nominal/create");
    } catch (error) {
      console.log(error);
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { cointName, cointQty, price } = req.body;
      let nominal = await Nominal({ cointName, cointQty, price });

      await nominal.save();

      res.redirect("/nominal");
    } catch (error) {
      console.log(error);
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      const nominal = await Nominal.findByIdAndRemove({ _id: id });

      res.redirect("/nominal");
    } catch (err) {
      console.log(err);
    }
  },
  viewEdit: async (req, res) => {
    try {
      const { id } = req.params;

      const nominal = await Nominal.findOne({ _id: id });

      res.render("admin/nominal/edit", { nominal });
    } catch (err) {
      console.log(err);
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const { cointName, cointQty, price } = req.body;

      const nominal = await Nominal.findByIdAndUpdate(
        { _id: id },
        { cointName, cointQty, price }
      );

      res.redirect("/nominal");
    } catch (err) {}
  },
};
