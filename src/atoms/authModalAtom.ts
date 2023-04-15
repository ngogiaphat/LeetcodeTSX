import { atom } from 'recoil';
type AuthModalState = {
    isOpen: boolean;
    type: "login" | "register" | "forgotPassword";
};
const initalAuthModalState: AuthModalState = {
    isOpen: false,
    type: "login",
};
export const authModalAtom = atom<AuthModalState>({
    key: "authModalState",
    default: initalAuthModalState,
});