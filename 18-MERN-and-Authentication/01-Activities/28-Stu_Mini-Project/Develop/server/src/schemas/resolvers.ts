import Tech from '../models/Tech.js';
import Matchup from '../models/Matchup.js';

interface MatchupArgs {
  matchupId: string;
}

interface CreateMatchupArgs {
  tech1: string;
  tech2: string;
}

interface CreateVoteArgs {
  matchupId: string;
  techNum: string;
}

const resolvers: any = {
  Query: {
    getAllTech: async () => {
      return await Tech.find();
    },
    getAllMatchups: async () => {
      return await Matchup.find();
    },
    getMatchup: async (_parent: any, { matchupId }: MatchupArgs) => {
      return await Matchup.findOne({ _id: matchupId });
    }
  },
  Mutation: {
    createMatchup: async (_parent: any, { tech1, tech2 }: CreateMatchupArgs) => {
      const matchup = await Matchup.create({ tech1, tech2 });
      return matchup;
    },
    createVote: async (_parent: any, { matchupId, techNum }: CreateVoteArgs) => {
      await Matchup.findOneAndUpdate(
        { _id: matchupId },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return true;
    },
  },
};

export default resolvers;
