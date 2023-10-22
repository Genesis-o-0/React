import { useSelector } from "react-redux";

export default function About() {
  const totalDonations = useSelector((state) => state.counter.value);

  return (
    <>
      <div className="jumbotron pt-5">
        <h1>About Us</h1>
        <p>
          Welcome to Product Showcase, your go-to destination for discovering
          and exploring a wide range of high-quality products. Our mission is to
          provide a platform where you can find detailed information about
          various products from different categories.
        </p>
        <p>
          Whether you're looking for electronics, fashion, home decor, or any
          other type of product, we're here to help you make informed decisions.
          Our team of experts reviews and curates the best products to make your
          shopping experience easier and more enjoyable.
        </p>
        <p>
          Thank you for choosing Product Showcase as your product discovery
          resource. We hope you find our website useful and that it enhances
          your shopping journey.
        </p>
        <h3 className="text-center text-primary fw-bold py-5">
          Amount of donations: {totalDonations}$
        </h3>
      </div>
    </>
  );
}
