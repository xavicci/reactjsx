import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => {

    test('debe de retornar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter());
        // console.log(result)
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function)); //toEqual se usa para un objeto
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('debe de generar el counter con el valor de 100', () => {

        const valor = 100;
        const { result } = renderHook(() => useCounter(valor));
        const { counter } = result.current;
        // console.log(counter)

        expect(counter).toBe(100);
    });

    test('debe de incrementar el contador', () => {

        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act(() => {
            increment(); //tuvimos que actualizar el setIncrement realizando callback
            increment(5);
        });
        expect(result.current.counter).toBe(106);

    });

    test('debe de decrementar el contador', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => {
            decrement(); //tuvimos que actualizar el setIncrement realizando callback
            decrement(5);
        });
        expect(result.current.counter).toBe(94);

    });

    test('debe de realizar el reset', () => {

        const { result } = renderHook(() => useCounter(100));
        const { reset, decrement } = result.current;

        act(() => {
            decrement(); //tuvimos que actualizar el setIncrement realizando callback
            decrement(5);

            reset();
        });
        expect(result.current.counter).toBe(100);

    });

});
