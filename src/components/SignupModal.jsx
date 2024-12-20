import React from "react";

const SignupModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Box */}
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        {/* Modal Content */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h2>
        <form className="space-y-6">
          {/* Personal Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Personal Info
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="First Name"
              />
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Surname"
              />
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Region/Town"
              />
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Residential Address"
              />
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Courier Address"
              />
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Contact No"
              />
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="DOB/ID No"
              />
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Email Address"
              />
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="P.O. Box"
              />
            </div>
          </div>

          {/* Bank Address */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Bank Address
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Bank"
              />
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Account Name"
              />
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Account Number"
              />
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option value="" disabled selected>
                  Account Type
                </option>
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
              </select>
            </div>
          </div>

          {/* Next of Kin */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Next of Kin
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Contact No"
              />
            </div>
          </div>

          {/* Referral Details */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Referral Details
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Cell No"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Note */}
      <div className="absolute bottom-4 text-white text-center px-6">
        <p className="bg-gray-900 bg-opacity-75 p-4 rounded-lg text-sm">
          <strong>NB:</strong> Please remember to submit your ID copy to the
          office (WhatsApp: 0812936019).
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
