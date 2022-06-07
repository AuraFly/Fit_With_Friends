const router = require("express").Router();
const formidable = require("formidable");
const path = require("path");
const { User } = require("../../models");
const withAuth = require("../../utils/auth");
const fs = require("fs");

const form = new formidable.IncomingForm({ keepExtensions: true });
var newImg;

router.post("/", withAuth, async (req, res) => {
  const uploadFolder = path.join(__dirname, "../../", "public", "upload");

  form.uploadDir = uploadFolder;
  console.log(form);
  console.log(uploadFolder);
  const isFileValid = (file) => {
    const type = file.mimetype.split("/").pop();
    const validTypes = ["jpg", "jpeg", "png", "pdf"];
    if (validTypes.indexOf(type) === -1) {
      return false;
    }
    return true;
  };

  form.parse(req, async (err, fields, files) => {
    console.log(fields);
    console.log(files);
    if (err) {
      console.log("Error parsing the files");
      return res.status(400).json({
        status: "Fail",
        message: "There was an error parsing the files",
        error: err,
      });
    }

    if (!files.myFile.length) {
      const file = files.myFile;
      const isValid = isFileValid(file);
      const fileName = encodeURIComponent(file.newFilename.replace(/\s/g, "-"));

      if (!isValid) {
        return res.status(400).json({
          status: "Fail",
          message: "The file type is not a valid type",
        });
      }

      try {
        const updatedRows = await User.update(
          {
            userImage: `/upload/${fileName}`,
          },
          {
            where: { id: req.session.user_id },
          }
        );
        console.log(updatedRows);
        return res.redirect("/account");
      } catch (error) {
        res.json({
          error,
        });
      }
    }
  });
});

module.exports = router;
