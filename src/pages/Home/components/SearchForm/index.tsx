import { SearchFormContainer } from "./styles";
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

interface SearchFormProps {
  total: number,
  searchIssues: (query?: string) => Promise<void>
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm({total, searchIssues}: SearchFormProps) {

  const {register, handleSubmit} = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });
  const isMoreThanOne = total > 1 ? 'publicações' : 'publicação';

  async function handleSearchIssues(data: SearchFormInputs){
    searchIssues(data.query)
  }
  
  return (
    <SearchFormContainer>
        <div>
            <h2>Publicações</h2>
            <span>{total} {isMoreThanOne}</span>
        </div>
        <form onSubmit={handleSubmit(handleSearchIssues)}>
            <input type="text"  placeholder="Buscar conteúdo" {...register('query')}/>
        </form>
    </SearchFormContainer>
  )
}
