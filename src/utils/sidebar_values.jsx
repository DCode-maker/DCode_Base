import * as Unicons from "@iconscout/react-unicons";
import { UilAirplay, UilLockAccess } from "@iconscout/react-unicons";
import RunQuery from "../pages/CustomQuery/RunQuery";
import QueryBuilderComponent from "../pages/CustomQuery/QueryBuilder";
import BIDashboard from "../pages/BusinessIntelligence/BIDashboard";
import AdvancedQueryBuilderComponent from "../pages/CustomQuery/AdvancedQueryBuilder";
import TestTable from "../pages/DataPlusAnalytics/TestTable";
import CommonPowerBI from "../pages/CommonPowerBI";

import DataPlusAnalytics from "../pages/DataPlusAnalytics";
import LaverView from "../pages/LaverView";
import DBConfig from "../pages/CustomQuery/DBConfig";
import SavedQueries from "../pages/CustomQuery/SavedQueries";
import AlertConfigure from "../pages/AlertMonitoringSystem/AlertConfigure";
import ViewMtandaoComplaints from "../pages/MtandaoComplaints/ViewMtandaoComplaints";
import AlertScheduler from "../pages/AlertMonitoringSystem/AlertScheduler";
import UserManagement from "../pages/Admin/UserManagement/UserManagement";
import RoleManagement from "../pages/Admin/RoleManagement/RoleManagement";
import Registration from "../pages/Registration";
import Cart from "../pages/Cart";
import Carts from "../pages/Carts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import InvestmentDiscovery from "../pages/Investment/InvestmentDiscovery";
import Kycregister from "../pages/Kycregister";
import NokiaToolManagementQuery from "../pages/NokiaToolManagement/NokiaToolManagementQuery";
// import NetworkAnalyticsPro from '../pages/DataPlusAnalytics/NetworkAnalyticsPro';
import SiteAnalyticsPro from "../pages/DataPlusAnalytics/SiteAnalyticsPro";
import ProRulesQuery from "../pages/ProRules/ProRulesQuery";
import Portfolio from "../pages/Portfolio";
import Profile from "../pages/Profile";
import PitchDeck from "../pages/PitchDeck/PitchDeck";
import InvestmentTransaction from "../pages/Investment/InvestmentTransaction";
import InvestorCrm from "../pages/Investment/InvestorCrm";
import Details from "../pages/Details";

import InvestorCRMDetails from "../pages/InvestorCRMDetails";
import ViewPitchDeck from "../pages/PitchDeck/ViewPitchDeck";
import BlobFileViewer from "../pages/testing/BlobFile";
import SendEmail from "../pages/Admin/RoleManagement/SendEmail";
import KYCManagement from "../pages/KYCManagement/KYCManagement";
import PitchDeckAdmin from "../pages/PitchDeck/viewPitchDeckAdmin";
import InvestmentDetailsManagement from "../pages/InvestmentDetails/InvestmentDetails";
import FundSeekerDetails from "../pages/FundSeekerDetails/FundSeekerDetails";
import OperationManagement from "../pages/OperationManagement/OperationManagement";
import AgreementManagement from "../pages/Admin/AgreementManagement/AgreementManagement";

