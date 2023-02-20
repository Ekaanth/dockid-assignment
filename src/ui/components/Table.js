import React from "react";
import StarRatings from "react-star-ratings";

export const Table = ({ histories, headers, rateUser }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {headers.map((header, index) => (
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      key={index}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {histories.map((history, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {history.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {history.did}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      <StarRatings
                        rating={history.averageRating}
                        starDimension="35px"
                        starSpacing="5px"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {history.rating ? (
                        <>
                          <StarRatings
                            rating={history.averageRating}
                            starDimension="35px"
                            starSpacing="5px"
                          />
                        </>
                      ) : (
                        <>
                          <button
                            className="myBtn lg:px-6 px-4"
                            onClick={() => rateUser("clicked!")}
                          >
                            Rate this user
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
