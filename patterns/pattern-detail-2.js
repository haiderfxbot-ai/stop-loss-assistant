/**
 * Pattern Details - File 2
 * Detailed explanations for patterns pat_011 through pat_020
 */

const PATTERN_DETAILS = {
  "pat_011": {
    title: "Simple Moving Average Crossover",
    sections: [
      {
        heading: "Overview",
        content: "The Simple Moving Average (SMA) Crossover system generates trading signals when a shorter-period moving average crosses above or below a longer-period moving average. The golden cross (short crosses above long) signals bullish momentum; the death cross (short crosses below long) signals bearish momentum. It is one of the oldest and most widely used technical indicators."
      },
      {
        heading: "Mathematical Foundation",
        content: "SMA_n = (1/n) × Σ(P_i) for i=1 to n, where P_i = price at period i. For crossover: Calculate SMA_short (e.g., 5-period) and SMA_long (e.g., 20-period). Signal occurs when SMA_short - SMA_long changes sign. The difference between the two SMAs can be plotted as an oscillator. Common periods: 5/20, 10/50, 20/200. The longer the periods, the stronger but slower the signal."
      },
      {
        heading: "How It Works",
        content: "1. Calculate short-period SMA (e.g., 5). 2. Calculate long-period SMA (e.g., 20). 3. When short crosses above long: BUY signal (golden cross). 4. When short crosses below long: SELL signal (death cross). 5. The distance between SMAs indicates trend strength. 6. Wait for candle close to confirm crossover. 7. Enter position in direction of cross. 8. Exit when opposite cross occurs."
      },
      {
        heading: "When To Use",
        content: "Best in trending markets where moving averages provide reliable trend identification. Works on all timeframes but higher timeframes (4H, Daily) produce fewer false signals. Avoid in ranging/choppy markets where crossovers produce whipsaws. Combine with volume confirmation for stronger signals. The system is trend-following, so it misses the beginning and end of moves."
      },
      {
        heading: "Risk Assessment",
        content: "Medium reliability. The system is lagging by nature—signals come after the move has started. False signals (whipsaws) are common in ranging markets, typically 30-40% of signals. Risk per trade should be limited to 1-2% of bankroll. The average win typically exceeds average loss in trending conditions due to trend continuation."
      },
      {
        heading: "Historical Performance",
        content: "Backtesting on major forex pairs (2010-2020) with 5/20 SMA shows: 45-55% win rate, average win 1.5-2× average loss, resulting in positive expectancy in trending markets. Performance degrades significantly in ranging periods. The system captures approximately 60-70% of major trends but gives back 20-30% during pullbacks. Total return with proper risk management: 15-25% annually in trending conditions."
      }
    ]
  },
  "pat_012": {
    title: "Exponential Moving Average Ribbon",
    sections: [
      {
        heading: "Overview",
        content: "The EMA Ribbon plots multiple Exponential Moving Averages with increasing periods, creating a visual 'ribbon' that expands and contracts with trend strength. Unlike SMA, EMA gives more weight to recent prices, making it more responsive. The ribbon's expansion indicates trend strength; contraction indicates potential reversal."
      },
      {
        heading: "Mathematical Foundation",
        content: "EMA_t = (Price_t × k) + (EMA_t-1 × (1-k)), where k = 2/(n+1) is the smoothing factor. For 8-period EMA: k = 2/9 ≈ 0.222. Ribbon typically uses 5+ EMAs (e.g., 8, 13, 21, 34, 55). Expansion rate: calculated as the distance between fastest and slowest EMAs relative to price. Contraction occurs when EMAs converge. The rate of convergence/divergence indicates momentum change."
      },
      {
        heading: "How It Works",
        content: "1. Plot 5+ EMAs with Fibonacci periods (8, 13, 21, 34, 55). 2. Expanding ribbon = strong trend in progress. 3. Contracting ribbon = weakening momentum, potential reversal. 4. Ribbon twist (EMAs crossing) = trend change signal. 5. Price above all EMAs = strong uptrend. 6. Price below all EMAs = strong downtrend. 7. EMAs fanning out = trend accelerating. 8. EMAs converging = trend decelerating."
      },
      {
        heading: "When To Use",
        content: "Use to visualize trend strength and identify potential reversals. Works best on higher timeframes (4H, Daily) where ribbon signals are clearer. Expansion signals can be used to ride trends; contraction signals for taking profits. The ribbon twist is an early warning of trend change. Combine with other indicators for confirmation."
      },
      {
        heading: "Risk Assessment",
        content: "Medium reliability. The ribbon is more responsive than SMA crossover due to EMA weighting. However, it still lags price action. False twist signals occur 25-35% of the time in ranging markets. The visual nature makes it easier to interpret than single crossovers. Risk management: reduce position size when ribbon is contracting."
      },
      {
        heading: "Historical Performance",
        content: "Analysis shows the EMA ribbon captures 5-10% more of major trends than SMA crossover due to faster response. The twist signal correctly identifies trend changes 60-70% of the time on daily charts. Expansion phases average 15-25% move duration. Contraction phases typically precede reversals by 5-10 candles. Overall performance is 10-15% better than simple crossover systems."
      }
    ]
  },
  "pat_013": {
    title: "Relative Strength Index (RSI)",
    sections: [
      {
        heading: "Overview",
        content: "The Relative Strength Index (RSI) is a momentum oscillator that measures the speed and magnitude of recent price changes. It oscillates between 0 and 100, with readings above 70 generally considered overbought and below 30 oversold. Developed by J. Welles Wilder Jr. in 1978, it remains one of the most widely used technical indicators."
      },
      {
        heading: "Mathematical Foundation",
        content: "RSI = 100 - (100 / (1 + RS)), where RS = Average Gain / Average Loss over n periods (typically 14). Calculation: 1. Calculate price changes. 2. Separate gains and losses. 3. Average Gain = Sum of gains / n. 4. Average Loss = Sum of losses / n. 5. RS = Average Gain / Average Loss. 6. Plug into RSI formula. Alternative smoothing: Wilder's smoothing uses exponential moving average for running calculation."
      },
      {
        heading: "How It Works",
        content: "1. Calculate 14-period RSI (default). 2. RSI > 70: Overbought, potential sell signal. 3. RSI < 30: Oversold, potential buy signal. 4. RSI divergence: Price makes new high/low but RSI doesn't = reversal signal. 5. Centerline crossover (50): Confirms trend direction. 6. RSI failure swing: Double top/bottom in RSI = strong reversal signal. 7. Adjust overbought/oversold levels for trending markets (80/20 for strong trends)."
      },
      {
        heading: "When To Use",
        content: "Works best in ranging markets where overbought/oversold levels are respected. In strong trends, RSI can remain overbought/oversold for extended periods—adjust levels accordingly. Use divergence for early reversal signals. Combine with support/resistance for entry timing. The 50-level crossover confirms trend direction. Works on all timeframes."
      },
      {
        heading: "Risk Assessment",
        content: "Medium-High reliability. False signals occur when RSI remains extreme in trends (20-30% of signals). Divergence signals are more reliable but less frequent. Risk management: don't buy solely because RSI < 30 or sell because RSI > 70. Use as one component of a multi-indicator approach. Stop-loss placement beyond recent swing points."
      },
      {
        heading: "Historical Performance",
        content: "Studies show RSI overbought/oversold signals achieve 55-60% accuracy in ranging markets, dropping to 45-50% in trending markets. Divergence signals are 65-70% accurate but occur infrequently (5-10 times per year on daily charts). RSI centerline crossovers capture 60-65% of major trend moves. When combined with trend filters, overall system accuracy improves to 60-65%."
      }
    ]
  },
  "pat_014": {
    title: "Bollinger Bands Squeeze",
    sections: [
      {
        heading: "Overview",
        content: "Bollinger Bands consist of a middle band (SMA) with upper and lower bands set at standard deviations from the middle. The 'squeeze' occurs when bands contract to historical lows, indicating low volatility. This typically precedes a significant price move as volatility reverts to mean. The magnitude of the move often correlates with the duration of the squeeze."
      },
      {
        heading: "Mathematical Foundation",
        content: "Middle Band = SMA_20. Upper Band = SMA_20 + (2 × σ_20). Lower Band = SMA_20 - (2 × σ_20). Bandwidth = (Upper - Lower) / Middle × 100%. Bollinger Band Width Percentile = Current BW / Historical BW Range. Squeeze definition: Bandwidth below 20th percentile of historical bandwidth. σ = √(Σ(x_i - μ)² / n). The 2σ bands contain approximately 95% of price action under normal distribution."
      },
      {
        heading: "How It Works",
        content: "1. Calculate 20-period SMA and 2σ bands. 2. Monitor band width over time. 3. When bandwidth reaches historical low = SQUEEZE. 4. Squeeze duration indicates potential move magnitude (longer squeeze = bigger move). 5. Wait for expansion (bands widening). 6. Direction often follows prevailing trend before squeeze. 7. Confirm with volume increase on breakout. 8. Set targets based on band width expansion."
      },
      {
        heading: "When To Use",
        content: "Use to identify periods of consolidation that precede breakouts. The squeeze itself doesn't predict direction—only magnitude. Combine with trend analysis for direction. Works best on 4H and Daily timeframes where squeeze duration is meaningful. Entry on first expansion candle after squeeze. Use middle band as dynamic stop-loss level."
      },
      {
        heading: "Risk Assessment",
        content: "Medium-High reliability. Squeeze duration correlates with move magnitude (70%+ correlation). The main risk is false breakouts where price expands briefly then contracts again (15-20% of cases). Direction prediction is only 50-55% accurate without trend confirmation. Risk management: use tight stops initially, widen as trend establishes."
      },
      {
        heading: "Historical Performance",
        content: "Analysis shows squeezes lasting 20+ candles produce moves of 2× average true range 75% of the time. Directional accuracy with trend confirmation: 60-65%. False breakout rate: 15-20%. Average move duration after squeeze: 10-15 candles. The technique is particularly effective in forex markets where volatility clustering is pronounced."
      }
    ]
  },
  "pat_015": {
    title: "MACD Histogram Divergence",
    sections: [
      {
        heading: "Overview",
        content: "MACD Histogram Divergence identifies disagreement between price action and MACD momentum. Bullish divergence occurs when price makes a lower low but MACD makes a higher low, suggesting weakening downside momentum. Bearish divergence is the opposite—price makes a higher high but MACD makes a lower high. Divergences are leading indicators of potential reversals."
      },
      {
        heading: "Mathematical Foundation",
        content: "MACD = EMA_12 - EMA_26. Signal Line = EMA_9(MACD). Histogram = MACD - Signal Line. Divergence detected when: Price Slope > 0 but MACD Slope < 0 (bearish), or Price Slope < 0 but MACD Slope > 0 (bullish). The histogram represents the difference between two EMAs, measuring momentum acceleration/deceleration. Divergence strength can be quantified by the ratio of price change to MACD change."
      },
      {
        heading: "How It Works",
        content: "1. Plot MACD with standard settings (12, 26, 9). 2. Identify swing highs and lows in price. 3. Compare to corresponding MACD swings. 4. Bearish divergence: Price HH + MACD LH = potential top. 5. Bullish divergence: Price LL + MACD HL = potential bottom. 6. Stronger divergence at extreme MACD levels. 7. Multiple timeframe divergence increases reliability. 8. Wait for MACD crossover confirmation before entry."
      },
      {
        heading: "When To Use",
        content: "Use to identify potential trend exhaustion before price reverses. Works best on 4H and Daily timeframes. Combine with overbought/oversold indicators for confirmation. Divergences can persist—don't fade the trend immediately. Wait for confirmation (price breaking structure). The longer the divergence, the more significant the potential reversal."
      },
      {
        heading: "Risk Assessment",
        content: "Medium reliability. Divergences are leading but not timing indicators—price may continue in direction of trend before reversing. False divergences occur 30-40% of the time. The technique works better for exit signals than entry. Risk management: use divergence to reduce position size, not as standalone entry signal."
      },
      {
        heading: "Historical Performance",
        content: "MACD divergence correctly predicts trend reversals 55-65% of the time on daily charts. The average time to reversal after divergence: 5-15 candles. Stronger divergences (at extreme levels) show 70%+ accuracy. Combined with volume divergence, accuracy improves to 65-75%. The technique captures 80%+ of major tops and bottoms when combined with other analysis."
      }
    ]
  },
  "pat_016": {
    title: "Stochastic Oscillator Crossover",
    sections: [
      {
        heading: "Overview",
        content: "The Stochastic Oscillator compares the closing price to the price range over a given period, generating two lines (%K and %D) that oscillate between 0 and 100. Crossovers of these lines in overbought (>80) or oversold (<20) zones generate trading signals. It measures where price closed relative to its range, indicating momentum."
      },
      {
        heading: "Mathematical Foundation",
        content: "%K = ((Close - Low_n) / (High_n - Low_n)) × 100. %D = SMA_3(%K) (3-period smoothing of %K). Fast Stochastic: raw %K and %D. Slow Stochastic: %K of %K and %D of %D. The oscillator measures closing price position within the n-period range. At 100, price closed at the high of the range; at 0, at the low. The 80/20 levels separate extreme readings."
      },
      {
        heading: "How It Works",
        content: "1. Calculate 14-period %K and 3-period %D. 2. %K crosses above %D in oversold zone (<20) = buy signal. 3. %K crosses below %D in overbought zone (>80) = sell signal. 4. Divergence between stochastic and price adds confirmation. 5. The 50-level acts as centerline for trend direction. 6. Extreme readings (>90 or <10) indicate strong momentum. 7. Combine with support/resistance for entry timing."
      },
      {
        heading: "When To Use",
        content: "Best in ranging markets where overbought/oversold levels are respected. In trends, stochastic can remain extreme for extended periods. Adjust levels for trending markets (90/10 for strong trends). The crossover signal is most reliable when it aligns with the higher timeframe trend. Works well on all timeframes but produces more signals on shorter periods."
      },
      {
        heading: "Risk Assessment",
        content: "Medium reliability. Frequent false signals in trending markets (35-45% of signals). The oscillator is designed for ranging conditions. Risk management: use tight stops, take partial profits quickly. The technique works best as part of a system, not standalone. Combine with trend filters for improved accuracy."
      },
      {
        heading: "Historical Performance",
        content: "In ranging markets: 55-60% accuracy for overbought/oversold crossovers. In trending markets: accuracy drops to 40-50%. Slow Stochastic outperforms Fast Stochastic by 5-10% in most conditions. Average trade duration: 3-7 candles. The technique generates 15-25 signals per month on daily charts, requiring selective filtering for best results."
      }
    ]
  },
  "pat_017": {
    title: "Average True Range (ATR) Expansion",
    sections: [
      {
        heading: "Overview",
        content: "Average True Range measures volatility by calculating the average of true ranges over n periods. ATR expansion (rising ATR) indicates increasing volatility, typically occurring at trend beginnings or during breakouts. ATR contraction (falling ATR) indicates consolidation. ATR is directional agnostic—it measures magnitude, not direction."
      },
      {
        heading: "Mathematical Foundation",
        content: "True Range = max(H-L, |H-C_prev|, |L-C_prev|). ATR = SMA(TR, n) or EMA(TR, n). ATR as % of Price = ATR / Close × 100%. ATR Expansion = Current ATR / Historical ATR Average. Normal ATR: within 1 standard deviation of 20-period average. Expansion: ATR > 1.5× average. Contraction: ATR < 0.7× average. The percentage version allows comparison across assets."
      },
      {
        heading: "How It Works",
        content: "1. Calculate 14-period ATR (default). 2. Monitor ATR relative to historical average. 3. ATR expanding from low levels = volatility breakout. 4. ATR often spikes at trend beginnings. 5. Use ATR for stop-loss placement: Stop = Entry ± (2 × ATR). 6. ATR targets: Take Profit = Entry ± (3 × ATR). 7. Shrinking ATR = consolidation, wait for expansion. 8. ATR percentage for position sizing: Risk / ATR = position size."
      },
      {
        heading: "When To Use",
        content: "Use ATR for position sizing and stop-loss placement rather than directional signals. Expansion signals can identify breakout opportunities. Combine with directional indicators (trend lines, moving averages) for entry direction. ATR is excellent for risk management—adjust position size inversely with ATR. Works on all timeframes and assets."
      },
      {
        heading: "Risk Assessment",
        content: "High reliability for volatility measurement. ATR accurately reflects actual market volatility. The main limitation is it's directional agnostic—expansion can mean up or down volatility. False expansion signals occur 15-20% of the time (brief spike then contraction). Risk management using ATR is well-validated academically."
      },
      {
        heading: "Historical Performance",
        content: "ATR-based stop losses outperform fixed-pip stops by 15-25% in backtesting across multiple assets. ATR expansion correctly identifies 70-80% of major volatility events. Position sizing using ATR produces more consistent equity curves than fixed-lot sizing. The technique is used by professional traders and is one of the most reliable volatility measures."
      }
    ]
  },
  "pat_018": {
    title: "Volume Weighted Average Price (VWAP)",
    sections: [
      {
        heading: "Overview",
        content: "VWAP calculates the average price weighted by volume, representing the average price paid for an asset over a given period. It serves as a benchmark for institutional trading—buying below VWAP or selling above VWAP is considered favorable execution. Price above VWAP indicates bullish institutional activity; below indicates bearish."
      },
      {
        heading: "Mathematical Foundation",
        content: "VWAP = Σ(Price_i × Volume_i) / Σ(Volume_i). Typically calculated intraday, resetting each session. Cumulative calculation: VWAP_t = (VWAP_t-1 × ΣVol_t-1 + Price_t × Vol_t) / ΣVol_t. Standard deviation bands: VWAP ± (n × σ). The volume weighting gives more importance to high-volume periods, creating a true average price."
      },
      {
        heading: "How It Works",
        content: "1. Calculate cumulative VWAP from session open. 2. Price > VWAP: bullish, institutions buying. 3. Price < VWAP: bearish, institutions selling. 4. VWAP acts as dynamic support/resistance. 5. First touch of VWAP often provides reaction. 6. VWAP bands (±1σ, ±2σ) identify extreme prices. 7. VWAP anchor points (session high/low) provide additional levels. 8. End of day VWAP serves as next day reference."
      },
      {
        heading: "When To Use",
        content: "Primarily designed for intraday trading where volume distribution matters. Most relevant during regular trading hours. Use as benchmark for entry quality—enter below VWAP for longs, above for shorts. VWAP reversion trades work when price extends too far from VWAP. Combine with volume profile for deeper analysis."
      },
      {
        heading: "Risk Assessment",
        content: "Medium reliability. VWAP resets each session, limiting multi-day application. Volume spikes can distort VWAP temporarily. False signals occur when volume is thin (20-25% of time). The benchmark is most useful for institutional-style trading. Retail traders benefit from understanding VWAP as support/resistance."
      },
      {
        heading: "Historical Performance",
        content: "Studies show price returns to VWAP approximately 70% of the time after extending 1.5σ away. VWAP as support/resistance is respected 60-65% of the time intraday. Institutional traders consistently achieve better execution near VWAP. The technique is widely used in algorithmic trading and market microstructure analysis."
      }
    ]
  },
  "pat_019": {
    title: "Donchian Channel Breakout",
    sections: [
      {
        heading: "Overview",
        content: "Donchian Channels plot the highest high and lowest low over n periods, creating a channel that expands and contracts with price range. Breakouts above the upper channel signal new highs (bullish); breakouts below signal new lows (bearish). Popularized by the Turtle Traders, it is one of the most straightforward breakout systems."
      },
      {
        heading: "Mathematical Foundation",
        content: "Upper Channel = max(High_n). Lower Channel = min(Low_n). Midline = (Upper + Lower) / 2. Channel Width = Upper - Lower. Breakout condition: Close > Upper (bullish) or Close < Lower (bearish). The n-period lookback determines signal frequency: shorter n = more signals, longer n = fewer but stronger signals. Classic Turtle system uses 20-period for entry, 10-period for exit."
      },
      {
        heading: "How It Works",
        content: "1. Calculate 20-period Donchian Channel. 2. Buy when price breaks above upper channel. 3. Sell/short when price breaks below lower channel. 4. Exit long when price breaks below 10-period lower channel. 5. Exit short when price breaks above 10-period upper channel. 6. Position size based on ATR (Turtle position sizing). 7. Pyramid into winning positions at new breakouts. 8. Cut losses quickly on failed breakouts."
      },
      {
        heading: "When To Use",
        content: "Works best in trending markets where breakouts lead to sustained moves. Avoid in ranging markets where breakouts frequently fail (40-50% failure rate). The system is trend-following—it catches the middle of trends but misses the beginning and end. Combine with trend filters (e.g., 200-period SMA) to avoid ranging conditions. Works on all timeframes."
      },
      {
        heading: "Risk Assessment",
        content: "Medium reliability. The main weakness is false breakouts (35-45% of signals in ranging markets). However, when trends develop, the system captures significant moves. Risk per trade: 1-2% of bankroll. The exit mechanism (10-period channel) provides trailing stop functionality. Overall system expectancy is positive in trending conditions."
      },
      {
        heading: "Historical Performance",
        content: "The original Turtle Traders achieved approximately 80% CAGR over 5 years (1988-1992) using Donchian breakouts with proper position sizing. Backtesting on futures (1980-2020) shows 35-40% win rate but average win 3-4× average loss, resulting in positive expectancy. The system excels in markets with strong trends (commodities, currencies) and struggles in equity indices during consolidation."
      }
    ]
  },
  "pat_020": {
    title: "Parabolic SAR Trend Following",
    sections: [
      {
        heading: "Overview",
        content: "The Parabolic Stop and Reverse (SAR) system plots dots above or below price to indicate trend direction and potential reversals. The dots accelerate toward price as the trend extends, acting as a trailing stop. When price touches the dots, the trend reverses and dots flip to the other side. Developed by J. Welles Wilder Jr."
      },
      {
        heading: "Mathematical Foundation",
        content: "SAR_t = SAR_t-1 + AF × (EP - SAR_t-1). EP = Extreme Point (highest high in uptrend, lowest low in downtrend). AF = Acceleration Factor, starts at 0.02, increases by 0.02 each new EP, maximum 0.20. The parabolic nature means SAR accelerates toward price. Formula creates a parabolic curve when plotted. The reversal occurs when price crosses SAR."
      },
      {
        heading: "How It Works",
        content: "1. Dots below price = uptrend, dots above = downtrend. 2. As trend extends, dots accelerate toward price. 3. When price touches/crosses dots, trend reverses. 4. SAR flips to other side of price. 5. New EP established at reversal point. 6. AF resets to 0.02. 7. Use SAR dots as trailing stop-loss levels. 8. In strong trends, SAR provides excellent trailing stops."
      },
      {
        heading: "When To Use",
        content: "Works best in strong trending markets where the parabolic curve provides good trailing stops. Produces whipsaws (multiple reversals) in ranging markets—avoid in choppy conditions. The acceleration factor helps lock in profits as trends extend. Combine with ADX (trend strength) to filter ranging conditions. Most effective on 4H and Daily timeframes."
      },
      {
        heading: "Risk Assessment",
        content: "Medium reliability. The system excels in trends but produces numerous false reversals in ranges (30-40% of signals). The trailing stop functionality is excellent for profit protection. Risk per trade should be small due to whipsaw frequency. The parabolic acceleration may exit trends too early in very strong moves."
      },
      {
        heading: "Historical Performance",
        content: "In trending markets, SAR provides trailing stops that capture 60-70% of major moves. Whipsaw rate in ranging markets: 35-45%. Average trade duration in trends: 15-25 candles. The system's strength is profit protection—once in profit, the accelerating SAR locks in gains. Combined with trend filter, the system achieves 55-60% win rate with 2:1 reward-to-risk."
      }
    ]
  }
};

export default PATTERN_DETAILS;
export { PATTERN_DETAILS };
