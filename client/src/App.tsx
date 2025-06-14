import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/layout";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Team from "@/pages/team";
import About from "@/pages/about";
import Zane from "@/pages/zane";
import Insights from "@/pages/insights";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import SymbolPreview from "@/pages/symbol-preview";
import Admin from "@/pages/admin";
import BlogPost from "@/pages/blog-post";
import LogoTest from "@/pages/logo-test";
import Tastemakers from "@/pages/tastemakers";
import Tastemakers2025 from "@/pages/tastemakers-2025";

import { useScrollToTop } from "@/hooks/use-scroll-to-top";

function Router() {
  useScrollToTop();
  
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/team" component={Team} />
        <Route path="/about" component={About} />
        <Route path="/zane" component={Zane} />
        <Route path="/insights" component={Insights} />
        <Route path="/insights/:slug" component={BlogPost} />
        <Route path="/insights/tastemakers" component={Tastemakers} />
        <Route path="/insights/tastemakers-2025" component={Tastemakers2025} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
        <Route path="/symbol-preview" component={SymbolPreview} />
        <Route path="/logo-test" component={LogoTest} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
