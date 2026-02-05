export const openWhatsApp = (product) => {
  const phoneNumber = "919701469944"; // +91 9701469944

  const message = `
Hello Maha Sri Fashions 👋

I would like to order:

Product: ${product.name}
Product ID: ${product.productId}
Category: ${product.category}
Price: ₹${product.price}

Please let me know availability.
`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
