import React, { useEffect, useState } from "react";

const initialDetails = {
  name: "",
  email: "",
  phone: "",
  address: {}
};

function Profile() {
  const [details, setDetails] = useState(initialDetails);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setDetails(data); // `data` has the full user object
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p><strong>Name:</strong> {details.name}</p>
      <p><strong>Email:</strong> {details.email}</p>
      <p><strong>Phone:</strong> {details.phone}</p>
      {details.address && (
        <p><strong>Address:</strong> {details.address.street}, {details.address.city}</p>
      )}
    </div>
  );
}

export default Profile;
