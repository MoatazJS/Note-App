import {
  RegisterResponse,
  LoginFormValues,
  LoginResponse,
} from "../Interfaces/types";
import { RegisterFormValues } from "@/lib/validations/authSchema";
class ApiServices {
  async registerApi(data: RegisterFormValues): Promise<RegisterResponse> {
    return await fetch(
      "https://note-sigma-black.vercel.app/api/v1/users/signUp",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    ).then((res) => res.json());
  }
  async loginApi(data: LoginFormValues): Promise<LoginResponse> {
    return await fetch(
      "https://note-sigma-black.vercel.app/api/v1/users/signIn",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    ).then((res) => res.json());
  }
}

export const apiServices = new ApiServices();
