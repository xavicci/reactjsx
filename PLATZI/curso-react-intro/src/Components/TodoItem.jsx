export const TodoItem = ({actividad,Completed}) => {
    return (
        <li>
            <span>V</span>
            <p>{actividad}</p>
            <span>{JSON.stringify(Completed)}</span>
        </li>
    );
}