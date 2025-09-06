import type { AccountModel } from "@/domain/models"


export interface AuthenticationContextArgsType {
   setInformationAccountControl: (account: AccountModel) => void;
   logout: () => void;
   isAuthenticated: () => boolean;
   getAccount: () => AccountModel | null;
   getToken: () => string | null;
   isLoading: boolean;
}