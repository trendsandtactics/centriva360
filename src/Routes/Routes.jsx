import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home3";
import AboutPage from "../Pages/AboutPage";
import ValuesPage from "../Pages/ValuesPage";
import CapabilitiesPage from "../Pages/CapabilitiesPage";
import AdvantagePage from "../Pages/AdvantagePage";
import ContactPage from "../Pages/ContactPage";
import TeamPage from "../Pages/TeamPage";
import BlogGrid from "../Pages/BlogGrid";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import InvestorRelationsPage from "../Pages/InvestorRelationsPage";
import ShippingPage from "../Pages/ShippingPage";
import LogisticsPage from "../Pages/LogisticsPage";
import ProductDistributionPage from "../Pages/ProductDistributionPage";
import SoftwareDevelopmentPage from "../Pages/SoftwareDevelopmentPage";
import RenewableEnergyPage from "../Pages/RenewableEnergyPage";
import CorporateSustainabilityPage from "../Pages/CorporateSustainabilityPage";
import GlobalPresencePage from "../Pages/GlobalPresencePage";
import SupplyChainSolutionsPage from "../Pages/SupplyChainSolutionsPage";
import AdminLogin from "../Pages/Admin/AdminLogin";
import AdminDashboard from "../Pages/Admin/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "values",
        Component: ValuesPage,
      },
      {
        path: "capabilities",
        Component: CapabilitiesPage,
      },
      {
        path: "the-advantage",
        Component: AdvantagePage,
      },
      {
        path: "advantage",
        Component: AdvantagePage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "our-business-verticals",
        Component: CapabilitiesPage, // updated to Capabilities
      },
      {
        path: "global-presence",
        Component: GlobalPresencePage,
      },
      {
        path: "team",
        Component: TeamPage,
      },
      {
        path: "investor-relations",
        Component: InvestorRelationsPage,
      },
      {
        path: "supply-chain-solutions",
        Component: SupplyChainSolutionsPage,
      },
      {
        path: "shipping",
        Component: ShippingPage,
      },
      {
        path: "logistics",
        Component: LogisticsPage,
      },
      {
        path: "product-distribution",
        Component: ProductDistributionPage,
      },
      {
        path: "software-development",
        Component: SoftwareDevelopmentPage,
      },
      {
        path: "renewable-energy",
        Component: RenewableEnergyPage,
      },
      {
        path: "corporate-sustainability",
        Component: CorporateSustainabilityPage,
      },
      {
        path: "blog",
        Component: BlogGrid,
      },
      {
        path: "blog/blog-details",
        Component: BlogDetailsPage,
      },
    ],
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin/dashboard",
    Component: AdminDashboard,
  },
]);
