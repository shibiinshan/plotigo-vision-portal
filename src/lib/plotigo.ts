export const PLOTIGO = {
  name: "Plotigo",
  tagline: "Your right choice is here.",
  phone: "+919744000000",
  phoneDisplay: "+91 97440 00000",
  whatsapp: "919744000000",
  email: "hello@plotigo.in",
  instagram: "https://instagram.com/plotigo.in",
  address: "Kochi, Kerala, India",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${PLOTIGO.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const generalWhatsapp = whatsappLink(
  "Hi Plotigo, I'm looking for a property. Can you help me find the right choice?",
);