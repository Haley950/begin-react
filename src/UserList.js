import React from "react";

function User({user, onRemove}){
    console { username, email, id } = users;
    return (
        <div>
            <b>{username}</b> <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
};

function UserList ({ users, onRemove }){
    

    return (
        <div>
            {
                users.map(
                    (user, index) => (
                        <User
                            user={user}
                            key={user.id}
                            onRemove={onRemove}
                        />
                    )
                )
            }
        </div>
    )  

};

export default UserList;