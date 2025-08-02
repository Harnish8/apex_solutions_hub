import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import BusinessConsultingDomainLanding from "pages/business-consulting-domain-landing";
import IntegratedSolutionsShowcase from "pages/integrated-solutions-showcase";
import CentralHubHomepage from "pages/central-hub-homepage";
import ItServicesDomainLanding from "pages/it-services-domain-landing";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<CentralHubHomepage />} />
        <Route path="/business-consulting-domain-landing" element={<BusinessConsultingDomainLanding />} />
        <Route path="/integrated-solutions-showcase" element={<IntegratedSolutionsShowcase />} />
        <Route path="/central-hub-homepage" element={<CentralHubHomepage />} />
        <Route path="/it-services-domain-landing" element={<ItServicesDomainLanding />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;