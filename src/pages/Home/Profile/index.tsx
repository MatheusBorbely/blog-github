import {useEffect, useState} from 'react'
import axios from '../../../lib/axios';
import { ProfileContainer } from "./styles";
import { Routes } from '../../../utils/routes.enum';

interface Profile {
    image: string,
    name: string,
    bio: string,
    nickname: string,
    company:string,
    followers: number
}

export function Profile() {
    const [profile, setProfile] = useState<Profile>();

    /*async function searchUser() {
        try {

            const response = await axios.get<Profile>(`${Routes.USER}/MatheusBorbely`);
            const {avatar_url, login, name, bio, company, followers} = response;

            setProfile( {
                image: avatar_url,
                name: login,
                nickname: name,
                bio,
                company,
                followers
            })
        } catch (error) {
            console.error("ops! Não foi possível buscar o usuário" + error);
        }
    }

    useEffect(() => {
        searchUser();
    }, []);*/

    return (
        <ProfileContainer>
            <img  alt="" />
        </ProfileContainer>
    )
}
