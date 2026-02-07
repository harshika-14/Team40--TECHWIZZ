import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-wrapper fade-up">

        <div className="contact-left">
          <h2>Get In Touch</h2>
          <p>
            Have questions about SAERS or need assistance?
            Our team is here to help you anytime.
          </p>

          <div className="contact-info">
            <p>📧 support@saers.com</p>
            <p>📞 +91 123456789</p>
            <p>📍 India</p>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
