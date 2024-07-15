import { motion } from "framer-motion";

const HelpSupport = () => {
  return (
    <>
      <motion.section
        className="pt-24 container max-w-screen-lg mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Help & Support</h1>
        <p className="mb-8 text-lg leading-7 text-gray-600 text-center">
          Welcome to the Help & Support page! Here you will find answers to frequently asked questions, ways to contact us, and other resources to help you with your shopping experience.
        </p>

        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">Frequently Asked Questions</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">1. How do I place an order?</h3>
            <p className="text-lg leading-7 text-gray-600">
              To place an order, simply browse our products, add items to your cart, and proceed to checkout. Follow the prompts to complete your purchase.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">2. What payment methods do you accept?</h3>
            <p className="text-lg leading-7 text-gray-600">
              We accept various payment methods, including credit/debit cards, PayPal, and other secure payment options.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">3. How can I track my order?</h3>
            <p className="text-lg leading-7 text-gray-600">
              Once your order is shipped, you will receive a confirmation email with a tracking number. Use this number to track your order on our website or the carrier's website.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">4. What is your return policy?</h3>
            <p className="text-lg leading-7 text-gray-600">
              We offer a 30-day return policy on most items. Please refer to our Return Policy page for detailed information on how to initiate a return.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">5. How do I contact customer support?</h3>
            <p className="text-lg leading-7 text-gray-600">
              You can contact our customer support team through the following methods:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>Email: support@[GOG.com]</li>
              <li>Phone: +1 (800) 123-4567</li>
              <li>Live Chat: Available on our website during business hours</li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">Additional Resources</h2>
          <ul className="list-disc list-inside text-lg text-gray-600">
            <li className="mb-2">
              <a href="/shipping-info" className="text-blue-500 hover:underline">
                Shipping Information
              </a>
            </li>
            <li className="mb-2">
              <a href="/return-policy" className="text-blue-500 hover:underline">
                Return Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="/privacy-policy" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="/terms-of-service" className="text-blue-500 hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <p className="text-lg leading-7 text-gray-600 text-center mt-8">
          If you have any other questions or need further assistance, please don't hesitate to reach out to us. We are here to help!
        </p>
      </motion.section>
    </>
  );
};

export default HelpSupport;
