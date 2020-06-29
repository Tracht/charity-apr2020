function Driver (props) {
  return(
    <div>
      <tr>
        <td>{props._id}</td>
        <td className="driverName">{props.name}</td>
        <td className="driverAddress">{props.address}</td>
      </tr>
      <button id="delete" value="delete">delete</button>
    </div>
  );
}
