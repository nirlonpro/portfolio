import "../css/contact.css";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
    const [copiedField, setCopiedField] = useState("");
    const copyToClipboard = async (text, type) => {

    try {

        if (navigator.clipboard && window.isSecureContext) {

            await navigator.clipboard.writeText(text);

        } else {

            const textArea = document.createElement("textarea");

            textArea.value = text;

            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";

            document.body.appendChild(textArea);

            textArea.focus();
            textArea.select();

            document.execCommand("copy");

            document.body.removeChild(textArea);

        }

        setCopiedField(type);

        setTimeout(() => {

            setCopiedField("");

        }, 2000);

    } catch (err) {

        console.error(err);

    }

};
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [copied, setCopied] = useState(false);

    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (loading) return;

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.subject.trim() ||
            !formData.message.trim()
        ) {
            setStatusMessage("Please fill all fields.");

            setTimeout(() => {
                setStatusMessage("");
            }, 3000);

            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            setStatusMessage("Please enter a valid email address.");

            setTimeout(() => {
                setStatusMessage("");
            }, 3000);

            return;
        }

        setLoading(true);

        try {
            // Email to you
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            // Auto reply to visitor
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatusMessage("Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatusMessage("Failed to send message. Please try again.");
        } finally {
            setLoading(false);

            setTimeout(() => {
                setStatusMessage("");
            }, 5000);
        }


    };

    return (
        <section id="contact" className="contact">



            <div className="contact-wrapper">

                <div className="contact-left">

                    <span className="contact-tag">
                        GET IN TOUCH
                    </span>

                    <h2>
                        Let's Build
                        Something
                        Extraordinary.
                    </h2>

                    <p>
                        I'm always excited to collaborate on
                        innovative projects, discuss new ideas,
                        and create digital experiences that make
                        a lasting impact.
                    </p>

                    <div className="contact-details">

                        <div className="detail">

                            <div className="detail-top">

                                <span>Email</span>

                                <button
    type="button"
    className="copy-email-btn"
    onClick={() =>
        copyToClipboard(
            "nirlonmacwan27@gmail.com",
            "email"
        )
    }
>
    {copiedField === "email"
        ? "✓ Copied"
        : "Copy"}
</button>

                            </div>

                            <h3>
                                nirlonmacwan27@gmail.com
                            </h3>

                        </div>

                        <div className="detail">
                            <div className="detail-top">

                                <span>Phone no.</span>

                                <button
    type="button"
    className="copy-ph-btn"
    onClick={() =>
        copyToClipboard(
            "+91 9687007744",
            "phone"
        )
    }
>
    {copiedField === "phone"
        ? "✓ Copied"
        : "Copy"}
</button>
                            </div>

                            <h3>
                                +91 96870 07744
                            </h3>

                        </div>

                        <div className="detail">
                            <span>Location</span>
                            <h3>Anand, Gujarat, India</h3>
                        </div>

                        <div className="detail">
                            <span>Availability</span>
                            <h3>Open For Opportunities</h3>
                        </div>

                    </div>



                </div>

                <div className="contact-right">
                    <div className="contact-buttons">

                        <a
                            href="https://wa.me/919687007744"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn whatsapp"
                        >
                            <FaWhatsapp />
                            WhatsApp
                        </a>

                        <a
                            href="mailto:nirlonmacwan27@gmail.com"
                            className="contact-btn email"
                        >
                            <MdEmail />
                            Email Me
                        </a>

                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h1>Contact Me.</h1>
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <textarea
                                rows="6"
                                name="message"
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message →"}
                        </button>
                        {statusMessage && (
                            <p className="status-message">
                                {statusMessage}
                            </p>
                        )}

                    </form>

                </div>

            </div>

            {/* <div className="contact-footer">

                <p>
                    © 2026 Nirlon Macwan
                </p>

                <div className="socials">

                    <a href="#">
                        <FaGithub />
                    </a>

                    <a href="#">
                        <FaLinkedin />
                    </a>

                    <a href="#">
                        <MdEmail />
                    </a>

                </div>

            </div> */}

        </section>
    );
}

export default Contact;