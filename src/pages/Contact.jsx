const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <p className="text-gray-600 mb-8">
        Get in touch with Maha Sri Fashions for orders and enquiries.
      </p>

      <div className="space-y-4 text-lg">
        <p>
          📞 <strong>Phone / WhatsApp:</strong> 9701469944
        </p>
        <p>
          🏠 <strong>Location:</strong> Home-based business (India)
        </p>
        <p>
          ⏰ <strong>Timings:</strong> 10 AM – 8 PM
        </p>
      </div>

      <a
        href="https://wa.me/919701469944"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-10 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
      >
        Chat on WhatsApp
      </a>
    </section>
  );
};

export default Contact;
