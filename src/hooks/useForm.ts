import { useState } from "react"
import { getAdress } from "../services/api"

type FormFields = {
    name: string
    email: string
    birthdate: string
    cpf: string
    cep: string
    street: string
    city: string
    state: string
}

type Errors = {
    name?: string
    email?: string
    birthdate?: string
    cpf?: string
    cep?: string
    street?: string
    city?: string
    state?: string
}

const regex: { [key: string]: RegExp } = {
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    cpf: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
    cep: /^\d{5}-\d{3}$/,
}

export const useForm = (initialState: FormFields, errors: Errors) => {
    const [form, setForm] = useState<FormFields>(initialState)
    const [error, setError] = useState<Errors>(errors)

    const onChange = (event: { target: { name: string; value: string } }) => {
        const { name, value } = event.target
        if (
            error.name ||
            error.email ||
            error.birthdate ||
            error.cpf ||
            error.cep ||
            error.street ||
            error.city ||
            error.state
        ) {
            validation(event)
        }
        setForm({ ...form, [name]: value })
    }

    const validation = (event: { target: { name: string; value: string } }) => {
        const { name, value } = event.target
        if (value.length === 0) {
            setError({ ...error, [name]: "Campo obrigatório" })
        } else if (name === "name" && value.length < 3) {
            setError({ ...error, [name]: "Preencha um nome válido" })
        } else if (name === "email" && !regex.email.test(value)) {
            setError({ ...error, [name]: "Preencha um email válido" })
        } else if (name === "cpf" && !regex.cpf.test(value)) {
            setError({ ...error, [name]: "Preencha um CPF válido" })
        } else if (name === "cep" && !regex.cep.test(value)) {
            setError({ ...error, [name]: "Preencha um cep válido" })
        } else {
            setError({ ...error, [name]: "" })
        }
    }

    const adressCompleter = (event: { target: { value: string } }): void => {
        const { value } = event.target
        if (value.length > 7) {
           getAdress(value.replace(/\D/g, ""))
                .then(({data}) => {
                    setForm({
                        ...form,
                        street: data.logradouro,
                        city: data.localidade,
                        state: data.uf,
                    })
                })
                .catch((err) => {
                    setForm({
                        ...form,
                        street: "Street not found",
                        city: "City not foound",
                        state: "State not found",
                    })
                })
        }
    }

    return { form, error, onChange, adressCompleter, validation }
}
