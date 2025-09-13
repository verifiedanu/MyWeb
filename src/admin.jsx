export default function AdminDashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2 mb-6">
        🐾 Admin Dashboard
      </h1>
      <p className="text-gray-500 mb-10">Manage pets, adoption requests, and donations</p>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <p className="text-gray-500">Pets Listed</p>
          <h2 className="text-3xl font-bold text-blue-600">0</h2>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <p className="text-gray-500">Pending Requests</p>
          <h2 className="text-3xl font-bold text-yellow-500">3</h2>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <p className="text-gray-500">Total Donations</p>
          <h2 className="text-3xl font-bold text-green-600">$1500</h2>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <p className="text-gray-500">Adoptions Completed</p>
          <h2 className="text-3xl font-bold text-purple-600">5</h2>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-4 mb-10">
        <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium">Pet Management</button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full">Adoption Requests</button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full">Donations</button>
      </div>

      {/* Pet Listings */}
      <div className="bg-white rounded-2xl shadow p-6 mb-10">
        <h2 className="text-xl font-semibold mb-2">🐶 Pet Listings</h2>
        <p className="text-gray-500 mb-4">Manage your pet inventory</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 flex items-center gap-2">
          ➕ Add Pet
        </button>
        <p className="mt-6 text-gray-400">No pets listed yet.</p>
      </div>

      {/* Adoption Requests */}
      <div className="bg-white rounded-2xl shadow p-6 mb-10">
        <h2 className="text-xl font-semibold mb-2">📩 Adoption Requests</h2>
        <p className="text-gray-500 mb-4">Review and manage adoption requests</p>
        <p className="text-gray-400">No requests yet.</p>
      </div>

      {/* Donations Overview */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-2">💰 Donations Overview</h2>
        <p className="text-gray-500">Total raised this year: $1500</p>
        <p className="text-gray-400 mt-4">Graph will go here...</p>
      </div>
    </div>
  );
}