// newimport
import ManageCustomer from "../pages/PMIS/Admin/ManageCustomer/ManageCustomer";
import ManageEmp from "../pages/PMIS/HR/ManageEmploye/ManageEmp";
import UserAllocation from "../pages/PMIS/HR/UserAllocation/UserAllocation";
// import ManageVendor from "../pages/PMIS/ManageVendor/ManageVendor";
import POLifeCycle from "../pages/PMIS/POLifeCycle/POLifeCylce";
import ManageProjectType from "../pages/PMIS/Admin/ManageProjectType/ManageProjectType";
import ManageCircle from "../pages/PMIS/Admin/ManageCircle/ManageCircle";
import ManageZone from "../pages/PMIS/Admin/ManageZone/ManageZone";
import MyHome from "../pages/PMIS/MyHome/Home";
import EmpDetails from "../pages/PMIS/MyHome/EmpDetails";
import EmpDetailsTable from "../pages/PMIS/MyHome/EmpDetailsTable";
import HRHomeView from "../pages/PMIS/HR";
import Claim from "../pages/PMIS/MyHome/Claim";
import Asset from "../pages/PMIS/MyHome/Asset";
import AssetRegistration from "../pages/PMIS/Admin/AssetRegistration/AssetRegistration";
import SuperAdmin from "../pages/PMIS/HR/SuperAdmin";
import ManageCostCenter from "../pages/PMIS/Admin/ManageCostCenter/ManageCostCenter";
import ManageProjectGroup from "../pages/PMIS/Admin/ManageProjectGroup/ManageProjectGroup";
import MyProjects from "../pages/MPAG/MyProjects/MyProjects";
import Table1 from "../pages/MPAG/Table1/Table1";
import SideBar2 from "../pages/MPAG/SideBar2/SideBar2";
import Table2 from "../pages/MPAG/Table2/Table2";
import MopDashboard from "../pages/MPAG/MOP/MopDashboard";
import IXDashboard from "../pages/MPAG/IXSupport/IXDashboard";
import TTDashboard from "../pages/MPAG/TroubleTickets/TTDashboard";
import TTTracker from "../pages/MPAG/TroubleTickets/TTTracker";
import E911Dashboard from "../pages/MPAG/E911CallTest/E911Dashboard";
import E911Tracker from "../pages/MPAG/E911CallTest/E911Tracker";
import RTTDashboard from "../pages/MPAG/RTT/RTTDashboard";
import SSVDashboard from "../pages/MPAG/RFPerformance/SSVDashboard";
import LaunchSSSNNP from "../pages/MPAG/RFPerformance/LaunchSSSNNP";
import SSVSSSApproval from "../pages/MPAG/RFPerformance/SSVSSSApproval";
import NetworkDatabase from "../pages/MPAG/NetworkDatabase/NetworkDatabase";
import ProjectDatabase from "../pages/MPAG/NetworkDatabase/ProjectDatabase";
import ManageAccount from "../pages/MPAG/AdminDashboard/ManageAccount/ManageAccount";
import RanSupportDashboard from "../pages/MPAG/RAN Support/RanSupportDashboard";
import RanSupportTracker from "../pages/MPAG/RAN Support/RanSupportTracker";
import NestingReport from "../pages/MPAG/RAN Support/NestingReport";
import NestingTracker from "../pages/MPAG/RAN Support/NestingTracker";
import Hours72AlarmDashboard from "../pages/MPAG/Hours72Alarm/Hours72AlarmDashboard";
import DailyActivityReport from "../pages/MPAG/RAN Support/DailyActivityReport";
import ExecutiveSpilloverReport from "../pages/MPAG/RAN Support/ExecutiveSpilloverReport";
import SLAReport from "../pages/MPAG/RAN Support/SLAReport";
import ManageMarkets from "../pages/MPAG/AdminDashboard/Manage Markets/ManageMarkets";
import ManageVendor from "../pages/MPAG/AdminDashboard/Manage Vendor/ManageVendor";
import ManageCrewCompany from "../pages/MPAG/AdminDashboard/Manage Crew Company/ManageCrewCompany";
import ManageCrew from "../pages/MPAG/AdminDashboard/Manage Crew/ManageCrew";
import TMODeployManagers from "../pages/MPAG/AdminDashboard/TMO Deployment  Managers/TMODeployManagers";
import ManagerEngineers from "../pages/MPAG/AdminDashboard/Manager Engineers/ManagerEngineers";
import ManagePierTTFroup from "../pages/MPAG/AdminDashboard/Manage Pier TT Group/ManagePierTTGroup";
import ManageScoreCardForm from "../pages/MPAG/AdminDashboard/Manage Score Card/ManageScoreCardForm"
import ManageSiteAccess from "../pages/MPAG/AdminDashboard/Manage Site Access/ManageSiteAccess";
import ManageDropdownList from "../pages/MPAG/AdminDashboard/Manage Dropdown List/ManageDropdownList";
import ManageMobileGeofencingForm from "../pages/MPAG/AdminDashboard/Manage Mobile geofencing/ManageMobileGeofencingForm";
import AppDashboard from "../pages/AppDashboard";
import MessageDashboard from "../pages/App Messages/MessageDashboard";



