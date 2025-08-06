import { FaEnvelope, FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa";

function ContactSection() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <div className="footer-social-links">
          <a href="#" target="_blank">
            <FaGithub />
          </a>
          <a href="#" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="#" target="_blank">
            <FaTelegram />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default ContactSection;
