export default function Table({ contacts }) {
  const data = [
    {
      name: "hridoy",
      roll: 34,
    },
    {
      name: "shadat",
      roll: 10,
    },
    {
      name: "shuvro",
      roll: 41,
    },
  ];
  return (
    <>
      {data.map((item) => {
        <p>{item.name}</p>;
        <p>its working</p>;
      })}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>hridoy</th>
            <th>34</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
