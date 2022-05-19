import axios from "axios"

export const getAdress = async (cep: string) => {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return response.data
}
