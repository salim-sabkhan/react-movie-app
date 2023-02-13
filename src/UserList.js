import { Msg } from "./Msg";

export function UserList() {
  const user = [
    {
      name: "Salim",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmALhVZUdb0EE4P1pdo4m1i23RWp9Ei8lsBprB5-Wst5XnywLeHIupiVxxL-Avjfms0p8&usqp=CAU",
    },
    {
      name: "Tamim",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2C_xadF4WT19MkU5PpYyU8njyMgMIuttwXQ&usqp=CAU",
    },
    {
      name: "Tahir",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkSWLRxX42sG_oDs7OlqF2x2Vs88aEBqyWA&usqp=CAU",
    },
  ];
  return (
    <div>
      {user.map((user) => (
        <Msg name={user.name} pic={user.pic} />
      ))}
    </div>
  );
}
