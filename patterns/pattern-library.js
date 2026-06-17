/**
 * Stop Loss Assistant - Pattern Library
 * Contains 50+ mathematical and statistical pattern definitions
 * All patterns use real mathematical concepts with honest reliability assessments
 */

const PATTERNS_ARRAY = [
  // ========== MATHEMATICS PATTERNS ==========
  {
    id: "pat_001",
    name: "Fibonacci Retracement",
    category: "Mathematics",
    description: "Uses Fibonacci ratios (23.6%, 38.2%, 50%, 61.8%, 78.6%) to identify potential reversal levels based on the golden ratio properties found in the Fibonacci sequence.",
    gameType: "all",
    mathematical: true,
    formula: "Fn = Fn-1 + Fn-2, where ratios converge to φ ≈ 1.618",
    conditions: [
      "Identify a significant price movement (swing high to swing low)",
      "Apply Fibonacci ratios to determine potential retracement levels",
      "Level 38.2% and 61.8% are most statistically significant",
      "Combine with volume analysis for confirmation"
    ],
    tags: ["fibonacci", "retracement", "golden-ratio", "support", "resistance"],
    matchScore: 0.72,
    reliability: "Medium-High",
    limitations: "Works better in trending markets; can produce false signals in ranging conditions"
  },
  {
    id: "pat_002",
    name: "Fibonacci Extension",
    category: "Mathematics",
    description: "Projects potential profit targets using Fibonacci extension levels (127.2%, 161.8%, 200%, 261.8%) based on three-point measurement.",
    gameType: "all",
    mathematical: true,
    formula: "Extension = Swing + (Swing × Ratio), Ratios: 1.272, 1.618, 2.0, 2.618",
    conditions: [
      "Requires established trend with clear swing points",
      "Project from the third wave completion point",
      "161.8% extension is the most common target",
      "Higher extensions (261.8%) occur in strong trends"
    ],
    tags: ["fibonacci", "extension", "profit-target", "trend"],
    matchScore: 0.68,
    reliability: "Medium",
    limitations: "Exact reversal points rarely align perfectly; best used as zones"
  },
  {
    id: "pat_003",
    name: "Golden Ratio Convergence",
    category: "Mathematics",
    description: "Identifies confluence zones where multiple Fibonacci levels cluster, increasing the probability of a reaction at that zone.",
    gameType: "all",
    mathematical: true,
    formula: "Confluence Score = Σ(1/|Level_i - Level_j|) for all level pairs within threshold",
    conditions: [
      "Calculate multiple Fibonacci levels from different swing points",
      "Identify zones where 3+ levels converge within 2-3% of each other",
      "Higher confluence scores indicate stronger potential reaction zones",
      "Verify with historical price action at the zone"
    ],
    tags: ["fibonacci", "confluence", "probability", "cluster"],
    matchScore: 0.75,
    reliability: "High",
    limitations: "Over-reliance on historical patterns; market conditions change"
  },
  {
    id: "pat_004",
    name: "Martingale Staking Pattern",
    category: "Mathematics",
    description: "Based on the Martingale betting system theory - doubles stake after each loss. Mathematically shows expected value remains negative but manages short-term variance.",
    gameType: "all",
    mathematical: true,
    formula: "EV = p × W - (1-p) × L, where p = win probability, W = win amount, L = total bet × 2^n",
    conditions: [
      "Requires unlimited bankroll (theoretical model)",
      "Practical implementation needs strict stop-loss limits",
      "Win probability must be >50% for positive short-term expectancy",
      "Table limits constrain the mathematical model"
    ],
    tags: ["martingale", "staking", "bankroll", "variance", "negative-ev"],
    matchScore: 0.45,
    reliability: "Low",
    limitations: "Mathematically proven to fail with finite bankroll; negative expected value"
  },
  {
    id: "pat_005",
    name: "Kelly Criterion Optimal Bet",
    category: "Mathematics",
    description: "Calculates the mathematically optimal bet size to maximize long-term growth rate based on edge and odds. f* = (bp - q) / b",
    gameType: "all",
    mathematical: true,
    formula: "f* = (bp - q) / b, where b = odds, p = win probability, q = 1-p",
    conditions: [
      "Requires accurate estimation of win probability (p)",
      "Requires known payout odds (b)",
      "Fractional Kelly (25-50%) recommended for practical use",
      "Assumes independent, identically distributed trials"
    ],
    tags: ["kelly", "optimal-bet", "bankroll-management", "edge", "growth"],
    matchScore: 0.82,
    reliability: "High",
    limitations: "Requires accurate probability estimates; sensitive to estimation errors"
  },
  {
    id: "pat_006",
    name: "Expected Value Analysis",
    category: "Mathematics",
    description: "Calculates the theoretical average outcome of a decision by multiplying each possible outcome by its probability of occurrence.",
    gameType: "all",
    mathematical: true,
    formula: "E[X] = Σ(x_i × P(x_i)) for all possible outcomes i",
    conditions: [
      "Identify all possible outcomes and their probabilities",
      "Calculate the weighted average of all outcomes",
      "Positive EV indicates profitable long-term play",
      "Negative EV indicates house edge or disadvantage"
    ],
    tags: ["expected-value", "probability", "decision-making", "mathematical-edge"],
    matchScore: 0.85,
    reliability: "High",
    limitations: "Requires accurate probability estimates; doesn't account for variance/risk"
  },
  {
    id: "pat_007",
    name: "Geometric Progression Staking",
    category: "Mathematics",
    description: "Uses geometric sequences for bet sizing where each bet follows a predetermined multiplier, balancing risk and potential returns.",
    gameType: "all",
    mathematical: true,
    formula: "Bet_n = Bet_1 × r^(n-1), where r = common ratio, n = sequence position",
    conditions: [
      "Define initial bet size and common ratio",
      "Ratio < 1 creates decreasing sequence (conservative)",
      "Ratio > 1 creates increasing sequence (aggressive)",
      "Calculate total exposure over n bets"
    ],
    tags: ["geometric", "staking", "sequence", "progression"],
    matchScore: 0.58,
    reliability: "Medium",
    limitations: "Doesn't improve expected value; only changes distribution of outcomes"
  },
  {
    id: "pat_008",
    name: "Arithmetic Progression Pattern",
    category: "Mathematics",
    description: "Linear bet sizing where each subsequent bet increases by a fixed amount, providing predictable total exposure.",
    gameType: "all",
    mathematical: true,
    formula: "Bet_n = a + (n-1)d, S_n = n/2 × (2a + (n-1)d)",
    conditions: [
      "Define starting bet (a) and increment (d)",
      "Calculate maximum n before reaching bankroll limit",
      "More predictable exposure than geometric progression",
      "Total exposure grows quadratically with n"
    ],
    tags: ["arithmetic", "linear", "staking", "progression"],
    matchScore: 0.55,
    reliability: "Medium",
    limitations: "Linear growth may be too slow or too fast depending on variance"
  },
  {
    id: "pat_009",
    name: "Variance Reduction Pattern",
    category: "Mathematics",
    description: "Identifies situations where variance is statistically elevated, suggesting reduced bet sizes to protect bankroll.",
    gameType: "all",
    mathematical: true,
    formula: "Sample Variance s² = Σ(x_i - x̄)² / (n-1), CV = s/x̄",
    conditions: [
      "Calculate rolling variance over recent outcomes",
      "Compare current variance to historical baseline",
      "CV > threshold indicates elevated variance",
      "Recommend proportional bet size reduction"
    ],
    tags: ["variance", "risk-management", "volatility", "bankroll"],
    matchScore: 0.70,
    reliability: "Medium-High",
    limitations: "Lagging indicator; variance can remain elevated longer than expected"
  },
  {
    id: "pat_010",
    name: "Standard Deviation Zoning",
    category: "Mathematics",
    description: "Uses standard deviation bands to identify statistically unusual outcomes that may signal regime changes.",
    gameType: "all",
    mathematical: true,
    formula: "Z = (X - μ) / σ, where μ = mean, σ = standard deviation",
    conditions: [
      "Calculate rolling mean and standard deviation",
      "Outcomes beyond ±2σ are statistically unusual (p < 0.05)",
      "Outcomes beyond ±3σ are very rare (p < 0.003)",
      "Consecutive unusual outcomes may indicate pattern break"
    ],
    tags: ["standard-deviation", "z-score", "outlier", "statistics"],
    matchScore: 0.73,
    reliability: "High",
    limitations: "Assumes normal distribution; real data often has fat tails"
  },

  // ========== TECHNICAL ANALYSIS PATTERNS ==========
  {
    id: "pat_011",
    name: "Simple Moving Average Crossover",
    category: "Technical Analysis",
    description: "Generates signals when a short-term moving average crosses above or below a long-term moving average.",
    gameType: "aviator",
    mathematical: true,
    formula: "SMA_n = (1/n) × Σ(P_i) for i=1 to n",
    conditions: [
      "Short MA (e.g., 5-period) crosses above Long MA (e.g., 20-period) = bullish",
      "Short MA crosses below Long MA = bearish",
      "Confirm with volume or additional indicator",
      "Works best in trending conditions"
    ],
    tags: ["moving-average", "crossover", "trend", "momentum"],
    matchScore: 0.65,
    reliability: "Medium",
    limitations: "Produces false signals in ranging markets; lagging indicator"
  },
  {
    id: "pat_012",
    name: "Exponential Moving Average Ribbon",
    category: "Technical Analysis",
    description: "Uses multiple EMAs with different periods to visualize trend strength and potential reversals through ribbon expansion/contraction.",
    gameType: "aviator",
    mathematical: true,
    formula: "EMA_t = (Price_t × k) + (EMA_t-1 × (1-k)), where k = 2/(n+1)",
    conditions: [
      "Plot 5+ EMAs (8, 13, 21, 34, 55 period)",
      "Expanding ribbon = strong trend",
      "Contracting ribbon = potential reversal",
      "Ribbon twist = trend change signal"
    ],
    tags: ["ema", "ribbon", "trend", "expansion"],
    matchScore: 0.67,
    reliability: "Medium",
    limitations: "Multiple timeframes may give conflicting signals"
  },
  {
    id: "pat_013",
    name: "Relative Strength Index (RSI)",
    category: "Technical Analysis",
    description: "Momentum oscillator measuring speed and magnitude of price changes, ranging from 0-100. Values >70 suggest overbought, <30 suggest oversold.",
    gameType: "aviator",
    mathematical: true,
    formula: "RSI = 100 - (100 / (1 + RS)), RS = Avg Gain / Avg Loss over n periods",
    conditions: [
      "RSI > 70: Potentially overbought, consider selling",
      "RSI < 30: Potentially oversold, consider buying",
      "Divergence between RSI and price signals potential reversal",
      "Classic RSI uses 14-period setting"
    ],
    tags: ["rsi", "momentum", "overbought", "oversold", "oscillator"],
    matchScore: 0.71,
    reliability: "Medium-High",
    limitations: "Can remain overbought/oversold in strong trends; prone to false signals"
  },
  {
    id: "pat_014",
    name: "Bollinger Bands Squeeze",
    category: "Technical Analysis",
    description: "Identifies periods of low volatility (squeeze) followed by expected volatility expansion. Based on standard deviation bands around a moving average.",
    gameType: "aviator",
    mathematical: true,
    formula: "Upper = SMA + (k × σ), Lower = SMA - (k × σ), typical k=2",
    conditions: [
      "Band width contracts to historical low = squeeze",
      "Squeeze duration correlates with subsequent move magnitude",
      "Breakout direction often follows prevailing trend",
      "Confirm with volume increase on breakout"
    ],
    tags: ["bollinger", "volatility", "squeeze", "breakout", "standard-deviation"],
    matchScore: 0.74,
    reliability: "Medium-High",
    limitations: "Squeeze doesn't predict direction, only magnitude of move"
  },
  {
    id: "pat_015",
    name: "MACD Histogram Divergence",
    category: "Technical Analysis",
    description: "Identifies divergence between MACD histogram and price action, potentially signaling trend exhaustion.",
    gameType: "aviator",
    mathematical: true,
    formula: "MACD = EMA_12 - EMA_26, Signal = EMA_9(MACD), Histogram = MACD - Signal",
    conditions: [
      "Price makes higher high but MACD makes lower high = bearish divergence",
      "Price makes lower low but MACD makes higher low = bullish divergence",
      "Divergence stronger when it occurs at extreme levels",
      "Multiple timeframe divergence increases reliability"
    ],
    tags: ["macd", "divergence", "momentum", "trend-reversal"],
    matchScore: 0.69,
    reliability: "Medium",
    limitations: "Divergences can persist for extended periods; timing uncertain"
  },
  {
    id: "pat_016",
    name: "Stochastic Oscillator Crossover",
    category: "Technical Analysis",
    description: "Compares closing price to price range over a period, generating overbought/oversold signals with %K and %D lines.",
    gameType: "aviator",
    mathematical: true,
    formula: "%K = ((C - L_n) / (H_n - L_n)) × 100, %D = SMA_3(%K)",
    conditions: [
      "%K crosses above %D in oversold zone (<20) = buy signal",
      "%K crosses below %D in overbought zone (>80) = sell signal",
      "Works best in ranging markets",
      "Divergence with price adds confirmation"
    ],
    tags: ["stochastic", "oscillator", "overbought", "oversold"],
    matchScore: 0.63,
    reliability: "Medium",
    limitations: "Frequent false signals in trending markets"
  },
  {
    id: "pat_017",
    name: "Average True Range (ATR) Expansion",
    category: "Technical Analysis",
    description: "Measures volatility expansion using Average True Range, useful for setting stop-losses and identifying breakout conditions.",
    gameType: "all",
    mathematical: true,
    formula: "ATR = SMA(TR, n), TR = max(H-L, |H-C_prev|, |L-C_prev|)",
    conditions: [
      "ATR expanding from lows = volatility increase",
      "ATR often expands at trend beginnings",
      "Use ATR multiples for stop-loss placement",
      "Shrinking ATR indicates consolidation"
    ],
    tags: ["atr", "volatility", "stop-loss", "breakout"],
    matchScore: 0.68,
    reliability: "Medium-High",
    limitations: "Directional agnostic; only measures magnitude of movement"
  },
  {
    id: "pat_018",
    name: "Volume Weighted Average Price (VWAP)",
    category: "Technical Analysis",
    description: "Calculates average price weighted by volume, used as a benchmark for institutional buying/selling pressure.",
    gameType: "aviator",
    mathematical: true,
    formula: "VWAP = Σ(Price_i × Volume_i) / Σ(Volume_i)",
    conditions: [
      "Price above VWAP = bullish institutional activity",
      "Price below VWAP = bearish institutional activity",
      "VWAP acts as dynamic support/resistance",
      "Most relevant within single trading session"
    ],
    tags: ["vwap", "volume", "institutional", "benchmark"],
    matchScore: 0.66,
    reliability: "Medium",
    limitations: "Primarily designed for intraday use; resets each session"
  },
  {
    id: "pat_019",
    name: "Donchian Channel Breakout",
    category: "Technical Analysis",
    description: "Identifies breakouts using highest high and lowest low over n periods, popularized by the Turtle Trading system.",
    gameType: "aviator",
    mathematical: true,
    formula: "Upper = max(H_n), Lower = min(L_n), Mid = (Upper + Lower) / 2",
    conditions: [
      "Price breaks above upper channel = new uptrend",
      "Price breaks below lower channel = new downtrend",
      "Classic breakout uses 20-period channel",
      "Confirmation with volume increase recommended"
    ],
    tags: ["donchian", "breakout", "channel", "turtle"],
    matchScore: 0.64,
    reliability: "Medium",
    limitations: "Late entry signals; works best in trending markets"
  },
  {
    id: "pat_020",
    name: "Parabolic SAR Trend Following",
    category: "Technical Analysis",
    description: "Parabolic Stop and Reverse system that provides trailing stop levels, accelerating toward price as trend continues.",
    gameType: "aviator",
    mathematical: true,
    formula: "SAR_t = SAR_t-1 + AF × (EP - SAR_t-1), where AF increases from 0.02 to 0.20",
    conditions: [
      "Dots below price = uptrend, dots above = downtrend",
      "SAR reversal indicates trend change",
      "AF acceleration increases as trend extends",
      "Works best in strong trending markets"
    ],
    tags: ["parabolic", "sar", "trend", "trailing-stop"],
    matchScore: 0.62,
    reliability: "Medium",
    limitations: "Produces whipsaws in ranging markets; late reversals"
  },

  // ========== STATISTICAL PATTERNS ==========
  {
    id: "pat_021",
    name: "Poisson Distribution Pattern",
    category: "Statistical",
    description: "Models the probability of a given number of events occurring in a fixed interval, useful for analyzing rare event frequency.",
    gameType: "mines",
    mathematical: true,
    formula: "P(X=k) = (λ^k × e^-λ) / k!, where λ = expected events per interval",
    conditions: [
      "Events occur independently",
      "Average rate (λ) is constant",
      "Two outcomes: event occurs or doesn't",
      "Calculate probability of exactly k events"
    ],
    tags: ["poisson", "probability", "rare-events", "distribution"],
    matchScore: 0.71,
    reliability: "High",
    limitations: "Assumes independence; real events may be correlated"
  },
  {
    id: "pat_022",
    name: "Binomial Distribution Analysis",
    category: "Statistical",
    description: "Calculates probability of exactly k successes in n independent trials with constant probability p.",
    gameType: "mines",
    mathematical: true,
    formula: "P(X=k) = C(n,k) × p^k × (1-p)^(n-k)",
    conditions: [
      "Fixed number of trials (n)",
      "Each trial has same probability (p)",
      "Binary outcome (success/failure)",
      "Trials are independent"
    ],
    tags: ["binomial", "probability", "trials", "success-rate"],
    matchScore: 0.73,
    reliability: "High",
    limitations: "Requires known probability; independence assumption may not hold"
  },
  {
    id: "pat_023",
    name: "Normal Distribution Z-Score Analysis",
    category: "Statistical",
    description: "Uses the empirical rule (68-95-99.7) to identify statistically significant deviations from the mean.",
    gameType: "all",
    mathematical: true,
    formula: "P(μ-σ < X < μ+σ) ≈ 0.6827, P(μ-2σ < X < μ+2σ) ≈ 0.9545",
    conditions: [
      "Data approximately normally distributed",
      "Calculate rolling mean and standard deviation",
      "Events within ±1σ: common (68%)",
      "Events beyond ±2σ: rare (5%)"
    ],
    tags: ["normal", "z-score", "empirical-rule", "statistics"],
    matchScore: 0.69,
    reliability: "High",
    limitations: "Real data often deviates from normality; fat tails common"
  },
  {
    id: "pat_024",
    name: "Monte Carlo Simulation",
    category: "Statistical",
    description: "Uses random sampling to simulate thousands of scenarios, providing probability distributions of possible outcomes.",
    gameType: "all",
    mathematical: true,
    formula: "Outcome_i = f(Random_Sample_i), Repeat N times, Analyze distribution",
    conditions: [
      "Define probability model for inputs",
      "Generate large number of random scenarios (N ≥ 10,000)",
      "Calculate statistics of output distribution",
      "Use for risk assessment and scenario planning"
    ],
    tags: ["monte-carlo", "simulation", "risk", "probability-distribution"],
    matchScore: 0.78,
    reliability: "High",
    limitations: "Results only as good as input assumptions; computational intensive"
  },
  {
    id: "pat_025",
    name: "Chi-Square Independence Test",
    category: "Statistical",
    description: "Tests whether two categorical variables are independent, useful for detecting if outcomes deviate from expected random distribution.",
    gameType: "mines",
    mathematical: true,
    formula: "χ² = Σ((O_i - E_i)² / E_i), where O = observed, E = expected frequency",
    conditions: [
      "Construct contingency table of observed frequencies",
      "Calculate expected frequencies assuming independence",
      "Compare χ² statistic to critical value",
      "Low p-value suggests non-random patterns exist"
    ],
    tags: ["chi-square", "independence", "hypothesis-test", "randomness"],
    matchScore: 0.66,
    reliability: "Medium-High",
    limitations: "Only detects association, not causation; requires sufficient sample size"
  },
  {
    id: "pat_026",
    name: "Law of Large Numbers Application",
    category: "Statistical",
    description: "As sample size increases, sample mean converges to population mean. Used to assess when short-term deviations should regress.",
    gameType: "all",
    mathematical: true,
    formula: "P(|X̄_n - μ| > ε) → 0 as n → ∞",
    conditions: [
      "Requires large sample size for reliable convergence",
      "Convergence rate depends on variance",
      "Used to predict regression to the mean",
      "Sample size >30 generally sufficient for CLT"
    ],
    tags: ["law-of-large-numbers", "convergence", "regression", "sample-size"],
    matchScore: 0.72,
    reliability: "High",
    limitations: "Doesn't predict when convergence will occur; just that it will"
  },
  {
    id: "pat_027",
    name: "Central Limit Theorem Pattern",
    category: "Statistical",
    description: "Sample means approach normal distribution regardless of underlying distribution, enabling probability calculations for sample statistics.",
    gameType: "all",
    mathematical: true,
    formula: "X̄_n ~ N(μ, σ²/n) approximately for large n",
    conditions: [
      "Sample size n ≥ 30 for most distributions",
      "More skewed distributions need larger n",
      "Enables confidence interval construction",
      "Validates use of normal-based statistics"
    ],
    tags: ["central-limit-theorem", "normal-approximation", "inference"],
    matchScore: 0.70,
    reliability: "High",
    limitations: "Approximation improves with sample size; exact for normal populations"
  },
  {
    id: "pat_028",
    name: "Moving Average Convergence Divergence (Statistical)",
    category: "Statistical",
    description: "Statistical analysis of how moving averages of different periods converge and diverge, indicating momentum changes.",
    gameType: "all",
    mathematical: true,
    formula: "Convergence Rate = (MA_short - MA_long) / MA_long × 100%",
    conditions: [
      "Calculate short and long moving averages",
      "Track convergence/divergence rate",
      "Rapid convergence = momentum shift",
      "Divergence rate indicates trend strength"
    ],
    tags: ["convergence", "divergence", "momentum", "moving-average"],
    matchScore: 0.64,
    reliability: "Medium",
    limitations: "Lagging by nature of moving averages; slow to signal reversals"
  },
  {
    id: "pat_029",
    name: "Autocorrelation Pattern Detection",
    category: "Statistical",
    description: "Measures correlation of a time series with its own lagged values, detecting momentum or mean reversion tendencies.",
    gameType: "all",
    mathematical: true,
    formula: "ACF(k) = Cov(X_t, X_t-k) / Var(X_t)",
    conditions: [
      "Calculate autocorrelation for lags 1 through n",
      "Positive ACF at lag 1 = momentum/trending",
      "Negative ACF at lag 1 = mean reversion",
      "Significant ACF values beyond confidence bands"
    ],
    tags: ["autocorrelation", "momentum", "mean-reversion", "time-series"],
    matchScore: 0.67,
    reliability: "Medium-High",
    limitations: "Stationarity required; non-stationary data gives misleading results"
  },
  {
    id: "pat_030",
    name: "Bayesian Probability Update",
    category: "Statistical",
    description: "Updates probability estimates as new evidence becomes available using Bayes' theorem.",
    gameType: "all",
    mathematical: true,
    formula: "P(A|B) = P(B|A) × P(A) / P(B)",
    conditions: [
      "Define prior probability P(A)",
      "Observe new evidence B",
      "Calculate likelihood P(B|A)",
      "Update to posterior probability P(A|B)"
    ],
    tags: ["bayesian", "probability", "update", "evidence"],
    matchScore: 0.76,
    reliability: "High",
    limitations: "Prior selection subjective; requires accurate likelihood estimation"
  },

  // ========== FIBONACCI PATTERNS ==========
  {
    id: "pat_031",
    name: "Fibonacci Time Zones",
    category: "Fibonacci",
    description: "Projects potential time-based reversal points using Fibonacci numbers from a significant starting point.",
    gameType: "all",
    mathematical: true,
    formula: "Time Zone = Start + F_n × Time Unit, where F_n = 1, 1, 2, 3, 5, 8, 13, 21, 34...",
    conditions: [
      "Identify significant starting point (swing low/high)",
      "Project forward using Fibonacci numbers",
      "Multiple time zones clustering increases significance",
      "Works better on higher timeframes"
    ],
    tags: ["fibonacci", "time", "reversal", "projection"],
    matchScore: 0.58,
    reliability: "Low-Medium",
    limitations: "Time projections less reliable than price projections"
  },
  {
    id: "pat_032",
    name: "Fibonacci Fan Lines",
    category: "Fibonacci",
    description: "Trendlines drawn through Fibonacci retracement levels, providing dynamic support/resistance zones.",
    gameType: "aviator",
    mathematical: true,
    formula: "Fan Angle = arctan(Rise / (Run × Fibonacci_Ratio))",
    conditions: [
      "Draw from swing point through Fibonacci levels",
      "38.2%, 50%, 61.8% fan lines most common",
      "Fan lines act as dynamic support/resistance",
      "Confluence with other levels strengthens signal"
    ],
    tags: ["fibonacci", "fan", "trendline", "support", "resistance"],
    matchScore: 0.61,
    reliability: "Medium",
    limitations: "Subjective angle placement; less precise than horizontal levels"
  },
  {
    id: "pat_033",
    name: "Fibonacci Arc Pattern",
    category: "Fibonacci",
    description: "Curved support/resistance levels based on Fibonacci ratios, accounting for both price and time dimensions.",
    gameType: "aviator",
    mathematical: true,
    formula: "Arc Radius = Swing × Ratio × √(Time)",
    conditions: [
      "Draw arcs from significant swing points",
      "38.2%, 50%, 61.8% arcs are standard",
      "Price often reacts where arcs intersect price",
      "Time dimension adds another analysis layer"
    ],
    tags: ["fibonacci", "arc", "curved", "time-price"],
    matchScore: 0.59,
    reliability: "Low-Medium",
    limitations: "Complex to draw accurately; subjective timeframe selection"
  },
  {
    id: "pat_034",
    name: "Fibonacci Spiral Projection",
    category: "Fibonacci",
    description: "Uses the Fibonacci spiral (golden spiral) to project potential turning points in both price and time.",
    gameType: "all",
    mathematical: true,
    formula: "Spiral = Base × φ^(θ/90°), where φ ≈ 1.618, θ = angle in degrees",
    conditions: [
      "Identify natural spiral origin point",
      "Spiral expands at golden ratio rate",
      "Key reversals often occur near spiral intersections",
      "Combines time and price analysis"
    ],
    tags: ["fibonacci", "spiral", "golden", "projection"],
    matchScore: 0.55,
    reliability: "Low",
    limitations: "Highly subjective; difficult to apply consistently"
  },
  {
    id: "pat_035",
    name: "Fibonacci Channel Pattern",
    category: "Fibonacci",
    description: "Channels constructed using Fibonacci ratios for parallel support and resistance boundaries.",
    gameType: "aviator",
    mathematical: true,
    formula: "Channel Width = Swing × Fibonacci_Ratio, Parallel lines at ratio intervals",
    conditions: [
      "Draw base channel from swing points",
      "Extend using Fibonacci ratios for additional boundaries",
      "Channel breaks signal trend changes",
      "Multiple channel confluence zones"
    ],
    tags: ["fibonacci", "channel", "parallel", "boundary"],
    matchScore: 0.62,
    reliability: "Medium",
    limitations: "Channels may not remain parallel in real conditions"
  },
  {
    id: "pat_036",
    name: "Elliott Wave Fibonacci Relationship",
    category: "Fibonacci",
    description: "Elliott Wave theory combined with Fibonacci ratios for wave target and retracement projections.",
    gameType: "all",
    mathematical: true,
    formula: "Wave 2 = 50-61.8% of Wave 1, Wave 3 = 161.8% of Wave 1, Wave 5 = 61.8% of Wave 1",
    conditions: [
      "Identify wave 1 starting point",
      "Wave 2 typically retraces 50-61.8% of Wave 1",
      "Wave 3 often extends 161.8% of Wave 1",
      "Wave 5 commonly equals 61.8% of Waves 1-3"
    ],
    tags: ["elliott", "wave", "fibonacci", "pattern"],
    matchScore: 0.68,
    reliability: "Medium",
    limitations: "Wave counting is subjective; multiple valid interpretations"
  },

  // ========== PROBABILITY PATTERNS ==========
  {
    id: "pat_037",
    name: "Gambler's Fallacy Detection",
    category: "Probability",
    description: "Identifies when outcomes are being misinterpreted due to the gambler's fallacy - believing past independent events affect future probabilities.",
    gameType: "all",
    mathematical: true,
    formula: "P(A|B) = P(A) if A and B are independent events",
    conditions: [
      "Verify event independence",
      "Calculate actual conditional probability",
      "Compare to perceived probability",
      "If equal, gambler's fallacy may be influencing decisions"
    ],
    tags: ["gambler-fallacy", "independence", "cognitive-bias", "probability"],
    matchScore: 0.74,
    reliability: "High",
    limitations: "Detects fallacy but doesn't guarantee better outcomes"
  },
  {
    id: "pat_038",
    name: "Hot Hand Fallacy Analysis",
    category: "Probability",
    description: "Examines whether perceived 'hot streaks' represent actual skill/influence or random clustering in independent sequences.",
    gameType: "all",
    mathematical: true,
    formula: "Runs Test Z = (Observed Runs - Expected Runs) / Standard Deviation",
    conditions: [
      "Count streaks (runs) of same outcome",
      "Compare to expected runs under randomness",
      "Significantly more runs than expected = possible non-random",
      "Fewer runs = possible clustering"
    ],
    tags: ["hot-hand", "streak", "runs-test", "randomness"],
    matchScore: 0.65,
    reliability: "Medium-High",
    limitations: "Statistical test detects patterns but not causation"
  },
  {
    id: "pat_039",
    name: "Expected Value Optimizer",
    category: "Probability",
    description: "Calculates and compares expected values across different betting/decision options to identify mathematically optimal choices.",
    gameType: "all",
    mathematical: true,
    formula: "EV = Σ(P_i × V_i), where P_i = probability, V_i = value of outcome i",
    conditions: [
      "List all possible outcomes for each option",
      "Estimate probability of each outcome",
      "Assign value (payout) to each outcome",
      "Select option with highest EV"
    ],
    tags: ["expected-value", "optimization", "decision", "probability"],
    matchScore: 0.80,
    reliability: "High",
    limitations: "Requires accurate probability estimates; ignores risk preference"
  },
  {
    id: "pat_040",
    name: "Conditional Probability Chain",
    category: "Probability",
    description: "Calculates compound probabilities using conditional probability multiplication rule for sequential dependent events.",
    gameType: "mines",
    mathematical: true,
    formula: "P(A∩B∩C) = P(A) × P(B|A) × P(C|A∩B)",
    conditions: [
      "Events are dependent (conditional)",
      "Calculate probability of first event",
      "Calculate conditional probabilities for subsequent events",
      "Multiply chain for compound probability"
    ],
    tags: ["conditional", "probability", "chain", "dependent"],
    matchScore: 0.69,
    reliability: "High",
    limitations: "Requires accurate conditional probability estimates"
  },
  {
    id: "pat_041",
    name: "Bayesian Belief Network",
    category: "Probability",
    description: "Graphical model representing probabilistic relationships between variables, enabling complex conditional probability calculations.",
    gameType: "all",
    mathematical: true,
    formula: "P(X_1,...,X_n) = Π P(X_i | Parents(X_i))",
    conditions: [
      "Define variables and their dependencies",
      "Construct directed acyclic graph",
      "Assign conditional probability tables",
      "Perform inference given evidence"
    ],
    tags: ["bayesian", "network", "graphical-model", "inference"],
    matchScore: 0.72,
    reliability: "High",
    limitations: "Complex to construct; requires domain expertise"
  },
  {
    id: "pat_042",
    name: "Probability Weighted Decision",
    category: "Probability",
    description: "Weights decisions by their probability of occurrence and associated outcomes, providing risk-adjusted decision framework.",
    gameType: "all",
    mathematical: true,
    formula: "Decision Score = Σ(P_i × Utility_i) for all options",
    conditions: [
      "List decision options and possible outcomes",
      "Assign probabilities to each outcome",
      "Assign utility/value to each outcome",
      "Calculate weighted score for each option"
    ],
    tags: ["probability", "weighted", "decision", "utility"],
    matchScore: 0.71,
    reliability: "High",
    limitations: "Utility function subjective; probability estimates uncertain"
  },
  {
    id: "pat_043",
    name: "Negative Binomial Distribution",
    category: "Probability",
    description: "Models the number of failures before a specified number of successes, useful for analyzing sequences with repeated trials.",
    gameType: "mines",
    mathematical: true,
    formula: "P(X=k) = C(k+r-1, k) × p^r × (1-p)^k",
    conditions: [
      "Count failures (k) before r successes",
      "Constant probability p of success",
      "Independent trials",
      "Calculate probability of exactly k failures"
    ],
    tags: ["negative-binomial", "probability", "trials", "success"],
    matchScore: 0.63,
    reliability: "Medium-High",
    limitations: "Requires known probability; independence assumption"
  },

  // ========== MIXED/MORE PATTERNS ==========
  {
    id: "pat_044",
    name: "Volatility Mean Reversion",
    category: "Statistical",
    description: "Identifies when volatility has deviated significantly from its mean and predicts reversion, useful for timing entries/exits.",
    gameType: "all",
    mathematical: true,
    formula: "Volatility Z-Score = (Current_Vol - MA_Vol) / StdDev_Vol",
    conditions: [
      "Calculate rolling volatility measure",
      "Compare to long-term volatility average",
      "Z-score > 2: volatility elevated, expect contraction",
      "Z-score < -2: volatility compressed, expect expansion"
    ],
    tags: ["volatility", "mean-reversion", "z-score", "regime"],
    matchScore: 0.70,
    reliability: "Medium-High",
    limitations: "Volatility regimes can persist; reversion timing uncertain"
  },
  {
    id: "pat_045",
    name: "Geometric Brownian Motion",
    category: "Mathematics",
    description: "Models price movements as random walk with drift, used as foundation for option pricing and risk models.",
    gameType: "aviator",
    mathematical: true,
    formula: "dS = μSdt + σSdW, where μ = drift, σ = volatility, dW = Wiener process",
    conditions: [
      "Prices follow log-normal distribution",
      "Returns are independently and identically distributed",
      "Used for theoretical pricing models",
      "Foundation for Black-Scholes model"
    ],
    tags: ["geometric-brownian", "random-walk", "option-pricing", "model"],
    matchScore: 0.56,
    reliability: "Medium",
    limitations: "Assumes normality; real markets have fat tails and jumps"
  },
  {
    id: "pat_046",
    name: "Pair Trading Statistical Arbitrage",
    category: "Statistical",
    description: "Identifies statistically related pairs and trades convergence when spread deviates from historical mean.",
    gameType: "all",
    mathematical: true,
    formula: "Spread = Price_A - β × Price_B, Z = (Spread - μ_spread) / σ_spread",
    conditions: [
      "Identify cointegrated pairs",
      "Calculate hedge ratio (β)",
      "Monitor spread Z-score",
      "Trade when Z-score exceeds threshold"
    ],
    tags: ["pair-trading", "arbitrage", "cointegration", "spread"],
    matchScore: 0.67,
    reliability: "Medium",
    limitations: "Pairs can decouple; correlation is not causation"
  },
  {
    id: "pat_047",
    name: "Regime Switching Model",
    category: "Statistical",
    description: "Identifies different market regimes (trending, ranging, volatile) and adapts strategy parameters accordingly.",
    gameType: "all",
    mathematical: true,
    formula: "P(Regime_t = j | data) = P(data | Regime_j) × P(Regime_j) / P(data)",
    conditions: [
      "Define distinct market regimes",
      "Calculate regime probabilities from data",
      "Switch strategy parameters based on dominant regime",
      "Smooth transitions to avoid whipsaws"
    ],
    tags: ["regime", "switching", "adaptive", "market-state"],
    matchScore: 0.69,
    reliability: "Medium-High",
    limitations: "Regime identification is backward-looking; transitions unpredictable"
  },
  {
    id: "pat_048",
    name: "Max Drawdown Probability",
    category: "Probability",
    description: "Calculates the probability and expected magnitude of maximum drawdown based on return distribution parameters.",
    gameType: "all",
    mathematical: true,
    formula: "E[MaxDD] ≈ σ × √(2 × ln(T)) for T periods",
    conditions: [
      "Estimate return distribution (mean, variance)",
      "Calculate expected max drawdown for time horizon",
      "Compare to current drawdown",
      "Use for bankroll sizing and risk limits"
    ],
    tags: ["drawdown", "probability", "risk", "bankroll"],
    matchScore: 0.73,
    reliability: "High",
    limitations: "Approximation; actual max DD depends on path, not just distribution"
  },
  {
    id: "pat_049",
    name: "Risk of Ruin Calculator",
    category: "Probability",
    description: "Calculates probability of losing entire bankroll given edge, bet size, and bankroll parameters.",
    gameType: "all",
    mathematical: true,
    formula: "ROR = ((1-edge)/(1+edge))^units, or approximated for small edges",
    conditions: [
      "Define edge (expected value per unit)",
      "Define bankroll in betting units",
      "Calculate probability of ruin",
      "Set maximum acceptable ROR threshold"
    ],
    tags: ["risk-of-ruin", "bankroll", "probability", "edge"],
    matchScore: 0.77,
    reliability: "High",
    limitations: "Requires accurate edge estimate; assumes fixed bet size"
  },
  {
    id: "pat_050",
    name: "Sharpe Ratio Comparison",
    category: "Statistical",
    description: "Measures risk-adjusted return by dividing excess return by standard deviation, enabling comparison of strategies.",
    gameType: "all",
    mathematical: true,
    formula: "Sharpe = (R_p - R_f) / σ_p, where R_f = risk-free rate",
    conditions: [
      "Calculate strategy returns",
      "Subtract risk-free rate (or benchmark)",
      "Divide by standard deviation of returns",
      "Higher Sharpe = better risk-adjusted performance"
    ],
    tags: ["sharpe", "risk-adjusted", "performance", "comparison"],
    matchScore: 0.74,
    reliability: "High",
    limitations: "Assumes normal distribution; penalizes upside volatility equally"
  },
  {
    id: "pat_051",
    name: "Sortino Ratio Analysis",
    category: "Statistical",
    description: "Like Sharpe Ratio but only penalizes downside volatility, better measuring risk for asymmetric return distributions.",
    gameType: "all",
    mathematical: true,
    formula: "Sortino = (R_p - R_f) / DD, where DD = Downside Deviation",
    conditions: [
      "Calculate returns below target (usually 0)",
      "Calculate downside deviation",
      "Divide excess return by downside deviation",
      "Higher Sortino = better downside risk management"
    ],
    tags: ["sortino", "downside", "risk-adjusted", "asymmetric"],
    matchScore: 0.71,
    reliability: "High",
    limitations: "Requires sufficient data for downside deviation; target selection subjective"
  },
  {
    id: "pat_052",
    name: "Information Ratio Performance",
    category: "Statistical",
    description: "Measures active return per unit of tracking error, indicating skill in generating excess returns consistently.",
    gameType: "all",
    mathematical: true,
    formula: "IR = (R_p - R_b) / TE, where TE = Tracking Error = std(R_p - R_b)",
    conditions: [
      "Calculate active returns (strategy minus benchmark)",
      "Calculate tracking error (std of active returns)",
      "Divide active return by tracking error",
      "Higher IR = more consistent outperformance"
    ],
    tags: ["information-ratio", "tracking-error", "active-return", "skill"],
    matchScore: 0.68,
    reliability: "Medium-High",
    limitations: "Requires benchmark; assumes normality of tracking errors"
  },
  {
    id: "pat_053",
    name: "Value at Risk (VaR)",
    category: "Probability",
    description: "Estimates maximum expected loss over a given time period at a specified confidence level.",
    gameType: "all",
    mathematical: true,
    formula: "VaR_α = -μ - σ × Z_α, where Z_α is the α quantile of standard normal",
    conditions: [
      "Define confidence level (95%, 99%)",
      "Calculate from return distribution",
      "Reports maximum loss not exceeded with confidence",
      "Used for position sizing and risk limits"
    ],
    tags: ["var", "value-at-risk", "quantile", "risk-limit"],
    matchScore: 0.72,
    reliability: "High",
    limitations: "Doesn't measure loss beyond VaR; assumes distribution stability"
  },
  {
    id: "pat_054",
    name: "Conditional Value at Risk (CVaR)",
    category: "Probability",
    description: "Expected loss given that loss exceeds VaR, measuring tail risk more comprehensively than VaR alone.",
    gameType: "all",
    mathematical: true,
    formula: "CVaR_α = E[Loss | Loss > VaR_α]",
    conditions: [
      "Calculate VaR at desired confidence",
      "Calculate expected value of losses beyond VaR",
      "CVaR > VaR always",
      "Better measure of worst-case scenarios"
    ],
    tags: ["cvar", "expected-shortfall", "tail-risk", "worst-case"],
    matchScore: 0.70,
    reliability: "High",
    limitations: "Requires sufficient tail data; estimation uncertainty in tails"
  },
  {
    id: "pat_055",
    name: "Permutation Test Randomness",
    category: "Statistical",
    description: "Non-parametric test that shuffles data to create null distribution, testing if observed pattern could arise by chance.",
    gameType: "mines",
    mathematical: true,
    formula: "p-value = (number of permuted statistics ≥ observed) / (total permutations)",
    conditions: [
      "Calculate observed test statistic",
      "Generate many random permutations of data",
      "Calculate statistic for each permutation",
      "p-value < 0.05 suggests non-random pattern"
    ],
    tags: ["permutation", "non-parametric", "randomness", "hypothesis"],
    matchScore: 0.66,
    reliability: "High",
    limitations: "Computationally intensive; exact p-value requires all permutations"
  },
  {
    id: "pat_056",
    name: "Bootstrap Confidence Intervals",
    category: "Statistical",
    description: "Uses resampling with replacement to estimate confidence intervals without distributional assumptions.",
    gameType: "all",
    mathematical: true,
    formula: "CI = [θ*_(α/2), θ*_(1-α/2)] from bootstrap distribution of θ*",
    conditions: [
      "Resample data with replacement B times",
      "Calculate statistic for each bootstrap sample",
      "Use percentile method for confidence interval",
      "Works for any statistic without distribution assumptions"
    ],
    tags: ["bootstrap", "confidence-interval", "resampling", "non-parametric"],
    matchScore: 0.68,
    reliability: "High",
    limitations: "Requires representative sample; may fail for small samples"
  },
  {
    id: "pat_057",
    name: "Cross-Validation Performance",
    category: "Statistical",
    description: "Evaluates model performance by training and testing on different data subsets, preventing overfitting assessment.",
    gameType: "all",
    mathematical: true,
    formula: "CV Score = (1/k) × Σ(Error_i), where k = number of folds",
    conditions: [
      "Divide data into k folds",
      "Train on k-1 folds, test on remaining fold",
      "Repeat for all fold combinations",
      "Average performance across all folds"
    ],
    tags: ["cross-validation", "overfitting", "model-evaluation", "generalization"],
    matchScore: 0.67,
    reliability: "High",
    limitations: "Data intensive; may not capture temporal dependencies"
  },
  {
    id: "pat_058",
    name: "AIC/BIC Model Selection",
    category: "Statistical",
    description: "Balances model fit and complexity using information criteria, preventing overfitting in model selection.",
    gameType: "all",
    mathematical: true,
    formula: "AIC = 2k - 2ln(L), BIC = k×ln(n) - 2ln(L), where k = parameters, L = likelihood",
    conditions: [
      "Fit models with different complexities",
      "Calculate AIC and/or BIC for each",
      "Lower values indicate better balance",
      "Select model with minimum information criterion"
    ],
    tags: ["aic", "bic", "model-selection", "overfitting", "parsimony"],
    matchScore: 0.65,
    reliability: "High",
    limitations: "Requires comparable models; assumes correct likelihood"
  },
  {
    id: "pat_059",
    name: "Power Analysis Sample Size",
    category: "Statistical",
    description: "Calculates required sample size to detect an effect of given size with specified confidence and power.",
    gameType: "all",
    mathematical: true,
    formula: "n = ((Z_α/2 + Z_β) × σ / δ)², where δ = effect size",
    conditions: [
      "Define significance level (α, typically 0.05)",
      "Define power (1-β, typically 0.80)",
      "Estimate effect size and variance",
      "Calculate minimum required sample size"
    ],
    tags: ["power-analysis", "sample-size", "effect-size", "study-design"],
    matchScore: 0.62,
    reliability: "High",
    limitations: "Requires effect size estimate; may be impractical"
  },
  {
    id: "pat_060",
    name: "Meta-Analysis Aggregation",
    category: "Statistical",
    description: "Combines results from multiple analyses to produce a single effect estimate with improved precision.",
    gameType: "all",
    mathematical: true,
    formula: "θ_combined = Σ(w_i × θ_i) / Σ(w_i), w_i = 1/Var(θ_i)",
    conditions: [
      "Collect multiple independent estimates",
      "Weight by inverse variance",
      "Calculate combined effect and confidence interval",
      "Test for heterogeneity between studies"
    ],
    tags: ["meta-analysis", "aggregation", "weighted", "evidence"],
    matchScore: 0.69,
    reliability: "High",
    limitations: "Assumes comparable studies; publication bias possible"
  }
];

export default PATTERNS_ARRAY;
export { PATTERNS_ARRAY };
