const Category = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const category = await Category.find();
      res.render("admin/category/view_category", { category });
    } catch (error) {
      console.log(error);
    }
  },

  viewCreate: async (req, res) => {
    try {
      res.render("admin/category/create");
    } catch (err) {
      console.log(err);
    }
  },

  actionCreate: async (req, res) => {
    try {
      const { categoryName } = req.body;

      let category = await Category({
        categoryName,
      });
      await category.save();
      res.redirect("/category");
    } catch (error) {
      console.log(err);
    }
  },
  viewEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ _id: id });

      res.render("admin/category/edit", { category });
    } catch (err) {}
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const { categoryName } = req.body;

      const category = await Category.findByIdAndUpdate(
        { _id: id },
        { categoryName }
      );

      res.redirect("/category");
    } catch (err) {
      console.log(err);
    }
  },

  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      const categry = await Category.findByIdAndRemove({ _id: id });

      res.redirect("/category");
    } catch (err) {
      console.log(err);
    }
  },
};
