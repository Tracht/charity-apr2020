class DriverList extends React.Component {
  constructor() {
    super();
    this.state = {
      drivers: [],
    };
  }

  componentDidMount() {
    this.fetchDrivers("/drivers");
  }

  fetchDrivers = () => {
    fetch("/drivers")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          drivers: data,
        });
        this.setState({
          drivers: this.sortDriversAtoZ(),
        });
      });
  };

  sortDriversAtoZ = () => {
    return this.state.drivers.sort(function (memberA, memberB) {
      var memberA = memberA.name.toUpperCase();
      var memberB = memberB.name.toUpperCase();
      return memberA < memberB ? -1 : memberA > memberB ? 1 : 0;
    });
  };

  delete = (e) => {
    console.log(document.getElementById("").value);
    // e.preventDefault();
    // const driverid = {
    //   driverid: d
    //   password: this.state.password,
    // };
    // console.log(admin);

    // fetch("/delete", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(admin),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.success === true) {
    //       sessionStorage.setItem("token", data.admin._id);
    //       console.log(sessionStorage);
    //       window.location.replace("/");
    //     } else {
    //       alert(`${data.message}`);
    //     }
    //   });
  };

  render() {
    return (
      <div>
        <h2>List of Drivers</h2>
        <table className="driver-list">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.drivers.map((driver) => (
              <div>
                <button
                  id={driver._id}
                  onClick={this.delete}
                  value={driver._id}
                >
                  delete
                </button>
                <Driver
                  name={driver.name}
                  address={driver.address}
                  id={driver._id}
                  key={driver._id}
                />
              </div>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
