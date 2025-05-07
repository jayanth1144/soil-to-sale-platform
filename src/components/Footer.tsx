
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Farm-Connect
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Bridging the gap between farmers and retailers with advanced crop recommendations.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Features
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/crop-recommendation" className="text-base text-gray-600 hover:text-farm-green-600">
                  Crop Recommendation
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-base text-gray-600 hover:text-farm-green-600">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/crop-support" className="text-base text-gray-600 hover:text-farm-green-600">
                  Crop Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="#" className="text-base text-gray-600 hover:text-farm-green-600">
                  Farmer's Guide
                </Link>
              </li>
              <li>
                <Link to="#" className="text-base text-gray-600 hover:text-farm-green-600">
                  Crop Calendar
                </Link>
              </li>
              <li>
                <Link to="#" className="text-base text-gray-600 hover:text-farm-green-600">
                  Market Trends
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="mailto:info@farm-connect.com" className="text-base text-gray-600 hover:text-farm-green-600">
                  info@farm-connect.com
                </a>
              </li>
              <li>
                <Link to="#" className="text-base text-gray-600 hover:text-farm-green-600">
                  +91 9876543210
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-base text-gray-500">
            &copy; 2024 Farm-Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
