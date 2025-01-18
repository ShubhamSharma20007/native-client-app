import { Instance } from "@/lib/instance";
import Toast from "react-native-toast-message";
import { FORGET_PASSWORD, RESET_PASSWORD, CREATE_HEADS, GET_HEADS, DELETE_HEAD } from "@/constant/apis";
import { HeadInferface } from "@/types/headType"
import { getLocalStorage } from "@/helper/asyncStorage"
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
        return false
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
        console.warn("Error:", err.message);
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
        return false
    }
}


/********************    Head     ******************** */

// create
export const createHead = async (data: HeadInferface) => {
    const token = await getLocalStorage('auth_token')

    try {
        const req = await Instance.post(CREATE_HEADS, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return req.data

    } catch (err: any) {
        console.warn("Error:", err.message);
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


// get
export const getHeads = async () => {
    const token = await getLocalStorage('auth_token')

    try {
        const req = await Instance.get(GET_HEADS, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return req.data

    } catch (err: any) {
        console.warn("Error in getHeads:", err.message);

    }

}


//  update head

export const updateHeads = async (id: string, head: any) => {
    const token = await getLocalStorage('auth_token')

    try {
        const req = await Instance.put(`${GET_HEADS}/${id}`, head, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return req.data

    } catch (err: any) {
        console.warn("Error:", err.message);
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

// delete head

export const deleteHead = async (id: string) => {
    const token = await getLocalStorage('auth_token')

    try {
        const req = await Instance.delete(`${DELETE_HEAD}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return req.data

    } catch (err: any) {
        console.warn("Error:", err.message);
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
