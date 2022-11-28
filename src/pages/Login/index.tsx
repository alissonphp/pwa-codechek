import { ArrowForwardIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Text,
  Input,
  Button,
  Image,
  Link,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { LoginData, useAuth } from "../../contexts/auth";
import requiredField from "../../validations/required";
import logo from '../../assets/images/logo-default.png'

function Login() {
  const toast = useToast();
  const context = useAuth();
  let navigate = useNavigate();
  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={(values, actions) => {
        setTimeout(async () => {
          const data: LoginData = {
            login: values.login,
            password: values.password,
          };
          await context
            .Login(data)
            .then(() => {
              actions.setSubmitting(false);
              toast({
                title: "Credenciamento realizado com sucesso",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
              navigate("/welcome", { replace: true });
            })
            .catch((err) => {
              actions.setSubmitting(false);
              toast({
                title: "Ocorreu um problema no credenciamento",
                description: "Verifique os dados informados e tente novamente",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
              console.error(err);
            });
        }, 1500);
      }}
    >
      {(props) => (
        <Flex
          height={"100vh"}
          align={"center"}
          justify={"center"}
          color={"blue.800"}
        >
          <Box maxW={"sm"}>
            <Box marginBottom={"4"}>
              <Image src={logo} mx={"auto"} />
            </Box>

            <Text fontSize={"sm"} align={"center"} p={"4"} mb={"4"}>
              Acesso ao Codecheck
            </Text>

            <Form>
              <Field name="login" validate={requiredField}>
                {({ field, form }: any) => (
                  <FormControl
                    isRequired
                    marginBottom={"4"}
                    isInvalid={form.errors.login && form.touched.login}
                  >
                    <FormLabel htmlFor="login">Login:</FormLabel>
                    <Input
                      {...field}
                      id="login"
                      placeholder="Informe o login da aplicação"
                    />
                    <FormErrorMessage>{form.errors.login}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password" validate={requiredField}>
                {({ field, form }: any) => (
                  <FormControl
                    isRequired
                    marginBottom={"4"}
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel htmlFor="password">Senha:</FormLabel>
                    <Input
                      {...field}
                      type={"password"}
                      id="senha"
                      placeholder="Informe sua senha de acesso"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
                rightIcon={<ArrowForwardIcon />}
                type="submit"
                isLoading={props.isSubmitting}
                w={"100%"}
                mt={"4"}
                bg={"#ECAB0F"}
                color={"#fff"}
              >
                Entrar
              </Button>
            </Form>

            <Box mt={"4"} textAlign={"right"}>
              <Link fontSize={"sm"}>
                Esqueci minha senha <InfoOutlineIcon />{" "}
              </Link>
            </Box>
          </Box>
        </Flex>
      )}
    </Formik>
  );
}
export default Login;
