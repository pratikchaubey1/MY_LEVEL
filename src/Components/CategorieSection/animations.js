
// Simple and smooth title animation
export const categoryTitleAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Gentle staggered card entrance
export const categoryCardAnim = (index) => ({
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { 
    delay: index * 0.1, 
    duration: 0.5, 
    ease: "easeOut" 
  },
});
