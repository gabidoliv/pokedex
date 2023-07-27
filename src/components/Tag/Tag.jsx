export const Tag = (props) => {
  const { text } = props;

  return (
    <div
      style={{ backgroundColor: "purple", borderRadius: 15, marginRight: 8 }}
    >
      <h3>{text}</h3>
    </div>
  );
};
