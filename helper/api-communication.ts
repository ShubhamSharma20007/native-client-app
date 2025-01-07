import { Instance } from "@/lib/instance";
import Toast from "react-native-toast-message";
import { FORGET_PASSWORD, RESET_PASSWORD } from "@/constant/apis";
//  Forget Password
export const forgetPasswordApi = async (email: string) => {
    try {
        const response = await Instance.post(FORGET_PASSWORD, { email });
        if (response.status === 200 || response.status === 201) {
            Toast.show({
                type: "success",
                text1: "✅ Sucesss",
                text2Style: {
                    fontSize: 12,
                },
                text2: "OTP send sucessfully",
            });
            return response.data;
        }
    } catch (err: any) {
        console.warn("Error:", err);
        if (err.response) {
            Toast.show({
                type: "error",
                text1: "❌ Error",
                text2Style: {
                    fontSize: 12,
                },
                text2: err.response.data.message,
            });
        }
    }
}


export const resetPasswordApi = async (email: string, otp: number | string, newPassword: string) => {
    try {
        const response = await Instance.post(RESET_PASSWORD, {
            email,
            otp,
            new_password: newPassword
        });
        if (response.status === 200 || response.status === 201) {
            Toast.show({
                type: "success",
                text1: "✅ Sucesss",
                text2Style: {
                    fontSize: 12,
                },
                text2: "OTP send sucessfully",
            });
            return response.data;
        }
    } catch (err: any) {
        console.warn("Error:", err);
        if (err.response) {
            Toast.show({
                type: "error",
                text1: "❌ Error",
                text2Style: {
                    fontSize: 12,
                },
                text2: err.response.data.message,
            });
        }
    }
}
