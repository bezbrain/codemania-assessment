import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
} from "@g-loot/react-tournament-brackets";

// Define the static matches data
const matches = [
  {
    id: 1,
    name: "Quarterfinal 1",
    nextMatchId: 5, // Points to the semifinal
    tournamentRoundText: "Quarterfinal",
    state: "DONE",
    participants: [
      { id: "team1", name: "Team A", isWinner: true, resultText: "WON" },
      { id: "team2", name: "Team B", isWinner: false, resultText: "LOST" },
    ],
  },
  {
    id: 2,
    name: "Quarterfinal 2",
    nextMatchId: 5,
    tournamentRoundText: "Quarterfinal",
    state: "DONE",
    participants: [
      { id: "team3", name: "Team C", isWinner: true, resultText: "WON" },
      { id: "team4", name: "Team D", isWinner: false, resultText: "LOST" },
    ],
  },
  {
    id: 3,
    name: "Quarterfinal 3",
    nextMatchId: 6,
    tournamentRoundText: "Quarterfinal",
    state: "DONE",
    participants: [
      { id: "team5", name: "Team E", isWinner: true, resultText: "WON" },
      { id: "team6", name: "Team F", isWinner: false, resultText: "LOST" },
    ],
  },
  {
    id: 4,
    name: "Quarterfinal 4",
    nextMatchId: 6,
    tournamentRoundText: "Quarterfinal",
    state: "DONE",
    participants: [
      { id: "team7", name: "Team G", isWinner: true, resultText: "WON" },
      { id: "team8", name: "Team H", isWinner: false, resultText: "LOST" },
    ],
  },
  {
    id: 5,
    name: "Semifinal 1",
    nextMatchId: 7,
    tournamentRoundText: "Semifinal",
    state: "DONE",
    participants: [
      { id: "team1", name: "Team A", isWinner: true, resultText: "WON" },
      { id: "team3", name: "Team C", isWinner: false, resultText: "LOST" },
    ],
  },
  {
    id: 6,
    name: "Semifinal 2",
    nextMatchId: 7,
    tournamentRoundText: "Semifinal",
    state: "DONE",
    participants: [
      { id: "team5", name: "Team E", isWinner: true, resultText: "WON" },
      { id: "team7", name: "Team G", isWinner: false, resultText: "LOST" },
    ],
  },
  {
    id: 7,
    name: "Final",
    nextMatchId: null,
    tournamentRoundText: "Final",
    state: "DONE",
    participants: [
      { id: "team1", name: "Team A", isWinner: true, resultText: "WON" },
      { id: "team5", name: "Team E", isWinner: false, resultText: "LOST" },
    ],
  },
];

// The component rendering the static bracket
const TournamentFixtures = () => {
  const finalWidth = 800;
  const finalHeight = 600;

  return (
    <SingleEliminationBracket
      matches={matches}
      matchComponent={Match}
      svgWrapper={({ children, ...props }: any) => (
        <SVGViewer width={finalWidth} height={finalHeight} {...props}>
          {children}
        </SVGViewer>
      )}
    />
  );
};

export default TournamentFixtures;