export const Sidebar_content = {
  temp: [],
  GlobalUrl: [
    {
      name: "Not Found",
      link: "*",
      subMenu: [
        {
          name: "dasdaas",
          link: "*",
          component: <h4 className="text-xl">Coming Soon</h4>,
          subMenu: [],
        },
      ],
    },
    // {
    //   name: "",
    //   link: "/projectType/:customeruniqueId",
    //   subMenu: [],
    //   component: <ManageProjectType />,
    // },
    // {
    //   name: "",
    //   link: "/projectGroup",
    //   subMenu: [],
    //   component: <HRHomeView />,
    // },
    // {
    //   name: "",
    //   link: "/empdetails",
    //   subMenu: [],
    //   component: <EmpDetails />,
    // },
    // {
    //   name: "",
    //   link: "/empdetailstable",
    //   subMenu: [],
    //   component: <EmpDetailsTable />,
    // },
    // {
    //   name: "",
    //   link: "/claim&Reimbursement",
    //   subMenu: [],
    //   component: <Claim />,
    // },
    // {
    //   name: "",
    //   link: "/Assets",
    //   subMenu: [],
    //   component: <Asset />,
    // },
    // {
    //   name: "",
    //   link: "/superAdmin",
    //   subMenu: [],
    //   component: <SuperAdmin />,
    // },
    // {
    //   name: "Manage Circle",
    //   link: "/manageCircle",
    //   subMenu: [],
    //   component: <ManageCircle />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // {
    //   name: "Manage Cost Center",
    //   link: "/manageCostCenter",
    //   subMenu: [],
    //   component: <ManageCostCenter />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // {
    //   name: "Asset Registration",
    //   link: "/assetRegistration",
    //   subMenu: [],
    //   component: <AssetRegistration />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // {
    //   name: "Manage Zone",
    //   link: "/manageZone",
    //   subMenu: [],
    //   component: <ManageZone />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // {
    //   name: "My Projects",
    //   link: "/myProjects",
    //   subMenu: [],
    //   component: <MyProjects />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    {
      name: "AppDasboard",
      link: "/app/dashboard",
      subMenu: [],
      component: <AppDashboard />,
      icon: <Unicons.UilChannel size="16" />,
    },
    {
      name: "MessageDashboard",
      link: "/messages/dashboard",
      subMenu: [],
      component: <MessageDashboard />,
      icon: <Unicons.UilChannel size="16" />,
    },
    // {
    //   name: "Table1",
    //   link: "/myTable1",
    //   subMenu: [],
    //   component: <Table1 />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // {
    //   name: "Table2",
    //   link: "/myTable2",
    //   subMenu: [],
    //   component: <Table2 />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // //Unde MOP
    // {
    //   name: "Mop Dashboard",
    //   link: "/Mop/database",
    //   subMenu: [],
    //   component: <MopDashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // //Under RAN Support

    // {
    //   name: "Ran Dashboard",
    //   link: "/ran/support/dashboard",
    //   subMenu: [],
    //   component: <RanSupportDashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // {
    //   name: "Ran Support Tracker",
    //   link: "/ran/support/tracker",
    //   subMenu: [],
    //   component: <RanSupportTracker />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // {
    //   name: "Ran Support Nesting Report",
    //   link: "/ran/nestingTime/report",
    //   subMenu: [],
    //   component: <NestingReport />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // {
    //   name: "Ran Support Nesting Tracker",
    //   link: "/ran/nestingTime/tracker",
    //   subMenu: [],
    //   component: <NestingTracker />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // {
    //   name: "Daily Activity Report",
    //   link: "/ran/support/dailyReport",
    //   subMenu: [],
    //   component: <DailyActivityReport />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // {
    //   name: "SLA Report",
    //   link: "/ran/sla/report",
    //   subMenu: [],
    //   component: <SLAReport />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // {
    //   name: "Excutive Spillover Report",
    //   link: "/ran/executivespillover/report",
    //   subMenu: [],
    //   component: <ExecutiveSpilloverReport />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // //72 hours alarm
    // {
    //   name: "72 Hours Alarm Dashboard",
    //   link: "/72alarm/dashboard",
    //   subMenu: [],
    //   component: <Hours72AlarmDashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // //Under IX Supports
    // {
    //   name: "IX Dashboard",
    //   link: "/IXSupport/database",
    //   subMenu: [],
    //   component: <IXDashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // Under Trouble Tickets
    // // 1.
    // {
    //   name: "TT Dashboard",
    //   link: "/troubleTickets/dashboard",
    //   subMenu: [],
    //   component: <TTDashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 2.
    // {
    //   name: "TT Tracker",
    //   link: "/troubleTickets/tracker",
    //   subMenu: [],
    //   component: <TTTracker />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // // Under E911 Call Test
    // // 1.
    // {
    //   name: "E911 Dashboard",
    //   link: "/E911/dashboard",
    //   subMenu: [],
    //   component: <E911Dashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 2.
    // {
    //   name: "E911 Tracker",
    //   link: "/E911/tracker",
    //   subMenu: [],
    //   component: <E911Tracker />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // // Under RTT
    // // 1.
    // {
    //   name: "Dashboard",
    //   link: "/rtt/dashboard",
    //   subMenu: [],
    //   component: <RTTDashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // // Udner RF Performance
    // //  1.
    // {
    //   name: "SSV Dashboard",
    //   link: "/ssv/dashboard",
    //   subMenu: [],
    //   component: <SSVDashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 2.
    // {
    //   name: " Launch,SSS & NNP",
    //   link: "/launchSSSNNP/dashboard",
    //   subMenu: [],
    //   component: <LaunchSSSNNP />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // //3
    // {
    //   name: " SSV & SSS Approval",
    //   link: "/combine/Approval/dashboard",
    //   subMenu: [],
    //   component: <SSVSSSApproval />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // // Under Network Databse
    // // 1.
    // {
    //   name: " Network Database",
    //   link: "/networkDatabase",
    //   subMenu: [],
    //   component: <NetworkDatabase />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 2.
    // {
    //   name: " Project Database",
    //   link: "/ProjectList",
    //   subMenu: [],
    //   component: <ProjectDatabase />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // // Under Admin Dashboard
    // // 1.
    // {
    //   name: " Manage Account",
    //   link: "/PAG/manage/account",
    //   subMenu: [],
    //   component: <ManageAccount />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 2.
    // {
    //   name: " Manage Markets",
    //   link: "/PAG/manage/markets",
    //   subMenu: [],
    //   component: <ManageMarkets />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 3.
    // {
    //   name: " Manage Vendor",
    //   link: "/PAG/manage/vendor",
    //   subMenu: [],
    //   component: <ManageVendor/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 4
    // {
    //   name: " Manage Crew Comapny",
    //   link: "/PAG/manage/crewcompany",
    //   subMenu: [],
    //   component: <ManageCrewCompany/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 5.
    // {
    //   name: " Manage Crew Comapny",
    //   link: "/PAG/userCrew",
    //   subMenu: [],
    //   component: <ManageCrew/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 6.
    
    // {
    //   name: " TMO Deployment Managers",
    //   link: "/PAG/T-Mobile",
    //   subMenu: [],
    //   component: <TMODeployManagers/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 7.
    // {
    //   name: " Manage Engineers",
    //   link: "/PAG/manageEngineer",
    //   subMenu: [],
    //   component: <ManagerEngineers/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 8.
    // {
    //   name: " Manage Pier TT Group",
    //   link: "/PAG/manage/ttPIERGroup",
    //   subMenu: [],
    //   component: <ManagePierTTFroup/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 9.
    // {
    //   name: " Manage Score Card",
    //   link: "/PAG/manage/scoreCard",
    //   subMenu: [],
    //   component: <ManageScoreCardForm/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    //  // 10.
    //  {
    //   name: " Manage Dropdown List",
    //   link: "/PAG/manage/dropDown",
    //   subMenu: [],
    //   component: <ManageDropdownList/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 11.
    // {
    //   name: " Manage Site Access",
    //   link: "/PAG/manage/MOPInstruction",
    //   subMenu: [],
    //   component: <ManageSiteAccess/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 12
    // {
    //   name: " Manage Mobile Geofencing",
    //   link: "/PAG/manage/geoFencing",
    //   subMenu: [],
    //   component: <ManageMobileGeofencingForm/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
  ],

  // all_routes: [

  //   {
  //     name: "Investment Dashboard",
  //     link: "/investment/dashboard",
  //     component: <Cart />,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   },
  //   {
  //     name: "Investment Discovery",
  //     link: "/investment/discovery",
  //     component: <InvestmentDiscovery />,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   },
  //   {
  //     name: "Investor crm",
  //     link: "/investor/crm",
  //     component: <InvestorCrm />,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   },
  //   {
  //     name: "Investment Transactions",
  //     link: "/communication",
  //     component: <InvestmentTransaction />,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   },
  //   {
  //     name: "Fundseeker Details",
  //     link: "/fundseeker_details",
  //     component: <FundSeekerDetails/>,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   },
  //   // {
  //   //     name: "Details",
  //   //     link: "/details",
  //   //     component: <Details/>,
  //   //     icon: <Unicons.UilReact />,
  //   //     subMenu: [],
  //   // },
  //   {
  //     name: "Details",
  //     link: "/investor/crm/details",
  //     component: <InvestorCRMDetails />,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   },
  //   {
  //     name: "Details",
  //     link: "/investor/crm/details/:uid",
  //     component: <InvestorCRMDetails />,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   },

  //   {
  //     name: "Company Details",
  //     link: "/details",
  //     component: <Details />,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   },
  //   // {
  //   //   name: "Portfolio",
  //   //   link: "/portfolio",
  //   //   component: <Portfolio />,
  //   //   icon: <Unicons.UilReact />,
  //   //   subMenu: [],
  //   // },

  //   {
  //     name: "KYC Status",
  //     link: "/kyc-status",
  //     component: <KYCManagement />,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   },
  //   {
  //     name: "Investment Details",
  //     link: "/investment-Details",
  //     component: <InvestmentDetailsManagement />,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   },
  //   {
  //     name: "Send Email",
  //     link: "/send_email",
  //     component: <SendEmail />,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   },
  //   {
  //     name: "Pitch Deck",
  //     link: "/pitch/deck",
  //     component: <PitchDeck />,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   },
  //   {
  //     name: "Pitch Deck",
  //     link: "/BlobFileViewer",
  //     component: <BlobFileViewer />,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   },
  //   {
  //     name: "Profile",
  //     link: "/profile",
  //     component: <Profile />,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   }, {
  //     name: "Agreement",
  //     link: "/agreemenView",
  //     component: <AgreementManagement/>,
  //     icon: <Unicons.UilReact />,
  //     subMenu: [],
  //   },

  // ],

  all_routes: [],
  Admin: [
    // {
    //   name: "My Dashboard",
    //   link: "/",
    //   component: <>Dashboard</>,
    //   icon: <UilAirplay />,
    //   subMenu: [],
    // },
    // {
    //   name: "My Home",
    //   link: "/home",
    //   component: <MyHome />,
    //   icon: <UilAirplay />,
    //   subMenu: [],
    // },
    // {
    //   name: "Project Management",
    //   link: "/manageCustomer",
    //   component: <ManageCustomer />,
    //   subMenu: [
    //     // {
    //     //   name: "Manage Project Group",
    //     //   link: "/manageProjectGroup",
    //     //   subMenu: [],
    //     //   component: <ManagePG />,
    //     //   icon: <Unicons.UilChannel size="16" />,
    //     // },
    //     // {
    //     //   name: "Manage Project Type",
    //     //   link: "/manageProjectType",
    //     //   subMenu: [],
    //     //   component: <ManagePT />,
    //     //   icon: <Unicons.UilChannel size="16" />,
    //     // },
    //     // {
    //     //   name: "Manage Access Control",
    //     //   link: "/manageAccessControl",
    //     //   subMenu: [],
    //     //   component: <POLifeCycle />,
    //     //   icon: <Unicons.UilChannel size="16" />,
    //     // },
    //     // {
    //     //   name: "View Expense/Advance",
    //     //   link: "/viewManage",
    //     //   subMenu: [],
    //     //   component: <POLifeCycle />,
    //     //   icon: <Unicons.UilChannel size="16" />,
    //     // },
    //   ],
    //   icon: <UilLockAccess />,
    // },
    // {
    //   name: "Human Resource",
    //   link: "/hr",
    //   subMenu: [
    //     // {
    //     //   name: "Manage Employee",
    //     //   link: "/manageEmployee",
    //     //   subMenu: [],
    //     //   component: <ManageEmp />,
    //     //   icon: <UilAirplay size="16" />,
    //     // },
    //     // {
    //     //   name: "User Allocation",
    //     //   link: "/userallocation",
    //     //   subMenu: [],
    //     //   component: <UserAllocation />,
    //     //   icon: <Unicons.UilChannel size="16" />,
    //     // },
    //   ],
    //   component: <HRHomeView />,
    //   icon: <UilLockAccess />,
    // },
    // {
    //   name: "Vendor Management",
    //   link: "/manageVendo",
    //   component: <ManageVendor />,
    //   icon: <Unicons.UilReact />,
    //   subMenu: [],
    // },
    // {
    //   name: "Financial",
    //   link: "/POLifeCylce",
    //   component: <POLifeCycle />,
    //   icon: <Unicons.UilReact />,
    //   subMenu: [],
    // },
    // {
    //   name: "Repository",
    //   link: "/operation-team",
    //   component: <OperationManagement />,
    //   icon: <Unicons.UilReact />,
    //   subMenu: [],
    // },
    // {
    //   name: "Form",
    //   link: "/operation-team",
    //   component: <OperationManagement />,
    //   icon: <Unicons.UilReact />,
    //   subMenu: [],
    // },
    // {
    //   name: "Super Admin",
    //   link: "/admin",
    //   subMenu: [
    //     {
    //       name: "Manage Circle",
    //       link: "/manageCircle",
    //       subMenu: [],
    //       component: <ManageCircle />,
    //       icon: <Unicons.UilChannel size="16" />,
    //     },
    //     {
    //       name: "Asset Registration",
    //       link: "/assetRegistration",
    //       subMenu: [],
    //       component: <AssetRegistration />,
    //       icon: <Unicons.UilChannel size="16" />,
    //     },
    //     {
    //       name: "Manage Zone",
    //       link: "/manageZone",
    //       subMenu: [],
    //       component: <ManageZone />,
    //       icon: <Unicons.UilChannel size="16" />,
    //     },
    //     // {
    //     //   name: "User Management",
    //     //   link: "/admin/user-management",
    //     //   subMenu: [],
    //     //   component: <UserManagement />,
    //     //   icon: <Unicons.UilChannel size="16" />,
    //     // },
    //     // {
    //     //   name: "Role Management",
    //     //   link: "/admin/role-management",
    //     //   subMenu: [],
    //     //   component: <RoleManagement />,
    //     //   icon: <Unicons.UilChannel size="16" />,
    //     // },
    //   ],
    //   icon: <Unicons.UilReact />,
    // },


    // MPAG ROUTES
    {
      name: "AppDasboard",
      link: "/app/dashboard",
      subMenu: [],
      component: <AppDashboard />,
      icon: <Unicons.UilChannel size="16" />,
    },
    {
      name: "MessageDashboard",
      link: "/messages/dashboard",
      subMenu: [],
      component: <MessageDashboard />,
      icon: <Unicons.UilChannel size="16" />,
    },
    // {
    //   name: "Table1",
    //   link: "/myTable1",
    //   subMenu: [],
    //   component: <Table1 />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // {
    //   name: "Table2",
    //   link: "/myTable2",
    //   subMenu: [],
    //   component: <Table2 />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // //Unde MOP
    // {
    //   name: "Mop Dashboard",
    //   link: "/Mop/database",
    //   subMenu: [],
    //   component: <MopDashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // //Under RAN Support

    // {
    //   name: "Ran Dashboard",
    //   link: "/ran/support/dashboard",
    //   subMenu: [],
    //   component: <RanSupportDashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // {
    //   name: "Ran Support Tracker",
    //   link: "/ran/support/tracker",
    //   subMenu: [],
    //   component: <RanSupportTracker />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // {
    //   name: "Ran Support Nesting Report",
    //   link: "/ran/nestingTime/report",
    //   subMenu: [],
    //   component: <NestingReport />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // {
    //   name: "Ran Support Nesting Tracker",
    //   link: "/ran/nestingTime/tracker",
    //   subMenu: [],
    //   component: <NestingTracker />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // {
    //   name: "Daily Activity Report",
    //   link: "/ran/support/dailyReport",
    //   subMenu: [],
    //   component: <DailyActivityReport />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // {
    //   name: "SLA Report",
    //   link: "/ran/sla/report",
    //   subMenu: [],
    //   component: <SLAReport />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // {
    //   name: "Excutive Spillover Report",
    //   link: "/ran/executivespillover/report",
    //   subMenu: [],
    //   component: <ExecutiveSpilloverReport />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // //72 hours alarm
    // {
    //   name: "72 Hours Alarm Dashboard",
    //   link: "/72alarm/dashboard",
    //   subMenu: [],
    //   component: <Hours72AlarmDashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // //Under IX Supports
    // {
    //   name: "IX Dashboard",
    //   link: "/IXSupport/database",
    //   subMenu: [],
    //   component: <IXDashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // Under Trouble Tickets
    // // 1.
    // {
    //   name: "TT Dashboard",
    //   link: "/troubleTickets/dashboard",
    //   subMenu: [],
    //   component: <TTDashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 2.
    // {
    //   name: "TT Tracker",
    //   link: "/troubleTickets/tracker",
    //   subMenu: [],
    //   component: <TTTracker />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // // Under E911 Call Test
    // // 1.
    // {
    //   name: "E911 Dashboard",
    //   link: "/E911/dashboard",
    //   subMenu: [],
    //   component: <E911Dashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 2.
    // {
    //   name: "E911 Tracker",
    //   link: "/E911/tracker",
    //   subMenu: [],
    //   component: <E911Tracker />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // // Under RTT
    // // 1.
    // {
    //   name: "Dashboard",
    //   link: "/rtt/dashboard",
    //   subMenu: [],
    //   component: <RTTDashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // // Udner RF Performance
    // //  1.
    // {
    //   name: "SSV Dashboard",
    //   link: "/ssv/dashboard",
    //   subMenu: [],
    //   component: <SSVDashboard />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 2.
    // {
    //   name: " Launch,SSS & NNP",
    //   link: "/launchSSSNNP/dashboard",
    //   subMenu: [],
    //   component: <LaunchSSSNNP />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // //3
    // {
    //   name: " SSV & SSS Approval",
    //   link: "/combine/Approval/dashboard",
    //   subMenu: [],
    //   component: <SSVSSSApproval />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // // Under Network Databse
    // // 1.
    // {
    //   name: " Network Database",
    //   link: "/networkDatabase",
    //   subMenu: [],
    //   component: <NetworkDatabase />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 2.
    // {
    //   name: " Project Database",
    //   link: "/ProjectList",
    //   subMenu: [],
    //   component: <ProjectDatabase />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // // Under Admin Dashboard
    // // 1.
    // {
    //   name: " Manage Account",
    //   link: "/PAG/manage/account",
    //   subMenu: [],
    //   component: <ManageAccount />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 2.
    // {
    //   name: " Manage Markets",
    //   link: "/PAG/manage/markets",
    //   subMenu: [],
    //   component: <ManageMarkets />,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 3.
    // {
    //   name: " Manage Vendor",
    //   link: "/PAG/manage/vendor",
    //   subMenu: [],
    //   component: <ManageVendor/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 4
    // {
    //   name: " Manage Crew Comapny",
    //   link: "/PAG/manage/crewcompany",
    //   subMenu: [],
    //   component: <ManageCrewCompany/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 5.
    // {
    //   name: " Manage Crew ",
    //   link: "/PAG/userCrew",
    //   subMenu: [],
    //   component: <ManageCrew/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 6.
    
    // {
    //   name: " TMO Deployment Managers",
    //   link: "/PAG/T-Mobile",
    //   subMenu: [],
    //   component: <TMODeployManagers/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 7.
    // {
    //   name: " Manage Engineers",
    //   link: "/PAG/manageEngineer",
    //   subMenu: [],
    //   component: <ManagerEngineers/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 8.
    // {
    //   name: " Manage Pier TT Group",
    //   link: "/PAG/manage/ttPIERGroup",
    //   subMenu: [],
    //   component: <ManagePierTTFroup/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    // // 9.
    // {
    //   name: " Manage Score Card",
    //   link: "/PAG/manage/scoreCard",
    //   subMenu: [],
    //   component: <ManageScoreCardForm/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },

    // // 10
    //   // 10.
    //   {
    //     name: " Manage Dropdown List",
    //     link: "/PAG/manage/dropDown",
    //     subMenu: [],
    //     component: <ManageDropdownList/>,
    //     icon: <Unicons.UilChannel size="16" />,
    //   },
    // // 11.
    // {
    //   name: " Manage Site Access",
    //   link: "/PAG/manage/MOPInstruction",
    //   subMenu: [],
    //   component: <ManageSiteAccess/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
    //  // 12
    //  {
    //   name: " Manage Mobile Geofencing",
    //   link: "/PAG/manage/geoFencing",
    //   subMenu: [],
    //   component: <ManageMobileGeofencingForm/>,
    //   icon: <Unicons.UilChannel size="16" />,
    // },
  ],
};
