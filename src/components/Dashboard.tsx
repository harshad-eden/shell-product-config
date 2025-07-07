import React from "react";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const isEmbedded = location.pathname.startsWith('/products');

  return (
    <div className="p-6">
      {/* Portal Indicator Banner */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
        <h3 className="text-sm font-medium text-orange-800">
          ⚙️ You are currently in the Product Configuration Portal
        </h3>
        <p className="text-xs text-orange-600 mt-1">
          Manage insurance products, pricing, and configuration
        </p>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Product Configuration Dashboard</h1>
        <p className="text-gray-600 mb-4">
          Create and manage insurance products, pricing rules, and eligibility criteria
        </p>
      </div>

      {/* Simple metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 border rounded-lg">
          <div className="text-2xl font-bold">12</div>
          <div className="text-sm text-gray-600">Active Products</div>
        </div>
        <div className="bg-white p-4 border rounded-lg">
          <div className="text-2xl font-bold">3</div>
          <div className="text-sm text-gray-600">Pending Reviews</div>
        </div>
        <div className="bg-white p-4 border rounded-lg">
          <div className="text-2xl font-bold">8</div>
          <div className="text-sm text-gray-600">Rate Changes</div>
        </div>
        <div className="bg-white p-4 border rounded-lg">
          <div className="text-2xl font-bold">98%</div>
          <div className="text-sm text-gray-600">Compliance Rate</div>
        </div>
      </div>

      {/* Product list */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Insurance Products</h2>
        
        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Health Insurance - Premium</h3>
              <p className="text-gray-600">Comprehensive health coverage</p>
              <p className="text-sm text-gray-500">Base Premium: $450/month</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Active</span>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Life Insurance - Term</h3>
              <p className="text-gray-600">20-year term life insurance</p>
              <p className="text-sm text-gray-500">Base Premium: $75/month</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Active</span>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Auto Insurance - Full Coverage</h3>
              <p className="text-gray-600">Comprehensive auto insurance</p>
              <p className="text-sm text-gray-500">Base Premium: $120/month</p>
            </div>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Under Review</span>
          </div>
        </div>
      </div>
    </div>
  );
}