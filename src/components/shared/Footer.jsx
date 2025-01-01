import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-20">
      {/* Footer Links */}
      <div>
        <span className="footer-title">Services</span>
        <Link to="/catering" className="link link-hover">Catering</Link>
        <Link to="/delivery" className="link link-hover">Delivery</Link>
        <Link to="/reservations" className="link link-hover">Reservations</Link>
        <Link to="/event-hosting" className="link link-hover">Event Hosting</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/about" className="link link-hover">About Us</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
        <Link to="/jobs" className="link link-hover">Jobs</Link>
        <Link to="/press" className="link link-hover">Press Kit</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to="/terms" className="link link-hover">Terms of Use</Link>
        <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
        <Link to="/cookie-policy" className="link link-hover">Cookie Policy</Link>
      </div>

      {/* Social Media */}
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <Link to="/twitter">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 4.557a9.954 9.954 0 01-2.825.775 4.935 4.935 0 002.163-2.723 9.864 9.864 0 01-3.127 1.196 4.916 4.916 0 00-8.38 4.482 13.947 13.947 0 01-10.126-5.14 4.822 4.822 0 00-.664 2.475 4.916 4.916 0 002.188 4.095 4.894 4.894 0 01-2.228-.616v.062a4.914 4.914 0 003.946 4.827 4.934 4.934 0 01-2.224.084 4.923 4.923 0 004.6 3.417 9.868 9.868 0 01-6.102 2.102c-.395 0-.779-.023-1.161-.067a13.978 13.978 0 007.548 2.211c9.051 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.637A9.935 9.935 0 0024 4.557z" />
            </svg>
          </Link>
          <Link to="/facebook">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.337v21.326C0 23.403.597 24 1.337 24H12v-9.294H9.293v-3.622H12V8.413c0-2.692 1.64-4.165 4.038-4.165 1.146 0 2.132.085 2.418.123v2.805h-1.656c-1.299 0-1.55.618-1.55 1.524v1.998h3.1l-.404 3.622h-2.696V24h5.285c.741 0 1.338-.597 1.338-1.337V1.337C24 .597 23.403 0 22.675 0z" />
            </svg>
          </Link>
          <Link to="/instagram">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.358 3.608 1.332.975.975 1.27 2.242 1.332 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.358 2.633-1.332 3.608-.975.975-2.242 1.27-3.608 1.332-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.358-3.608-1.332-.975-.975-1.27-2.242-1.332-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.358-2.633 1.332-3.608.975-.975 2.242-1.27 3.608-1.332 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.259 0-3.667.012-4.947.07-1.281.059-2.506.352-3.41 1.256-.903.904-1.197 2.129-1.256 3.41-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.059 1.281.352 2.506 1.256 3.41.904.903 2.129 1.197 3.41 1.256 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.281-.059 2.506-.352 3.41-1.256.903-.904 1.197-2.129 1.256-3.41.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.059-1.281-.352-2.506-1.256-3.41-.904-.903-2.129-1.197-3.41-1.256-1.28-.058-1.688-.07-4.947-.07z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
