const {
  getStorage,
  ref,
  upload,
  uploadBytesResumable,
  getDownloadURL,
} = require("firebase/storage");

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

module.exports.uploadFiles = async (files, userId, origin) => {
  const promises = [];
  let paths = [];
  await Promise.all(
    files.map(async (file) => {
      const storageRef = ref(
        storage,
        `users/${userId}/${origin}/` +
          Date.now() +
          "_" +
          file.originalname
      );
      await uploadBytesResumable(storageRef, file.buffer);
      await getDownloadURL(storageRef).then((url) => {
        paths.push(url);
      });
    })
  );

  return paths;
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
