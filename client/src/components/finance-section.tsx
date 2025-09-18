export default function FinanceSection() {
  return (
    <section id="interests" className="py-16 fade-in stagger-5">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center" data-testid="finance-title">
        Finance & Investment Interests
      </h2>
      <div className="bg-card rounded-xl shadow-sm border border-border p-8" data-testid="finance-card">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center" data-testid="investment-focus-title">
              <i className="fas fa-chart-line text-primary mr-2"></i>
              Investment Focus
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start" data-testid="investment-focus-1">
                <i className="fas fa-circle text-xs text-primary mt-2 mr-3 flex-shrink-0"></i>
                <span>Active investor in stocks and ETFs with focus on long-term value creation</span>
              </li>
              <li className="flex items-start" data-testid="investment-focus-2">
                <i className="fas fa-circle text-xs text-primary mt-2 mr-3 flex-shrink-0"></i>
                <span>Daily analysis of economic markets and financial trends</span>
              </li>
              <li className="flex items-start" data-testid="investment-focus-3">
                <i className="fas fa-circle text-xs text-primary mt-2 mr-3 flex-shrink-0"></i>
                <span>Portfolio diversification across technology, healthcare, and emerging markets</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center" data-testid="market-analysis-title">
              <i className="fas fa-book-open text-primary mr-2"></i>
              Market Analysis
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start" data-testid="market-analysis-1">
                <i className="fas fa-circle text-xs text-primary mt-2 mr-3 flex-shrink-0"></i>
                <span>Regular research on macroeconomic indicators and market fundamentals</span>
              </li>
              <li className="flex items-start" data-testid="market-analysis-2">
                <i className="fas fa-circle text-xs text-primary mt-2 mr-3 flex-shrink-0"></i>
                <span>Technical analysis skills for identifying market entry and exit points</span>
              </li>
              <li className="flex items-start" data-testid="market-analysis-3">
                <i className="fas fa-circle text-xs text-primary mt-2 mr-3 flex-shrink-0"></i>
                <span>Understanding of financial statements and company valuation methods</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 p-6 bg-accent/30 rounded-lg" data-testid="finance-insight">
          <p className="text-sm text-muted-foreground">
            <i className="fas fa-lightbulb text-primary mr-2"></i>
            This dual expertise in software engineering and finance provides unique insights for developing 
            fintech solutions, data analysis tools, and automated trading systems.
          </p>
        </div>
      </div>
    </section>
  );
}
