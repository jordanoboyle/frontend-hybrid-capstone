export function Footer() {

  const footerStyle = {
    padding: "20px",
    backgroundColor: "rgba(128, 128, 128, 0.5)", // transclucent grey backgrounbd
    textAlign: "center",
    color: "#fff", //setting color text to white
    position: "fixed",  //fixes footer to the bottom
    bottom: 0,  //alligns with bottom
    width: "100%" // entire width of view port
  }
  return (
    <footer style={footerStyle}>
      <p style={{ margin: 0}}>Copyright 2024</p>
    </footer>
  )
}