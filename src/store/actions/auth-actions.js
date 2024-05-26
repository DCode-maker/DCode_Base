import {SET_USER,SET_TOKEN} from "../reducer/auth-reducer"
import Api from "../../utils/api.js"
import { Urls } from "../../utils/url"
const authActions ={

    getLoginData :  (cb)=> async(dispatch,_)=>{

        try {
            console.log("AuthActions.signin")
            const res = await Api.get({ url: Urls.login })
            console.log(res, "fhcjb")
            // if (res?.status == 400) {
            //     console.log(res?.data, "401401401")
            //     let msgdata = {
            //         show: true,
            //         icon: 'error',
            //         text: res?.data?.msg,
            //         type: 1
            //     }
            //     dispatch(ALERTS(msgdata))
            //     return
            // }
            if (res?.status == 200) {
                console.log(res.data, "res.data")
                const user = res.data.userData
                console.log(user,"dfgfhk")
                // console.log(user, user, "res.data")
                // console.log(res.data, "res.data")
                // localStorage.setItem('user', JSON.stringify(user))
                // localStorage.setItem('token', res.token)
                // // localStorage.setItem('permission', user.permission)
                // localStorage.setItem('auth', true)
                // console.log(res.data.token,user,"tfyguj")
                dispatch(SET_TOKEN(res.data.token))
                dispatch(SET_USER(JSON.stringify(user)))
                // dispatch(SET_AUTHENTICATED(true))
                // cb()
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    }

}

export default authActions