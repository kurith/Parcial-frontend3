
const Card = ({ data }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Datos ingresados:</h3>
      <p style={styles.text}>
        Primer input: {data.input1} <br />
        Segundo input: {data.input2}
      </p>
    </div>
  );
};

const styles = {
  card: {
    padding: 20,
    borderRadius: 5,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 1.5,
  },
};

export default Card;
