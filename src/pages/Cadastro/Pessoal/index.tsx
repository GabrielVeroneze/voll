import { useForm } from 'react-hook-form'
import type { CadastroPessoalForm } from '@/types/CadastroPessoalForm'
import Button from '@/components/Button'
import Fieldset from '@/components/Fieldset'
import Form from '@/components/Form'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Titulo from '@/components/Titulo'

const Pessoal = () => {
    const { register, handleSubmit } = useForm<CadastroPessoalForm>()

    const aoSubmeter = (dados: CadastroPessoalForm) => {
        console.log(dados)
    }

    return (
        <>
            <Titulo>Insira alguns dados básicos:</Titulo>
            <Form onSubmit={handleSubmit(aoSubmeter)}>
                <Fieldset>
                    <Label htmlFor="campo-nome">Nome</Label>
                    <Input
                        id="campo-nome"
                        placeholder="Digite seu nome completo"
                        type="text"
                        {...register('nome', {
                            required: true,
                            minLength: 5,
                        })}
                    />
                </Fieldset>
                <Fieldset>
                    <Label htmlFor="campo-email">E-mail</Label>
                    <Input
                        id="campo-email"
                        placeholder="Insira seu endereço de email"
                        type="email"
                        {...register('email')}
                    />
                </Fieldset>
                <Fieldset>
                    <Label>Telefone</Label>
                    <Input
                        id="campo-telefone"
                        type="text"
                        placeholder="Ex: (DDD) XXXXX-XXXX"
                        {...register('telefone', {
                            required: true,
                            pattern: /^\(\d{2,3}\) \d{5}-\d{4}$/,
                        })}
                    />
                </Fieldset>
                <Fieldset>
                    <Label htmlFor="campo-senha">Crie uma senha</Label>
                    <Input
                        id="campo-senha"
                        placeholder="Crie uma senha"
                        type="password"
                        {...register('senha')}
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
                        {...register('senhaVerificada')}
                    />
                </Fieldset>
                <Button type="submit">Avançar</Button>
            </Form>
        </>
    )
}

export default Pessoal
