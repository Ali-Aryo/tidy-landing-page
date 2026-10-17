export const site = {
  brand: 'Tidy',
  email: 'allenshapiro245@gmail.com',
}

// Stays a bare "mailto:" until a real address replaces the placeholder.
export const mailtoHref = site.email.includes('@') ? `mailto:${site.email}` : 'mailto:'
