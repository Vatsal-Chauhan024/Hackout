import React, { useState } from 'react';
import api from "../api/api"
import { ToastContainer, toast } from 'react-toastify';

const NotificationComponent = () => {
  const notifications = [
    {
      user: 'Jean marc',
      role: 'Admin',
      createdAt: '12/09/2020',
      status: 'active',
    },
    {
      user: 'Marcus coco',
      role: 'Designer',
      createdAt: '01/10/2012',
      status: 'active',
    },
  ];

  const [selectedStatus, setSelectedStatus] = useState(
    notifications.reduce((statusObj, _, index) => {
      statusObj[index] = 'pending';
      return statusObj;



    }, {})
  );

  const handleStatusChange = (index, status) => {
    setSelectedStatus((prevStatus) => ({
      ...prevStatus,
      [index]: status,
    }));

    api.post("", sessionStorage.getItem("Email_Id")).then((response)=>{
        toast.success(response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
        })
    })
    .catch((error)=>{
        toast.error((error.response.data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light", 
        }))
  })
  };

  return (
    <>
    <ToastContainer/>
    <div className="container max-w-3xl px-4 mx-auto sm:px-8">
      <div className="py-8">
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    User
                  </th>
                  <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    Role
                  </th>
                  <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    Created at
                  </th>
                  <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {notifications.map((notification, index) => (
                  <tr key={index}>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {notification.user}
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {notification.role}
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {notification.createdAt}
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <button
                        className={`${
                          selectedStatus[index] === 'approved'
                            ? 'bg-green-500'
                            : 'bg-gray-300'
                        } px-2 py-1 text-white rounded mr-2`}
                        onClick={() => handleStatusChange(index, 'approved')}
                      >
                        Approved
                      </button>
                      <button
                        className={`${
                          selectedStatus[index] === 'pending'
                            ? 'bg-yellow-500'
                            : 'bg-gray-300'
                        } px-2 py-1 text-white rounded`}
                        onClick={() => handleStatusChange(index, 'pending')}
                      >
                        Pending
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default NotificationComponent;
