import React, {useState} from 'react'
import useAuth from '../../helper/useAuth'
import api from "../../api/api"
import { ToastContainer, toast } from 'react-toastify'

const AddUsers = () => {
  useAuth();

  const [userType, setUserType] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [speciality, setSpeciality] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    const userData = {
      userType,
      fullName,
      email,
      speciality,
    };

    api
      .post('/contact', userData)
      .then((response) => {
        toast.success(response.data.message, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: 'light',
        });
        setUserType('');
        setFullName('');
        setEmail('');
        setSpeciality('');
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: 'light',
        });
      });
  }



  return (
    <div>
      <ToastContainer/>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center justify-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 shadow-xl bg-slate-100">
          <div className="mx-auto max-w-lg text-center ">
            <h1 className="text-2xl font-bold sm:text-3xl text-primary">Add Users</h1>
          </div>
          <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit}>
            <div>
              <div className="relative">
                <select
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-gray-400 outline-none"
                  defaultValue="Select user"
                  value={userType}
                onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="option1">Doctor</option>
                  <option value="option2">Receptionist</option>
                </select>

              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                  placeholder="Enter FullName"
                  value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                  placeholder="Enter Email"
                  value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                  placeholder="Enter Speciality"
                  value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default AddUsers
