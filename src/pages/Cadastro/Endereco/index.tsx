import Button from '@/components/Button'
import Fieldset from '@/components/Fieldset'
import Form from '@/components/Form'
import FormContainer from '@/components/FormContainer'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Titulo from '@/components/Titulo'

const Endereco = () => {
    return (
        <>
            <Titulo>Agora, mais alguns dados sobre você:</Titulo>
            <Form>
                <Fieldset>
                    <Label htmlFor="campo-cep">CEP</Label>
                    <Input
                        id="campo-cep"
                        placeholder="Insira seu CEP"
                        type="text"
                    />
                </Fieldset>
                <Fieldset>
                    <Label htmlFor="campo-rua">Rua</Label>
                    <Input
                        id="campo-rua"
                        placeholder="Rua Agarikov"
                        type="text"
                    />
                </Fieldset>
                <FormContainer>
                    <Fieldset>
                        <Label htmlFor="campo-numero-rua">Número</Label>
                        <Input
                            id="campo-numero-rua"
                            placeholder="Ex: 1440"
                            type="text"
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label htmlFor="campo-bairro">Bairro</Label>
                        <Input
                            id="campo-bairro"
                            placeholder="Vila Mariana"
                            type="text"
                        />
                    </Fieldset>
                </FormContainer>
                <Fieldset>
                    <Label htmlFor="campo-localidade">Localidade</Label>
                    <Input
                        id="campo-localidade"
                        placeholder="São Paulo, SP"
                        type="text"
                    />
                </Fieldset>
                <Button type="submit">Cadastrar</Button>
            </Form>
        </>
    )
}

export default Endereco
