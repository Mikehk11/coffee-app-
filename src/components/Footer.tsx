const Footer = () => {
  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#f7f7f7",
        padding: "2rem",
        marginTop: "4rem",
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>📬 Contact Us</h2>
      <p>Address: 123 Bean Street, Ottawa, ON</p>
      <p>Email: hello@coffeeco.ca</p>
      <p>Phone: (613) 123-4567</p>
      <p>Hours: Mon - Sun: 8am - 6pm</p>
    </footer>
  );
};

export default Footer;