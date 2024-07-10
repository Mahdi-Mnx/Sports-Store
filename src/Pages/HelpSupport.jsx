import { motion } from "framer-motion";

const HelpSupport = () => {
  return (
    <>
      <motion.section className="pt-24 container max-w-screen-2xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Help & Support</h1>
        <p className="mb-4">
          Welcome to the Help & Support page! Here you will find answers to
          frequently asked questions, ways to contact us, and other resources to
          help you with your shopping experience.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          1. How do I place an order?
        </h3>
        <p className="mb-4">
          To place an order, simply browse our products, add items to your cart,
          and proceed to checkout. Follow the prompts to complete your purchase.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          2. What payment methods do you accept?
        </h3>
        <p className="mb-4">
          We accept various payment methods, including credit/debit cards,
          PayPal, and other secure payment options.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          3. How can I track my order?
        </h3>
        <p className="mb-4">
          Once your order is shipped, you will receive a confirmation email with
          a tracking number. Use this number to track your order on our website
          or the carrier's website.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          4. What is your return policy?
        </h3>
        <p className="mb-4">
          We offer a 30-day return policy on most items. Please refer to our
          Return Policy page for detailed information on how to initiate a
          return.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          5. How do I contact customer support?
        </h3>
        <p className="mb-4">
          You can contact our customer support team through the following
          methods:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Email: support@[GOG.com]</li>
          <li>Phone: +1 (800) 123-4567</li>
          <li>Live Chat: Available on our website during business hours</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <a href="/shipping-info" className="text-blue-500">
              Shipping Information
            </a>
          </li>
          <li>
            <a href="/return-policy" className="text-blue-500">
              Return Policy
            </a>
          </li>
          <li>
            <a href="/privacy-policy" className="text-blue-500">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-of-service" className="text-blue-500">
              Terms of Service
            </a>
          </li>
        </ul>

        <p className="mt-6">
          If you have any other questions or need further assistance, please
          don't hesitate to reach out to us. We are here to help!
        </p>
      </motion.section>
    </>
  );
};

export default HelpSupport;
