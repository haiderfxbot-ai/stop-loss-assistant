/**
 * Pattern Details - File 5
 * Detailed explanations for patterns pat_041 through pat_060
 */

const PATTERN_DETAILS = {
  "pat_041": {
    title: "Bayesian Belief Network",
    sections: [
      {
        heading: "Overview",
        content: "Bayesian Belief Networks (BBNs) are graphical models representing probabilistic relationships between variables using directed acyclic graphs. Each node represents a variable, edges represent dependencies, and conditional probability tables quantify relationships. BBNs enable complex inference: calculating probabilities of unknown variables given observed evidence."
      },
      {
        heading: "Mathematical Foundation",
        content: "Joint probability: P(X_1,...,X_n) = Π P(X_i | Parents(X_i)). Inference: P(Query | Evidence) = P(Query, Evidence) / P(Evidence). The graph structure encodes conditional independence assumptions. Exact inference: variable elimination, junction tree. Approximate inference: Monte Carlo sampling, belief propagation. BBNs combine graph theory with probability theory."
      },
      {
        heading: "How It Works",
        content: "1. Define variables of interest. 2. Determine causal/dependency relationships. 3. Construct directed acyclic graph. 4. Assign conditional probability tables. 5. Enter observed evidence. 6. Perform inference to calculate posterior probabilities. 7. Update beliefs as new evidence arrives. 8. Use for decision analysis under uncertainty."
      },
      {
        heading: "When To Use",
        content: "Use when variables have complex dependencies that are difficult to model with simple methods. Works for diagnosis, prediction, and decision-making under uncertainty. Requires domain expertise to construct the graph. Most valuable when relationships are partially known and uncertainty is high. The framework handles missing data gracefully."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability when the graph structure and probabilities are correctly specified. The framework is mathematically rigorous. Main risk: incorrect graph structure leads to wrong conclusions. Also risk: computational complexity for large networks. Sensitivity analysis on probabilities is essential. BBNs are used in medicine, finance, and risk management."
      },
      {
        heading: "Historical Performance",
        content: "BBNs have been successfully applied in medical diagnosis (85-90% accuracy), spam filtering, gene regulatory network inference, and risk assessment. The framework handles uncertainty better than rule-based systems. In gambling analysis, BBNs can model complex relationships between outcomes, strategies, and bankroll. The technique is well-validated in academic literature."
      }
    ]
  },
  "pat_042": {
    title: "Probability Weighted Decision",
    sections: [
      {
        heading: "Overview",
        content: "Probability weighted decisions assign weights to outcomes based on their probability, creating a risk-adjusted decision framework. Unlike simple expected value, this approach can incorporate utility functions that reflect risk preferences, providing a more complete decision framework than EV alone."
      },
      {
        heading: "Mathematical Foundation",
        content: "Decision Score = Σ(P_i × U(V_i)), where P_i = probability, V_i = value, U = utility function. Expected Utility Theory: U(x) = x^(1-γ)/(1-γ) for CRRA utility (γ = risk aversion). For risk-neutral: U(x) = x (reduces to EV). For risk-averse: concave utility function. Certainty Equivalent = U^(-1)(E[U(V)]). Risk Premium = E[V] - Certainty Equivalent."
      },
      {
        heading: "How It Works",
        content: "1. List decision options and possible outcomes. 2. Assign probabilities to each outcome. 3. Assign values to each outcome. 4. Choose utility function reflecting risk preference. 5. Calculate expected utility for each option. 6. Select option with highest expected utility. 7. Risk-averse: prefer certain outcomes. 8. Risk-seeking: prefer gambles with positive EV."
      },
      {
        heading: "When To Use",
        content: "Use when risk preference affects decision quality. Essential for bankroll management where risk tolerance varies. The framework handles both risk-neutral and risk-averse decisions. Useful when outcomes have different variances—EV alone doesn't capture this. Apply to any decision where both expected value and risk matter."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability when utility function accurately reflects preferences. The framework is mathematically sound. Risk: utility function is subjective and difficult to specify. Different individuals have different risk preferences. The technique assumes rational behavior, which may not hold. Use as a framework for thinking about risk, not a precise calculator."
      },
      {
        heading: "Historical Performance",
        content: "Expected Utility Theory is the foundation of modern economics and finance. It explains why people buy insurance (risk-averse) and lottery tickets (risk-seeking for small amounts). In gambling, the framework explains why professional gamblers use fractional Kelly (risk-averse) rather than full Kelly (max growth). The theory is well-validated but has known violations (prospect theory)."
      }
    ]
  },
  "pat_043": {
    title: "Negative Binomial Distribution",
    sections: [
      {
        heading: "Overview",
        content: "The Negative Binomial distribution models the number of failures before a specified number of successes in independent Bernoulli trials. Unlike the Binomial (fixed trials, count successes), it counts failures before reaching a target. Useful for analyzing how long until a desired outcome occurs."
      },
      {
        heading: "Mathematical Foundation",
        content: "P(X=k) = C(k+r-1, k) × p^r × (1-p)^k, where r = target successes, p = success probability, k = failures before r-th success. Mean = r(1-p)/p, Variance = r(1-p)/p². When r=1: Geometric distribution. As r increases: approaches normal distribution. The distribution is defined for k = 0, 1, 2, ... (non-negative integers)."
      },
      {
        heading: "How It Works",
        content: "1. Define target number of successes (r). 2. Estimate success probability (p). 3. Calculate P(k failures before r-th success). 4. Calculate expected failures: r(1-p)/p. 5. Calculate variance to assess uncertainty. 6. Use for bankroll planning: how many bets until target? 7. Calculate probability of exceeding bankroll. 8. Use for session planning and risk assessment."
      },
      {
        heading: "When To Use",
        content: "Use when you need to reach a specific number of successes and want to know how many failures to expect. Particularly useful for bankroll planning: how many bets until reaching a target profit? Also useful for risk assessment: probability of ruin before target. Works when trials are independent with constant probability."
      },
      {
        heading: "Risk Assessment",
        content: "Medium-High reliability when assumptions hold. The distribution is mathematically exact for independent Bernoulli trials. Risk: probability may not be constant (varying conditions). Risk: trials may not be independent. The technique provides exact probabilities when assumptions are met. Use for planning, not prediction."
      },
      {
        heading: "Historical Performance",
        content: "The Negative Binomial distribution accurately models count data in many fields. In gambling analysis, it correctly predicts the distribution of bets until target profit (when probability is known). The distribution is used in insurance for claim counts, in biology for species abundance, and in queuing theory. Its mathematical properties are well-established."
      }
    ]
  },
  "pat_044": {
    title: "Volatility Mean Reversion",
    sections: [
      {
        heading: "Overview",
        content: "Volatility mean reversion identifies when volatility has deviated significantly from its historical mean and predicts reversion. High volatility periods tend to be followed by lower volatility, and vice versa. This pattern helps time entries (during low volatility before expansion) and exits (during high volatility before contraction)."
      },
      {
        heading: "Mathematical Foundation",
        content: "Volatility Z-Score = (Current_Vol - MA_Vol) / StdDev_Vol. Volatility measured as: standard deviation of returns, ATR, Parkinson estimator, or Garman-Klass estimator. Mean reversion speed: Ornstein-Uhlenbeck process dX = θ(μ - X)dt + σdW. Half-life of reversion: ln(2)/θ. Z-score > 2: volatility elevated, expect contraction. Z-score < -2: volatility compressed, expect expansion."
      },
      {
        heading: "How It Works",
        content: "1. Calculate rolling volatility (20-period standard deviation). 2. Calculate long-term volatility average. 3. Compute Z-score of current vs. historical volatility. 4. Z > 2: volatility high, expect contraction. 5. Z < -2: volatility low, expect expansion. 6. Calculate mean reversion speed. 7. Estimate time to reversion. 8. Adjust strategy for expected volatility regime."
      },
      {
        heading: "When To Use",
        content: "Use for timing entries and exits based on volatility regimes. Low volatility (compression) often precedes breakouts—good for entry. High volatility (expansion) often precedes consolidation—good for exit. The technique doesn't predict direction, only volatility changes. Combine with directional analysis for complete strategy. Works on all timeframes."
      },
      {
        heading: "Risk Assessment",
        content: "Medium-High reliability. Volatility clustering is well-documented in financial markets. The main risk: volatility regimes can persist longer than expected. Mean reversion speed varies. The technique doesn't predict direction. Risk management: use volatility-based position sizing to automatically adjust for regime changes."
      },
      {
        heading: "Historical Performance",
        content: "Studies show volatility mean reversion occurs with half-life of 10-30 days in most financial markets. Z-score extremes correctly predict volatility regime changes 65-75% of the time. The technique has been validated across multiple asset classes. It is most useful for position sizing and risk management rather than directional prediction."
      }
    ]
  },
  "pat_045": {
    title: "Geometric Brownian Motion",
    sections: [
      {
        heading: "Overview",
        content: "Geometric Brownian Motion (GBM) models price movements as a random walk with drift in log-space. It is the foundation for option pricing (Black-Scholes), risk modeling, and theoretical finance. GBM assumes prices follow a log-normal distribution with constant drift and volatility."
      },
      {
        heading: "Mathematical Foundation",
        content: "dS = μSdt + σSdW, where S = price, μ = drift, σ = volatility, dW = Wiener process increment. Solution: S_t = S_0 × exp((μ - σ²/2)t + σW_t). Log returns: ln(S_t/S_0) ~ N((μ - σ²/2)t, σ²t). The model implies: prices are always positive, returns are normally distributed, volatility is constant. These assumptions are often violated in practice."
      },
      {
        heading: "How It Works",
        content: "1. Estimate drift (μ) and volatility (σ) from historical data. 2. Use GBM to simulate possible price paths. 3. Calculate probability of price reaching certain levels. 4. Generate confidence intervals for future prices. 5. Use for risk assessment and scenario analysis. 6. Compare actual distribution to GBM predictions. 7. Identify deviations (fat tails, volatility clustering). 8. Use as baseline model for more complex models."
      },
      {
        heading: "When To Use",
        content: "Use as a baseline model for understanding price dynamics. Essential for option pricing and theoretical finance. Works for short-term analysis where assumptions are approximately valid. The model provides a framework for comparing actual market behavior to theoretical expectations. Don't rely on GBM for long-term prediction—real markets deviate significantly."
      },
      {
        heading: "Risk Assessment",
        content: "Medium reliability. GBM is a simplification—real markets show fat tails, volatility clustering, and jumps. The model underestimates extreme events. Risk management using GBM may be inadequate during crises. Use GBM as a starting point, not the final model. More advanced models (jump-diffusion, stochastic volatility) address some limitations."
      },
      {
        heading: "Historical Performance",
        content: "GBM is the foundation of modern financial theory and option pricing. It accurately models normal market conditions (80-90% of the time). However, it significantly underestimates tail risk—events like the 2008 crisis were far more extreme than GBM predicts. The model is useful as a baseline but should be supplemented with stress testing and scenario analysis."
      }
    ]
  },
  "pat_046": {
    title: "Pair Trading Statistical Arbitrage",
    sections: [
      {
        heading: "Overview",
        content: "Pair trading identifies statistically related assets and trades convergence when their spread deviates from historical norms. When the spread widens, buy the underperformer and sell the outperformer, profiting as the spread reverts to mean. The technique is market-neutral, profiting from relative value rather than direction."
      },
      {
        heading: "Mathematical Foundation",
        content: "Spread = Price_A - β × Price_B, where β = hedge ratio from regression. Cointegration test: Engle-Granger or Johansen test. Z-score of spread: Z = (Spread - μ_spread) / σ_spread. Trading rule: Buy when Z < -2, Sell when Z > 2, Exit when Z ≈ 0. The spread should be stationary (mean-reverting) for the strategy to work. Half-life of mean reversion determines holding period."
      },
      {
        heading: "How It Works",
        content: "1. Identify potentially cointegrated pairs. 2. Test for cointegration statistically. 3. Calculate hedge ratio (β) from regression. 4. Calculate spread and its statistics. 5. Monitor Z-score of spread. 6. Enter when Z exceeds threshold (e.g., ±2). 7. Exit when Z reverts to mean. 8. Manage risk with stop-loss if spread continues to diverge."
      },
      {
        heading: "When To Use",
        content: "Use when two assets are statistically related (cointegrated). The strategy profits from mean reversion of the spread. Works best in stable market conditions where relationships hold. Requires continuous monitoring of spread dynamics. The strategy can lose money during structural breaks when relationships change."
      },
      {
        heading: "Risk Assessment",
        content: "Medium reliability. The main risk: pairs can decouple during market stress. Cointegration is not permanent—relationships can break. The strategy requires careful pair selection and monitoring. Risk management: stop-loss on spread divergence. The technique is market-neutral but not risk-free."
      },
      {
        heading: "Historical Performance",
        content: "Academic studies show pair trading generates 5-10% annual returns with low volatility when pairs are properly selected. The strategy performed poorly during 2008 crisis when correlations spiked. Success rate: 55-65% of trades profitable. The technique is used by quantitative hedge funds and has been validated in multiple academic studies."
      }
    ]
  },
  "pat_047": {
    title: "Regime Switching Model",
    sections: [
      {
        heading: "Overview",
        content: "Regime switching models identify different market states (trending, ranging, volatile, calm) and adapt strategy parameters accordingly. The model assigns probabilities to each regime and switches between them based on observed data. This allows strategies to be responsive to changing market conditions."
      },
      {
        heading: "Mathematical Foundation",
        content: "Hidden Markov Model: P(Regime_t = j | data) = P(data | Regime_j) × P(Regime_t = j | data_{t-1}) / P(data | data_{t-1}). Transition probabilities: P(Regime_t = j | Regime_{t-1} = i). Emission probabilities: P(data | Regime_j). Baum-Welch algorithm for estimation. Viterbi algorithm for most likely regime sequence. Typically 2-4 regimes are used."
      },
      {
        heading: "How It Works",
        content: "1. Define distinct market regimes (2-4). 2. Estimate model parameters from historical data. 3. Calculate regime probabilities from current data. 4. Identify most likely current regime. 5. Switch strategy parameters based on regime. 6. Use transition probabilities for smoothing. 7. Monitor regime probability changes. 8. Adjust position sizing based on regime confidence."
      },
      {
        heading: "When To Use",
        content: "Use when market behavior changes between distinct states. The model adapts to changing conditions automatically. Works best with 2-3 clearly defined regimes. Requires sufficient data for parameter estimation. The model is backward-looking—regime identification lags actual changes. Combine with other analysis for timely signals."
      },
      {
        heading: "Risk Assessment",
        content: "Medium-High reliability when regimes are well-defined. The model is mathematically rigorous but requires careful specification. Risk: regime identification is backward-looking. Transitions are unpredictable. The model may overfit to historical regimes. Use with caution and validate out-of-sample."
      },
      {
        heading: "Historical Performance",
        content: "Regime switching models improve strategy performance by 10-20% in backtesting when market conditions change frequently. The models correctly identify regime changes 60-70% of the time. Performance improvement is most significant in equity markets where regime changes are more pronounced. The technique is used by quantitative hedge funds and central banks."
      }
    ]
  },
  "pat_048": {
    title: "Max Drawdown Probability",
    sections: [
      {
        heading: "Overview",
        content: "Max drawdown probability estimates the likelihood and expected magnitude of the largest peak-to-trough decline over a given period. It is essential for bankroll management—knowing the potential worst case helps set appropriate bet sizes and risk limits. The analysis uses return distribution parameters to estimate drawdown statistics."
      },
      {
        heading: "Mathematical Foundation",
        content: "E[MaxDD] ≈ σ × √(2 × ln(T)) for T periods (Brownian motion approximation). More exact: Monte Carlo simulation. For normal returns: P(MaxDD > d) ≈ 2 × Φ(-d / (σ√T)). Drawdown distribution depends on: return distribution, autocorrelation, volatility. The formula assumes i.i.d. normal returns—real markets have fatter tails and autocorrelation."
      },
      {
        heading: "How It Works",
        content: "1. Estimate return distribution (mean, variance). 2. Calculate expected max drawdown for time horizon. 3. Calculate probability of exceeding various drawdown levels. 4. Compare to current drawdown. 5. If current drawdown < expected, normal. 6. If current drawdown > expected, concerning. 7. Use for position sizing: bet size = f(acceptable max DD). 8. Set stop-loss based on max DD probability."
      },
      {
        heading: "When To Use",
        content: "Use for bankroll management and risk limit setting. Essential before starting any gambling or trading activity. The analysis helps set realistic expectations for drawdowns. Use to size positions so that expected drawdown doesn't exceed comfort level. Also useful for evaluating strategy risk—compare expected vs. actual drawdown."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability when return distribution is correctly estimated. The mathematical framework is well-established. Risk: real returns have fatter tails than normal, leading to larger drawdowns than predicted. The formula is an approximation—Monte Carlo is more accurate. Use the analysis as a guide, not a guarantee."
      },
      {
        heading: "Historical Performance",
        content: "Max drawdown analysis correctly predicts drawdown magnitude within 20-30% for most strategies. The formula underestimates drawdown in fat-tailed distributions. In practice, traders use 1.5-2× the formula estimate for safety. The analysis is essential for survival—strategies that survive drawdowns compound over time. Most strategy failures are due to inadequate drawdown planning."
      }
    ]
  },
  "pat_049": {
    title: "Risk of Ruin Calculator",
    sections: [
      {
        heading: "Overview",
        content: "Risk of Ruin (ROR) calculates the probability of losing an entire bankroll given edge, bet size, and bankroll parameters. It is the most important calculation for any gambler or trader—without understanding ROR, even positive edge strategies can fail. The calculator helps balance growth potential against ruin risk."
      },
      {
        heading: "Mathematical Foundation",
        content: "For fixed fractional betting: ROR = ((1-edge)/(1+edge))^units, where edge = expected value per unit, units = bankroll in betting units. For p = win probability, b = payout odds: edge = bp - q (where q = 1-p). Kelly fraction: f* = edge/b. Minimum bankroll for <5% ROR: units = ln(ROR) / ln((1-edge)/(1+edge)). The formula assumes fixed bet size and known edge."
      },
      {
        heading: "How It Works",
        content: "1. Estimate edge (expected value per unit). 2. Determine bankroll in betting units. 3. Calculate ROR using formula. 4. If ROR > acceptable level, reduce bet size. 5. If ROR < 1%, bankroll is adequate. 6. For Kelly: f*/2 gives much lower ROR. 7. Recalculate as bankroll changes. 8. Set maximum acceptable ROR threshold (typically 1-5%)."
      },
      {
        heading: "When To Use",
        content: "Use before starting any gambling or trading activity. Essential for bankroll management. The calculation determines whether your bankroll is adequate for your edge and bet size. Also use to compare different strategies—lower ROR is better, all else equal. Recalculate as edge or bankroll changes. Never gamble without understanding ROR."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability when edge is accurately estimated. The formula is mathematically exact for the assumptions. Risk: edge estimation is uncertain. Even small errors in edge dramatically affect ROR. Use conservative edge estimates. The formula assumes fixed bet size—variable bet sizes change the calculation. Always build in safety margin."
      },
      {
        heading: "Historical Performance",
        content: "Risk of Ruin calculations are validated by centuries of gambling mathematics. The formula correctly predicts survival rates for casino games (negative edge → 100% ROR given enough time). For positive edge strategies, the formula guides bankroll requirements. Professional gamblers use ROR to ensure survival. The technique is the foundation of bankroll management."
      }
    ]
  },
  "pat_050": {
    title: "Sharpe Ratio Comparison",
    sections: [
      {
        heading: "Overview",
        content: "The Sharpe Ratio measures risk-adjusted return by dividing excess return (above risk-free rate) by standard deviation of returns. It enables comparison of strategies with different risk levels—a higher Sharpe indicates better risk-adjusted performance. Developed by Nobel laureate William Sharpe, it is the standard metric for investment performance comparison."
      },
      {
        heading: "Mathematical Foundation",
        content: "Sharpe = (R_p - R_f) / σ_p, where R_p = portfolio return, R_f = risk-free rate, σ_p = portfolio standard deviation. Annualized: Sharpe_annual = Sharpe × √252 (daily) or √12 (monthly). Interpretation: Sharpe < 0: worse than risk-free. 0-1: below average. 1-2: good. 2-3: excellent. >3: exceptional (rare). The ratio assumes normal distribution of returns."
      },
      {
        heading: "How It Works",
        content: "1. Calculate strategy returns. 2. Subtract risk-free rate (or benchmark). 3. Calculate standard deviation of excess returns. 4. Divide excess return by standard deviation. 5. Annualize if comparing different timeframes. 6. Higher Sharpe = better risk-adjusted performance. 7. Compare Sharpe across strategies. 8. Sharpe > 1 generally considered acceptable."
      },
      {
        heading: "When To Use",
        content: "Use to compare strategies with different risk levels. Essential for performance evaluation and strategy selection. The ratio works best when returns are normally distributed. Use risk-free rate appropriate for your currency and time horizon. The Sharpe doesn't account for tail risk—use with other metrics. Most useful for relative comparison, not absolute judgment."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for comparing risk-adjusted performance. The metric is well-established and widely used. Risk: penalizes upside volatility equally with downside. Doesn't account for non-normal distributions (fat tails). A strategy with positive skew may have lower Sharpe but better tail outcomes. Use with Sortino ratio for downside-focused analysis."
      },
      {
        heading: "Historical Performance",
        content: "The Sharpe Ratio is used by every major investment institution. Average hedge fund Sharpe: 0.5-1.0. Top performers: 1.5-2.5. Renaissance Technologies' Medallion Fund: estimated Sharpe > 6. The ratio correctly identifies superior risk-adjusted performance in most cases. Limitations emerge during market crises when normality assumptions break down."
      }
    ]
  },
  "pat_051": {
    title: "Sortino Ratio Analysis",
    sections: [
      {
        heading: "Overview",
        content: "The Sortino Ratio is like the Sharpe Ratio but only penalizes downside volatility, better measuring risk for asymmetric return distributions. It uses downside deviation instead of total standard deviation, reflecting that investors care more about losses than gains. The ratio is more appropriate for strategies with positive skew."
      },
      {
        heading: "Mathematical Foundation",
        content: "Sortino = (R_p - R_f) / DD, where DD = Downside Deviation = √(Σmin(0, R_i - Target)² / n). Target usually = 0 or risk-free rate. Unlike Sharpe, upside volatility doesn't increase the denominator. For positive skew strategies: Sortino > Sharpe. For symmetric returns: Sortino ≈ Sharpe. The ratio better reflects investor preferences."
      },
      {
        heading: "How It Works",
        content: "1. Calculate returns above target (usually 0). 2. Calculate downside deviation: sqrt(mean of squared negative returns). 3. Subtract risk-free rate from return. 4. Divide by downside deviation. 5. Higher Sortino = better downside risk management. 6. Compare to Sharpe for same strategy. 7. Sortino > Sharpe indicates positive skew. 8. Use for strategy selection emphasizing downside protection."
      },
      {
        heading: "When To Use",
        content: "Use when downside risk is more important than total risk. Essential for strategies with positive skew (more small losses, fewer large gains). The ratio better reflects investor psychology—losses hurt more than gains feel good. Use for comparing strategies with different return distributions. Most useful for long-only equity strategies and options selling."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for measuring downside risk-adjusted performance. The ratio is mathematically sound and better reflects investor preferences than Sharpe. Risk: requires sufficient negative returns for stable estimate. Target selection affects the ratio. Use 0 as target for general comparison. The technique is widely used but not universal."
      },
      {
        heading: "Historical Performance",
        content: "Sortino ratios are 20-50% higher than Sharpe ratios for positive skew strategies. Hedge funds with option selling strategies show the largest Sharpe-Sortino differences. The ratio correctly identifies strategies that protect against downside better than Sharpe alone. It is increasingly used in performance reporting alongside Sharpe."
      }
    ]
  },
  "pat_052": {
    title: "Information Ratio Performance",
    sections: [
      {
        heading: "Overview",
        content: "The Information Ratio measures active return per unit of tracking error, indicating skill in generating excess returns consistently. It answers: 'How much excess return am I getting for each unit of active risk?' Higher values indicate more consistent outperformance relative to a benchmark."
      },
      {
        heading: "Mathematical Foundation",
        content: "IR = (R_p - R_b) / TE, where TE = Tracking Error = std(R_p - R_b). Decomposition: IR = IC × √BR (Information Ratio = Information Coefficient × Square Root of Breadth). Active return: R_p - R_b. Information Coefficient: correlation between forecast and actual. Breadth: number of independent bets per year. Higher IR = more consistent skill."
      },
      {
        heading: "How It Works",
        content: "1. Choose appropriate benchmark. 2. Calculate active returns (strategy minus benchmark). 3. Calculate tracking error (std of active returns). 4. Divide active return by tracking error. 5. Higher IR = more consistent outperformance. 6. IR > 0.5: good. IR > 1.0: excellent. 7. Decompose into IC and BR. 8. Use for manager selection and strategy evaluation."
      },
      {
        heading: "When To Use",
        content: "Use to evaluate active management skill. Essential for fund manager selection. The ratio measures consistency of outperformance, not just magnitude. Use benchmark appropriate for strategy. The ratio works best over longer time periods (3+ years). Combine with other metrics for comprehensive evaluation."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for measuring active management skill. The ratio is well-established in institutional investing. Risk: benchmark selection affects the ratio. Short-term IR can be misleading. The ratio assumes normality of tracking errors. Use with caution for strategies with non-normal return distributions."
      },
      {
        heading: "Historical Performance",
      content: "Average active equity manager IR: 0.3-0.5. Top quartile: 0.5-0.8. Exceptional: >1.0. The ratio correctly identifies skilled managers over 3-5 year periods. It is used by pension funds, endowments, and fund of funds for manager selection. The metric is validated by decades of use in institutional investment."
      }
    ]
  },
  "pat_053": {
    title: "Value at Risk (VaR)",
    sections: [
      {
        heading: "Overview",
        content: "Value at Risk estimates the maximum expected loss over a given time period at a specified confidence level. For example, '1-day 95% VaR of $10,000' means there is a 5% chance of losing more than $10,000 in one day. VaR is the standard risk metric used by banks, regulators, and investment firms."
      },
      {
        heading: "Mathematical Foundation",
        content: "VaR_α = -μ - σ × Z_α, where Z_α is the α quantile of standard normal. For 95% VaR: Z_0.05 = -1.645. For 99% VaR: Z_0.01 = -2.326. Methods: Historical VaR (percentile of actual returns), Parametric VaR (normal assumption), Monte Carlo VaR (simulation). Variance-covariance method: VaR = μ + σ × Z_α. The method assumes normality—real returns have fat tails."
      },
      {
        heading: "How It Works",
        content: "1. Choose confidence level (95% or 99%). 2. Choose time horizon (1-day, 10-day). 3. Estimate return distribution. 4. Calculate VaR from distribution. 5. Interpret: X% chance of losing more than VaR. 6. Set risk limits based on VaR. 7. Monitor VaR over time. 8. Backtest: compare predicted vs. actual exceedances."
      },
      {
        heading: "When To Use",
        content: "Use for risk limit setting and position sizing. Essential for portfolio risk management. The metric provides a single number summarizing tail risk. Use for daily risk monitoring and reporting. Combine with stress testing for complete risk picture. VaR is regulatory required for banks (Basel Accords)."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability under normal conditions. The metric is mathematically well-defined. Risk: underestimates tail risk due to normality assumption. VaR doesn't measure loss beyond the threshold. The metric can create false sense of security. Use with CVaR (Expected Shortfall) for better tail risk measurement. Backtesting is essential."
      },
      {
        heading: "Historical Performance",
        content: "VaR is the standard risk metric in finance, used by every major bank and regulator. However, it failed during 2008 crisis—actual losses far exceeded VaR predictions. This led to increased use of CVaR and stress testing. VaR correctly predicts exceedance frequency under normal conditions but underestimates magnitude during crises."
      }
    ]
  },
  "pat_054": {
    title: "Conditional Value at Risk (CVaR)",
    sections: [
      {
        heading: "Overview",
        content: "Conditional Value at Risk (CVaR), also known as Expected Shortfall, measures the expected loss given that the loss exceeds VaR. It provides a more comprehensive measure of tail risk than VaR alone. While VaR answers 'What is the worst loss at X% confidence?', CVaR answers 'If we exceed VaR, how bad does it get?'"
      },
      {
        heading: "Mathematical Foundation",
        content: "CVaR_α = E[Loss | Loss > VaR_α]. For normal distribution: CVaR = μ - σ × φ(Z_α) / α, where φ = standard normal PDF. CVaR > VaR always. The difference depends on tail heaviness. For fat-tailed distributions: CVaR >> VaR. CVaR is a coherent risk measure (satisfies subadditivity), unlike VaR. The metric is increasingly preferred for risk management."
      },
      {
        heading: "How It Works",
        content: "1. Calculate VaR at desired confidence level. 2. Identify all losses exceeding VaR. 3. Calculate average of those losses. 4. This is CVaR (Expected Shortfall). 5. CVaR > VaR always. 6. Larger CVaR-VaR gap indicates fatter tails. 7. Use CVaR for risk limits—more conservative than VaR. 8. Monitor CVaR over time for tail risk changes."
      },
      {
        heading: "When To Use",
        content: "Use when tail risk is more important than threshold risk. Essential for strategies with fat-tailed return distributions. The metric provides better worst-case scenario estimates than VaR. Use for position sizing when tail events are a concern. Increasingly required by regulators alongside VaR. Best for comparing tail risk across strategies."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for tail risk measurement. CVaR is a coherent risk measure, satisfying important mathematical properties. Risk: requires sufficient tail data for accurate estimation. Estimation uncertainty is higher for extreme quantiles. The metric doesn't predict specific tail events, only their expected magnitude. Use with stress testing for complete picture."
      },
      {
        heading: "Historical Performance",
        content: "CVaR provides better tail risk estimates than VaR during market crises. During 2008, CVaR estimates were more accurate than VaR in predicting actual losses. The metric is now required by Basel III for bank risk management. Academic studies show CVaR-optimal portfolios outperform VaR-optimal portfolios in terms of worst-case outcomes."
      }
    ]
  },
  "pat_055": {
    title: "Permutation Test Randomness",
    sections: [
      {
        heading: "Overview",
        content: "The permutation test is a non-parametric method for testing whether an observed pattern could arise by chance. It shuffles the data to create a null distribution, then compares the observed statistic to this distribution. Unlike parametric tests, it makes no distributional assumptions, making it robust for any data type."
      },
      {
        heading: "Mathematical Foundation",
        content: "p-value = (number of permuted statistics ≥ observed) / (total permutations). For exact test: all n! permutations. For large n: use random subset of permutations (≥10,000). The test statistic can be anything: mean difference, correlation, etc. Under the null hypothesis, the permutation distribution approximates the true sampling distribution. The test is exact for exchangeable data."
      },
      {
        heading: "How It Works",
        content: "1. Calculate observed test statistic. 2. Shuffle data labels randomly. 3. Calculate statistic for shuffled data. 4. Repeat many times (≥10,000). 5. Build distribution of permuted statistics. 6. Calculate p-value: fraction ≥ observed. 7. p < 0.05: reject null (pattern unlikely by chance). 8. p > 0.05: insufficient evidence against randomness."
      },
      {
        heading: "When To Use",
        content: "Use when parametric tests are inappropriate (non-normal data, small samples, unknown distribution). Works for any test statistic and any data type. The test is exact when assumptions hold. Particularly useful for testing randomness of sequences, comparing groups, or assessing correlation. The test doesn't require distributional assumptions."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability when data is exchangeable under the null. The test is mathematically exact. Risk: computational cost for large datasets (mitigated by random permutations). The test assumes exchangeability—violations bias results. Always verify assumptions before applying. The test detects patterns but doesn't explain them."
      },
      {
        heading: "Historical Performance",
        content: "Permutation tests are considered the gold standard for non-parametric hypothesis testing. They have been validated mathematically and empirically. The test correctly controls Type I error rate at the nominal level when assumptions hold. It is increasingly used as computing power makes large-scale permutation feasible. The test is more robust than parametric alternatives for non-normal data."
      }
    ]
  },
  "pat_056": {
    title: "Bootstrap Confidence Intervals",
    sections: [
      {
        heading: "Overview",
        content: "The bootstrap method estimates confidence intervals by resampling with replacement from the original data. It creates many 'bootstrap samples' and calculates the statistic of interest for each, building an empirical distribution. The percentile method uses quantiles of this distribution as confidence intervals, requiring no distributional assumptions."
      },
      {
        heading: "Mathematical Foundation",
        content: "CI = [θ*_(α/2), θ*_(1-α/2)] from bootstrap distribution. Process: 1. Draw n observations with replacement. 2. Calculate statistic θ*_b. 3. Repeat B times (B ≥ 1000). 4. Sort θ*_1, ..., θ*_B. 5. Percentile CI: [θ*_(α/2×B), θ*_((1-α/2)×B)]. Bias-corrected: BCa method adjusts for bias and skewness. Convergence rate: O(1/√n) for smooth statistics."
      },
      {
        heading: "How It Works",
        content: "1. Collect original sample of size n. 2. Resample n observations with replacement. 3. Calculate statistic for bootstrap sample. 4. Repeat 1000+ times. 5. Build bootstrap distribution. 6. Take percentile CI: 2.5% and 97.5% for 95% CI. 7. Report: statistic ± margin of error. 8. Check bootstrap distribution for bias or skewness."
      },
      {
        heading: "When To Use",
        content: "Use when sample size is small or distribution is unknown. Works for any statistic (mean, median, correlation, etc.). The method is more accurate than normal-based intervals for non-normal data. Particularly useful for complex statistics where theoretical distribution is unknown. Requires representative sample—bootstrap doesn't fix bad data."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for smooth statistics with representative samples. The method is mathematically validated. Risk: fails for non-smooth statistics (e.g., maximum). Requires sample size > 20-30 for good performance. Small samples give unstable bootstrap estimates. The method assumes the sample represents the population—violations bias results."
      },
      {
        heading: "Historical Performance",
        content: "The bootstrap method, introduced by Efron in 1979, is one of the most important statistical advances of the 20th century. It correctly estimates coverage probabilities to within 1-2% for most statistics. The method is used in medicine, social science, engineering, and finance. It has been validated mathematically and through extensive simulation studies."
      }
    ]
  },
  "pat_057": {
    title: "Cross-Validation Performance",
    sections: [
      {
        heading: "Overview",
        content: "Cross-validation evaluates model performance by training and testing on different data subsets, preventing overfitting in assessment. It provides a more honest estimate of out-of-sample performance than in-sample metrics. The technique is essential for model selection and validation in machine learning and statistics."
      },
      {
        heading: "Mathematical Foundation",
        content: "k-fold CV: 1. Divide data into k folds. 2. Train on k-1 folds, test on remaining fold. 3. Repeat for all k combinations. 4. CV Score = (1/k) × Σ(Error_i). Leave-one-out CV: k = n. Bias-variance tradeoff: k=2 has high bias, k=n has high variance. Typically k=5 or k=10. Nested CV: for hyperparameter tuning + evaluation."
      },
      {
        heading: "How It Works",
        content: "1. Choose number of folds (k=5 or 10 typical). 2. Divide data into k equal parts. 3. For each fold: train on k-1 parts, test on remaining part. 4. Record test performance for each fold. 5. Average performance across folds. 6. Report mean ± standard deviation. 7. Use for model comparison. 8. Select model with best CV score."
      },
      {
        heading: "When To Use",
        content: "Use whenever evaluating model performance on limited data. Essential for preventing overfitting in model selection. Works for any model: regression, classification, etc. The technique provides honest out-of-sample estimates. Use nested CV for hyperparameter tuning. For time series, use time-series CV (rolling window)."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for estimating out-of-sample performance. The technique is mathematically validated. Risk: data leakage if folds aren't properly separated. Time series requires special handling. The estimate is still an estimate—actual performance may differ. Use multiple random splits for more stable estimates."
      },
      {
        heading: "Historical Performance",
        content: "Cross-validation is the standard method for model evaluation in machine learning. It correctly detects overfitting 85-95% of the time. Models selected by CV perform better out-of-sample than those selected by in-sample metrics. The technique is essential for preventing overfitting and is used in virtually all predictive modeling applications."
      }
    ]
  },
  "pat_058": {
    title: "AIC/BIC Model Selection",
    sections: [
      {
        heading: "Overview",
        content: "AIC (Akaike Information Criterion) and BIC (Bayesian Information Criterion) balance model fit and complexity, preventing overfitting in model selection. Both penalize the number of parameters, selecting parsimonious models. Lower values indicate better balance. AIC tends to select more complex models; BIC penalizes complexity more strongly."
      },
      {
        heading: "Mathematical Foundation",
        content: "AIC = 2k - 2ln(L), where k = parameters, L = maximized likelihood. BIC = k×ln(n) - 2ln(L), where n = sample size. BIC penalty increases with sample size (asymptotically consistent). AIC minimizes prediction error (asymptotically efficient). ΔAIC = AIC_i - min(AIC). Weight: w_i = exp(-ΔAIC_i/2) / Σexp(-ΔAIC_j/2). Models with ΔAIC < 2 have substantial support."
      },
      {
        heading: "How It Works",
        content: "1. Fit candidate models with different complexities. 2. Calculate likelihood for each model. 3. Calculate AIC and BIC for each. 4. Select model with minimum AIC or BIC. 5. Compare ΔAIC across models. 6. ΔAIC < 2: models are equivalent. 7. ΔAIC > 10: substantial evidence against. 8. Use for variable selection, polynomial order, etc."
      },
      {
        heading: "When To Use",
        content: "Use for comparing non-nested models with different numbers of parameters. AIC for prediction-focused models. BIC for explanation-focused models (penalizes complexity more). The criteria work for any model with likelihood. Require comparable models (same response variable). Use for variable selection, order selection, and model comparison."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for model selection. The criteria are well-established and widely used. Risk: assumes correct likelihood specification. May overfit if many similar models are compared. The criteria select the best among candidates, not the absolute best. Always validate selected model on held-out data."
      },
      {
        heading: "Historical Performance",
        content: "AIC and BIC are standard model selection criteria used across statistics and machine learning. Studies show AIC selects models with better predictive performance, while BIC selects simpler models with correct specification. Both outperform adjusted R² for model selection. The criteria have been validated through extensive theoretical and empirical research."
      }
    ]
  },
  "pat_059": {
    title: "Power Analysis Sample Size",
    sections: [
      {
        heading: "Overview",
        content: "Power analysis calculates the required sample size to detect an effect of given size with specified confidence and power. It answers: 'How many observations do I need to reliably detect a meaningful effect?' Insufficient sample size leads to underpowered studies that miss real effects. Essential for study design and resource planning."
      },
      {
        heading: "Mathematical Foundation",
        content: "n = ((Z_α/2 + Z_β) × σ / δ)², where Z_α/2 = critical value for significance, Z_β = critical value for power, σ = standard deviation, δ = effect size. Power = P(reject H₀ | H₁ true). Typical: α = 0.05, power = 0.80. For Z_α/2 = 1.96 (two-sided), Z_β = 0.84 (80% power): n ≈ (2.8 × σ/δ)². Effect size: Cohen's d = δ/σ."
      },
      {
        heading: "How It Works",
        content: "1. Define significance level (α, typically 0.05). 2. Define desired power (1-β, typically 0.80). 3. Estimate effect size (δ) and variance (σ²). 4. Calculate required sample size. 5. If n impractical, reduce power or accept larger effect size. 6. For proportions: use proportion variance. 7. For correlations: use Fisher's z transformation. 8. Always power studies before data collection."
      },
      {
        heading: "When To Use",
        content: "Use before any data collection to ensure adequate sample size. Essential for research studies, A/B testing, and strategy validation. The analysis prevents wasting resources on underpowered studies. Also useful for interpreting non-significant results (was the study adequately powered?). Apply to any statistical test: t-test, chi-square, regression, etc."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability when effect size is accurately estimated. The math is exact for the assumed model. Risk: effect size estimation is uncertain. Underpowered studies waste resources. Overpowered studies waste resources on trivial effects. Sensitivity analysis on effect size is recommended. The technique ensures adequate statistical evidence."
      },
      {
        heading: "Historical Performance",
        content: "Power analysis is required by most funding agencies and journals for research proposals. Studies show 30-50% of published research is underpowered. Proper power analysis ensures reliable results. The technique is mathematically validated and universally accepted. It prevents the publication of unreliable findings due to insufficient sample size."
      }
    ]
  },
  "pat_060": {
    title: "Meta-Analysis Aggregation",
    sections: [
      {
        heading: "Overview",
        content: "Meta-analysis combines results from multiple independent studies to produce a single effect estimate with improved precision. It quantifies the overall evidence across studies, accounting for study-level variation. The technique is the foundation of evidence-based practice in medicine and social science."
      },
      {
        heading: "Mathematical Foundation",
        content: "Fixed effects: θ_combined = Σ(w_i × θ_i) / Σ(w_i), w_i = 1/Var(θ_i). Random effects: adds between-study variance τ². Heterogeneity: Q = Σw_i(θ_i - θ_combined)² ~ χ²(df). I² = (Q - df)/Q × 100% (percentage of variation due to heterogeneity). Publication bias: funnel plot, Egger's test. The method weights studies by precision."
      },
      {
        heading: "How It Works",
        content: "1. Collect all relevant studies. 2. Extract effect sizes and standard errors. 3. Choose fixed vs. random effects model. 4. Calculate weights (inverse variance). 5. Calculate combined effect. 6. Test for heterogeneity (I² statistic). 7. Create forest plot for visualization. 8. Assess publication bias (funnel plot)."
      },
      {
        heading: "When To Use",
        content: "Use when combining evidence from multiple independent studies. Essential for systematic reviews and evidence-based practice. Works for any effect size metric (OR, RR, mean difference, correlation). Requires comparable studies. The technique is more powerful than any single study. Use for gambling research, treatment efficacy, and risk factor assessment."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability when studies are comparable and properly conducted. The technique is mathematically rigorous. Risk: heterogeneity between studies may make combination inappropriate. Publication bias can inflate combined estimates. Quality assessment of included studies is essential. The technique synthesizes evidence but doesn't create it."
      },
      {
        heading: "Historical Performance",
        content: "Meta-analysis has revolutionized evidence-based medicine, combining thousands of studies to establish treatment efficacy. The technique correctly identifies effective treatments 90%+ of the time when studies are high-quality. It has been validated mathematically and through decades of use. Meta-analyses are considered the highest level of evidence in evidence hierarchies."
      }
    ]
  }
};

export default PATTERN_DETAILS;
export { PATTERN_DETAILS };
