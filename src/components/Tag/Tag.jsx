import { lighten } from "polished";

export const Tag = (props) => {
  const { text } = props;

  return (
    <div
      style={{
        backgroundColor: lighten(0.06, "rgb(72, 207, 178)"),
        borderRadius: 15,
        marginRight: 8,
        padding: "4px 16px",
        height: "fit-content",
      }}
    >
      <h3 style={{ margin: 0 }}>{text}</h3>
    </div>
  );
};
