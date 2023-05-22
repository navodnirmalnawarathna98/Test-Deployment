import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [adminData, setAdminData] = useState([]);

    console.log("kkkkkkkkkkkkkk", adminData)

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const response = await axios.get('http://localhost:8070/admin/'); // Replace with your actual backend API endpoint to fetch admin data
                setAdminData(response.data);
            } catch (error) {
                console.error('Error fetching admin data:', error);
            }
        };

        fetchAdminData();
    }, []);

  return (
    <div>
        <table>
  <thead>
    <tr>
      <th>f Name</th>
      <th>l Name</th>
      <th>Email</th>
      {/* Add more table headers as needed */}
    </tr>
  </thead>
  <tbody>
    {adminData.map((adminItem) => (
      <tr key={adminItem.id}>
        <td>{adminItem.firstName}</td>
        <td>{adminItem.lastName}</td>
        <td>{adminItem.email}</td>
        {/* Add more table cells as needed */}
      </tr>
    ))}
  </tbody>
</table>

        
    </div>
  )
}

export default Admin