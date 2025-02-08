import { Link } from "react-router-dom";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }); 
      };
    
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <Link to="/" onClick={scrollToTop}>Men</Link>
          <Link to="/" onClick={scrollToTop}>Women</Link>
          <Link to="/" onClick={scrollToTop}>Kids</Link>
          <Link to="/" onClick={scrollToTop}>Home & Living</Link>
          <Link to="/" onClick={scrollToTop}>Beauty</Link>
          <Link to="/" onClick={scrollToTop}>Gift Card</Link>
          <Link to="/" onClick={scrollToTop}>Myntra Insider</Link>
        </div>

        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <Link to="/" onClick={scrollToTop}>Men</Link>
          <Link to="/" onClick={scrollToTop}>Women</Link>
          <Link to="/" onClick={scrollToTop}>Kids</Link>
          <Link to="/" onClick={scrollToTop}>Home & Living</Link>
          <Link to="/" onClick={scrollToTop}>Beauty</Link>
          <Link to="/" onClick={scrollToTop}>Gift Card</Link>
          <Link to="/" onClick={scrollToTop}>Myntra Insider</Link>
        </div>

        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <Link to="/" onClick={scrollToTop}>Men</Link>
          <Link to="/" onClick={scrollToTop}>Women</Link>
          <Link to="/" onClick={scrollToTop}>Kids</Link>
          <Link to="/" onClick={scrollToTop}>Home & Living</Link>
          <Link to="/" onClick={scrollToTop}>Beauty</Link>
          <Link to="/" onClick={scrollToTop}>Gift Card</Link>
          <Link to="/" onClick={scrollToTop}>Myntra Insider</Link>
        </div>
      </div>
      <hr />

      <div className="copyright">
        © 2025 www.myntra.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
