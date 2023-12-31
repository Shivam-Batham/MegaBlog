import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login, SignUp } from './conponents/index.js'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:"/login",
        element : (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path:'/signup',
        element:(
          <AuthLayout authentication ={false}>
            <SignUp />
          </AuthLayout>
        )
      },
      {
        path:"/all-posts",
        element:(
          <AuthLayout authentication>
            {" "}
            <AllPosts />
          </AuthLayout>
        )
      },
      {
        path :"/add-post",
        element:(
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path : "/edit-post/:slug",
        element:(
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        )

      },
      {
        path:"/post/:slug",
        element:<Post/>
      }
    ],
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RaouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
