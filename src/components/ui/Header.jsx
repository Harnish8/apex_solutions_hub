import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/central-hub-homepage', icon: 'Home' },
    { name: 'IT Services', path: '/it-services-domain-landing', icon: 'Server' },
    { name: 'Marketing', path: '/marketing-domain-landing', icon: 'TrendingUp' },
    { name: 'Business Consulting', path: '/business-consulting-domain-landing', icon: 'Users' },
    { name: 'Solutions', path: '/integrated-solutions-showcase', icon: 'Zap' }
  ];

  const secondaryItems = [
    { name: 'Resources', path: '/resource-intelligence-center', icon: 'BookOpen' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const Logo = () => (
    <Link to="/central-hub-homepage" className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-brand transition-brand group-hover:shadow-brand-lg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-headline font-bold text-xl text-foreground group-hover:text-primary transition-brand">
          Apex Solutions
        </span>
        <span className="font-body text-xs text-muted-foreground -mt-1">
          Hub
        </span>
      </div>
    </Link>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-brand ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-brand border-b border-border' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-brand ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-brand">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-brand-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-brand">
                {secondaryItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm hover:bg-muted transition-brand first:rounded-t-lg last:rounded-b-lg ${
                      isActivePath(item.path)
                        ? 'text-primary font-medium' :'text-popover-foreground'
                    }`}
                  >
                    <Icon name={item.icon} size={16} />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="text-sm"
            >
              Assessment
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-cta hover:bg-cta/90 text-cta-foreground font-cta font-semibold"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-brand"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border shadow-brand-lg">
          <div className="px-4 py-4 space-y-2">
            {[...navigationItems, ...secondaryItems].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-brand ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            <div className="pt-4 border-t border-border space-y-2">
              <Button
                variant="outline"
                fullWidth
                className="justify-center"
              >
                Assessment
              </Button>
              <Button
                variant="default"
                fullWidth
                className="justify-center bg-cta hover:bg-cta/90 text-cta-foreground font-cta font-semibold"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;