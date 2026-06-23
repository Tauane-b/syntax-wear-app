import { useRegisterForm } from "./register-form-schema";

export const RegisterForm = () => {
  const { register, errors, isSubmitting } = useRegisterForm();

  return (
    <form className="text-black">
      <div>
        <label className="text-xs text-gray-600">Email*</label>
        <input
          type="email"
          {...register("email")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${
            errors.email
              ? "border-error focus:ring-error"
              : "border-border focus:ring-accent"
          }`}
        />
        {errors.email && (
          <p className="text-xs text-error mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Senha*</label>
        <input
          type="password"
          {...register("password")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${
            errors.password
              ? "border-error focus:ring-error"
              : "border-border focus:ring-accent"
          }`}
        />
        {errors.password && (
          <p className="text-xs text-error mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Confirmar senha*</label>
        <input
          type="password"
          {...register("confirmPassword")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${
            errors.confirmPassword
              ? "border-error focus:text-error"
              : "border-border focus:ring-accent"
          }`}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-error mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Nome*</label>
        <input
          type="text"
          {...register("firstName")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${
            errors.firstName
              ? "border-error focus:text-error"
              : "border-border focus:ring-accent"
          }`}
        />
        {errors.firstName && (
          <p className="text-xs text-error mt-1">
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Sobrenome*</label>
        <input
          type="text"
          {...register("lastName")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${
            errors.lastName
              ? "border-error focus:ring-error"
              : "border-border focus:ring-accent"
          }`}
        />
        {errors.lastName && (
          <p className="text-xs text-error mt-1">
            {errors.lastName.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">CPF*</label>
        <input
          type="text"
          inputMode="numeric"
          {...register("cpf")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${
            errors.cpf
              ? "border-error focus:ring-error"
              : "border-border focus:ring-accent"
          }`}
        />
        {errors.cpf && (
          <p className="text-xs text-error mt-1">{errors.cpf.message}</p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Data de nascimento*</label>
        <input
          type="date"
          {...register("birthDate")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${
            errors.birthDate
              ? "border-error focus:ring-error"
              : "border-border focus:ring-accent"
          }`}
        />
        {errors.birthDate && (
          <p className="text-xs text-error mt-1">
            {errors.birthDate.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Celular*</label>
        <input
          type="tel"
          inputMode="numeric"
          {...register("cellphone")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${
            errors.cellphone
              ? "border-error focus:ring-error"
              : "border-border focus:ring-accent"
          }`}
        />
        {errors.cellphone && (
          <p className="text-xs text-error mt-1">
            {errors.cellphone.message}
          </p>
        )}
      </div>

      <button disabled={isSubmitting} className="bg-accent text-white font-semibold uppercase rounded-md py-3 transition-all hover:bg-accent-hover disabled:opacity-50 w-full cursor-pointer mt-4">
        {isSubmitting ? "Enviando..." : "Continuar"}
      </button>
    </form>
  );
};
