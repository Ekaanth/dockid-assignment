import React, { useState } from "react";
import { Table } from "../components/Table";
import StarRatings from "react-star-ratings";

const Rate = () => {
  const [searchUser, setSearchUser] = useState();
  const [userRating, setUserRating] = useState(0);
  const [searchSubmit, setSearchSubmit] = useState(false);
  const headers = ["Name", "DID", "User Average Rating", "Your rating"];
  const histories = [
    {
      name: "Person 1",
      did: "dock:DID:123212",
      averageRating: 4.5,
      rating: undefined,
    },
    {
      name: "Person 2",
      did: "dock:DID:123212",
      averageRating: 4,
      rating: 2.5,
    },
    {
      name: "Person 3",
      did: "dock:DID:123212",
      averageRating: 4.5,
      rating: undefined,
    },
    {
      name: "Person 4",
      did: "dock:DID:123212",
      averageRating: 4,
      rating: 5,
    },
    {
      name: "Person 5",
      did: "dock:DID:123212",
      averageRating: 3.5,
      rating: undefined,
    },
  ];
  const rateUser = (value) => {
    setSearchUser(value);
  };

  const changeRating = (newRating) => {
    setUserRating(newRating);
  };

  const submitRating = () => {
    console.log(userRating);
    setSearchUser();
    setSearchSubmit(false);
    setUserRating(0);
  };

  const userSearch = (event) => {
    if (!searchUser) return;
    event.preventDefault();
    setSearchSubmit(true);
    setSearchUser("");
  };

  return (
    <div className="container pt-6 pl-3">
      <div className="grid grid-cols-1">
        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div className="flex items-center justify-center">
            <div className="m-5 w-2/5 flex justify-between">
              <span className="font-bold pt-2">Search a user</span>
              <div className="flex items-center">
                <input
                  type="text"
                  id="search"
                  name="search"
                  autoComplete="search"
                  required
                  placeholder="Enter user DID"
                  className="px-4 py-2 border border-gray-400 rounded-l-md"
                  onChange={(e) => setSearchUser(e.target.value)}
                />
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
                  onClick={userSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {searchSubmit ? (
        <>
          <div className="grid grid-cols-1 pt-4">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <span className="font-bold p-2">User info</span>
              <div className="w-2/4">
                <div className="m-2 w-2/4 flex justify-between">
                  <span>Name</span>
                  <span>Person 1</span>
                </div>
                <div className="m-2 w-2/4 flex justify-between">
                  <span>DID</span>
                  <span>dock:DID:123212</span>
                </div>
                <div className="m-2 w-2/4 flex justify-between">
                  <span>Average Rating </span>
                  <span>3.5</span>
                </div>
                <div className="m-2  flex justify-between">
                  <span className="pt-4">Rate user </span>
                  <StarRatings
                    rating={userRating}
                    changeRating={changeRating}
                    name="rating"
                  />
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={submitRating}
                  >
                    Rate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="grid grid-cols-1 pt-4">
        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
          <span className="font-bold p-2">History</span>
          <Table histories={histories} headers={headers} rateUser={rateUser} />
        </div>
      </div>
    </div>
  );
};

export default Rate;
