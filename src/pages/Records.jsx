import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../helper/useAuth';

const fakeData = [
  {
    id: 1,
    hospital: 'Hospital A',
    doctor: 'Dr. Smith',
    date: '2023-08-01',
    slot: '9 AM',
    description: 'Checkup',
  },
  {
    id: 2,
    hospital: 'Hospital B',
    doctor: 'Dr. Johnson',
    date: '2023-08-02',
    slot: '2 PM',
    description: 'Consultation',
  },
  {
    id: 3,
    hospital: 'Hospital C',
    doctor: 'Dr. Brown',
    date: '2023-08-03',
    slot: '4 PM',
    description: 'Follow-up',
  },
];

const Records = () => {
  useAuth();
  return (
    <>
    <div className="alert rounded-none w-screen flex justify-between">
  <span className='text-2xl font-semibold text-secondary'>Past Records</span>
  <div>
    <Link to = "/home"><button className="btn btn-sm btn-primary">Back</button></Link>
  </div>
</div>
    <section className="antialiased bg-gray-100 text-gray-600 h-fit px-4">
      <div className="flex flex-col justify-center ">
        <div className="w-full w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Patient Details</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Serial No.</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Hospital Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Doctor Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Date</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Slots</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Description</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {fakeData.map(entry => (
                    <tr key={entry.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{entry.id}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">{entry.hospital}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{entry.doctor}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{entry.date}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">{entry.slot}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">{entry.description}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <div className="join grid grid-cols-2 w-fit">
  <button className="join-item btn btn-outline">Previous page</button>
  <button className="join-item btn btn-outline">Next</button>
</div> */}
    </>
  );
};

export default Records;
