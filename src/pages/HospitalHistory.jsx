import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../helper/useAuth';

const fakeData = [
  {
    id: 1,
    doctor: 'Dr. Smith',
    receptionist: 'Emily',
    doctorSpeciality: 'Cardiologist',
    receptionistSpeciality: 'Front Desk',
    doctorExperience: '10 years',
    receptionistExperience: '5 years', // Receptionist Experience added
  },
  {
    id: 2,
    doctor: 'Dr. Johnson',
    receptionist: 'Sarah',
    doctorSpeciality: 'Dermatologist',
    receptionistSpeciality: 'Customer Service',
    doctorExperience: '8 years',
    receptionistExperience: '3 years', // Receptionist Experience added
  },
  {
    id: 3,
    doctor: 'Dr. Brown',
    receptionist: 'Michael',
    doctorSpeciality: 'Orthopedic Surgeon',
    receptionistSpeciality: 'Administration',
    doctorExperience: '12 years',
    receptionistExperience: '7 years', // Receptionist Experience added
  },
];

const HospitalHistory = () => {
  useAuth();

//   useEffect(() => {
//     axios.get('YOUR_API_ENDPOINT')
//       .then(response => {
//         setHospitalHistory(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

  return (
    <>
      <div className="alert rounded-none w-screen flex justify-between">
        <span className='text-2xl font-semibold text-primary'>Hospital History</span>
        <div>
          <Link to="/hospital"><button className="btn btn-sm btn-primary">Back</button></Link>
        </div>
      </div>
      <section className="antialiased bg-gray-100 text-gray-600 h-fit px-4">
        <div className="flex flex-col justify-center ">
          <div className="w-full w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">About Hospital</h2>
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
                        <div className="font-semibold text-left">Doctor Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Receptionist Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Doctor Speciality</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Receptionist Speciality</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Doctor Experience</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Receptionist Experience</div>
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
                          <div className="text-left">{entry.doctor}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{entry.receptionist}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-center">{entry.doctorSpeciality}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-center">{entry.receptionistSpeciality}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-center">{entry.doctorExperience}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-center">{entry.receptionistExperience}</div>
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
    </>
  );
};

export default HospitalHistory;
