import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
const FormValidation = () => {
    const frmRegis = useFormik({
        initialValues: {
            user: '',
            email: '',
            gender: '',
            country: 'USA',
            password: ''



        },
        validationSchema: yup.object().shape({
            user: yup.string().required('userName is a required'),
            email: yup.string().required('email is a required').email('email is invalid !'),
            gender: yup.string().required('Please select').oneOf(['male', 'female']),
            password: yup.string().required('password is required').min(8, 'ít nhất 8 kí tự'),
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6" onSubmit={frmRegis.handleSubmit}>
                <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                            <input
                                id="user"
                                name="user"
                                type="text"
                                placeholder="janesmith"
                                autoComplete="username"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                onChange={frmRegis.handleChange} onBlur={frmRegis.handleBlur}
                            />

                        </div>
                        {frmRegis.errors.user && <p className='alert alert-danger my-1'>{frmRegis.errors.user}</p>}
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={frmRegis.handleChange} onBlur={frmRegis.handleBlur}
                        />
                        {frmRegis.errors.email && <p className='alert alert-danger my-1'>{frmRegis.errors.email}</p>}
                    </div>
                </div>
                <div className='form-group mt-2' onChange={frmRegis.handleChange} onBlur={frmRegis.handleBlur}>
                    <label htmlFor='gender'><b>Gender</b></label>
                    <label htmlFor='female' className='ms-2'>Female</label>
                    <input className='form-check-input mx-2' id="female" name='gender' type='radio' placeholder='' value="female"  />
                    <label htmlFor='male' className='ms-2'>Male</label>
                    <input className='form-check-input mx-2' id="male" name='gender' type='radio' placeholder='' value="male"  />
                    {frmRegis.errors.gender && <p className='alert alert-danger my-1'>{frmRegis.errors.gender}</p>}
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Country
                    </label>
                    <div className="mt-2">
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={frmRegis.handleChange}
                            defaultValue="Australia"
                        >
                            <option>USA</option>
                            <option>Canada</option>
                            <option>UK</option>
                            <option>Australia</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>

                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={frmRegis.handleChange} onBlur={frmRegis.handleBlur}
                        />
                        {frmRegis.errors.password && <p className='alert alert-danger my-1'>{frmRegis.errors.password}</p>}
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormValidation