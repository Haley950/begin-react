import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username : '',
    email : '',
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }


  const [users, setUsers] = useState ([
    {
        id : 1,
        username : 'velopert',
        email : 'public.velopert@gmail.com'
    },
    {
        id : 2,
        username : 'haejnug',
        email : 'public.haejnug@gmail.com'
    },
    {
        id : 3,
        username : 'lucy',
        email : 'public.lucy@gmail.com'
    }
]);

  const nextId = useRef(4);

  const onCreate = () => {

    const user = {
      id : nextId.current,
      username,
      email,
    };
    //배열에 항목 추가하는 방법은
    //1. 스프레드로 복사하고 원하는 값 넣기 
    // setUsers([...users, user]);

    //2. concat 사용
    setUsers(users.concat(user));
    setInputs({
      username : '',
      email : '',
    });
    console.log(nextId.current);
    nextId.current += 1;
  }

  return (
    <>
    <CreateUser
      username = {username}
      email = {email}
      onChange = {onChange}
      onCreate = {onCreate}
    />
    <UserList users={users}/>
    </>
  )
}

export default App;
