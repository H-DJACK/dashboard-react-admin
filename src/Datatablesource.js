export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },

  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'age', headerName: 'Age', width: 100 },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: 'Snow',
    img: '',
    status: 'active',
    email: '1snow@gmail.com',
    age: 35,
  },
  {
    id: 2,
    username: 'Jamie Lannister',
    img: '',
    status: 'passive',
    email: '2snow@gmail.com',
    age: 42,
  },
  {
    id: 3,
    username: 'Lannister',
    img: '',
    status: 'pending',
    email: '3snow@gmail.com',
    age: 45,
  },

  {
    id: 4,
    username: 'Stark',
    img: '',
    status: 'active',
    email: '4snow@gmail.com',
    age: 16,
  },
  {
    id: 5,
    username: 'Targayen',
    img: '',
    status: 'passive',
    email: '5snow@gmail.com',
    age: 22,
  },
  {
    id: 6,
    username: 'Melisandre',
    img: '',
    status: 'active',
    email: '6snow@gmail.com',
    age: 15,
  },
  {
    id: 7,
    username: 'Cliford',
    img: '',
    status: 'passive',
    email: '7snow@gmail.com',
    age: 44,
  },
  {
    id: 8,
    username: 'Frances',
    img: '',
    status: 'passive',
    email: '8snow@gmail.com',
    age: 36,
  },
  {
    id: 9,
    username: 'Targayen',
    img: '',
    status: 'pending',
    email: '9snow@gmail.com',
    age: 65,
  },
  {
    id: 10,
    username: 'Roxie',
    img: '',
    status: 'active',
    email: '10snow@gmail.com',
    age: 65,
  },
];
