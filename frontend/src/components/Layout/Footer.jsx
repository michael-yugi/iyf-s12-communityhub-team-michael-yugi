
function Footer() {
  return (
    <footer className="footer">
      <h3>CommunityHub</h3>

      <p>Connecting people and building communities.</p>

      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <p>
        &copy; {new Date().getFullYear()} CommunityHub.
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
