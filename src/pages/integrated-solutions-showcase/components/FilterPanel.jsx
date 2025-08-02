import React from 'react';

import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const FilterPanel = ({ filters, onFilterChange, onClearFilters, isOpen, onToggle }) => {
  const industryOptions = [
    { value: 'all', label: 'All Industries' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'fintech', label: 'Financial Technology' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'education', label: 'Education' },
    { value: 'retail', label: 'Retail' }
  ];

  const companySizeOptions = [
    { value: 'all', label: 'All Company Sizes' },
    { value: 'startup', label: 'Startup (1-50)' },
    { value: 'sme', label: 'SME (51-500)' },
    { value: 'enterprise', label: 'Enterprise (500+)' }
  ];

  const serviceOptions = [
    { value: 'all', label: 'All Service Combinations' },
    { value: 'it-marketing', label: 'IT + Marketing' },
    { value: 'it-business', label: 'IT + Business Consulting' },
    { value: 'marketing-business', label: 'Marketing + Business' },
    { value: 'full-integration', label: 'Full Integration' }
  ];

  const activeFiltersCount = Object.values(filters).filter(value => value !== 'all').length;

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={onToggle}
          iconName="Filter"
          iconPosition="left"
          className="w-full justify-center"
        >
          Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
        </Button>
      </div>

      {/* Filter Panel */}
      <div className={`bg-card border border-border rounded-xl p-6 transition-brand ${
        isOpen ? 'block' : 'hidden lg:block'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-headline font-bold text-lg text-foreground">
            Filter Case Studies
          </h3>
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              iconName="X"
              iconPosition="left"
            >
              Clear All
            </Button>
          )}
        </div>

        <div className="space-y-6">
          {/* Industry Filter */}
          <div>
            <Select
              label="Industry"
              options={industryOptions}
              value={filters.industry}
              onChange={(value) => onFilterChange('industry', value)}
              className="w-full"
            />
          </div>

          {/* Company Size Filter */}
          <div>
            <Select
              label="Company Size"
              options={companySizeOptions}
              value={filters.companySize}
              onChange={(value) => onFilterChange('companySize', value)}
              className="w-full"
            />
          </div>

          {/* Service Combination Filter */}
          <div>
            <Select
              label="Service Combination"
              options={serviceOptions}
              value={filters.services}
              onChange={(value) => onFilterChange('services', value)}
              className="w-full"
            />
          </div>

          {/* Quick Stats */}
          <div className="pt-4 border-t border-border">
            <h4 className="font-semibold text-foreground mb-3">Quick Stats</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Case Studies</span>
                <span className="font-medium text-foreground">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Industries Served</span>
                <span className="font-medium text-foreground">12+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avg. ROI Increase</span>
                <span className="font-medium text-accent">285%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;