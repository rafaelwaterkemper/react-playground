import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'formteste',
    description: 'Forms React',
    link: 'https://github.com/rafaelwaterkemper'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}