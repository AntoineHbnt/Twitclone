import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProfilListItem from './ProfilListItem';

const ProfilList = ({filter}) => {
    const users = useSelector((state) => state.usersReducer)
    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        setUsersList(users.filter((user) => {
            const pseudo = user.userPseudo.toLowerCase();
            const at = user.userAt.toLowerCase();
            const search = filter.toLowerCase();
            return pseudo.includes(search) || at.includes(search)
        }));
    },[filter])

    return (
        <div className="profil-list-container">
            <div className="profil-list-wrapper">
                {usersList.length !== 0 && usersList.map((elem, index) => {
                    return <ProfilListItem key={index} userData={elem} />
                })}
            </div>
        </div>
    );
};

export default ProfilList;