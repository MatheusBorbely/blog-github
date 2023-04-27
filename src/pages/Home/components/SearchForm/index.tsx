import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
        <div>
            <h2>Publicações</h2>
            <span>6 publicações</span>
        </div>
        <form action="">
            <input type="text" name="issue"  placeholder="Buscar conteúdo"/>
        </form>
    </SearchFormContainer>
  )
}
