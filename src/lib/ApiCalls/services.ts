import {
  RegisterResponse,
  LoginFormValues,
  LoginResponse,
  CreateNoteData,
  CreateNoteResponse,
  GetUserNotesResponse,
  DeleteNoteResponse,
  UpdateNoteResponse,
} from "../Interfaces/types";
// const token = "3b8ny__" + localStorage.getItem("token");
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
  async createNewNoteApi(
    data: CreateNoteData,
    Token: string | null
  ): Promise<CreateNoteResponse> {
    if (!Token) {
      throw new Error("Authentication token is missing.");
    }
    return await fetch("https://note-sigma-black.vercel.app/api/v1/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: "3b8ny__" + Token,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }
  async fetchUserNotes(Token: string | null): Promise<GetUserNotesResponse> {
    if (!Token) {
      throw new Error("Authentication token is missing.");
    }
    const res = await fetch(
      "https://note-sigma-black.vercel.app/api/v1/notes",
      {
        headers: {
          "Content-Type": "application/json",
          token: "3b8ny__" + Token,
        },
      }
    );

    return res.json();
  }
  async updateNoteApi(
    Token: string | null,
    id: string,
    data: { title: string; content: string }
  ): Promise<UpdateNoteResponse> {
    if (!Token) {
      throw new Error("Authentication token is missing.");
    }
    return await fetch(
      `https://note-sigma-black.vercel.app/api/v1/notes/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: "3b8ny__" + Token,
        },
        body: JSON.stringify(data),
      }
    ).then((res) => res.json());
  }
  async deleteNoteApi(
    Token: string | null,
    id: string
  ): Promise<DeleteNoteResponse> {
    if (!Token) {
      throw new Error("Authentication token is missing.");
    }
    return await fetch(
      `https://note-sigma-black.vercel.app/api/v1/notes/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: "3b8ny__" + Token,
        },
      }
    ).then((res) => res.json());
  }
}

export const apiServices = new ApiServices();
