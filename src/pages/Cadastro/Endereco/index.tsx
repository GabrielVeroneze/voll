import { useForm } from 'react-hook-form'
import { buscarEndereco } from '@/services/endereco'
import type { CadastroEnderecoForm } from '@/types/CadastroEnderecoForm'
import Button from '@/components/Button'
import Fieldset from '@/components/Fieldset'
import Form from '@/components/Form'
import FormContainer from '@/components/FormContainer'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Titulo from '@/components/Titulo'
import ErrorMessage from '@/components/ErrorMessage'

const Endereco = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        setValue,
        watch,
    } = useForm<CadastroEnderecoForm>()

    const cepDigitado = watch('cep')

    const aoSubmeter = (dados: CadastroEnderecoForm) => {
        console.log(dados)
    }

    const fetchEndereco = async (cep: string) => {
        try {
            const data = await buscarEndereco(cep)

            setValue('rua', data.logradouro)
            setValue('bairro', data.bairro)
            setValue('localidade', `${data.localidade}, ${data.uf}`)

            console.log(data)
        } catch (error) {
            setError('cep', {
                type: 'manual',
                message: 'CEP inválido',
            })

            console.error(error)
        }
    }

    return (
        <>
            <Titulo>Agora, mais alguns dados sobre você:</Titulo>
            <Form onSubmit={handleSubmit(aoSubmeter)}>
                <Fieldset>
                    <Label htmlFor="campo-cep">CEP</Label>
                    <Input
                        id="campo-cep"
                        placeholder="Insira seu CEP"
                        type="text"
                        $error={!!errors.cep}
                        {...register('cep')}
                        onBlur={() => fetchEndereco(cepDigitado)}
                    />
                    {errors.cep && (
                        <ErrorMessage>{errors.cep.message}</ErrorMessage>
                    )}
                </Fieldset>
                <Fieldset>
                    <Label htmlFor="campo-rua">Rua</Label>
                    <Input
                        id="campo-rua"
                        placeholder="Rua Agarikov"
                        type="text"
                        $error={!!errors.rua}
                        {...register('rua')}
                    />
                    {errors.rua && (
                        <ErrorMessage>{errors.rua.message}</ErrorMessage>
                    )}
                </Fieldset>
                <FormContainer>
                    <Fieldset>
                        <Label htmlFor="campo-numero-rua">Número</Label>
                        <Input
                            id="campo-numero-rua"
                            placeholder="Ex: 1440"
                            type="text"
                            $error={!!errors.numero}
                            {...register('numero')}
                        />
                        {errors.numero && (
                            <ErrorMessage>{errors.numero.message}</ErrorMessage>
                        )}
                    </Fieldset>
                    <Fieldset>
                        <Label htmlFor="campo-bairro">Bairro</Label>
                        <Input
                            id="campo-bairro"
                            placeholder="Vila Mariana"
                            type="text"
                            $error={!!errors.bairro}
                            {...register('bairro')}
                        />
                        {errors.bairro && (
                            <ErrorMessage>{errors.bairro.message}</ErrorMessage>
                        )}
                    </Fieldset>
                </FormContainer>
                <Fieldset>
                    <Label htmlFor="campo-localidade">Localidade</Label>
                    <Input
                        id="campo-localidade"
                        placeholder="São Paulo, SP"
                        type="text"
                        $error={!!errors.localidade}
                        {...register('localidade')}
                    />
                    {errors.localidade && (
                        <ErrorMessage>{errors.localidade.message}</ErrorMessage>
                    )}
                </Fieldset>
                <Button type="submit">Cadastrar</Button>
            </Form>
        </>
    )
}

export default Endereco
