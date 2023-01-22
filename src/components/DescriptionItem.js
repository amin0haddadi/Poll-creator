import { ShowEmoji } from "./ShowEmoji";

export const DescriptionItem = ({ emojis, setEmojis }) => {
  return (
    <>
      {emojis.filter((emo=>emo.isSelected)).map((emojii) => {
        return (
          <>
           <label htmlFor={emojii.title}>
              <div>
                <h4>
                Description for
                <ShowEmoji
                  src={emojii.src}
                  viewStyle={"description"}
                  name={emojii.title}
                />
                :
                </h4>
              </div>
            </label>
            <input
              type="text"
              name={emojii.title}
              id={emojii.title}
              onChange={(e) => {
                setEmojis(
                  [...emojis].map((obj) => {
                    if (obj.title === emojii.title) {
                      return { ...obj, description: e.target.value };
                    } else {
                      return obj;
                    }
                  })
                );
              }}
            />
          </>
        );
      })}
    </>
  );
};
