import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Fernado',
        email: 'xavier.flores@gmail.com'
    }

    test('debe de regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        // const {}= result.current;
        // console.log(result)
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onResetForm: expect.any(Function),
            onInputChange: expect.any(Function),
        })
    });

    test('debe de cambiar el nombre del formulario', () => {

        const target = { name: 'name', value: 'Juan' };
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target });
        });

        expect(result.current.name).toBe(target.value)
        expect(result.current.formState.name).toBe(target.value)
    });

    test('debe de resetear el formulario', () => {

        const target = { name: 'name', value: 'Juan' };
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)
    });
})
