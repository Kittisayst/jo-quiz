import {
    BrowserRouter,
    Routes,
    Route,
    // Navigate,
    // Outlet,
} from "react-router-dom";
import Layout from "@/layouts/Layout";
import LoginPage from "@/pages/Login";
import TeacherDashboard from "@/pages/Teacher";
import StudentDashboard from "@/pages/Student";
// import { useAuthStore } from "@/stores/authStore";

// Protected Route Wrapper (Commented out for now as we bypass login)
// const ProtectedRoute = ({ allowedRoles }: { allowedRoles?: string[] }) => {
//     const { user, isAuthenticated } = useAuthStore();
//
//     if (!isAuthenticated) {
//         return <Navigate to="/login" replace />;
//     }
//
//     if (allowedRoles && user && !allowedRoles.includes(user.role)) {
//         return <Navigate to="/" replace />; // Or forbidden page
//     }
//
//     return <Outlet />;
// };

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Default to Student Dashboard for bypass mode */}
                    <Route index element={<StudentDashboard />} />

                    <Route path="login" element={<LoginPage />} />

                    {/* Teacher Routes - Bypassed protection for testing */}
                    {/* <Route
                        element={<ProtectedRoute allowedRoles={["teacher"]} />}
                    > */}
                    <Route path="teacher" element={<TeacherDashboard />} />
                    {/* </Route> */}

                    {/* Student Routes - Also accessible via direct link */}
                    <Route path="student" element={<StudentDashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
