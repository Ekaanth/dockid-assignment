import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Dashboard = () => {
  const ratingData = [
    {
      name: "Rating 1",
      rating: 12,
    },
    {
      name: "Rating 2",
      rating: 45,
    },
    {
      name: "Rating 3",
      rating: 63,
    },
    {
      name: "Rating 4",
      rating: 78,
    },
    {
      name: "Rating 5",
      rating: 44,
    },
  ];

  const timeData = [
    {
      name: "0-6",
      time: 10,
    },
    {
      name: "6-12",
      time: 65,
    },
    {
      name: "12-18",
      time: 83,
    },
    {
      name: "18-24",
      time: 21,
    },
  ];
  return (
    <div className="container pt-6 pl-6">
      <div className="space-y-5 border-b-4 p-2">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <h1 className="header">Dashboard</h1>
          <Link to={"/rate"}>
            <button className="myBtn lg:px-6 px-4 text-lg">Rate a user</button>{" "}
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 truncate">
            User DID
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            dock:did:2312468534
          </div>
        </div>
        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 truncate">
            Total users rated
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">123</div>
        </div>
        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 truncate">
            Average rating
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            4.5/5.0
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6 ">
        <div className="px-4 py-5 bg-white rounded-lg shadow">
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            Rating
          </div>
          <BarChart className="pt-5" width={550} height={250} data={ratingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="top" align="right" />
            <Bar dataKey="rating" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="px-4 py-5 bg-white rounded-lg shadow">
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            Rating time
          </div>
          <BarChart className="pt-5" width={550} height={250} data={timeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="top" align="right" />
            <Bar dataKey="time" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
