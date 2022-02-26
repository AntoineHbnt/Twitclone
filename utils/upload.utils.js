const {
  getStorage,
  ref,
  upload,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

module.exports.uploadFiles = async (files, userId, origin) => {
  let paths = [];

  try {
    await Promise.all(
      files.map(async (file) => {
        if (file.size > 500000) throw Error("max size");
        if (file.mimetype != "image/jpeg") throw Error("invalid file");

        const storageRef = ref(
          storage,
          `users/${userId}/${origin}/` + Date.now() + "_" + file.originalname
        );
        await uploadBytes(storageRef, file.buffer, {
          contentType: "image/jpeg",
        });
        await getDownloadURL(storageRef).then((url) => {
          paths.push(url);
        });
      })
    );
    return paths;
  } catch (err) {
    throw Error(err)
  }
};

/* if (files !== null) {
    try {
      await Promise.all(
        files.map((file, i) => {
          if (
            file.detectedMimeType !== "image/jpg" &&
            file.detectedMimeType !== "image/png" &&
            file.detectedMimeType !== "image/jpeg"
          )
            throw Error("invalid file");

          if (file.size > 1000000) {
            throw Error("max size");
          }
          filepaths.push(
            `users/${req.params.id}/tweet/` + Date.now() + i + ".jpg"
          );
        })
      );
      for (let i = 0; i < files.length; i++) {
        const bytes = files[i].stream
        console.log(bytes);
        await uploadBytes(ref(storage, filepaths[i]), bytes).then(
          (snapshot) => {
            console.log("Uploaded a blob or file!");
          }
        );
      }
    } catch (err) {
      const errors = uploadErrors(err);
      return res.status(201).send(err.message);
    }
  } */
