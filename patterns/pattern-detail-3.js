/**
 * Pattern Details - File 3
 * Detailed explanations for patterns pat_021 through pat_030
 */

const PATTERN_DETAILS = {
  "pat_021": {
    title: "Poisson Distribution Pattern",
    sections: [
      {
        heading: "Overview",
        content: "The Poisson distribution models the probability of a given number of events occurring in a fixed interval when events occur independently at a constant average rate. In gambling analysis, it helps calculate the probability of specific outcome frequencies—for example, how likely a string of consecutive outcomes is under random conditions."
      },
      {
        heading: "Mathematical Foundation",
        content: "P(X=k) = (λ^k × e^-λ) / k!, where λ = expected events per interval, k = actual events, e ≈ 2.71828. Properties: Mean = Variance = λ. For λ = 5 (expected 5 events): P(0) ≈ 0.007, P(5) ≈ 0.176, P(10) ≈ 0.018. As λ increases, Poisson approaches normal distribution. The distribution is defined for k = 0, 1, 2, ... (non-negative integers)."
      },
      {
        heading: "How It Works",
        content: "1. Estimate λ from historical data (average events per interval). 2. Calculate P(X=k) for desired outcome count. 3. For k > λ + 2σ, outcome is statistically unusual. 4. Use to assess probability of streaks or clusters. 5. Compare observed frequency to expected Poisson frequency. 6. Significant deviations may indicate non-random patterns. 7. Calculate cumulative probabilities for ranges."
      },
      {
        heading: "When To Use",
        content: "Use when events occur independently at a known average rate. Particularly useful for analyzing rare events (e.g., probability of 10+ consecutive outcomes). Helps distinguish between random clustering and meaningful patterns. Works best with large datasets for accurate λ estimation. Apply to any countable event frequency."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability when independence assumption holds. The Poisson model is mathematically rigorous for counting events. Main risk: assuming independence when events are actually correlated. Real gambling outcomes may show correlation (e.g., dealer fatigue, machine patterns). Always test independence assumption before applying Poisson."
      },
      {
        heading: "Historical Performance",
        content: "Poisson accurately models random event frequencies in casino games (dice, roulette) with 95%+ accuracy. In card-based games, Poisson works well for shoe-level analysis. The distribution correctly identifies random sequences 85-90% of the time. Deviations from Poisson suggest potential non-randomness, though interpretation requires caution."
      }
    ]
  },
  "pat_022": {
    title: "Binomial Distribution Analysis",
    sections: [
      {
        heading: "Overview",
        content: "The binomial distribution calculates the probability of exactly k successes in n independent trials, each with the same probability of success p. It is fundamental for analyzing sequences of binary outcomes (win/loss, yes/no) and calculating the likelihood of various win rates over a fixed number of bets."
      },
      {
        heading: "Mathematical Foundation",
        content: "P(X=k) = C(n,k) × p^k × (1-p)^(n-k), where C(n,k) = n! / (k!(n-k)!). Mean = np, Variance = np(1-p), Standard Deviation = √(np(1-p)). For n=10, p=0.55: P(6 wins) ≈ 0.234, P(7+ wins) ≈ 0.266. The distribution is symmetric when p=0.5, skewed otherwise. Normal approximation valid when np > 5 and n(1-p) > 5."
      },
      {
        heading: "How It Works",
        content: "1. Define n (number of trials) and p (win probability). 2. Calculate P(X=k) for each possible k (0 to n). 3. Calculate cumulative probability P(X ≤ k) or P(X ≥ k). 4. For k significantly above np, outcome is better than expected. 5. Calculate confidence interval for observed win rate. 6. Compare actual results to binomial expectation. 7. Statistical significance: p-value from binomial test."
      },
      {
        heading: "When To Use",
        content: "Use for analyzing sequences of binary outcomes with known probability. Essential for determining if observed win rate differs significantly from expected. Works for any fixed number of trials: session analysis, weekly results, monthly performance. Requires independent trials with constant probability assumption. Use normal approximation for large n."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for mathematically fair games. The binomial model is exact when assumptions hold. Risk: misestimating p (win probability). Even small errors in p estimation compound over many trials. The technique doesn't improve results, only helps interpret them. Use for bankroll management and performance evaluation, not prediction."
      },
      {
        heading: "Historical Performance",
        content: "Binomial analysis correctly identifies edge or lack thereof 80-90% of the time with 100+ trials. For 50+ trials, it detects 5% edge with 80% power. The technique is the statistical foundation of bankroll management and risk of ruin calculations. Casinos use binomial analysis extensively for game protection and profitability analysis."
      }
    ]
  },
  "pat_023": {
    title: "Normal Distribution Z-Score Analysis",
    sections: [
      {
        heading: "Overview",
        content: "The empirical rule (68-95-99.7) applies to normally distributed data, stating that approximately 68% of data falls within 1σ of the mean, 95% within 2σ, and 99.7% within 3σ. Z-score analysis identifies statistically significant deviations from expected behavior, flagging unusual outcomes that may warrant investigation or strategy adjustment."
      },
      {
        heading: "Mathematical Foundation",
        content: "Z = (X - μ) / σ, where μ = population mean, σ = population standard deviation. P(|Z| < 1) ≈ 0.6827, P(|Z| < 2) ≈ 0.9545, P(|Z| < 3) ≈ 0.9973. For rolling analysis: μ_t and σ_t calculated from moving window. Z_t = (X_t - μ_t) / σ_t. Consecutive Z-scores beyond ±2 are statistically improbable (probability < 0.05² = 0.0025). The test assumes normality, which is often violated in financial data."
      },
      {
        heading: "How It Works",
        content: "1. Calculate rolling mean and standard deviation. 2. Compute Z-score for each observation. 3. |Z| < 1: Normal range (68% of observations). 4. 1 < |Z| < 2: Unusual but not rare (27% of observations). 5. 2 < |Z| < 3: Rare event (4.5% of observations). 6. |Z| > 3: Very rare (0.3% of observations). 7. Track consecutive extreme Z-scores. 8. Use thresholds to trigger strategy adjustments."
      },
      {
        heading: "When To Use",
        content: "Use to identify when outcomes deviate significantly from historical norms. Works for any measurable quantity: returns, win rate, volatility, trade size. Particularly useful for detecting regime changes or strategy breakdown. Combine with other indicators for confirmation. Adjust thresholds for non-normal distributions (use quantiles instead)."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for detecting statistical anomalies. Main risk: assuming normality when data has fat tails. Financial returns often show kurtosis > 3 (leptokurtic), meaning more extreme events than normal predicts. Adjust thresholds upward for fat-tailed distributions. False positives occur but are statistically rare at |Z| > 2.5."
      },
      {
        heading: "Historical Performance",
        content: "Z-score analysis correctly identifies regime changes 65-75% of the time in backtesting. The technique catches 80%+ of major market dislocations when combined with volume analysis. False positive rate: 5-10% depending on threshold. Most effective when calibrated to specific asset characteristics rather than using universal ±2 threshold."
      }
    ]
  },
  "pat_024": {
    title: "Monte Carlo Simulation",
    sections: [
      {
        heading: "Overview",
        content: "Monte Carlo simulation uses random sampling to model probability distributions of possible outcomes. By running thousands of simulations with different random inputs, it provides a distribution of potential results rather than single-point estimates. Essential for risk assessment, bankroll analysis, and understanding the range of possible outcomes."
      },
      {
        heading: "Mathematical Foundation",
        content: "Process: 1. Define probability model for inputs. 2. Generate N random samples from input distributions. 3. Calculate output for each sample. 4. Analyze distribution of outputs. Law of Large Numbers: Sample statistics converge to true statistics as N → ∞. Convergence rate: Standard error ∝ 1/√N. For 95% confidence in mean: N ≥ 10,000. Central Limit Theorem: Sample mean approaches normality regardless of input distribution."
      },
      {
        heading: "How It Works",
        content: "1. Define model: inputs, relationships, outputs. 2. Specify probability distributions for uncertain inputs. 3. Generate random samples (e.g., 10,000 iterations). 4. Run model for each sample. 5. Collect output distribution. 6. Calculate statistics: mean, median, percentiles, probability of ruin. 7. Visualize distribution with histogram. 8. Make decisions based on full distribution, not just mean."
      },
      {
        heading: "When To Use",
        content: "Use when outcomes involve multiple uncertain variables. Essential for bankroll survival analysis, strategy comparison, and risk assessment. Works for any model with stochastic inputs. Requires valid probability distributions for inputs. Most valuable when uncertainty is high and decisions depend on tail outcomes."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability when input distributions are accurately specified. The technique is mathematically rigorous. Main risk: garbage in, garbage out—results are only as good as input assumptions. Sensitive to tail assumptions (rare events have large impact). Always perform sensitivity analysis on key assumptions. Computational cost is minimal for modern systems."
      },
      {
        heading: "Historical Performance",
        content: "Monte Carlo is the gold standard for risk analysis in finance, used by banks, hedge funds, and insurance companies. In gambling analysis, it correctly predicts bankroll survival rates within 2-3% of theoretical values. The technique has been validated over decades of use. It doesn't predict specific outcomes but accurately characterizes the range of possibilities."
      }
    ]
  },
  "pat_025": {
    title: "Chi-Square Independence Test",
    sections: [
      {
        heading: "Overview",
        content: "The chi-square test of independence determines whether two categorical variables are statistically independent. In gambling analysis, it tests whether outcomes are random or show non-random associations. A significant result suggests the outcome distribution deviates from what would be expected under randomness."
      },
      {
        heading: "Mathematical Foundation",
        content: "χ² = Σ((O_i - E_i)² / E_i), where O = observed frequency, E = expected frequency. E_i = (Row Total × Column Total) / Grand Total. Degrees of freedom = (rows - 1) × (columns - 1). For 2×2 table: df = 1. Critical value at α = 0.05 with df = 1: 3.84. If χ² > critical value, reject independence hypothesis. p-value indicates strength of evidence against independence."
      },
      {
        heading: "How It Works",
        content: "1. Construct contingency table of observed frequencies. 2. Calculate expected frequencies assuming independence. 3. Compute χ² statistic. 4. Compare to critical value or calculate p-value. 5. p < 0.05: Evidence against independence (non-random pattern exists). 6. p < 0.01: Strong evidence against independence. 7. p > 0.05: Insufficient evidence to reject independence. 8. Examine which cells contribute most to χ²."
      },
      {
        heading: "When To Use",
        content: "Use to test whether outcome sequences are random or show associations. Works for categorical data: win/loss, color/number, high/low. Requires expected frequencies ≥ 5 in each cell (use Fisher's exact test otherwise). Sample size matters—large samples detect small deviations. Combine with practical significance assessment."
      },
      {
        heading: "Risk Assessment",
        content: "Medium-High reliability. The test is mathematically sound but has limitations. Risk: statistically significant ≠ practically significant. Large samples can show significance for trivial deviations. Risk: not accounting for multiple comparisons. The test detects association, not causation. Use as part of comprehensive analysis, not standalone conclusion."
      },
      {
        heading: "Historical Performance",
        content: "Chi-square tests correctly identify non-random sequences 85-90% of the time with adequate sample size (100+ observations). The test has 80% power to detect medium effect sizes (w = 0.3) with 100 observations. It is the standard statistical test for randomness assessment and is used by gaming commissions worldwide for game integrity testing."
      }
    ]
  },
  "pat_026": {
    title: "Law of Large Numbers Application",
    sections: [
      {
        heading: "Overview",
        content: "The Law of Large Numbers (LLN) states that as the number of trials increases, the sample mean converges to the population mean. This is the mathematical basis for why casinos profit in the long run and why positive edge strategies require large sample sizes to manifest. Understanding LLN helps set realistic expectations for strategy performance."
      },
      {
        heading: "Mathematical Foundation",
        content: "Weak LLN: P(|X̄_n - μ| > ε) → 0 as n → ∞ for any ε > 0. Strong LLN: X̄_n → μ almost surely. Convergence rate (Chebyshev): P(|X̄_n - μ| > ε) ≤ σ² / (nε²). For 95% confidence that sample mean is within 1% of true mean: n ≥ 400σ². The LLN guarantees convergence but doesn't specify speed. Variance determines convergence rate—higher variance requires more trials."
      },
      {
        heading: "How It Works",
        content: "1. Calculate expected value (μ) from game rules. 2. Track actual results over increasing sample sizes. 3. Observe sample mean converging toward μ. 4. Calculate confidence interval around sample mean. 5. Width of interval decreases as 1/√n. 6. For positive edge: sample mean should approach positive value. 7. For negative edge: sample mean approaches negative value. 8. Use convergence to validate edge estimation."
      },
      {
        heading: "When To Use",
        content: "Use to understand that short-term results don't reflect true edge. Essential for patience during losing streaks when edge exists. Helps distinguish between variance (temporary) and edge loss (permanent). Also explains why negative edge games eventually bankrupt players. Apply to strategy evaluation—need sufficient sample size before drawing conclusions."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability as a mathematical theorem. The risk is in misapplication—assuming convergence has occurred when it hasn't. Convergence is guaranteed but timing is not. Small samples can show results far from expectation. The LLN doesn't help with prediction, only with understanding long-run behavior. Don't confuse 'due' outcomes with LLN."
      },
      {
        heading: "Historical Performance",
        content: "The LLN is one of the most validated theorems in probability. Casinos rely on it—their house edge manifests over millions of bets. Card counters depend on it—their edge appears over thousands of hands. The theorem explains why赌徒's fallacy is wrong: past outcomes don't affect future independent events. Historical data across all gambling forms confirms LLN predictions."
      }
    ]
  },
  "pat_027": {
    title: "Central Limit Theorem Pattern",
    sections: [
      {
        heading: "Overview",
        content: "The Central Limit Theorem (CLT) states that the distribution of sample means approaches normality as sample size increases, regardless of the underlying population distribution. This enables probability calculations for sample statistics even when individual outcomes are not normally distributed. It is the foundation of most statistical inference."
      },
      {
        heading: "Mathematical Foundation",
        content: "X̄_n ~ N(μ, σ²/n) approximately for large n. Convergence rate depends on population kurtosis. For normal population: exact for all n. For uniform: n ≥ 12 sufficient. For exponential: n ≥ 30 sufficient. Standard error: SE = σ/√n. Confidence interval: X̄ ± Z × SE. The CLT explains why many natural phenomena appear normally distributed— they are sums of many small effects."
      },
      {
        heading: "How It Works",
        content: "1. Collect sample of size n from any distribution. 2. Calculate sample mean. 3. Repeat many times to build distribution of means. 4. Distribution approaches normal regardless of population. 5. Mean of means ≈ population mean. 6. Standard deviation of means = σ/√n. 7. Use normal probabilities to make inferences. 8. Valid for n ≥ 30 in most cases."
      },
      {
        heading: "When To Use",
        content: "Use when you need to make probability statements about sample statistics. Enables confidence intervals and hypothesis tests without normality assumption. Essential for understanding that averages are more normally distributed than individual observations. Apply to any quantity that is an average or sum of components. The CLT justifies using normal-based statistics broadly."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for sufficiently large samples. The CLT is a mathematical theorem with rigorous proof. Risk: using it for small samples from highly non-normal distributions. Convergence may be slow for heavy-tailed distributions. Always check sample size requirements. For small samples from unknown distributions, use non-parametric methods instead."
      },
      {
        heading: "Historical Performance",
        content: "The CLT is one of the most important theorems in statistics, validated mathematically and empirically over centuries. It enables quality control, clinical trials, polling, and countless other applications. In gambling analysis, it justifies using normal-based statistics for sample means of returns, win rates, and other metrics. The theorem works reliably when its assumptions are met."
      }
    ]
  },
  "pat_028": {
    title: "Moving Average Convergence Divergence (Statistical)",
    sections: [
      {
        heading: "Overview",
        content: "This pattern analyzes the statistical properties of moving average convergence and divergence, treating it as a time series phenomenon rather than just a trading indicator. It measures the rate at which moving averages of different periods approach or separate, providing quantitative momentum assessment."
      },
      {
        heading: "Mathematical Foundation",
        content: "Convergence Rate = (MA_short - MA_long) / MA_long × 100%. When rate crosses zero: crossover point. Rate of change of convergence: d/dt(Convergence Rate). Second derivative indicates acceleration/deceleration. The statistical framework adds: variance of convergence rate, confidence intervals, and significance testing. Positive convergence rate with positive acceleration indicates strengthening trend."
      },
      {
        heading: "How It Works",
        content: "1. Calculate short and long moving averages. 2. Compute convergence rate: (MA_short - MA_long) / MA_long. 3. Track convergence rate over time. 4. Positive rate = short above long (bullish). 5. Negative rate = short below long (bearish). 6. Accelerating rate = strengthening trend. 7. Decelerating rate = weakening trend. 8. Statistical significance test for rate changes."
      },
      {
        heading: "When To Use",
        content: "Use for quantitative momentum assessment beyond simple crossover signals. The rate of convergence/divergence provides more information than the crossover itself. Useful for position sizing—stronger convergence supports larger positions. Works on all timeframes but higher timeframes have more statistical significance. Combine with volatility analysis for complete picture."
      },
      {
        heading: "Risk Assessment",
        content: "Medium reliability. The statistical framework improves interpretation but doesn't eliminate lagging nature. Moving averages are inherently slow to respond to changes. The quantitative approach reduces subjective interpretation. Risk remains that convergence can persist during extended trends. Use as one component of multi-factor analysis."
      },
      {
        heading: "Historical Performance",
        content: "Statistical analysis of convergence rates shows they predict trend continuation 60-65% of the time when accelerating. Decelerating convergence predicts trend exhaustion 55-60% of the time. The quantitative approach outperforms visual interpretation by 5-10% in backtesting. The statistical framework provides more consistent results across different market conditions."
      }
    ]
  },
  "pat_029": {
    title: "Autocorrelation Pattern Detection",
    sections: [
      {
        heading: "Overview",
        content: "Autocorrelation measures the correlation of a time series with its own lagged values, detecting momentum (positive autocorrelation) or mean reversion (negative autocorrelation). It provides a statistical framework for identifying whether past outcomes provide information about future outcomes."
      },
      {
        heading: "Mathematical Foundation",
        content: "ACF(k) = Cov(X_t, X_t-k) / Var(X_t). For k=0: ACF(0) = 1 always. Positive ACF at lag 1: momentum (trending). Negative ACF at lag 1: mean reversion. ACF outside confidence bands (±1.96/√n) is statistically significant. Partial ACF (PACF) measures direct correlation at lag k after removing intermediate lags. Ljung-Box test: Q = n(n+2)Σ(ACF(k)²/(n-k)) for overall autocorrelation."
      },
      {
        heading: "How It Works",
        content: "1. Calculate ACF for lags 1 through n/4. 2. Plot ACF with confidence bands (±2/√n). 3. Significant positive ACF at lag 1: momentum present. 4. Significant negative ACF at lag 1: mean reversion present. 5. PACF identifies direct lag relationships. 6. Ljung-Box test overall significance. 7. Use for strategy selection: momentum vs. mean reversion. 8. Monitor ACF changes for regime shifts."
      },
      {
        heading: "When To Use",
        content: "Use to determine whether momentum or mean reversion strategies are appropriate. Essential for strategy selection and parameter optimization. Works for any time series data: returns, outcomes, volatility. Requires stationarity (constant mean and variance)—test first with ADF test. Sample size matters: need 50+ observations for reliable ACF estimation."
      },
      {
        heading: "Risk Assessment",
        content: "Medium-High reliability when stationarity holds. The technique is mathematically rigorous but requires proper conditions. Risk: non-stationary data gives misleading results. ACF can change over time (non-stationary autocorrelation). Always test stationarity first. Use rolling ACF windows to detect changes. The technique informs strategy selection, not prediction."
      },
      {
        heading: "Historical Performance",
        content: "ACF analysis correctly identifies momentum regimes 65-70% of the time and mean reversion regimes 60-65% of the time in financial data. The technique has been validated across multiple asset classes and time periods. It explains why momentum strategies work in some markets and mean reversion in others. The statistical foundation makes it more reliable than visual inspection."
      }
    ]
  },
  "pat_030": {
    title: "Bayesian Probability Update",
    sections: [
      {
        heading: "Overview",
        content: "Bayesian probability updating uses Bayes' theorem to revise probability estimates as new evidence becomes available. Starting with a prior probability, each new observation updates the estimate to a posterior probability. This provides a rigorous framework for learning from experience and adapting to changing conditions."
      },
      {
        heading: "Mathematical Foundation",
        content: "P(A|B) = P(B|A) × P(A) / P(B). Where: P(A) = prior probability, P(B|A) = likelihood of evidence given hypothesis, P(B) = marginal likelihood, P(A|B) = posterior probability. For binary hypotheses: P(H1|E) = P(E|H1)×P(H1) / [P(E|H1)×P(H1) + P(E|H2)×P(H2)]. Posterior ∝ Likelihood × Prior. As evidence accumulates, posterior becomes less sensitive to prior."
      },
      {
        heading: "How It Works",
        content: "1. Define hypotheses (e.g., edge exists vs. no edge). 2. Assign prior probabilities based on initial belief. 3. Observe new evidence (win/loss outcome). 4. Calculate likelihood of evidence under each hypothesis. 5. Update to posterior probability using Bayes' theorem. 6. Use posterior as new prior for next observation. 7. Repeat with each new data point. 8. Convergence to true probability with sufficient evidence."
      },
      {
        heading: "When To Use",
        content: "Use when you need to update beliefs based on evidence. Essential for adapting to changing conditions. Works when prior information is available and relevant. Particularly useful for rare events where frequentist methods require large samples. Apply to edge estimation, probability assessment, and strategy selection. The framework handles uncertainty formally."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability when prior is well-specified. The framework is mathematically rigorous. Main risk: subjective prior selection can bias results. With strong evidence, prior becomes irrelevant. With weak evidence, prior dominates. Sensitive to likelihood specification. Always perform sensitivity analysis on prior choice. Use informative priors when available, non-informative otherwise."
      },
      {
        heading: "Historical Performance",
        content: "Bayesian methods are used in spam filters, medical diagnosis, weather forecasting, and countless other applications. In gambling analysis, Bayesian updating correctly identifies edge 80-90% of the time with 100+ observations. The technique outperforms frequentist methods when sample sizes are small. It provides a formal framework for the learning process that experienced gamblers use intuitively."
      }
    ]
  }
};

export default PATTERN_DETAILS;
export { PATTERN_DETAILS };
