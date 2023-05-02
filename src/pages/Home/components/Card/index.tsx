import { Link } from "react-router-dom";
import { CardContainer } from "./styles";

interface CardProps {
    id: number,
    title: string,
    content: string, 
    publishedDate: string
}
export function Card({title, content, id, publishedDate}: CardProps) {
  return (
    
    <CardContainer>
        <Link to={`/post/${id}`}>
            <header>
                <h3>
                    {title}
                </h3>
                <span>
                    {publishedDate}
                </span>
            </header>
            <p>
                {content}
            </p>
        </Link>
    </CardContainer>
    
  )
}
