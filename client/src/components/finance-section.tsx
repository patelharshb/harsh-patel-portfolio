export default function FinanceSection() {
  return (
    <section id="interests" className="py-16 fade-in stagger-5">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center" data-testid="finance-title">
        Interests & Personal Hobbies
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
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center justify-center" data-testid="hobbies-subtitle">
            <i className="fas fa-heart text-primary mr-2"></i>
            Personal Activities & Sports
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors" data-testid="hobby-finance">
              <i className="fas fa-book-open text-2xl text-primary mb-3"></i>
              <h4 className="font-medium text-foreground mb-2">Reading about Finance</h4>
              <p className="text-sm text-muted-foreground text-center">Staying updated with market trends and investment strategies</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors" data-testid="hobby-volleyball">
              <i className="fas fa-volleyball text-2xl text-primary mb-3"></i>
              <h4 className="font-medium text-foreground mb-2">Volleyball</h4>
              <p className="text-sm text-muted-foreground text-center">Team sport that builds communication and coordination</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors" data-testid="hobby-cricket">
              <i className="fas fa-baseball text-2xl text-primary mb-3"></i>
              <h4 className="font-medium text-foreground mb-2">Cricket</h4>
              <p className="text-sm text-muted-foreground text-center">Strategic sport requiring patience and tactical thinking</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors" data-testid="hobby-tennis">
              <i className="fas fa-trophy text-2xl text-primary mb-3"></i>
              <h4 className="font-medium text-foreground mb-2">Tennis</h4>
              <p className="text-sm text-muted-foreground text-center">Grand Slam sport that improves focus and agility</p>
            </div>
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
