import React, { useContext } from "react"

const Context = React.createContext();

const Languages = {

    French : {
      HeaderText : 'Veuillez vous connecter ou vous inscrire pour continuer.',
      SignInText : 'Se Connecter',
      SignUpText : 'Créer Un Compte',
      ChangeText : 'Changer la langue',
      Labels : ['Francais', 'Arabe', 'Anglais'],
      OK : 'Enregister'
    },
    Arabic : {
      HeaderText : 'المرجو تسجيل الدخول أو إنشاء حساب للمتابعة.',
      SignInText : 'تسجيل الدخول',
      SignUpText : 'إنشاء حساب',
      ChangeText : 'تغيير اللغة',
      Labels : ['الفرنسية', 'العربية', 'الإنجليزية'],
      OK : 'حفظ'
    },
    English : {
      HeaderText : 'Please Login or Sign Up to continue.',
      SignInText : 'Login',
      SignUpText : 'Sign Up',
      ChangeText : 'Change language',
      Labels : ['French', 'Arabic', 'English'],
      OK : 'Save'
    }

  }

const ContextProvider = (props) => {

    return (
    <Context.Provider value={Languages}>
        {props.children}
    </Context.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(Context)
}

export {Context, ContextProvider}

