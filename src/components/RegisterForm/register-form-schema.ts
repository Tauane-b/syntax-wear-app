import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../utils/cpf.validator";



export const useRegisterFormSchema = z
  .object({
    firstName: z.string().min(1, "Primeiro nome é obrigatório"),

    lastName: z.string().min(1, "Último nome é obrigatório"),

    email: z
      .email("E-mail inválido"),

    password: z
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres"),

    confirmPassword: z
      .string()
      .min(1, "Confirmação de senha é obrigatória"),

    cpf: z
      .string()
      .nonempty("CPF é obrigatório")
      .transform((cpf) => cpf.replace(/\D/g, ""))
      .refine((cpf) => isValidCPF(cpf), {
        message: "CPF inválido",
      }),

    birthDate: z
      .string()
      .nonempty("Data de nascimento é obrigatória")
      .refine((date) => {
        const parsed = new Date(date);
        return !isNaN(parsed.getTime());
      }, {
        message: "Data de nascimento inválida",
      }),

    cellphone: z
      .string()
      .nonempty("Número de celular é obrigatório")
      .min(10, "Número inválido"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

  type RegisterUserFormData = z.infer<typeof useRegisterFormSchema>;
  
  export const useRegisterForm = () => {
    const {
      register,
      handleSubmit,
      formState: {errors, isSubmitting},
      setError,
      reset
    } = useForm<RegisterUserFormData>({
      resolver: zodResolver(useRegisterFormSchema),
      mode:"onBlur",
      defaultValues:{
        email:"",
        password:""
      },
      criteriaMode:"all"
    });

    return {
      handleSubmit,
      register,
      errors,
      isSubmitting,
      setError,
      reset
    }
  }


