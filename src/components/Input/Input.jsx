export const Input = (props) => {
  const { handleChange } = props;

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <input
        style={{
          width: "100%",
          border: "none",
          backgroundColor: "#F2F2F2",
          borderRadius: 24,
          padding: "16px",
          marginBottom: 32,
        }}
        type="text"
        name="input"
        placeholder="What Pokémon are you looking for?"
        onChange={handleChange}
      />
    </div>
  );
};
