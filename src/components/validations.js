import * as yup from 'yup'

let validations = yup.object({
   email: yup.string().email('Lütfen geçerli bir mail adresi giriniz').required('Zorunlu alan'),
   password:yup.string().min(5,"Parolanız en az 5 karakter olmalıdır").required("Zorunlu alan"),
   passwordConfirm:yup.string().oneOf([yup.ref('password')],"Parolalar uyuşmuyor").required("Zorunlu alan"),
  });
  export default validations;