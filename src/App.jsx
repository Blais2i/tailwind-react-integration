import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Tailwind CSS + React
        </h1>
        <p className="text-gray-600 text-center">
          Successfully integrated Tailwind CSS with React and Vite!
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
            Primary Button
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
            Secondary Button
          </button>
        </div>
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm">
            ✅ Tailwind CSS is working correctly! You can see the styling applied to this component.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App