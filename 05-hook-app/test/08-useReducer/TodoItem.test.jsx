import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem  />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostar el Todo Pendiente de completar', () => {

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const liElement = screen.getByRole('listitem');
        // console.log(liElement);

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between mb-3');

        const spanElement = screen.getByLabelText('span');
        // screen.debug();
        expect(spanElement.className).toBe('align-self-center ');
        expect(spanElement.className).toContain('align-self-center');

    });

    test('debe de mostar el Todo completado', () => {

        todo.done = true;

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const spanElement = screen.getByLabelText('span');
        // screen.debug();
        expect(spanElement.className).toContain('text-decoration-line-through');

    });

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const spanElement = screen.getByLabelText('span');
        // screen.debug();
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('el boton debe de llamar el deleteTodo', () => {

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const buttonElement = screen.getByRole('button');
        // screen.debug();
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });

})
