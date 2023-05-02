import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer } from "./styles";
import axios from "../../lib/axios";
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

interface Issues {
  id:1,
  title:string,
  content: string,
  publishedDate: string
}

export function Home() {
  const [issues, setIssues] = useState<Issues[]>([])
  
  async function searchIssues(query?: string) {
      try {
        const response = await axios.get(`/search/issues?q=user:MatheusBorbely%20repo:github-blog`,{
          params: {
            q: `user:MatheusBorbely repo:github-blog ${query}`,
          }
        });
        const newIssues: Issues[] = [];

        response.data.items.forEach((item: any) => {
          const { title, number: id, body: content, created_at} = item;
          const publishedDate = formatDistanceToNow(new Date(created_at),{
              locale: ptBR,
              addSuffix: true
          })
          newIssues.push({
            id,
            title,
            content,
            publishedDate
          })    
        })
        setIssues(newIssues)
         
      } catch (error) {
          console.error("ops! Não foi possível buscar o issue filtrado: " + error);
      }
  }
  useEffect(() => {
    searchIssues();
  }, []);
  const cards = issues.map((issue) => (<Card {...issue} />))
  
  return (
    <HomeContainer>
      <Profile />
      <SearchForm total={issues.length} searchIssues={searchIssues} />
      <section>
        {cards}
      </section>
    </HomeContainer>
  )
}
