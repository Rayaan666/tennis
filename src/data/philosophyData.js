export const philosophyStages = [
  {
    step: "01",
    label: "01 / TECHNIQUE",
    title: "BUILD REPEATABLE MECHANICS.",
    concept: "Biomechanics Under Pressure",
    description: "Great tennis isn't built on flash; it's built on repeatable kinetic chains. From prep posture and racket-head drop to kinetic rotational power, we engineer strokes that hold form at 30-40 down.",
    tacticalVector: {
      player: { x: 45, y: 78 },
      racketAngle: 42,
      ballPath: "M 45 78 Q 48 55 52 35",
      bounce: { x: 52, y: 35 },
      targetZone: "Deep Crosscourt Corner",
      metrics: ["Contact Point: +18cm Ahead", "Racket Speed: 118 km/h", "Spin: 2,850 RPM"]
    }
  },
  {
    step: "02",
    label: "02 / MOVEMENT",
    title: "OWN YOUR POSITION ON COURT.",
    concept: "Dynamic Footwork & Court Geometry",
    description: "You cannot hit what you cannot reach in balance. We train aggressive split-step timing, first-step explosion, kinetic deceleration, and automatic recovery back to the tactical center of the court.",
    tacticalVector: {
      player: { x: 72, y: 82 },
      racketAngle: -35,
      ballPath: "M 72 82 Q 58 76 50 75",
      recoveryPath: "M 72 82 L 50 78",
      targetZone: "Split-Step Neutral Base",
      metrics: ["Deceleration Force: 4.2G", "Split-Step Reaction: 0.18s", "Recovery Delta: 1.2m"]
    }
  },
  {
    step: "03",
    label: "03 / DECISION",
    title: "UNDERSTAND THE POINT BEFORE ATTACKING IT.",
    concept: "Tactical Pattern Recognition",
    description: "Tennis is chess at 130 km/h. Players learn to assess opponent ball depth, court geometry, risk percentages, and identify when to build pressure versus when to change direction down the line.",
    tacticalVector: {
      player: { x: 38, y: 76 },
      racketAngle: 18,
      ballPath: "M 38 76 Q 30 52 26 24",
      bounce: { x: 26, y: 24 },
      targetZone: "Down-the-Line Winner Pocket",
      metrics: ["Net Clearance: 45cm", "Court Opening: 3.8m", "Shot Probability: 84%"]
    }
  },
  {
    step: "04",
    label: "04 / COMPETE",
    title: "TURN TRAINING INTO MATCH PERFORMANCE.",
    concept: "Competitive Composure & Mental Steel",
    description: "Training only matters if it translates to match point. We develop the psychological grit, breath discipline, and tactical clarity needed to play your best tennis when the stakes are highest.",
    tacticalVector: {
      player: { x: 50, y: 80 },
      racketAngle: 0,
      ballPath: "M 50 80 Q 50 50 50 20",
      bounce: { x: 50, y: 20 },
      targetZone: "Ace Down the 'T'",
      metrics: ["First-Serve Accuracy: 74%", "Break Point Win %: 68%", "Unforced Ratio: 0.4:1"]
    }
  }
];
