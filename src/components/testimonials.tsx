import { motion } from "framer-motion";
import SecondTestimonialCarousel from "./second-testimonial-carousel";
import "@/styles/testimonials.scss";

const Testimonials = () => {
  return (
    <motion.div
        className="testimonials-main-container"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true }} 
      >
      <h3 className="testimonials-main-title">Trusted by the best in business</h3>
      <SecondTestimonialCarousel/>
    </motion.div>
  )
}

export default Testimonials