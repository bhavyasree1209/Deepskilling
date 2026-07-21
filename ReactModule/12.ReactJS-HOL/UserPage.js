function UserPage() {

    return (
        <div>

            <h1>Flight Ticket Booking App</h1>

            <h2>Welcome User</h2>

            <h3>You can now book tickets.</h3>

            <table border="1">
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>Route</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI101</td>
                        <td>Hyderabad → Delhi</td>
                    </tr>

                    <tr>
                        <td>AI202</td>
                        <td>Chennai → Mumbai</td>
                    </tr>

                    <tr>
                        <td>AI303</td>
                        <td>Visakhapatnam → Bangalore</td>
                    </tr>
                </tbody>
            </table>

            <br />

            <button>
                Book Ticket
            </button>

        </div>
    );
}

export default UserPage;