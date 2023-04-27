import {useEffect, useState} from 'react'
import axios from '../../../../lib/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faArrowUpRightFromSquare, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import {  faGithub } from '@fortawesome/free-brands-svg-icons'
import { ProfileContainer, ProfileDetails, ProfileImageAvatar, ProfileInfo } from "./styles";
import { Routes } from '../../../../utils/routes.enum';

interface Profile {
    image: string,
    name: string,
    bio: string,
    nickname: string,
    company:string,
    url: string,
    followers: number
}

export function Profile() {
    const [profile, setProfile] = useState<Profile>({
        image: '',
        name: '',
        bio: '',
        nickname: '',
        company:'',
        url: '',
        followers: 0
    });

    async function searchUser() {
        try {

            const response = await axios.get(`${Routes.USER}/MatheusBorbely`);
            console.log(response)
            const {avatar_url, login, html_url, name, bio, company, followers} = response.data;

            setProfile( {
                image: avatar_url,
                nickname: login,
                url: html_url,
                name, 
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
    }, []);

    const followers = profile.followers <= 1 ? 'seguidor' : 'seguidores'
    return (
        <ProfileContainer>
            <ProfileImageAvatar>
                <img  src={profile.image} alt={`Imagem do perfil do ${profile.name}`}/>
            </ProfileImageAvatar>
            <ProfileInfo>
                <header>
                    <h1>
                        {profile.name}
                    </h1>
                    <a href={profile.url} target="_blank" rel="noopener noreferrer">
                        github
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='#3294F8' size='xs'/>
                    </a>
                </header>
                <article>
                    <p>
                        {profile.bio}
                    </p>
                </article>
                <div>
                    <ProfileDetails>
                        <FontAwesomeIcon icon={faGithub} color='#3A536B' size='lg'/>
                        <span>
                            {profile.nickname}
                        </span>
                    </ProfileDetails>

                    <ProfileDetails>
                        <FontAwesomeIcon icon={faBuilding} color='#3A536B' size='lg'/>
                        <span>
                            {profile.company}
                        </span>
                    </ProfileDetails>
                    
                    <ProfileDetails>
                        <FontAwesomeIcon icon={faUserGroup} color='#3A536B' size='lg'/>
                        <span>
                            {`${profile.followers} ${followers}`}
                        </span>
                    </ProfileDetails>
                </div>
            </ProfileInfo>
            
        </ProfileContainer>
    )
}
