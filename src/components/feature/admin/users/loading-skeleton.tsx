const LoadingSkeleton = () => {
  return (
    <div
      className="p-6 max-w-7xl mx-auto"
      role="status"
      aria-label="Loading users"
      aria-live="polite"
    >
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="animate-pulse bg-gray-200 h-10 w-full rounded-lg" />
        </div>

        <div className="flex gap-2">
          <div className="animate-pulse bg-gray-200 h-10 w-32 rounded-lg" />
          <div className="animate-pulse bg-gray-200 h-10 w-32 rounded-lg" />
        </div>

        <div className="animate-pulse bg-gray-200 h-10 w-24 rounded-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
          >
            <div className="animate-pulse bg-gray-200 h-4 w-20 mb-2 rounded" />
            <div className="animate-pulse bg-gray-200 h-8 w-16 rounded" />
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <div className="animate-pulse bg-gray-200 h-4 w-12 rounded" />
                </th>
                <th className="px-6 py-3 text-left">
                  <div className="animate-pulse bg-gray-200 h-4 w-10 rounded" />
                </th>
                <th className="px-6 py-3 text-left">
                  <div className="animate-pulse bg-gray-200 h-4 w-12 rounded" />
                </th>
                <th className="px-6 py-3 text-left">
                  <div className="animate-pulse bg-gray-200 h-4 w-24 rounded" />
                </th>
                <th className="px-6 py-3 text-left">
                  <div className="animate-pulse bg-gray-200 h-4 w-16 rounded" />
                </th>
                <th className="px-6 py-3 text-left">
                  <div className="animate-pulse bg-gray-200 h-4 w-16 rounded" />
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="animate-pulse bg-gray-200 h-10 w-10 rounded-full flex-shrink-0" />
                      <div className="ml-4 space-y-1">
                        <div className="animate-pulse bg-gray-200 h-4 w-28 rounded" />
                        <div className="animate-pulse bg-gray-200 h-3 w-36 rounded" />
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="animate-pulse bg-gray-200 h-6 w-16 rounded-full" />
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="animate-pulse bg-gray-200 h-6 w-14 rounded-full" />
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="animate-pulse bg-gray-200 h-4 w-20 rounded" />
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="animate-pulse bg-gray-200 h-4 w-24 rounded" />
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <div className="animate-pulse bg-gray-200 h-6 w-6 rounded" />
                      <div className="animate-pulse bg-gray-200 h-6 w-6 rounded" />
                      <div className="animate-pulse bg-gray-200 h-6 w-6 rounded" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4">
        <div className="animate-pulse bg-gray-200 h-4 w-48 rounded" />
      </div>

      <span className="sr-only">Loading user data...</span>
    </div>
  );
};

export default LoadingSkeleton;
