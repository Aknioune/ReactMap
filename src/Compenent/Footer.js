import React from "react";

const Footer = () => {
  return (
<footer class="footer">
  <div class="footer-container">
    <div class="footer-section">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida dui eu est congue, id volutpat nisi efficitur.</p>
    </div>
    <div class="footer-section">
      <h2>Contact Us</h2>
      <p>Email: info@gmail.com</p>
      <p>Phone: 0000000000</p>
      <p>Address:397</p>
    </div>
    <div class="footer-section">
      <h2>Follow Us</h2>
      <div class="social-links">
        <a href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2023 Company Name. All Rights Reserved.</p>
  </div>
</footer>

  );
};

export default Footer;
