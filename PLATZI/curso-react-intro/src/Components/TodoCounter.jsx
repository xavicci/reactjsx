export const TodoCounter = ({completed, total}) => {
    
    return (
        <h1 style={{color:"red"}}>
            Has completado {completed} de {total} TODOS
        </h1>
    );
}