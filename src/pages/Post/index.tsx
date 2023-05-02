import { Link, useParams } from "react-router-dom";
import { PostContainer, PostContent, PostDetails, PostHeader } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import axios from "../../lib/axios";
import ReactMarkdown from 'react-markdown';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

interface Post {
    title: string,
    publishedDate: string,
    comments: number,
    owner: string,
    content: string,
    url:string
}

export function Post() {
   
    const [post, setPost] = useState<Post>(
        {
            title: '',
            publishedDate: '',
            comments: 0,
            owner:'',
            content:'',
            url: ''
        }
    );
    const {id} = useParams();

    async function fetchPost() {
        const response = await axios.get(`https://api.github.com/repos/MatheusBorbely/blog-github/issues/${id}`);
        const {url, created_at, comments, title, user: {login}, body} = response.data;
        const publishedDateRelativeToNow = formatDistanceToNow(new Date(created_at),{
            locale: ptBR,
            addSuffix: true
        })
        setPost({
            title,
            url,
            publishedDate: publishedDateRelativeToNow,
            comments,
            owner: login,
            content:body 
        })
        
    }

    useEffect(() => {
        fetchPost();
    }, []);

    const comments = post.comments <= 1 ? 'comentário' : 'comentários';

    return (
        <PostContainer>
            <PostHeader>
                <nav>
                    <Link to={'..'}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        voltar
                    </Link>
                    <Link to={post.url} target="_blank" rel="noopener noreferrer">
                        VER NO GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='#3294F8' size='xs'/>
                    </Link>
                </nav>
                <h1>
                    {post.title}
                </h1>
                <section>
                    <PostDetails>
                        <FontAwesomeIcon icon={faGithub} color='#3A536B' size='lg'/>
                        <span>
                            {post.owner}
                        </span>
                    </PostDetails>

                    <PostDetails>
                        <FontAwesomeIcon icon={faCalendarDay} color='#3A536B' size='lg'/>
                        <span>
                            {post.publishedDate}
                        </span>
                    </PostDetails>
                    
                    <PostDetails>
                        <FontAwesomeIcon icon={faComment}  color='#3A536B' size='lg'/>
                        <span>
                            {post.comments} {comments}
                        </span>
                    </PostDetails>
                </section>
            </PostHeader>
            
            <PostContent>
                <p> 
                   <ReactMarkdown>{post.content}</ReactMarkdown> 
                </p>

            </PostContent>
            
        </PostContainer>
    )
}
