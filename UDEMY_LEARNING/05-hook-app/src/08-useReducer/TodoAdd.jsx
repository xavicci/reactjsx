import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {


    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    })

    const onHandleSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form
            onSubmit={onHandleSubmit}
        >
            <input type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                name="description"
                onChange={onInputChange}
                value={description}
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-3"
            >
                Submit
            </button>
        </form>
    )
}
