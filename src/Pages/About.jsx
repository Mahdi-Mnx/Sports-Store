import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <motion.section className="pt-20  container max-w-screen-2xl">
        <h1 className="text-2xl font-bold py-4 bg-primary/20  text-center">About Us</h1>
        <p className="mt-4 px-5">
          Welcome to our e-commerce store, your one-stop destination for premium sports apparel and footwear. Our mission is to provide athletes and sports enthusiasts with top-quality products that enhance performance and style.
        </p>
        <p className="mt-4 px-5">
          Founded in 2024, we started with a simple idea: to make high-quality sportswear accessible to everyone. We believe that every athlete deserves the best gear to achieve their goals, whether they're training for a marathon, hitting the gym, or just looking for comfortable and stylish sportswear for everyday use.
        </p>
        <p className="mt-4 px-5">
          Our product range includes a wide variety of sports shoes, t-shirts, shorts, and accessories from top brands and our exclusive in-house collections. We carefully curate our selections to ensure that each item meets our high standards of quality, comfort, and durability.
        </p>
        <p className="mt-4 px-5">
          We are committed to providing an exceptional shopping experience. Our user-friendly website, secure payment options, and fast shipping ensure that you get your products quickly and safely. Our dedicated customer support team is always here to assist you with any questions or concerns.
        </p>
        <p className="mt-4 px-5">
          Thank you for choosing our store for your sportswear needs. We look forward to helping you achieve your fitness goals with the best gear available.
        </p>
        <p className="mt-4 px-5">
          Stay active, stay stylish, and most importantly, stay motivated!
        </p>
        <p className="mt-4 px-5">
          Best regards,
          <br />
          The GOG Team
        </p>
      </motion.section>
    </>
  );
};

export default About;
