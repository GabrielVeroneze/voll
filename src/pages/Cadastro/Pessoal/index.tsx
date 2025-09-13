import { useState } from 'react'
import Button from '@/components/Button'
import Fieldset from '@/components/Fieldset'
import Form from '@/components/Form'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Titulo from '@/components/Titulo'

const Pessoal = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaVerificada, setSenhaVerificada] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log({ nome, email, senha, telefone, senhaVerificada })
    }

    return (
        <>
            <Titulo>Insira alguns dados básicos:</Titulo>
            <Form onSubmit={handleSubmit}>
                <Fieldset>
                    <Label htmlFor="campo-nome">Nome</Label>
                    <Input
                        id="campo-nome"
                        placeholder="Digite seu nome completo"
                        type="text"
                        value={nome}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setNome(e.target.value)
                        }
                    />
                </Fieldset>
                <Fieldset>
                    <Label htmlFor="campo-email">E-mail</Label>
                    <Input
                        id="campo-email"
                        placeholder="Insira seu endereço de email"
                        type="email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                    />
                </Fieldset>
                <Fieldset>
                    <Label>Telefone</Label>
                    <Input
                        id="campo-telefone"
                        type="text"
                        placeholder="Ex: (DDD) XXXXX-XXXX"
                        value={telefone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setTelefone(e.target.value)
                        }
                    />
                </Fieldset>
                <Fieldset>
                    <Label htmlFor="campo-senha">Crie uma senha</Label>
                    <Input
                        id="campo-senha"
                        placeholder="Crie uma senha"
                        type="password"
                        value={senha}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setSenha(e.target.value)
                        }
                    />
                </Fieldset>
                <Fieldset>
                    <Label htmlFor="campo-senha-confirmacao">
                        Repita a senha
                    </Label>
                    <Input
                        id="campo-senha-confirmacao"
                        placeholder="Repita a senha anterior"
                        type="password"
                        value={senhaVerificada}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setSenhaVerificada(e.target.value)
                        }
                    />
                </Fieldset>
                <Button type="submit">Avançar</Button>
            </Form>
        </>
    )
}

export default Pessoal
