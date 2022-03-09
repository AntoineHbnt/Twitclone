import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTweetError } from "../../../actions/error.action";
import { updateMedia } from "../../../actions/tweetInput.action";

const Media = () => {
  const [disable, setDisable] = useState(false);

  const dispatch = useDispatch();
  const media = useSelector((state) => state.tweetInputReducer.media);


  const uploadErrors = (err) => {
    let errors = "";
  
    if (err.message.includes("invalid file"))
      errors = "Veuillez choisir au plus 4 photos";
  
    if (err.message.includes("max size"))
      errors = "Le fichier est trop grand";
  
    return errors;
  };

  const handleMedia = (e) => {
    try{
      const files = Array.from(e.target.files)   
      console.log(files);
      
      files.map((file) => {
        if(file.type !== "image/jpeg") throw Error("invalid file")
        if(file.size > 500000) throw Error("max size")
      })
      
      dispatch(updateMedia(media.concat(files)));
    }catch(err) {
      const error = uploadErrors(err);
      dispatch(addTweetError(error));
    }

  }

  useEffect(() => {
    media.length > 3 ? setDisable(true) : setDisable(false);
  }, [media]);

  return (
    <div className={"option-logo" + (disable ? " disable" : "")}>
      <img src="./img/icons/tweetInput/option/image.svg" alt="media" />

      {disable ? (
        <></>
      ) : (
        <input
          accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime,video/webm"
          multiple="4"
          type="file"
          name="pictures"
          onChange={handleMedia}
        ></input>
      )}
    </div>
  );
};

export default Media;
