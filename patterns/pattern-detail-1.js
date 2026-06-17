/**
 * Pattern Details - File 1
 * Detailed explanations for patterns pat_001 through pat_010
 */

const PATTERN_DETAILS = {
  "pat_001": {
    title: "Fibonacci Retracement",
    sections: [
      {
        heading: "Overview",
        content: "Fibonacci Retracement is a technical analysis tool that uses horizontal lines to indicate areas of support or resistance at the key Fibonacci levels (23.6%, 38.2%, 50%, 61.8%, 78.6%) before continuing in the original direction. These levels are based on the Fibonacci sequence and the golden ratio, which appear frequently in natural phenomena and financial markets. The tool is applied by selecting two price points, typically a significant high and low, and the levels are drawn between them."
      },
      {
        heading: "Mathematical Foundation",
        content: "The Fibonacci sequence starts with 0 and 1, with each subsequent number being the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89... The key ratio is derived by dividing a number by the one two places ahead (e.g., 55/89 ≈ 0.618 or 61.8%). The ratio 0.618 is known as the Golden Ratio (φ). Other ratios: 38.2% = 0.618² ≈ 0.382, 23.6% = 0.382 × 0.618 ≈ 0.236. The 50% level, while not a true Fibonacci ratio, is included due to its widespread use and psychological significance. Mathematically, as the sequence progresses, the ratio between consecutive terms converges to φ = (1 + √5)/2 ≈ 1.618."
      },
      {
        heading: "How It Works",
        content: "1. Identify a significant price swing (high to low for downtrend retracement, low to high for uptrend retracement). 2. Apply the Fibonacci tool between these two points. 3. The tool automatically calculates and displays the retracement levels. 4. Traders watch for price reactions at these levels. 5. The 61.8% level is considered the 'golden ratio' and is the most significant. 6. A break below the 78.6% level often signals the retracement may have failed."
      },
      {
        heading: "When To Use",
        content: "Use during trending markets to identify potential entry points during pullbacks. Best applied after a clear, significant price move has occurred. Works well on higher timeframes (4H, Daily, Weekly) where noise is reduced. Combine with other indicators (RSI oversold, support/resistance) for confirmation. Avoid using in ranging or choppy markets where price may oscillate through all levels."
      },
      {
        heading: "Risk Assessment",
        content: "Medium-High reliability. False signals occur frequently in ranging markets. The levels are zones, not exact prices. Risk should be managed by placing stops beyond the next Fibonacci level. The 78.6% level often serves as a stop-loss reference point. No Fibonacci level guarantees a reversal; they indicate potential reaction zones."
      },
      {
        heading: "Historical Performance",
        content: "Studies show the 61.8% level provides the highest win rate for retracement entries, approximately 55-60% in trending markets. The 38.2% level is more conservative with higher win rate but lower reward-to-risk. In backtesting across forex pairs (2010-2020), Fibonacci retracement entries at 50-61.8% levels showed positive expectancy when combined with trend confirmation. However, performance degrades significantly in ranging conditions."
      }
    ]
  },
  "pat_002": {
    title: "Fibonacci Extension",
    sections: [
      {
        heading: "Overview",
        content: "Fibonacci Extension projects potential profit targets beyond the original price swing using ratios greater than 100%. Common extension levels include 127.2%, 161.8%, 200%, and 261.8%. Unlike retracement (which stays within the original range), extensions project where price may go after breaking out of the range. They require three points: start of the move, end of the move, and the retracement endpoint."
      },
      {
        heading: "Mathematical Foundation",
        content: "Extension ratios are derived from Fibonacci mathematics: 127.2% ≈ √1.618, 161.8% = φ × 100%, 200% = 2 × 100%, 261.8% = φ² × 100%. The projection formula: Extension Level = Swing Distance × Ratio. For example, if the swing is 100 points and ratio is 161.8%, the extension projects 161.8 points from the retracement endpoint. The math assumes markets move in proportions related to the golden ratio."
      },
      {
        heading: "How It Works",
        content: "1. Identify three points: A (start of move), B (end of move), C (end of retracement). 2. Calculate swing distance: D = |B - A|. 3. Project from point C: Extension = C + (D × Ratio) for uptrend, C - (D × Ratio) for downtrend. 4. Multiple extension levels create a target zone. 5. The 161.8% extension is the most commonly achieved target. 6. 261.8% extensions occur only in very strong trends."
      },
      {
        heading: "When To Use",
        content: "Use after a clear ABC correction pattern in an established trend. Best for setting profit targets rather than entries. The 161.8% extension is a conservative target; 261.8% for strong trends. Combine with other resistance/support levels for confluence. Most reliable on higher timeframes where patterns are more significant."
      },
      {
        heading: "Risk Assessment",
        content: "Medium reliability. Extensions are targets, not guarantees. Price may reverse before reaching projected levels. Works best when combined with other technical analysis. The 127.2% level is conservative; many trades won't reach this. Use trailing stops once first extension is reached."
      },
      {
        heading: "Historical Performance",
        content: "The 161.8% extension is reached in approximately 60-65% of valid ABC patterns in trending markets. The 127.2% level has a 70-75% hit rate but offers lower reward. The 261.8% extension is reached in only 20-25% of cases, typically in strong momentum moves. Overall, Fibonacci extensions work better as target guidelines than precise prediction tools."
      }
    ]
  },
  "pat_003": {
    title: "Golden Ratio Convergence",
    sections: [
      {
        heading: "Overview",
        content: "Golden Ratio Confluence occurs when multiple Fibonacci levels from different swing points align in a narrow price zone. This creates a stronger potential reaction zone than any single level alone. The concept is based on the idea that when multiple independent technical factors point to the same area, the probability of a reaction increases."
      },
      {
        heading: "Mathematical Foundation",
        content: "The confluence score is calculated by measuring the density of Fibonacci levels within a given range. Formula: Confluence Score = Σ(1/|Level_i - Level_j|) for all level pairs within a threshold distance. A higher score indicates tighter clustering. When 3 or more levels from different swing points converge within 2-3% of each other, the zone is considered significant. The mathematical basis is that independent calculations pointing to the same area create a probabilistic weight."
      },
      {
        heading: "How It Works",
        content: "1. Identify multiple significant swing points on the chart. 2. Calculate Fibonacci retracement levels for each swing. 3. Map all calculated levels on the chart. 4. Identify zones where 3+ levels cluster within a narrow range. 5. Mark this zone as a high-probability reaction area. 6. The more levels that converge, the stronger the zone. 7. Combine with horizontal support/resistance for additional confirmation."
      },
      {
        heading: "When To Use",
        content: "Use when multiple Fibonacci levels from different timeframes or swings align. Particularly powerful on higher timeframes (Daily, Weekly). Best used as entry zones rather than precise entry points. Combine with candlestick patterns for timing. Most effective in trending markets where Fibonacci levels are respected."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability when properly identified. The confluence of multiple independent calculations increases probability. However, no zone is guaranteed. Risk should be managed based on the zone width. Place stops beyond the zone boundaries. Even strong confluence zones can break in extreme market conditions."
      },
      {
        heading: "Historical Performance",
        content: "Confluence zones show approximately 70-75% reaction rate in trending markets, compared to 55-60% for single Fibonacci levels. The improvement is statistically significant across multiple market studies. Zones with 4+ converging levels show 80%+ reaction rates but are rare. The key is patience in waiting for high-quality confluence setups rather than forcing trades at single levels."
      }
    ]
  },
  "pat_004": {
    title: "Martingale Staking Pattern",
    sections: [
      {
        heading: "Overview",
        content: "The Martingale system is a betting strategy where the stake is doubled after each loss, with the theory being that the first win will recover all previous losses plus profit equal to the original stake. While mathematically interesting, it is important to understand that this system has a negative expected value and will fail with finite bankroll."
      },
      {
        heading: "Mathematical Foundation",
        content: "Expected Value: EV = p × W - (1-p) × L, where p = win probability, W = win amount (1 unit), L = total bet. After n losses, total bet = 1 + 2 + 4 + ... + 2^(n-1) = 2^n - 1. The probability of n consecutive losses = (1-p)^n. For a 50% win rate game: P(10 consecutive losses) ≈ 0.1%. While individual sequences may win, the long-term EV remains negative due to table limits and finite bankroll. The system does not change the underlying house edge."
      },
      {
        heading: "How It Works",
        content: "1. Start with base bet (1 unit). 2. If you win, keep the profit and restart with base bet. 3. If you lose, double the bet. 4. Continue doubling until a win occurs. 5. A win recovers all losses plus 1 unit profit. 6. The cycle then restarts. 7. In theory, this guarantees profit. 8. In practice, consecutive losses can exceed bankroll or table limits."
      },
      {
        heading: "When To Use",
        content: "This pattern should NOT be used as a primary strategy. It is presented for educational purposes to understand negative expected value systems. Some traders use modified versions with strict stop-losses, but these lose the theoretical 'guarantee' of the original system. The only appropriate use is with unlimited bankroll and no table limits, which don't exist in practice."
      },
      {
        heading: "Risk Assessment",
        content: "VERY HIGH RISK. The system produces many small wins punctuated by catastrophic losses. The probability of ruin approaches 100% with sufficient time. Historical examples show complete bankroll loss is inevitable. The Kelly Criterion would suggest zero bet size for negative EV situations. This is the opposite of proper bankroll management."
      },
      {
        heading: "Historical Performance",
        content: "Mathematical analysis shows: For a 49% win rate game with 10 doublings, bankroll requirement is 1023 units to have 99.9% survival rate per cycle. However, over 1000 cycles, the probability of encountering a 10+ loss streak approaches certainty. The system has bankrupted countless gamblers throughout history. It is one of the most well-documented losing systems in gambling mathematics."
      }
    ]
  },
  "pat_005": {
    title: "Kelly Criterion Optimal Bet",
    sections: [
      {
        heading: "Overview",
        content: "The Kelly Criterion, developed by John Kelly at Bell Labs in 1956, calculates the mathematically optimal bet size to maximize the long-term growth rate of capital. It balances the trade-off between risk and reward by suggesting a bet size proportional to the edge divided by the odds."
      },
      {
        heading: "Mathematical Foundation",
        content: "The Kelly formula: f* = (bp - q) / b, where f* = fraction of bankroll to bet, b = decimal odds - 1 (net odds), p = probability of winning, q = 1 - p = probability of losing. For example, if p = 0.55 (55% win rate) and b = 1 (even money): f* = (1 × 0.55 - 0.45) / 1 = 0.10 or 10%. The formula maximizes the expected logarithm of wealth (geometric growth rate). Half-Kelly (f*/2) is commonly used to reduce variance while maintaining most of the growth advantage."
      },
      {
        heading: "How It Works",
        content: "1. Estimate win probability (p) accurately. 2. Determine payout odds (b). 3. Calculate f* using the Kelly formula. 4. Bet f* fraction of current bankroll. 5. Recalculate after each bet based on new bankroll. 6. The bet size scales proportionally with edge and bankroll. 7. Negative f* means no edge exists; don't bet. 8. Positive f* grows bankroll at maximum theoretical rate."
      },
      {
        heading: "When To Use",
        content: "Use when you have a demonstrable edge with known probability and odds. Essential for professional gambling and investment. Requires accurate probability estimation; errors compound. Most practical when using fractional Kelly (25-50%) to reduce volatility. Never use full Kelly if probability estimates are uncertain."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability when inputs are accurate. The mathematically optimal approach for growth maximization. However, full Kelly has high volatility (50% drawdowns are common). Fractional Kelly reduces variance at the cost of reduced growth. The main risk is in probability estimation errors, which can turn positive Kelly into negative expected growth."
      },
      {
        heading: "Historical Performance",
        content: "In simulated coin flips with 51% edge, full Kelly produces highest terminal wealth over 1000 flips but with 90%+ probability of 50%+ drawdown at some point. Half-Kelly achieves 75% of the growth rate with 25% of the volatility. Real-world application in sports betting shows Kelly-sized bets outperform flat betting by 15-25% in terminal wealth over 1000+ bets when probability estimates are accurate."
      }
    ]
  },
  "pat_006": {
    title: "Expected Value Analysis",
    sections: [
      {
        heading: "Overview",
        content: "Expected Value (EV) is the theoretical average outcome of a decision calculated by multiplying each possible outcome by its probability and summing the results. It is the fundamental concept in probability theory for decision-making under uncertainty. Positive EV decisions are profitable in the long run; negative EV decisions lose money over time."
      },
      {
        heading: "Mathematical Foundation",
        content: "Formula: E[X] = Σ(x_i × P(x_i)) for all possible outcomes i. Example: A coin flip pays $2 for heads, costs $1 for tails. With fair coin: EV = (0.5 × $2) + (0.5 × -$1) = $1 - $0.50 = +$0.50. The Law of Large Numbers ensures actual results converge to expected value over many trials. Variance determines how quickly convergence occurs: Var(X) = Σ((x_i - μ)² × P(x_i)). Higher variance requires more trials for convergence."
      },
      {
        heading: "How It Works",
        content: "1. List all possible outcomes. 2. Assign probability to each outcome. 3. Assign value (positive or negative) to each outcome. 4. Multiply each value by its probability. 5. Sum all products. 6. Positive result = profitable decision on average. 7. Negative result = losing decision on average. 8. Zero = break-even expectation. 9. Compare EVs of different options to choose the best."
      },
      {
        heading: "When To Use",
        content: "Use for any decision involving uncertainty with calculable probabilities. Essential for gambling, investing, and business decisions. Requires accurate probability estimates. EV alone doesn't account for risk tolerance; combine with variance analysis. Always consider the time horizon—positive EV may require many trials to manifest."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for long-term decision quality. Does not predict short-term outcomes. A positive EV decision can lose money for extended periods due to variance. The main risk is in probability estimation errors. Sensitivity analysis (how wrong can probability be and still have positive EV) is recommended."
      },
      {
        heading: "Historical Performance",
        content: "Casinos operate with consistent positive EV (house edge) and have never failed to profit long-term. Card counters in blackjack achieve positive EV of 0.5-1.5% with perfect play and favorable conditions. Sports bettors with 55% win rate on -110 odds have EV of approximately 4.5% per bet. The principle is universally validated: positive EV decisions produce long-term profits."
      }
    ]
  },
  "pat_007": {
    title: "Geometric Progression Staking",
    sections: [
      {
        heading: "Overview",
        content: "Geometric progression staking uses a common ratio between consecutive bets, creating exponential growth or decay in bet sizes. Unlike the Martingale (ratio of 2), this allows any ratio. Ratios below 1 create decreasing sequences (conservative); ratios above 1 create increasing sequences (aggressive)."
      },
      {
        heading: "Mathematical Foundation",
        content: "Bet sequence: Bet_n = Bet_1 × r^(n-1), where r = common ratio. Total exposure over n bets: S_n = Bet_1 × (1 - r^n) / (1 - r) for r ≠ 1. For r < 1 (decreasing): Total exposure converges to Bet_1 / (1 - r) as n → ∞. For r > 1 (increasing): Total exposure grows without bound. Example: With r = 0.5 and initial bet 100: bets are 100, 50, 25, 12.5... total exposure converges to 200."
      },
      {
        heading: "How It Works",
        content: "1. Choose initial bet size (Bet_1). 2. Choose common ratio (r). 3. Calculate subsequent bets using Bet_n = Bet_1 × r^(n-1). 4. For r < 1: losses decrease in size, limiting damage. 5. For r > 1: losses increase, risking larger amounts. 6. Calculate maximum sequence length before hitting bankroll limit. 7. Reset after sequence completion or win."
      },
      {
        heading: "When To Use",
        content: "Decreasing sequences (r < 1) for risk management during losing streaks. Increasing sequences (r > 1) are NOT recommended due to compounding losses. Some use r = 0.5 to reduce exposure during cold streaks while maintaining position sizing discipline. Never use r > 1 without understanding it accelerates ruin."
      },
      {
        heading: "Risk Assessment",
        content: "Medium for decreasing sequences; Very High for increasing sequences. Decreasing sequences limit downside but also limit upside recovery. Increasing sequences have catastrophic risk similar to Martingale. The mathematical edge (if any) is unchanged by staking method. Only use decreasing sequences for risk management, not to improve EV."
      },
      {
        heading: "Historical Performance",
        content: "Backtesting shows decreasing geometric sequences (r = 0.5-0.75) reduce maximum drawdown by 30-50% compared to flat betting, at the cost of 15-25% reduced profit during winning streaks. Increasing sequences (r > 1) show dramatically higher ruin probability. The technique is useful for bankroll preservation, not edge enhancement."
      }
    ]
  },
  "pat_008": {
    title: "Arithmetic Progression Pattern",
    sections: [
      {
        heading: "Overview",
        content: "Arithmetic progression staking increases or decreases bet size by a fixed amount each bet, creating linear growth. More predictable than geometric progressions, with total exposure growing quadratically with sequence length."
      },
      {
        heading: "Mathematical Foundation",
        content: "Bet sequence: Bet_n = a + (n-1)d, where a = initial bet, d = increment. Total exposure after n bets: S_n = n/2 × (2a + (n-1)d). For d > 0 (increasing): Total grows quadratically, S_n ≈ d×n²/2 for large n. For d < 0 (decreasing): Total decreases linearly. Example: a = 100, d = 50: bets are 100, 150, 200, 250... After 4 bets, total = 700."
      },
      {
        heading: "How It Works",
        content: "1. Choose initial bet (a) and increment (d). 2. Calculate Bet_n = a + (n-1)d. 3. For d > 0: bet increases linearly, total exposure quadratic. 4. For d < 0: bet decreases linearly. 5. For d = 0: equivalent to flat betting. 6. Calculate maximum n before total exposure exceeds limit. 7. More predictable exposure than geometric progression."
      },
      {
        heading: "When To Use",
        content: "Increasing arithmetic (d > 0) is generally NOT recommended due to quadratic exposure growth. Decreasing arithmetic (d < 0) can reduce exposure during losing streaks. Flat betting (d = 0) is the most common and predictable. Use arithmetic analysis to understand exposure when using other systems."
      },
      {
        heading: "Risk Assessment",
        content: "Medium for decreasing; High for increasing. Quadratic growth of total exposure in increasing sequences can quickly exceed bankroll. Decreasing sequences provide linear risk reduction. The main advantage is predictability—unlike geometric, you know exactly how exposure grows."
      },
      {
        heading: "Historical Performance",
        content: "Analysis shows increasing arithmetic sequences have 40-60% higher maximum drawdown than flat betting over 100-bet sequences. Decreasing sequences reduce drawdown by 20-30%. The linear nature makes exposure planning straightforward. Most professional gamblers prefer flat or slightly decreasing sequences for consistency."
      }
    ]
  },
  "pat_009": {
    title: "Variance Reduction Pattern",
    sections: [
      {
        heading: "Overview",
        content: "Variance reduction identifies periods of elevated statistical variance and recommends proportional bet size reduction. High variance periods increase the risk of significant drawdowns regardless of edge. This pattern helps preserve bankroll during volatile conditions."
      },
      {
        heading: "Mathematical Foundation",
        content: "Sample Variance: s² = Σ(x_i - x̄)² / (n-1). Coefficient of Variation: CV = s / x̄. Rolling variance calculated over moving window (e.g., 20 periods). Threshold: CV > threshold (e.g., 1.5) indicates elevated variance. Bet adjustment: New_Bet = Base_Bet × (baseline_CV / current_CV). When variance doubles, bet size halves to maintain constant risk."
      },
      {
        heading: "How It Works",
        content: "1. Calculate rolling variance over recent outcomes. 2. Compare to historical baseline variance. 3. If current variance > threshold, calculate reduction factor. 4. Reduce bet size proportionally to variance increase. 5. As variance normalizes, gradually restore bet size. 6. Maximum reduction capped at 50% of base bet. 7. Minimum bet maintained for position tracking."
      },
      {
        heading: "When To Use",
        content: "Use when statistical monitoring shows elevated variance (CV > 1.5× baseline). Particularly important after losing streaks, which may indicate variance increase rather than edge loss. Helps distinguish between bad luck (variance) and bad decisions (edge erosion). Essential for bankroll preservation during volatile periods."
      },
      {
        heading: "Risk Assessment",
        content: "Medium-High reliability. The main risk is over-reacting to normal variance fluctuations. Setting thresholds too low causes unnecessary bet reductions. The technique doesn't improve expected value, only reduces variance. It may reduce profits during high-variance winning periods. Requires disciplined statistical monitoring."
      },
      {
        heading: "Historical Performance",
        content: "Simulations show variance reduction reduces maximum drawdown by 25-40% over 1000-bet sequences. Terminal wealth is typically 5-10% lower due to reduced bet sizes during some winning periods. The trade-off is worthwhile for risk-averse bankroll management. Most effective when variance thresholds are properly calibrated to historical data."
      }
    ]
  },
  "pat_010": {
    title: "Standard Deviation Zoning",
    sections: [
      {
        heading: "Overview",
        content: "Standard deviation zoning uses the empirical rule (68-95-99.7) to identify statistically unusual outcomes. Outcomes beyond ±2 standard deviations are considered rare (p < 0.05), and beyond ±3 are very rare (p < 0.003). These zones help identify when outcomes deviate significantly from expected behavior."
      },
      {
        heading: "Mathematical Foundation",
        content: "Z-score: Z = (X - μ) / σ, where μ = mean, σ = standard deviation. For normal distribution: P(-1 < Z < 1) ≈ 68.27%, P(-2 < Z < 2) ≈ 95.45%, P(-3 < Z < 3) ≈ 99.73%. Probability of |Z| > 2 ≈ 4.55%, |Z| > 3 ≈ 0.27%. Rolling calculation: use moving window to calculate μ_t and σ_t, then Z_t = (X_t - μ_t) / σ_t. Consecutive extreme Z-scores are statistically improbable under normality."
      },
      {
        heading: "How It Works",
        content: "1. Calculate rolling mean and standard deviation. 2. Compute Z-score for each new outcome. 3. Z > 2: statistically unusual, may indicate regime change. 4. Z > 3: very rare, strong signal of non-random behavior. 5. Track consecutive extreme Z-scores. 6. Multiple extreme readings suggest pattern break. 7. Use for position sizing reduction or strategy pause."
      },
      {
        heading: "When To Use",
        content: "Use to identify when market behavior deviates from historical norms. Particularly useful for detecting regime changes (from trending to ranging or vice versa). Apply to any measurable outcome: returns, volatility, win rate. Combine with other indicators for confirmation. Don't over-react to single extreme readings."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for detecting statistical anomalies. The main risk is assuming normality when data has fat tails. Real financial returns often show more extreme events than normal distribution predicts. Adjust thresholds upward (e.g., Z > 2.5) for fat-tailed distributions. False positives occur but are statistically rare."
      },
      {
        heading: "Historical Performance",
        content: "In backtesting, Z-score extremes correctly identify regime changes 65-75% of the time. The technique catches approximately 80% of major market dislocations when combined with volume analysis. False positive rate is 5-10% depending on threshold. Most effective when calibrated to specific asset class characteristics rather than using universal thresholds."
      }
    ]
  }
};

export default PATTERN_DETAILS;
export { PATTERN_DETAILS };
