module.exports = {
  index: async (req, res) => {
    try {
      res.render("index", {
        title: "Express Javasript",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
