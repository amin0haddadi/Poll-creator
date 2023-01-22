import { ShowEmoji } from "./ShowEmoji";

export const ShowPreviewEmoji = ({ emojis }) => {
  return (
    <div>
      {emojis.filter((emo=>emo.isSelected)).map((emojii) => {
        return (
          <>
          <div className="d-flex">
          <ShowEmoji
                  src={emojii.src}
                  viewStyle={"preview"}
                  name={emojii.title}
                />
                <div className="flex center">{emojii.description}</div>
          </div>  
          </>
        );
      })}
      </div>
    
  );
};
