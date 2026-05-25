function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        marginTop: 10,
        padding: "16px",
        borderTop: "1px solid #eaea",
        textAlign: "center",
      }}
    >
      <small>{year} Info Kartice - Sva prava pridržana</small>
    </footer>
  );
}

export default Footer;
