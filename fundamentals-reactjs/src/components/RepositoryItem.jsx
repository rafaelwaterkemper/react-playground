export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.link} target="_blank">
                Acessar repositórios
            </a>
        </li>
    )
}