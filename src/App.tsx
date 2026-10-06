import { Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import Dashboard from "./pages/Dashboard";

import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import routerProvider, {
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { dataProvider } from "./providers/data";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { Toaster } from "./components/refine-ui/notification/toaster";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import "./App.css";
import { BookOpen, GraduationCapIcon, HomeIcon } from "lucide-react";
import { Layout } from "./components/refine-ui/layout/layout";
import SubjectList from "./pages/subjects/List";
import { SubjectCreate } from "./pages/subjects/create";

function App() {
  return (
    <BrowserRouter basename="/Classroom-Dashboard">
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "JPJH2P-8J54Td-66GbCL",
                title: {
                  text: "Classroom",
                  icon: <GraduationCapIcon />,
                },
              }}
              resources={[
                {
                  name: "dashboard",
                  list: "/",
                  meta: { label: "Home", icon: <HomeIcon /> },
                },
                {
                  name: "subjects",
                  list: "/subjects",
                  create: "/subjects/create",
                  meta: { label: "Subjects", icon: <BookOpen /> },
                },
              ]}>
              <Routes>
                <Route
                  element={
                    <Layout>
                      <Outlet />
                    </Layout>
                  }>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/subjects">
                    <Route index element={<SubjectList />} />
                    <Route path="create" element={<SubjectCreate />} />
                  </Route>
                </Route>
              </Routes>
              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
