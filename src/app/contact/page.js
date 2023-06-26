import React from "react";
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
	return (
		<>
			<div className={styles.container}>
				<h1>Contact Us</h1>
				<ContactCard />

				<section className={styles.contact_section}>
					<h2>
						We'd love to hear <span> from you </span>
					</h2>

					<ContactForm />
				</section>
			</div>

			{/*  */}
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8660014717!2d90.25446582657518!3d23.780863189968727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1687793461968!5m2!1sen!2sbd"
				width={600}
				height={450}
				style={{ border: 0 }}
				allowfullscreen=""
				loading="lazy"
				className={styles.mapping}
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</>
	);
};

export default Contact;
