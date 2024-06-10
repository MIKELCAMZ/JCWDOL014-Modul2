import {Formik,Form, Field, FormikProps} from "formik";
import * as Yup from "yup" ; 
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterSchema = Yup.object().shape({
    email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required "),
     password: Yup.string()
     .min(6, "Password must be 6 character at minimum")
    .required("Password is required "),

});

interface IRegister {
    email: string;
    password: string;
}

function Register()  {
    const initialValues: IRegister = { email:"", password:""};

  const register = async (values : IRegister) => {
    await axios.post("http://localhost:3000/users", {
        email: values.email,
        password: values.password,
    });
    toast.success("Login successful, Congratulation ")
  };

//const notify = () => toast("Data berhasil dikirimkan!");


return (
    <>
    <div>
        <h1>Register Form</h1>
       
        {/* <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
       </div> */}

        <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
            register(values);
        } }
        >
        {(props: FormikProps<IRegister>) => {
const { values,errors, touched, handleChange } = props;
return (
     
    <Form>
       

        <div>
            <label htmlFor="email">Email:</label>
            <Field
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            />
        
        {touched.email && toast.error(errors.email)?
        (
            <div  style={{ color: "red"}}>
                {/* {errors.email} */}
                </div>
        ) 
        : null}
        </div>

        <div>
            <label htmlFor="password">Password:</label>
            <Field
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            />
            {touched.password && toast.error(errors.password)?(
            <div style={{ color: "red"}}>
                {/* {errors.password} */}
            </div>
        ) : null}
        </div>
        
        <button  type="submit">Submit</button>
        
    <ToastContainer />   
    </Form>
   );
}}
</Formik>
</div>
</>
)};

export default Register;