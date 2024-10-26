import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";

// Pages from the first app
import Index from "./pages/index/index";
import GridLeftSidebar from "./pages/listing/tour-grid/grid-left-sidebar-hotel";
import TourDetailOne from "./pages/listing/tour-detail/tour-detail-one";
import TourDetailTwo from "./pages/listing/tour-detail/tour-detail-two";
import Aboutus from "./pages/aboutus";
import UserProfile from "./pages/account/user-profile";
import UserPayment from "./pages/account/user-payment";
import UserInvoice from "./pages/account/user-invoice";
import UserSocial from "./pages/account/user-social";
import UserNotification from "./pages/account/user-notification";
import UserSetting from "./pages/account/user-setting";
import Helpcenter from "./pages/helpcenter/helpcenter";
import HelpcenterFaq from "./pages/helpcenter/helpcenter-faqs";
import HelpcenterGuides from "./pages/helpcenter/helpcenter-guides";
import HelpcenterSupport from "./pages/helpcenter/helpcenter-support";
import Login from "./pages/user/login";
import Signup from "./pages/user/signup";
import ForgotPassword from "./pages/user/forgot-password";
import LockScreen from "./pages/user/lock-screen";
import Terms from "./pages/utility/terms";
import Privacy from "./pages/utility/privacy";
import Comingsoon from "./pages/special/comingsoon";
import Maintenance from "./pages/special/maintenance";
import Error from "./pages/special/404";
import Blogs from "./pages/blog/blogs";
import BlogStandard from "./pages/blog/blog-standard";
import BlogDetail from "./pages/blog/blog-detail";
import Contact from "./pages/contact";
import GridLeftSidebarHotel from "./pages/listing/tour-grid/grid-left-sidebar-hotel";
import "./App.css"

// Pages from the second app
import {
  Categories,
  CreateCategory,
  CreateProduct,
  CreateOrder,
  CreateUser,
  EditProduct,
  EditCategory,
  EditOrder,
  EditReview,
  DashboardView,
  Products,
  Orders,
  Users,
  Reviews,
  CreateReview,
  Login as AdminLogin,
  
} from "./pages/admin/Adminpages";


const router = createBrowserRouter([
  // Routes from the first app
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/grid-left-sidebar",
    element: <GridLeftSidebar />,
  },
  {
    path: "/grid-left-sidebar-hotel",
    element: <GridLeftSidebarHotel />,
  },
  {
    path: "/tour-detail-one",
    element: <TourDetailOne />,
  },
  {
    path: "/tour-detail-one/:id",
    element: <TourDetailOne />,
  },
  {
    path: "/tour-detail-two",
    element: <TourDetailTwo />,
  },
  {
    path: "/tour-detail-two/:id",
    element: <TourDetailTwo />,
  },
  {
    path: "/aboutus",
    element: <Aboutus />,
  },
  {
    path: "/user-profile",
    element: <UserProfile />,
  },
  {
    path: "/user-payment",
    element: <UserPayment />,
  },
  {
    path: "/user-invoice",
    element: <UserInvoice />,
  },
  {
    path: "/user-social",
    element: <UserSocial />,
  },
  {
    path: "/user-notification",
    element: <UserNotification />,
  },
  {
    path: "/user-setting",
    element: <UserSetting />,
  },
  {
    path: "/helpcenter",
    element: <Helpcenter />,
  },
  {
    path: "/helpcenter-faqs",
    element: <HelpcenterFaq />,
  },
  {
    path: "/helpcenter-guides",
    element: <HelpcenterGuides />,
  },
  {
    path: "/helpcenter-support",
    element: <HelpcenterSupport />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/lock-screen",
    element: <LockScreen />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/comingsoon",
    element: <Comingsoon />,
  },
  {
    path: "/maintenance",
    element: <Maintenance />,
  },
  {
    path:"*",
    element: <Error />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blog-standard",
    element: <BlogStandard />,
  },
  {
    path: "/blog-detail",
    element: <BlogDetail />,
  },
  {
    path: "/blog-detail/:id",
    element: <BlogDetail />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },

  // Routes from the second app
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
 
  {
    path: "/admin/dashboardView",
    element: <DashboardView />,
  },
  {
    path: "/admin/products",
    element: <Products />,
  },
  {
    path: "/admin/products/create-product",
    element: <CreateProduct />,
  },
  {
    path: "/admin/products/:id",
    element: <EditProduct />,
  },
  {
    path: "/admin/categories",
    element: <Categories />,
  },
  {
    path: "/admin/categories/create-category",
    element: <CreateCategory />,
  },
  {
    path: "/admin/categories/:id",
    element: <EditCategory />,
  },
  {
    path: "/admin/orders",
    element: <Orders />,
  },
  {
    path: "/admin/orders/create-order",
    element: <CreateOrder />,
  },
  {
    path: "/admin/orders/1",
    element: <EditOrder />,
  },
  {
    path: "/admin/users",
    element: <Users />,
  },
  {
    path: "/admin/users/create-user",
    element: <CreateUser />,
  },
  {
    path: "/admin/reviews",
    element: <Reviews />,
  },
  {
    path: "/admin/reviews/create-review",
    element: <CreateReview />,
  },
  {
    path: "/admin/reviews/:id",
    element: <EditReview />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
