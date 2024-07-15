import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.section 
        className="pt-20 container max-w-screen-xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold py-6 text-center text-gray-800">About Us</h1>
        <div className="bg-white shadow-md rounded-lg p-8">
          <p className="mt-4 text-lg leading-7 text-gray-600">
            Welcome to our e-commerce store, your one-stop destination for premium sports apparel and footwear. Our mission is to provide athletes and sports enthusiasts with top-quality products that enhance performance and style.
          </p>
          <p className="mt-4 text-lg leading-7 text-gray-600">
            Founded in 2024, we started with a simple idea: to make high-quality sportswear accessible to everyone. We believe that every athlete deserves the best gear to achieve their goals, whether they're training for a marathon, hitting the gym, or just looking for comfortable and stylish sportswear for everyday use.
          </p>
          <p className="mt-4 text-lg leading-7 text-gray-600">
            Our product range includes a wide variety of sports shoes, t-shirts, shorts, and accessories from top brands and our exclusive in-house collections. We carefully curate our selections to ensure that each item meets our high standards of quality, comfort, and durability.
          </p>
          <p className="mt-4 text-lg leading-7 text-gray-600">
            We are committed to providing an exceptional shopping experience. Our user-friendly website, secure payment options, and fast shipping ensure that you get your products quickly and safely. Our dedicated customer support team is always here to assist you with any questions or concerns.
          </p>
          <p className="mt-4 text-lg leading-7 text-gray-600">
            Thank you for choosing our store for your sportswear needs. We look forward to helping you achieve your fitness goals with the best gear available.
          </p>
          <p className="mt-4 text-lg leading-7 text-gray-600">
            Stay active, stay stylish, and most importantly, stay motivated!
          </p>
          <p className="mt-4 text-lg leading-7 text-gray-600">
            Best regards,
            <br />
            <span className="font-semibold text-primary">The GOG Team</span>
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default About;
