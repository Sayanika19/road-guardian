
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BarChart2,
  Home,
  Map,
  AlertTriangle,
  Lightbulb,
  LogOut,
  Menu,
  X,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface SideNavProps {
  className?: string;
}

const SideNav = ({ className }: SideNavProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      setUserName(user.name || 'User');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success('Logged out successfully!');
    window.location.href = '/';
  };

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Menu items
  const menuItems = [
    {
      icon: <Home size={20} />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <Map size={20} />,
      label: "Risk Map",
      path: "/risk-map",
    },
    {
      icon: <BarChart2 size={20} />,
      label: "Contributing Factors",
      path: "/factors",
    },
    {
      icon: <AlertTriangle size={20} />,
      label: "Risk Assessment",
      path: "/assessment",
    },
    {
      icon: <Lightbulb size={20} />,
      label: "Recommendations",
      path: "/recommendations",
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleMobileMenu}
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-sidebar text-sidebar-foreground fixed h-full z-40 transition-all duration-300 ease-in-out flex flex-col",
          isCollapsed ? "w-[70px]" : "w-[240px]",
          isMobileOpen ? "left-0" : "-left-[280px]",
          "md:left-0",
          className
        )}
      >
        {/* App Logo/Name */}
        <div className="p-4 flex items-center h-16">
          <Shield className="h-6 w-6 text-white" />
          {!isCollapsed && (
            <span className="ml-2 font-bold text-lg">Road Rakshak</span>
          )}
        </div>

        <Separator className="bg-sidebar-border" />

        {/* User Info */}
        <div className="p-4 flex items-center">
          <div className="h-8 w-8 rounded-full bg-sidebar-accent flex items-center justify-center text-sidebar-accent-foreground font-semibold">
            {userName.charAt(0).toUpperCase()}
          </div>
          {!isCollapsed && (
            <div className="ml-2 overflow-hidden">
              <p className="text-sm font-medium truncate">{userName}</p>
              <p className="text-xs opacity-70 truncate">Analyst</p>
            </div>
          )}
        </div>

        <Separator className="bg-sidebar-border" />

        {/* Navigation Links */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-2 py-2 rounded-md transition-colors",
                    isActive(item.path)
                      ? "bg-sidebar-accent text-white"
                      : "hover:bg-sidebar-accent/50"
                  )}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4">
          <Button
            variant="ghost"
            size={isCollapsed ? "icon" : "default"}
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
            onClick={handleLogout}
          >
            <LogOut size={20} />
            {!isCollapsed && <span className="ml-2">Log Out</span>}
          </Button>
        </div>

        {/* Collapse Button - Desktop Only */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-4 top-20 hidden md:flex h-8 w-8 rounded-full bg-sidebar border border-sidebar-border text-sidebar-foreground"
          onClick={toggleCollapsed}
        >
          {isCollapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </Button>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default SideNav;
