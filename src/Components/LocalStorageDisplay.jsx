export default function LocalStorageDisplay(props) {
  return (
    <>
      <h3>Users</h3>
      {props.users && props.users.length > 0 ? (
        props.users.map((item) => (
          <div key={item.id}>
            <h4>
              {item.name} - {item.email}
            </h4>
            <button onClick={() => props.deleteItem(item)}>Delete</button>
            <button
              onClick={() => {
                props.setEditing(item);
                props.setName(item.name);
                props.setEmail(item.email);
              }}
            >
              Edit
            </button>
          </div>
        ))
      ) : (
        <p>Please add a user</p>
      )}
    </>
  );
}
