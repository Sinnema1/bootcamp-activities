const typeDefs = `
  type Tech {
    _id: ID
    name: String!
  }
  
  type Matchup {
    _id: ID
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    getAllTech: [Tech]!
    getAllMatchups: [Matchup]!
    getMatchup(matchupID: ID!):  Matchup
  }

  type Mutation {
  createMatchup(tech1: String, tech2: String): Matchup
  createVote(matchupId: String, techNum: String): Matchup
  }
`;
export default typeDefs;
