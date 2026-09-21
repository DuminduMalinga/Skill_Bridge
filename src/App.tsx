import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ChoosePathPage from "./pages/ChoosePathPage";
import SignupPage from "./pages/SignupPage";
import CompanySignupPage from "./pages/CompanySignupPage";
import InstituteSignupPage from "./pages/InstituteSignupPage";
import Onboarding1Page from "./pages/Onboarding1Page";
import Onboarding2Page from "./pages/Onboarding2Page";
import Onboarding3Page from "./pages/Onboarding3Page";
import CoursesPage from "./pages/CoursesPage";
import SkillGapPage from "./pages/SkillGapPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import NotificationsPage from "./pages/NotificationsPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import ProgressPage from "./pages/ProgressPage";
import StudentProfileViewPage from "./pages/StudentProfileViewPage";
import CompanyDashboardPage from "./pages/CompanyDashboardPage";
import ApplicantReviewPage from "./pages/ApplicantReviewPage";
import ManageOpeningsPage from "./pages/ManageOpeningsPage";
import PostOpportunityPage from "./pages/PostOpportunityPage";
import CompanyProfileSetupPage from "./pages/CompanyProfileSetupPage";
import InstituteDashboardPage from "./pages/InstituteDashboardPage";
import InstituteProfileSetupPage from "./pages/InstituteProfileSetupPage";
import PostCoursePage from "./pages/PostCoursePage";
import InstitutesPage from "./pages/InstitutesPage";
import InstituteDetailPage from "./pages/InstituteDetailPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/choose-path" element={<ChoosePathPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/company-signup" element={<CompanySignupPage />} />
      <Route path="/institute-signup" element={<InstituteSignupPage />} />
      <Route path="/onboarding-1" element={<Onboarding1Page />} />
      <Route path="/onboarding-2" element={<Onboarding2Page />} />
      <Route path="/onboarding-3" element={<Onboarding3Page />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/skill-gap" element={<SkillGapPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/project-detail" element={<ProjectDetailPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/applications" element={<ApplicationsPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/student-profile-view" element={<StudentProfileViewPage />} />
      <Route path="/company-dashboard" element={<CompanyDashboardPage />} />
      <Route path="/applicant-review" element={<ApplicantReviewPage />} />
      <Route path="/manage-openings" element={<ManageOpeningsPage />} />
      <Route path="/post-opportunity" element={<PostOpportunityPage />} />
      <Route path="/company-profile-setup" element={<CompanyProfileSetupPage />} />
      <Route path="/institute-dashboard" element={<InstituteDashboardPage />} />
      <Route path="/institute-profile-setup" element={<InstituteProfileSetupPage />} />
      <Route path="/post-course" element={<PostCoursePage />} />
      <Route path="/institutes" element={<InstitutesPage />} />
      <Route path="/institute-detail" element={<InstituteDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
