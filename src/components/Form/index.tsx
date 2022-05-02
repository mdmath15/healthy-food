import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import Button from "../Button"
import * as S from "./styles"

function Form() {
    const { form, error, onChange, adressCompleter, validation } = useForm(
        {
            name: "",
            email: "",
            birthdate: "",
            cpf: "",
            cep: "",
            street: "",
            state: "",
            city: "",
        },
        {}
    )

    const navigate = useNavigate()

    const handleSubmit = (event: any) => {
        event.preventDefault()
        localStorage.setItem("Dados Healthy Food", JSON.stringify(form))
        document.cookie = `Dados Healthy Food=${JSON.stringify(form)}`
        navigate("/")
    }

    return (
        <S.Form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your Name"
                required
                onBlur={validation}
            />
            {error.name && <span>{error.name}</span>}
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="email@email.com"
                required
                onBlur={validation}
            />
            {error.email && <span>{error.email}</span>}
            <label htmlFor="birthdate">Birth Date</label>
            <input
                type="date"
                name="birthdate"
                value={form.birthdate}
                onChange={onChange}
                placeholder="dd/mm/aaaa"
                required
                onBlur={validation}
            />
            {error.birthdate && <span>{error.birthdate}</span>}
            <label htmlFor="cpf">CPF</label>
            <input
                type="text"
                name="cpf"
                value={form.cpf}
                onChange={onChange}
                placeholder="000.000.000-00"
                required
                onBlur={validation}
            />
            {error.cpf && <span>{error.cpf}</span>}
            <label htmlFor="cep">CEP</label>
            <input
                type="text"
                name="cep"
                value={form.cep}
                onChange={onChange}
                placeholder="00000-000"
                required
                onBlur={adressCompleter}
            />
            {error.cep && <span>{error.cep}</span>}
            <label htmlFor="street">Street</label>
            <input
                type="text"
                name="street"
                value={form.street}
                onChange={onChange}
                placeholder="Av. Paulista 123"
                required
                onBlur={validation}
            />
            {error.street && <span>{error.street}</span>}
            <label htmlFor="state">State</label>
            <input
                type="text"
                name="state"
                value={form.state}
                onChange={onChange}
                placeholder="SP"
                required
                onBlur={validation}
            />
            {error.state && <span>{error.state}</span>}
            <label htmlFor="city">City</label>
            <input
                type="text"
                name="city"
                value={form.city}
                onChange={onChange}
                placeholder="São Paulo"
                required
                onBlur={validation}
            />
            {error.city && <span>{error.city}</span>}
            <Button>Submit</Button>
        </S.Form>
    )
}

export default Form
