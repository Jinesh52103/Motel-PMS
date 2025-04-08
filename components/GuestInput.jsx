




export default function GuestInput({ formData, handleChange, button, handleSubmit, roomOptions }) {






  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid justify-center text-blue-600 dark:text-sky-400 py-20">
      <form className="grid grid-cols-2 gap-4 bg-white p-6 rounded shadow-md w-full max-w-3xl">
        <h3 className="col-span-2 text-xl font-bold">Guest Detail</h3>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="w-full px-2 py-1 bg-gray-200 rounded text-black"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="w-full px-2 py-1 bg-gray-200 rounded text-black"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="w-full px-2 py-1 bg-gray-200 rounded text-black"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-2 py-1 bg-gray-200 rounded text-black"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            className="w-full px-2 py-1 bg-gray-200 rounded text-black"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            className="w-full px-2 py-1 bg-gray-200 rounded text-black"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="state">State:</label>
          <select
            name="state"
            id="state"
            className="w-full px-2 py-1 bg-gray-200 rounded text-black"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            <option value="PA">PA</option>
            <option value="NY">NY</option>
            <option value="CA">CA</option>
            <option value="TX">TX</option>
          </select>
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <select
            name="city"
            id="city"
            className="w-full px-2 py-1 bg-gray-200 rounded text-black"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Select City</option>
            <option value="York">York</option>
            <option value="Philadelphia">Philadelphia</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Houston">Houston</option>
          </select>
        </div>



        <h3 className="col-span-2 text-xl font-bold">Booking Detail</h3>

        <div>
          <label htmlFor="checkIn">Check-In:</label>
          <input 
          className="w-full px-2 py-1 bg-gray-200 rounded text-black" 
          type="date" 
          name="checkIn" 
          id="checkIn" 
          value={formData.checkIn}
          onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="checkOut">Check-Out</label>
          <input 
          className="w-full px-2 py-1 bg-gray-200 rounded text-black" 
          type="date" 
          name="checkOut" 
          id="checkOut" 
          value={formData.checkOut}
          onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="roomType">Room Type:</label>
          <select 
          className="w-full px-2 py-1 bg-gray-200 rounded text-black"
          name="roomType" 
          id="roomType" 
          value={formData.roomType}
          onChange={handleChange}
          >
            <option value="">Select Room Type</option>
            <option value="king">King</option>
            <option value="queen">Queen</option>
          </select>
        </div>

        <div>
          <label htmlFor="availableRooms">Room:</label>
          <select 
          className="w-full px-2 py-1 bg-gray-200 rounded text-black"
          name="availableRooms" 
          id="availableRooms"
          value={formData.availableRooms}
          onChange={handleChange}
          >
           <option value="">Select Room Number </option>
           {roomOptions.map((element, index) => {
              return(
                <option key={index} value={element.value}>{element.label}</option>
              )
           })}
          </select>
        </div>



        <h3 className="col-span-2 text-xl font-bold">Payment Details</h3>

        <div>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select 
          className="w-full px-2 py-1 bg-gray-200 rounded text-black" 
          name="paymentMethod" 
          id="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          >
            <option value="">Select Payment Method</option>
            <option value="cash">Cash</option>
            <option value="americanExpress">American Express</option>
            <option value="discover">Discover</option>
            <option value="mastercard">MasterCard</option>
            <option value="Visa">Visa</option>
          </select>
        </div>

        <div>
          <label htmlFor="totalCost">Total Cost:</label>
          <p
          className="w-full px-2 py-0.5 bg-gray-200 rounded text-black">${formData.totalCost}</p>
        </div>

         <div className="grid justify-center mt-6">
        <button className="bg-green-400 text-white w-20 rounded text-lg">
          {button}
        </button>
      </div>

       <div className=" flex justify-center mt-6">
        <button className="bg-green-400 text-white w-20 rounded text-lg" onClick={handleSubmit}>
          {button}
        </button>
      </div>
      </form>
    </div>
    </div>
  );
}
