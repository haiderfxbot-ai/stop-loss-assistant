/**
 * Pattern Details - File 4
 * Detailed explanations for patterns pat_031 through pat_040
 */

const PATTERN_DETAILS = {
  "pat_031": {
    title: "Fibonacci Time Zones",
    sections: [
      {
        heading: "Overview",
        content: "Fibonacci Time Zones project potential time-based reversal points using Fibonacci numbers (1, 1, 2, 3, 5, 8, 13, 21, 34, 55...) from a significant starting point. Unlike price-based Fibonacci tools, time zones focus on when reversals may occur rather than where price may reverse. The technique assumes that market cycles relate to Fibonacci numbers."
      },
      {
        heading: "Mathematical Foundation",
        content: "Time Zone = Start + F_n × Time Unit, where F_n = Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...). Each vertical line represents a Fibonacci number of periods from the start. The intervals between lines increase according to the sequence. The mathematical basis is that market cycles may exhibit Fibonacci relationships in time, similar to price relationships."
      },
      {
        heading: "How It Works",
        content: "1. Identify significant starting point (major high or low). 2. Apply Fibonacci Time Zone tool from this point. 3. Vertical lines appear at Fibonacci intervals. 4. Watch for price reversals near these lines. 5. Multiple time zones clustering increases significance. 6. Works on any timeframe—higher timeframes more reliable. 7. Combine with price analysis at time zone intersections. 8. Don't expect exact timing—use as potential windows."
      },
      {
        heading: "When To Use",
        content: "Use to anticipate potential timing of reversals rather than price levels. Most effective on higher timeframes (Daily, Weekly) where time cycles are more meaningful. Combine with price-based Fibonacci levels for confluence. Works best in trending markets with established cycles. Less reliable in ranging or chaotic markets."
      },
      {
        heading: "Risk Assessment",
        content: "Low-Medium reliability. Time projections are less reliable than price projections. The technique is subjective—starting point selection affects all projections. Many time zones will not produce reversals. Risk management: don't trade solely on time zones; use as supplementary analysis. The technique adds timing context to price-based analysis."
      },
      {
        heading: "Historical Performance",
        content: "Studies show reversals occur near Fibonacci time zones 40-50% of the time—barely better than random in many markets. When combined with price Fibonacci levels, accuracy improves to 55-60%. The technique works better for identifying potential windows than exact timing. It is most useful as one component of multi-factor analysis rather than standalone predictor."
      }
    ]
  },
  "pat_032": {
    title: "Fibonacci Fan Lines",
    sections: [
      {
        heading: "Overview",
        content: "Fibonacci Fan lines are trendlines drawn through Fibonacci retracement levels, creating angled support and resistance zones. Unlike horizontal Fibonacci levels, fan lines account for both price and time, creating dynamic support/resistance that changes slope. The three fan lines correspond to 38.2%, 50%, and 61.8% retracement levels."
      },
      {
        heading: "Mathematical Foundation",
        content: "Fan Angle = arctan(Rise / (Run × Fibonacci_Ratio)). For a move from point A to B: Fan line through 38.2% retracement has slope = 0.382 × (B_y - A_y) / (B_x - A_x). Three fan lines create a triangular zone of support/resistance. The angle depends on the slope of the original move. Steeper original moves create steeper fan lines."
      },
      {
        heading: "How It Works",
        content: "1. Draw from significant swing point through Fibonacci retracement levels. 2. Three fan lines appear at 38.2%, 50%, and 61.8% angles. 3. Upper fan (38.2%) = first support/resistance. 4. Middle fan (50%) = moderate support/resistance. 5. Lower fan (61.8%) = strongest support/resistance. 6. Price often reacts where it meets fan lines. 7. Break of lower fan signals trend failure. 8. Confluence with horizontal levels strengthens signal."
      },
      {
        heading: "When To Use",
        content: "Use in trending markets where angled support/resistance is relevant. The fan lines provide dynamic levels that adjust for time. Works best when original move is significant and clear. Combine with horizontal Fibonacci levels for confluence. Less effective in ranging markets where original swing points are unclear."
      },
      {
        heading: "Risk Assessment",
        content: "Medium reliability. Fan lines are more subjective than horizontal levels due to angle interpretation. The dynamic nature can be both strength and weakness. Risk management: use fan zones rather than exact lines. Stop-loss beyond the next fan line. The technique works better as a visual guide than precise entry/exit points."
      },
      {
        heading: "Historical Performance",
        content: "Analysis shows price reacts at Fibonacci fan lines 55-60% of the time, slightly better than random. The 61.8% fan line is most reliable with 60-65% reaction rate. Fan lines work better in trending markets (65-70% reaction) than ranging markets (50-55%). The technique is more useful as a visual framework than a high-probability trading system."
      }
    ]
  },
  "pat_033": {
    title: "Fibonacci Arc Pattern",
    sections: [
      {
        heading: "Overview",
        content: "Fibonacci Arcs are curved support/resistance levels that account for both price and time dimensions. Unlike straight trendlines, arcs curve as they extend, reflecting the idea that support/resistance strengthens or weakens over time. The three arcs correspond to 38.2%, 50%, and 61.8% Fibonacci levels."
      },
      {
        heading: "Mathematical Foundation",
        content: "Arc Radius = Swing × Ratio × √(Time). The square root of time creates the curved shape. For 61.8% arc: at time t, the arc is at price = Start + 0.618 × Swing × √(t). The curvature means the arc flattens over time. The three arcs create a fan-like structure that widens with time. Mathematical basis: time-adjusted support/resistance levels."
      },
      {
        heading: "How It Works",
        content: "1. Draw from significant swing point to another. 2. Three curved arcs appear at Fibonacci ratios. 3. Upper arc (38.2%) curves most steeply. 4. Middle arc (50%) moderate curvature. 5. Lower arc (61.8%) curves most gradually. 6. Price often reacts where it meets arcs. 7. The time dimension means arcs change relevance. 8. Confluence with horizontal levels at arc intersections is significant."
      },
      {
        heading: "When To Use",
        content: "Use when traditional straight-line analysis seems inadequate. Arcs provide dynamic support/resistance that adjusts for time passage. Most useful in trending markets where time-based analysis adds value. Combine with horizontal Fibonacci levels and time zones. The technique is visual and subjective—best used as a framework rather than precise system."
      },
      {
        heading: "Risk Assessment",
        content: "Low-Medium reliability. Arcs are the most subjective of the Fibonacci tools. The curvature depends on timeframe and swing selection. Many arcs will not produce reactions. Risk management: use arc zones rather than exact curves. Don't rely solely on arcs—combine with other analysis. The technique adds visual context but shouldn't drive decisions alone."
      },
      {
        heading: "Historical Performance",
        content: "Empirical studies show Fibonacci arcs perform similarly to other Fibonacci tools, with 55-60% reaction rates. The time dimension doesn't significantly improve accuracy over horizontal levels. The technique is primarily used for visual analysis rather than systematic trading. Most practitioners find arcs less practical than horizontal levels or fan lines."
      }
    ]
  },
  "pat_034": {
    title: "Fibonacci Spiral Projection",
    sections: [
      {
        heading: "Overview",
        content: "The Fibonacci Spiral (Golden Spiral) is constructed from Fibonacci squares, creating a logarithmic spiral that expands at the golden ratio. In market analysis, it projects potential turning points in both price and time. The spiral is drawn from significant market extremes, with key reversals occurring near spiral intersections."
      },
      {
        heading: "Mathematical Foundation",
        content: "Spiral equation in polar coordinates: r = ae^(bθ), where b = ln(φ)/(π/2) ≈ 0.3063. The spiral expands by factor φ (1.618) for every 90° rotation. Golden rectangle construction: squares of Fibonacci sizes create the spiral path. In markets: the spiral maps time-price coordinates where reversals may occur. The mathematical basis combines Fibonacci ratios with logarithmic growth."
      },
      {
        heading: "How It Works",
        content: "1. Identify significant starting point (major high/low). 2. Apply Fibonacci Spiral tool from this point. 3. Spiral curves through time and price. 4. Key reversals often occur near spiral line. 5. Spiral intersections with price levels are significant. 6. The spiral expands—later intersections are more spread out. 7. Works best on higher timeframes. 8. Combine with other Fibonacci tools for confirmation."
      },
      {
        heading: "When To Use",
        content: "Use for advanced time-price analysis when other tools seem inadequate. Most effective on higher timeframes where the spiral structure is meaningful. The technique is highly subjective—starting point selection affects all projections. Combine with price-based analysis for confluence. The spiral provides a visual framework rather than precise signals."
      },
      {
        heading: "Risk Assessment",
        content: "Low reliability. The Fibonacci spiral is the most subjective and difficult to apply of all Fibonacci tools. Starting point selection is critical but subjective. Many spiral intersections won't produce reactions. Risk management: use spiral as one of many tools, not standalone. The technique is more artistic than scientific in application."
      },
      {
        heading: "Historical Performance",
        content: "Limited empirical study of Fibonacci spirals in markets. Anecdotal evidence suggests some practitioners find them useful for visual analysis. No rigorous backtesting shows consistent edge from spiral-based trading. The technique remains more theoretical than practical. Most traders find horizontal Fibonacci levels more useful and less subjective."
      }
    ]
  },
  "pat_035": {
    title: "Fibonacci Channel Pattern",
    sections: [
      {
        heading: "Overview",
        content: "Fibonacci Channels are parallel lines constructed using Fibonacci ratios for support and resistance boundaries. Unlike Fibonacci retracement (horizontal), channels follow the trend direction. The channel width is determined by Fibonacci ratios of the swing height, creating dynamic support/resistance that moves with price."
      },
      {
        heading: "Mathematical Foundation",
        content: "Channel Width = Swing × Fibonacci_Ratio. Base channel drawn from two swing points. Parallel lines added at 38.2%, 50%, 61.8% of channel width. The slope of the channel follows the trend line. Mathematical basis: parallel support/resistance levels at Fibonacci intervals from the base channel. The technique combines trend analysis with Fibonacci ratios."
      },
      {
        heading: "How It Works",
        content: "1. Draw base channel from two swing points. 2. System adds parallel lines at Fibonacci ratios. 3. Upper boundaries act as resistance. 4. Lower boundaries act as support. 5. Price often bounces between channel boundaries. 6. Break of lower boundary signals trend failure. 7. Width of channel indicates volatility. 8. Combine with horizontal Fibonacci levels for confluence."
      },
      {
        heading: "When To Use",
        content: "Use in trending markets where parallel support/resistance is relevant. The channel provides dynamic levels that move with the trend. Works best when trend is clear and consistent. Combine with horizontal Fibonacci levels for additional reference points. Less effective in ranging markets where trend direction is unclear."
      },
      {
        heading: "Risk Assessment",
        content: "Medium reliability. Channels work well in clear trends but break down in choppy markets. The Fibonacci ratios add value over simple channels. Risk management: use channel boundaries for stop-loss and target placement. The technique is systematic once the channel is drawn. Subjectivity lies in initial swing point selection."
      },
      {
        heading: "Historical Performance",
        content: "Analysis shows price respects Fibonacci channel boundaries 60-65% of the time in trending markets. This is better than simple channels (55-60%) due to Fibonacci ratio relevance. The technique captures 50-60% of trend moves before channel breaks. Overall, Fibonacci channels provide a systematic framework for trend analysis with moderate reliability."
      }
    ]
  },
  "pat_036": {
    title: "Elliott Wave Fibonacci Relationship",
    sections: [
      {
        heading: "Overview",
        content: "Elliott Wave theory combined with Fibonacci ratios provides specific targets and retracement expectations for wave patterns. The theory posits that markets move in predictable wave patterns (5 impulse waves, 3 corrective waves) with Fibonacci relationships between wave lengths. This creates a framework for predicting both price targets and wave structure."
      },
      {
        heading: "Mathematical Foundation",
        content: "Classic relationships: Wave 2 = 50-61.8% of Wave 1. Wave 3 = 161.8% of Wave 1 (most common extension). Wave 5 = 61.8% of Waves 1-3. Wave 4 = 38.2% of Wave 3. Corrective waves: A = C, or C = 161.8% of A. B = 50-61.8% of A. These ratios create specific price targets when wave count is determined. The Fibonacci relationships are observed across all timeframes."
      },
      {
        heading: "How It Works",
        content: "1. Identify Wave 1 starting point. 2. Calculate Wave 2 target: 50-61.8% retracement of Wave 1. 3. Calculate Wave 3 target: 161.8% extension of Wave 1. 4. Calculate Wave 4 target: 38.2% retracement of Wave 3. 5. Calculate Wave 5 target: 61.8% of Waves 1-3. 6. Use Fibonacci relationships to validate wave count. 7. Adjust wave count if relationships don't hold. 8. Use for entry, target, and stop-loss placement."
      },
      {
        heading: "When To Use",
        content: "Use when Elliott Wave structure is clear and unambiguous. The Fibonacci relationships help validate wave counts. Most effective on higher timeframes where wave structure is clearer. Combine with other technical analysis for confirmation. The technique requires practice in wave counting—subjectivity is significant."
      },
      {
        heading: "Risk Assessment",
        content: "Medium reliability. Elliott Wave counting is subjective—multiple valid interpretations exist. Fibonacci relationships help but don't eliminate ambiguity. Risk management: use wave structure for direction, Fibonacci for targets. Never trade based solely on wave count. The technique is best used as part of comprehensive analysis."
      },
      {
        heading: "Historical Performance",
        content: "Studies show Fibonacci relationships hold in approximately 60-70% of Elliott Wave patterns. Wave 3 extension (161.8%) is the most reliable relationship. Corrective wave relationships are less consistent. The technique has a devoted following but requires significant skill and experience. Performance varies widely based on practitioner skill."
      }
    ]
  },
  "pat_037": {
    title: "Gambler's Fallacy Detection",
    sections: [
      {
        heading: "Overview",
        content: "The Gambler's Fallacy is the mistaken belief that past independent events affect future probabilities. For example, after 10 consecutive reds in roulette, believing black is 'due' is the Gambler's Fallacy. This pattern detects when decisions may be influenced by this cognitive bias, helping maintain mathematically sound reasoning."
      },
      {
        heading: "Mathematical Foundation",
        content: "For independent events: P(A|B) = P(A). The probability of an event is unchanged by previous events. Example: P(red on spin 11 | first 10 red) = P(red) = 18/38 ≈ 47.37% (American roulette). The fallacy confuses: P(A then B) with P(B then A). Both are equal for independent events. The correct interpretation: past outcomes provide no information about future outcomes when events are independent."
      },
      {
        heading: "How It Works",
        content: "1. Identify decision based on 'due' outcome reasoning. 2. Verify event independence. 3. Calculate actual conditional probability. 4. Compare to perceived probability. 5. If equal, Gambler's Fallacy may be influencing decision. 6. Remind: independent events have memoryless probability. 7. Base decisions on expected value, not perceived patterns. 8. Track decisions influenced by fallacy for awareness."
      },
      {
        heading: "When To Use",
        content: "Use to check decisions before they are made. Particularly important after losing or winning streaks. The fallacy is strongest after extreme sequences. Apply to any independent event: coin flips, dice rolls, roulette spins, card draws. The detection doesn't improve outcomes—it prevents biased decisions that worsen outcomes."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for detecting the fallacy itself. The mathematical concept is clear. Risk: some events are NOT independent (e.g., card counting). The fallacy assumes independence—always verify. Also risk: knowing about the fallacy doesn't prevent it (cognitive bias is powerful). Use systematic decision-making to override biased intuition."
      },
      {
        heading: "Historical Performance",
        content: "The Gambler's Fallacy is one of the most well-documented cognitive biases. Studies show it affects 60-80% of people to some degree. Casinos profit from it—players make worse decisions after streaks. Awareness of the fallacy reduces its impact but doesn't eliminate it. Systematic strategies that ignore recent outcomes perform better than intuitive decisions."
      }
    ]
  },
  "pat_038": {
    title: "Hot Hand Fallacy Analysis",
    sections: [
      {
        heading: "Overview",
        content: "The Hot Hand Fallacy analysis examines whether perceived 'hot streaks' represent actual skill/influence or random clustering in independent sequences. While the Gambler's Fallacy denies streaks, the Hot Hand Fallacy overstates their predictive power. The truth lies between: streaks occur randomly, but don't predict future outcomes."
      },
      {
        heading: "Mathematical Foundation",
        content: "Runs Test Z = (Observed Runs - Expected Runs) / Standard Deviation. Expected runs in random sequence: E(R) = 1 + 2(n1×n2)/(n1+n2), where n1, n2 = counts of each outcome. Variance: Var(R) = 2n1n2(2n1n2-n1-n2) / ((n1+n2)²(n1+n2-1)). Z > 1.96 or Z < -1.96 indicates non-random pattern. Positive Z: fewer runs than expected (streaky). Negative Z: more runs than expected (alternating)."
      },
      {
        heading: "How It Works",
        content: "1. Count sequences of same outcome (runs). 2. Calculate expected runs under randomness. 3. Calculate runs test Z-statistic. 4. |Z| > 1.96: non-random pattern detected. 5. Z < 0: more alternation than random. 6. Z > 0: more clustering than random. 7. Interpret: clustering ≠ predictability. 8. Streaks exist in random sequences—they just don't predict what comes next."
      },
      {
        heading: "When To Use",
        content: "Use to assess whether streaks are statistically unusual. Helps distinguish random clustering from meaningful patterns. Works for any binary sequence: win/loss, red/black, high/low. The technique doesn't predict—it assesses whether observed streaks could arise by chance. Essential for avoiding both fallacies: believing streaks predict (Hot Hand) or denying streaks exist (Gambler's Fallacy)."
      },
      {
        heading: "Risk Assessment",
        content: "Medium-High reliability for statistical testing. The runs test is mathematically rigorous. Risk: interpreting statistical significance as predictability. A non-random pattern doesn't mean the pattern is exploitable. The test detects patterns but doesn't measure their predictive value. Use as one component of comprehensive analysis."
      },
      {
        heading: "Historical Performance",
        content: "The runs test correctly identifies non-random sequences 85-90% of the time with adequate sample size. Studies of basketball shooting, coin flips, and gambling outcomes show most perceived 'hot hands' are statistically indistinguishable from random. The technique has been validated across multiple domains and is a standard statistical tool for randomness assessment."
      }
    ]
  },
  "pat_039": {
    title: "Expected Value Optimizer",
    sections: [
      {
        heading: "Overview",
        content: "The Expected Value Optimizer systematically calculates and compares expected values across different options to identify mathematically optimal choices. It extends basic EV analysis by optimizing across multiple variables and constraints, providing a framework for decision-making that maximizes long-run average outcomes."
      },
      {
        heading: "Mathematical Foundation",
        content: "EV = Σ(P_i × V_i) for all outcomes i. Optimization: max EV subject to constraints. For multiple options: EV_1, EV_2, ..., EV_n. Choose max(EV_i). With constraints: Lagrange multipliers or numerical optimization. Sensitivity analysis: ∂EV/∂p_i shows how EV changes with probability estimates. Break-even analysis: find probability where EV = 0."
      },
      {
        heading: "How It Works",
        content: "1. List all decision options. 2. For each option, identify possible outcomes. 3. Estimate probability of each outcome. 4. Assign value (payout) to each outcome. 5. Calculate EV for each option. 6. Select option with highest EV. 7. Perform sensitivity analysis on probability estimates. 8. Identify which probabilities most affect decision."
      },
      {
        heading: "When To Use",
        content: "Use for any decision involving uncertainty with calculable probabilities. Essential for comparing betting options, investment choices, or strategy selection. Requires accurate probability estimates—garbage in, garbage out. The optimizer identifies the mathematically best choice, not necessarily the one with highest certainty. Combine with risk assessment for complete picture."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for decision quality (not outcome quality). The mathematically optimal decision can still lose in the short term. Risk: probability estimation errors compound. Sensitivity analysis helps identify robustness. The optimizer doesn't account for risk preference—expected utility theory for that. Use as one input to decision-making, not the only input."
      },
      {
        heading: "Historical Performance",
        content: "EV optimization is the foundation of professional gambling, investment, and business decision-making. Casinos use it to set odds. Professional gamblers use it to identify +EV bets. Studies show EV-optimal decisions outperform intuitive decisions by 15-30% in terminal wealth over 1000+ decisions. The technique is mathematically proven to be optimal in the long run."
      }
    ]
  },
  "pat_040": {
    title: "Conditional Probability Chain",
    sections: [
      {
        heading: "Overview",
        content: "Conditional probability chains calculate compound probabilities for sequences of dependent events using the multiplication rule. Unlike independent events where probabilities simply multiply, conditional chains account for how each event changes the probability of subsequent events. Essential for analyzing card games, dice sequences with memory, and other dependent processes."
      },
      {
        heading: "Mathematical Foundation",
        content: "P(A∩B∩C) = P(A) × P(B|A) × P(C|A∩B). Chain Rule: P(A_1∩...∩A_n) = Π P(A_i | A_1∩...∩A_{i-1}). For drawing without replacement: P(second ace | first ace) = 3/51 (from 52-card deck). Marginal probability: P(B) = Σ P(B|A_i) × P(A_i). The chain rule is exact and doesn't require independence."
      },
      {
        heading: "How It Works",
        content: "1. Identify sequence of dependent events. 2. Calculate probability of first event. 3. Calculate conditional probability of second given first. 4. Calculate conditional probability of third given first and second. 5. Multiply chain for compound probability. 6. For multiple paths: sum probabilities of all paths. 7. Update conditional probabilities as events occur. 8. Use for precise probability calculation in dependent sequences."
      },
      {
        heading: "When To Use",
        content: "Use when events are dependent (conditional on previous outcomes). Essential for card games (deck composition changes), dice games with memory, and any process without replacement. The technique provides exact probabilities, not approximations. Requires accurate conditional probability estimation. More complex but more accurate than independence assumption."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability when conditional probabilities are accurately specified. The chain rule is mathematically exact. Risk: misestimating conditional probabilities. Also risk: computational complexity increases with sequence length. Use for critical decisions where accuracy matters. For approximate analysis, independence assumption may be sufficient."
      },
      {
        heading: "Historical Performance",
        content: "Conditional probability chains are the foundation of exact analysis in blackjack, poker, and other card games. Card counting in blackjack relies on conditional probabilities. The technique provides 100% accurate probabilities when the deck composition is known. In practice, estimation uncertainty reduces accuracy but the framework remains valid."
      }
    ]
  }
};

export default PATTERN_DETAILS;
export { PATTERN_DETAILS };
